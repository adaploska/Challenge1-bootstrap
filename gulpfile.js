var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();

gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("scss/**/*.scss", ["sass"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("sass", function() {
  return gulp
    .src("scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});



gulp.task("default", ["serve"]);
