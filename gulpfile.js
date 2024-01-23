const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const clean = require('gulp-clean');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const svgSprite = require('gulp-svg-sprite');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
const include = require('gulp-include');

function pages() {
    return src('src/pages/**/*.html')
        .pipe(include({
            includePaths: 'src/components'
        }))
        .pipe(dest('src'))
        .pipe(browserSync.stream())
}

function fonts() {
    return src('src/fonts/sources/**/*.*')
        .pipe(fonter({
            formats: ['woff', 'ttf']
        }))
        .pipe(src('src/fonts/**/*.ttf'))
        .pipe(ttf2woff2())
        .pipe(dest('src/fonts'))
}


function images() {
    return src(['src/images/sources/**/*.*', '!src/images/sources/**/*.svg'])
        .pipe(newer('src/images/dist'))
        .pipe(avif({ quality: 50 }))


        .pipe(src('src/images/sources/**/*.*'))
        .pipe(newer('src/images'))
        .pipe(webp())

        .pipe(src('src/images/sources/**/*.*'))
        .pipe(newer('src/images'))
        .pipe(imagemin())

        .pipe(dest('src/images'))
}

function scripts() {
    return src(['src/js/**/*.js', '!src/js/main.min.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('src/js'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('src/scss/**/*.scss')
        .pipe(postcss([
            require('postcss-nested')
        ], { syntax: require('postcss-scss') }))
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('src/css'))
        .pipe(browserSync.stream())
}

function watching() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    })
    watch('src/scss/**/*.scss', styles)
    watch(['src/js/**/*.js', '!src/js/main.min.js'], scripts)
    watch('src/**/*.html').on('change', browserSync.reload)
    watch('src/images/sources', images)
    watch(['src/components/*', 'src/pages/*'], pages)
}

function building() {
    return src([
        'src/css/style.min.css',
        'src/js/main.min.js',
        'src/**/*.html',
        '!src/pages/**/*.*',
        '!src/components/**/*.*',
        'src/images/**/*.*',
        '!src/images/sources/**/*.*',
        '!src/images/stack/**/*.*',
        'src/fonts/*.*'
    ], { base: 'src' })
        .pipe(dest('dist'))
}

function cleanDist() {
    return src('dist')
        .pipe(clean())
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.images = images;
exports.fonts = fonts;
exports.building = building;
exports.pages = pages;

exports.build = series(cleanDist, building);

exports.default = parallel(styles, scripts, fonts, images, pages, watching)