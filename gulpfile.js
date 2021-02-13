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
const { src } = require('gulp');
const pug = require('gulp-pug');

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist/",
            watch: true
        }
    })
});

gulp.task('pug', (cb) => {
    return gulp.src('./src/pug/*.pug')
        .pipe(plumber(
        {
            errorHandler: notify.onError((err) => {
                return {
                    title: 'PugError',
                    sound: false,
                    message: err.message
                }
            })
        }
        )) 
        .pipe(sourcemaps.init())
        .pipe(pug({
            pretty: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream())
    cb();
})

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
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
        callback();
})
gulp.task('watch', () => {
    watch(['./src/scss/**/*.scss'], () => {
        setTimeout(gulp.parallel('scss'), 1000)
    });
    watch(['./src/pug/**/*.pug'], () => {
        setTimeout(gulp.parallel('pug'), 500)
    });
})

gulp.task();
gulp.task('default', gulp.series(gulp.parallel('scss', 'pug'), gulp.parallel('watch','server'))); 
