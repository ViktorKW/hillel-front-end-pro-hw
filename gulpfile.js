const { src, dest, series } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");

function minCSS(cb) {
  src(["src/css/*.css", "node_modules/lightslider/dist/css/lightslider.css"])
    .pipe(concat("style.min.css"))
    .pipe(dest("dist/css/"));
  cb();
}

function minJS(cb) {
  src([
    "node_modules/lightslider/dist/js/lightslider.js",
    "src/js/*.js",
    "node_modules/jquery/dist/jquery.js",
  ])
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(dest("dist/js/"));
  cb();
}

function minImg(cb) {
  src(["src/img/*", "node_modules/lightslider/dist/img/*"])
    .pipe(imagemin())
    .pipe(dest("dist/img"));
  cb();
}

function minHtml(cb) {
  src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
  cb();
}
exports.default = series(minCSS, minJS, minImg);
