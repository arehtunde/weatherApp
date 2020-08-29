const {
  src, dest, watch, series, parallel,
} = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const files = {
  htmlPath: './*.html',
  scssPath: 'app/scss/*.scss',
  jsPath: 'app/js/*.js',
};

const htmlTask = async () => {
  await src(files.htmlPath)
    .pipe(dest('dist'));
};

const compileCss = async () => {
  await src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
};
const cssTask = async () => {
  const plugins = [
    autoprefixer(),
    cssnano(),
  ];
  await src('app/css/*.css')
    .pipe(postcss(plugins))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
};

const jsTask = async () => {
  await src(files.jsPath)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      }),
    )
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
};

const lint = async () => {
  await src(files.jsPath)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
};

const cacheBustTask = async () => {
  const cbString = new Date().getTime();
  await src(['index.html'])
    .pipe(replace(/cb=\d+/g, `cb= ${cbString}`))
    .pipe(dest('.'));
};

const sync = async () => {
  await browserSync.init({
    port: 8080,
    server: {
      baseDir: './',
      index: 'index.html',
    },
  });
  watch(files.scssPath, series(compileCss, cssTask));
  watch(files.htmlPath).on('change', browserSync.reload);
  watch(files.jsPath).on('change', browserSync.reload);
};

exports.default = series(
  parallel(htmlTask, series(compileCss, cssTask), series(lint, jsTask)),
  cacheBustTask,
  sync,
);
