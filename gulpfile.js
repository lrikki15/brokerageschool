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
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const imagemin = require('gulp-imagemin');
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
    watch(['./src/js/**/*.js'], () => {
        setTimeout(gulp.parallel('js'), 500)
    });
    watch(['./src/assets/images/**/*.*'], () => {
        setTimeout(gulp.parallel('images'), 500)
    });
    watch(['./src/modules/**/*.*'], () => {
        setTimeout(gulp.parallel('repalceModules'), 500)
    });
})
gulp.task('js', (cb) => {
    return gulp.src('./src/js/*.js')
        .pipe(plumber(
            {
                errorHandler: notify.onError((err) => {
                    return {
                        title: 'JSerror',
                        sound: false,
                        message: err.message
                    }
                })
            }
        ))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js/'))
        .pipe(browserSync.stream())
    cb();
});
gulp.task('images', function(cb){
    return gulp.src('./src/assets/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images/'));
    cb();
});
//перенос подключаемых модулей
gulp.task('repalceModules', function(){
    return gulp.src('./src/modules/**/*.**')
    .pipe(gulp.dest('./dist/modules/'));
})
gulp.task('default', gulp.series(gulp.parallel('scss', 'pug','images','repalceModules'), gulp.parallel('watch','server'))); 
