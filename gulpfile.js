var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass         = require('gulp-sass');	//scss -> css
var plumber      = require('gulp-plumber');	//watch dont stop
var autoprefixer = require('gulp-autoprefixer');	//autoprefixer

//scss -> css
gulp.task('sass', function(){
	gulp.src('./css/**/*.scss')
		.pipe(plumber())
		.pipe(sass({outputStyle: 'compressed'}))	//expanded,compressed,nested
		.pipe(autoprefixer({
	        browsers: ['last 3 versions'],
	        cascade: false
	    }))
		.pipe(gulp.dest('./css/'));
		
		gulp.src('./js/**/*.scss')
		.pipe(plumber())
		.pipe(sass({outputStyle: 'compressed'}))	//expanded,compressed,nested
		.pipe(autoprefixer({
	        browsers: ['last 3 versions'],
	        cascade: false
	    }))
		.pipe(gulp.dest('./js/'));
});

//browserSync
gulp.task('browser-sync', function() {
	browserSync({
		notify: false,
		server: {
			baseDir: "./"	//対象ディレクトリ
			,index  : "index.html"	//インデックスファイル
		}
	});
});

//browser reload
gulp.task('bs-reload', function () {
	browserSync.reload();
});

//watching files
gulp.task('default', ['sass', 'browser-sync'], function () {
	gulp.watch("./css/**/*.scss", ['sass']);
	gulp.watch("./*.html", ['bs-reload']);
	gulp.watch("./css/**/*.css", ['bs-reload']);
	gulp.watch("./js/**/*.js", ['bs-reload']);
	gulp.watch("./js/**/*.css", ['bs-reload']);
});
