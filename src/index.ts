import path from "path";
const demo = path.resolve(__dirname, "..", "demo");

const firstJs = path.join(demo, "first-js", "index.js");
const firstTs = path.join(demo, "first-ts", "index.ts");
const onlyJs = path.join(demo, "only-js", "index.js");
const onlyTs = path.join(demo, "only-ts", "index.ts");

const main = async () => {
  const fnFirstJs = await import(firstJs).then((m) => m.default);
  const fnFirstTs = await import(firstTs).then((m) => m.default);
  const fnOnlyJs = await import(onlyJs).then((m) => m.default);
  const fnOnlyTs = await import(onlyTs).then((m) => m.default);

  console.log("iniciando ejecución de funciones");

  fnFirstJs();
  fnFirstTs();
  fnOnlyJs();
  fnOnlyTs();
};

main();
