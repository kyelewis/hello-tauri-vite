import { join } from "path";

const srcDirVite = join(__dirname, '../src-vite');

export default {
		configFile: false,
		root: srcDirVite,
		base: '',
		plugins: [],
	}
