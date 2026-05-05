import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import fs from "node:fs";


const InjectJsonPlugin: PluginOption = {
	name: "inject-json-plugin",
	transformIndexHtml(html) {
		const data = fs.readFileSync("./tokens.json", "utf-8");
		return html.replace("__USER_DATA__", JSON.stringify(data));
	}
};


// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		InjectJsonPlugin,
	],
	base: "/",
	resolve: {
		tsconfigPaths: true,
		alias: {
			"@": "/src",
		},
	},
	// SPA
	server: {
		port: 3000,
		strictPort: true,
		host: true,
		forwardConsole: true,
	},
	build: {
		target: "esnext",
		minify: "oxc",
		cssMinify: "lightningcss",
		sourcemap: true,
		ssr: false,
		rolldownOptions: {
			output: {
				codeSplitting: true,
			},
		},
	},
});
