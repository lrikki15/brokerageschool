const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss'); 
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist/",
            watch: true
        }
    })
});
gulp.task('scss', (callback) => {
    let plugins = [
        autoprefixer(),
        cssnano()
    ];
    return gulp.src('./src/scss/*.scss')
        .pipe(plumber(
            {
                errorHandler: notify.onError((err) => {
                    return {
                        title: 'StylesError',
                        sound: false,
                        message: err.message
                    }
                })
            }
        ))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
        callback();
})
gulp.task('watch', () => {
    watch(['./src/scss/**/*.scss'], () => {
    setTimeout(gulp.parallel('scss'), 1000)});
    watch(['./dist/*.html', './dist/css/*.css'], gulp.parallel(browserSync.reload)); 
})

gulp.task();
gulp.task('default', gulp.series('scss', gulp.parallel('watch','server'))); 
