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
    online: true
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
        .pipe(newer("app/images/dist"))
        .pipe(imagemin())
        .pipe(dest("app/images/dist"))
}

function startwatch() {
  watch(["app/js/**/*.js", "!app/js/**/*.min.js"], scripts);
  watch(["app/sass/**/*.scss"], styles);
  watch("app/**/*.html").on("change", browserSync.reload);
}

function build() {
  return src([
    "app/css/**.min.css",
    "app/js/**/*.min.js",
    "app/images/dist/**/*",
    "app/**/*.html",
  ], { base: "app" })
  .pipe(dest("dist"))
}

exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.styles      = styles;
exports.img         = images;
exports.build       = series(styles, scripts, images, build)

exports.default     = parallel(styles, browsersync, startwatch);