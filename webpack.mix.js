let tailwindcss = require("tailwindcss");
let mix = require("laravel-mix");
mix
  .js("src/app.js", "assets")
  .sass("src/app.scss", "assets")
  .options({
    postCssUrls: false,
    postCss: [tailwindcss("tailwind.config.js")],
  });
