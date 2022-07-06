//import adapter from "@sveltejs/adapter-auto"
import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess" // <- Import it here

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [ // <- Create this option
        preprocess({ // <- Add the module
            postcss: true, // <- Set this to enable PostCSS
        }),
    ],
    kit: {
		//target:'#svelte',
		adapter: adapter({ 
			out: 'build',
			routes: 'build',
			assets: 'build',
			fallback: null
		
		}),
		prerender : { default: true}
	}
}

export default config