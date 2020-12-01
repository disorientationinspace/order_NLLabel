const { dest, src, watch, parallel, series } = require("gulp");
const browserSync        = require("browser-sync").create();
const concat             = require("gulp-concat");
const uglify             = require("gulp-uglify-es").default;
const sass               = require("gulp-sass");
const autoprefixer       = require("gulp-autoprefixer");
const cleancss           = require("gulp-clean-css");
const imagemin           = require("gulp-imagemin");
const newer              = require("gulp-newer");

function browsersync() {
  browserSync.init({
    server: { baseDir: "app/" },
    notify: false,
    online: true,
    tunnel: true
  })
}

function scripts() {
  return src([
    "app/js/app.js"
])
  .pipe(concat("app.min.js"))
  .pipe(uglify())
  .pipe(dest("app/js/"))
  .pipe(browserSync.stream());
}

function scriptsbuild() {
  return src([
    "app/js/**/*",
    "app/js/*"
])
  .pipe(uglify())
  .pipe(dest("dist/js/"));
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
  watch(["app/js/**/*.js", "!app/js/**/*.min.js"], scripts);
  watch(["app/sass/**/*.scss"], styles);
  watch("app/**/*.html").on("change", browserSync.reload);
}

function build() {
  return src([
    "app/css/**.min.css",
    "app/js/**/*.js",
    "app/**/*.html",
    "app/fonts/*",
  ], { base: "app" })
  .pipe(dest("dist"))
}


exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.styles      = styles;
exports.img         = images;
exports.build       = series(styles, scripts, images, scriptsbuild, build)

exports.default     = parallel(styles, browsersync, startwatch);