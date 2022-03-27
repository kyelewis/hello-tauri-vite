import { build as buildVite } from "vite";
import { run as runTauri } from "@tauri-apps/cli";
import config from "./vite-config";
import { join } from "path";

const outDirVite = join(__dirname, "../dist-vite");
const outDirTauri = join(__dirname, "../dist-tauri");

(async() => {

	await buildVite({
		...config,
		build: { outDir: outDirVite }
	});

  process.env.CARGO_TARGET_DIR = outDirTauri;
  await runTauri(['build']);

})();
