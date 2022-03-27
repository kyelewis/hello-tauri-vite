import { createServer as createViteServer } from "vite";
import { run as runTauri } from "@tauri-apps/cli";
import config from "./vite-config";

(async() => {
	const vite = await createViteServer({
		...config,
		server: { port: 3000 }
	});
	await vite.listen();
	vite.printUrls();

  // @todo add listen for server close / events.
  const tauri = await runTauri(['dev']);

})();
