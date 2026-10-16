import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

function decodeArc(topology, index) {
	const arc = topology.arcs[index < 0 ? ~index : index];
	let x = 0;
	let y = 0;
	const points = [];
	for (const point of arc) {
		x += point[0];
		y += point[1];
		points.push([
			x * topology.transform.scale[0] + topology.transform.translate[0],
			y * topology.transform.scale[1] + topology.transform.translate[1],
		]);
	}
	return index < 0 ? points.reverse() : points;
}

function decodeRing(topology, arcList) {
	let ring = [];
	for (const index of arcList) {
		const arc = decodeArc(topology, index);
		if (ring.length) ring.pop();
		ring = ring.concat(arc);
	}
	return ring;
}

function decodeGeometry(topology, geometry) {
	if (geometry.type === "Polygon") {
		return geometry.arcs.map((ring) => decodeRing(topology, ring));
	}
	if (geometry.type === "MultiPolygon") {
		return geometry.arcs.flatMap((polygon) =>
			polygon.map((ring) => decodeRing(topology, ring)),
		);
	}
	return [];
}

function project(lon, lat) {
	return {
		x: ((lon + 180) / 360) * 1000,
		y: ((90 - lat) / 180) * 500,
	};
}

function ringToPath(ring) {
	return (
		ring
			.map((coord, i) => {
				const { x, y } = project(coord[0], coord[1]);
				return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
			})
			.join(" ") + " Z"
	);
}

function geometryToPaths(topology, geometry) {
	return decodeGeometry(topology, geometry).map(ringToPath);
}

function pathsToD(pathList) {
	return pathList.join(" ");
}

const landTopo = JSON.parse(readFileSync("public/land-110m.json", "utf8"));
const countriesTopo = JSON.parse(
	readFileSync("public/countries-110m.json", "utf8"),
);

const landGeom = landTopo.objects.land.geometries[0];
const landPaths = geometryToPaths(landTopo, landGeom);

const countries = countriesTopo.objects.countries.geometries;
const countryById = (id) => countries.find((g) => String(g.id) === String(id));

const paths = {
	land: pathsToD(landPaths),
	uk: pathsToD(geometryToPaths(countriesTopo, countryById(826))),
	us: pathsToD(geometryToPaths(countriesTopo, countryById(840))),
	ca: pathsToD(geometryToPaths(countriesTopo, countryById(124))),
	eu: [
		250, 276, 724, 380, 528, 56, 616, 752, 372, 620, 40, 208, 246, 300, 642,
		348, 100, 196, 703, 705, 191, 233, 428, 440, 470, 112, 498, 688, 499, 807,
		8, 410, 674, 203,
	]
		.map((id) => countryById(id))
		.filter(Boolean)
		.flatMap((geom) => geometryToPaths(countriesTopo, geom)),
};

const london = project(-0.1278, 51.5074);
const hubs = [
	{ region: "US", city: "New York", ...project(-74.006, 40.7128) },
	{ region: "CA", city: "Toronto", ...project(-79.3832, 43.6532) },
	{ region: "EU", city: "Berlin", ...project(13.405, 52.52) },
];

mkdirSync("src/data", { recursive: true });
writeFileSync(
	"src/data/worldMapPaths.json",
	JSON.stringify({ paths, london, hubs }),
);

console.log("Generated src/data/worldMapPaths.json");
