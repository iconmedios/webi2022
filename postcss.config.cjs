const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")

const mode = process.env.NODE_ENV
const dev = mode === "development"

const config = {
    plugins: [
        tailwindcss(), // first load Tailwind CSS
        autoprefixer(), // then run autoprefixer
        !dev && // optimize the code for production
            cssnano({
                preset: "default",
            }),
    ],
}

module.exports = config

