const gulp = require("gulp");
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync");

function browserSyncServer(cb) {
  browserSync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watchTask() {
  watch("*.html", browserSyncReload);
  watch(["scss/*.scss", "js/*.js"], series(minCSS, minJS, browserSyncReload));
}

function minCSS() {
  return src([
    "scss/*.scss",
    "node_modules/lightslider/dist/css/lightslider.css",
  ])
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest("dist/css"));
}

function minJS() {
  return src([
    "node_modules/jquery/dist/jquery.js",
    "node_modules/lightslider/dist/js/lightslider.js",
    "js/*.js",
  ])
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(dest("dist/js/"));
}

function minImg() {
  return src(["img/*", "node_modules/lightslider/dist/img/*"])
    .pipe(imagemin())
    .pipe(dest("dist/img"));
}

exports.default = series(minCSS, minJS, minImg, browserSyncServer, watchTask);
