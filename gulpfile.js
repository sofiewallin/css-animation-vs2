const {src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();

/* Paths */
const files = {
    htmlPath: 'src/**/*.html',
    cssPath: 'src/css/*.css',
    jsPath: 'src/js/*.js',
    imagesPath: 'src/images/*'
}

/* HTML-task */
function htmlTask() {
    return src(files.htmlPath)
    .pipe(dest('pub'));
}

/* CSS-task */
function cssTask() {
    return src(files.cssPath)
    .pipe(dest('pub/css'))
    .pipe(browserSync.stream());
}

/* JavaScrip-task */
function jsTask() {
    return src(files.jsPath)
    .pipe(dest('pub/js'));
}

/* Images-task */
function imagesTask() {
    return src(files.imagesPath)
    .pipe(dest('pub/images'));
}

/* Watch task */
function watchTask() {
    browserSync.init({
        server: "./pub"
    });
    watch([files.htmlPath, files.cssPath, files.jsPath, files.imagesPath], parallel(htmlTask, cssTask, jsTask, imagesTask)).on('change', browserSync.reload);
}

exports.default = series(
    parallel(htmlTask, cssTask, jsTask, imagesTask),
    watchTask
);