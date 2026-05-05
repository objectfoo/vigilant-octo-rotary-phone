import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import fs from "node:fs";


const InjectJsonPlugin: PluginOption = {
	name: "inject-json-plugin",
	transformIndexHtml(html) {
		const fragment = fs.readFileSync("./partials/_InjectWhsTokens.html", "utf-8");
		return html.replace("__INJECT_WHS_TOKENS__", fragment);
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
