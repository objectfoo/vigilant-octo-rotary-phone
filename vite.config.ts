import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
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
