const { dest, src, watch, parallel, series } = require("gulp");
const browserSync        = require("browser-sync").create();
const concat             = require("gulp-concat");
const sass               = require("gulp-sass");
const autoprefixer       = require("gulp-autoprefixer");
const cleancss           = require("gulp-clean-css");
const imagemin           = require("gulp-imagemin");
const newer              = require("gulp-newer");
const webpack            = require('webpack-stream');

function browsersync() {
  browserSync.init({
    server: { baseDir: "dist/" },
    notify: false,
    online: true,
  })
}

function styles() {
  return src(["app/sass/**/app.scss"])
        .pipe(sass())
        .pipe(concat("app.min.css"))
        .pipe(autoprefixer({ overrideBrowserslist: ["last 15 versions"], grid: true }))
        .pipe(cleancss())
        .pipe(dest("app/css"))
        .pipe(browserSync.stream());
}

function images() {
  return src("app/img/**/*")
        .pipe(newer("dist/img/"))
        .pipe(imagemin())
        .pipe(dest("dist/img/"))
}

function startwatch() {
  watch(["app/js/**/*.js", "app/js/*.js"]).on("change", series(scripts, browserSync.reload))
  watch(["app/sass/**/*.scss"], series(styles, build));
  watch("app/**/*.html").on("change", series(build, browserSync.reload));
}

function scripts() {
  console.log(1);
  return src('app/js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(dest('dist/js'))
}

function build() {
  return src([
    "app/css/**.min.css",
    "app/**/*.html",
    "app/fonts/*",
  ], { base: "app" })
  .pipe(dest("dist"))
}


exports.browsersync = browsersync;
exports.styles      = styles;
exports.img         = images;
exports.build       = series(styles, scripts, images, build);

exports.default     = parallel(scripts, styles, browsersync, startwatch);