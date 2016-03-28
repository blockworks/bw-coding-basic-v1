var gulp = require('gulp');	//gulp
var sass = require('gulp-ruby-sass');		//scss -> css
var ejs = require('gulp-ejs');	//watch dont stop
var plumber = require('gulp-plumber');	//watch dont stop
var browserSync = require('browser-sync');  //browser live reload

//copy to files
gulp.task('copy', function() {
  gulp.src('src/**/*.html', { base: 'src'}).pipe( gulp.dest('dist') );
  gulp.src('src/**/*.js', { base: 'src'}).pipe( gulp.dest('dist') );
  gulp.src(['src/**/*.png','src/**/*.jpg'], { base: 'src'}).pipe( gulp.dest('dist') );
});

//ejs
gulp.task('ejs', function(){
  gulp.src(['src/**/*.ejs',  '!src/**/_*.ejs'])
    .pipe( ejs({}, {ext: '.html'}) )
    .pipe( gulp.dest('dist') );
});

//scss -> css
gulp.task('sass', function() {
  return sass('src/css/*.scss', {style: 'expanded'})
  .pipe(plumber())
  .pipe(gulp.dest('dist/css'));
});

//watching files
gulp.task('watch', function() {
  //gulp.watch(['src/**/*.html','src/**/*.js'], ['copy']);
  gulp.watch('src/**/*.js', ['copy']);
  gulp.watch(['src/**/*.ejs',  '!src/**/_*.ejs'], ['ejs']);
  gulp.watch('src/**/*.scss', ['sass']);
  //reload
  gulp.watch('dist/**/*', ['bs-reload']);
});

//browserSync reload
gulp.task('bs-reload', function () {
    browserSync.reload();
});

//webserver display(browserSync)
gulp.task('webserver', function() {
  browserSync({
    notify: false,
    open: 'external',	//for IP address.
    browser: 'google chrome',	//default browser
    port: 8000,
    server: {
      baseDir: './dist/'
    }
  })
});

gulp.task('default', ['copy', 'sass', 'watch', 'ejs', 'webserver']);