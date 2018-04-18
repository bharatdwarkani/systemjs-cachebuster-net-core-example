/// <binding BeforeBuild='cache-burst-ts, copy-system-cache-buster' />
"use strict";
var gulp = require("gulp"),    
    replace = require('gulp-replace'),
    SystemJSCacheBuster = require("systemjs-cachebuster"),
    cacheBuster = new SystemJSCacheBuster(); 

var tsCacheBurstercopied = "./wwwroot/js/Others/system.cachebuster.json";
var tsCacheBurster = "./system.cachebuster.json";


/* Cache bursting for ts files */

var tsfiles = "./wwwroot/ts/*.ts";
gulp.task('cache-burst-ts', function () {
    return gulp
        .src(tsfiles)
        .pipe(cacheBuster.full())
        .pipe(cacheBuster.incremental());
});

/* copy cache burster file to wwwroot */

gulp.task('copy-system-cache-buster', function () {
    return gulp.src(['system.cachebuster.json'])
        .pipe(replace('wwwroot/', ''))
        .pipe(gulp.dest('./wwwroot/js/others/'));
});


