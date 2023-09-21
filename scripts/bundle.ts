await Bun.build({
  entrypoints: ["./index.ts"],
  outdir: "./public",
  target: "browser",
});
