var gulp         = require('gulp');               //gulp
var ejs          = require('gulp-ejs');           //include
var sass         = require('gulp-sass');          //scss -> css
var plumber      = require('gulp-plumber');       //watch dont stop
var browserSync  = require('browser-sync');       //browser live reload
var autoprefixer = require('gulp-autoprefixer');  //autoprefixer

//copy to html/js/font/img
gulp.task('copy', function(){
	gulp.src('src/js/**', { base: 'src'}).pipe( gulp.dest('dist') );
	gulp.src('src/img/**', { base: 'src'}).pipe( gulp.dest('dist') );
	// gulp.src('src/favicons/**', { base: 'src'}).pipe( gulp.dest('dist') );
	// gulp.src('src/font/**', { base: 'src'}).pipe( gulp.dest('dist') );
});

gulp.task('ejs', function(){
	gulp.src(['./src/**.html', '!./src/_*.ejs'])
		.pipe(plumber())
		.pipe(ejs('', {'ext': '.html'}))
		.pipe(gulp.dest('./dist/'));
});

//scss -> css
gulp.task('sass', function(){
	gulp.src('./src/css/*.scss')
		.pipe(plumber())
		.pipe(sass({outputStyle: 'compressed'}))	//expanded,compressed,nested
		.pipe(autoprefixer({
	        browsers: ['last 2 versions'],
	        cascade: false
	    }))
		.pipe(gulp.dest('./dist/css'));
});

//watching files
gulp.task('watch', function(){
	gulp.watch('src/**/*.html', ['ejs']);
	gulp.watch('src/js/**', ['copy']);
	gulp.watch('src/img/**', ['copy']);
	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch('src/**/*.ejs', ['ejs']);
	//reload
	gulp.watch('dist/**/*.html', ['bs-reload']);
	gulp.watch('dist/**/*.css', ['bs-reload']);
	gulp.watch('dist/**/*.js', ['bs-reload']);
});

//browserSync reload
gulp.task('bs-reload', function(){
	browserSync.reload();
});

//webserver display(browserSync)
gulp.task('webserver', function(){
	return browserSync.init({
	notify: false,
	port: 8000,
    server: {
      baseDir: './dist/'
    }
  })
});

gulp.task('default', ['copy', 'ejs', 'sass', 'watch', 'webserver']);
