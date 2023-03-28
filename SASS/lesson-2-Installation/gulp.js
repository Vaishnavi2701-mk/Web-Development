// we need four variables srs-> which is our source file
// dest-> destination file where we have to compile that file
// watch-> to keep track of changes in sass
// series for event occurs in sequense

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("index.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["index.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
