const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
      extend: {
        colors: {
          'miblue':{
            '900':'#2C599D'
          }
        },
        keyframes: {
          animatebgtx: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          }
        }
      },
  },
  colors: {
    'blue': '#1fb6ff',
    'purple': '#7e5bef',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
    'blue-icon' : '#2C599D'
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}

module.exports = config