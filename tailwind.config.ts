import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md'	:'768px',
            'tablet': '850px',
            // => @media (min-width: 640px) { ... }
      
            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
          },
        extend: {
            colors: {
                'redrice-red': '#FF3636',
                'redrice-yellow': '#F9A826',
                'redrice-light-yellow': '#FDC15D',
                'redrice-green': '#01C114',
                'redrice-blue': '#1DA1F2', // Make sure the color value starts with '#'
            },
        },
    },
    plugins: [],
};

export default config;
