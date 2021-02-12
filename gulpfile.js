const browserSync = require('browser-sync').create();
const gulp = require('gulp');


gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist/",
        }
    })
});


