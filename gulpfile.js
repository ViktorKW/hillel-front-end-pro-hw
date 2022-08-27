const { watch, series } = require("gulp");

const browserSync = require("browser-sync");

function browserSyncServer(cb) {
  browserSync.init({
    server: {
      baseDir: ".",
    },
    port: 8030,
    ui: {
      port: 8031,
    },
  });
  cb();
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watchTask() {
  watch(["*.html", "css/*.css", "js/*.js"], browserSyncReload);
}

exports.default = series(browserSyncServer, watchTask);
