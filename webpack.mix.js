const mix = require("laravel-mix");
const purge = require("laravel-mix-purgecss");
const ejs = require("laravel-mix-ejs");

mix.sass("src/scss/website.scss", "./dist/css").purgeCss({
  content: ["src/index.html"],
});

mix.ts("src/js/website.ts", "./dist/js");

mix.ejs("src/index.ejs", "dist");
