/// <binding AfterBuild='libs' Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var gulp = require("gulp");
var rimraf = require("rimraf");
var merge = require('merge-stream');

var paths = {
    npm: "./node_modules/",
    lib: "./wwwroot/lib/",
    dts: "./typings/",
    assets: "./wwwroot/assets/"
}

var libs = [
	paths.npm + "angular2/bundles/angular2.dev.js",
	paths.npm + "angular2/bundles/http.js",
	paths.npm + "angular2/bundles/router.dev.js",
	paths.npm + "angular2/bundles/angular2-polyfills.js",
	paths.npm + "es6-shim/es6-shim.js",
	paths.npm + "systemjs/dist/system.js",
	paths.npm + "rxjs/bundles/rx.js",
	paths.npm + "systemjs/dist/system-polyfills.js",
	paths.npm + "a2-in-memory-web-api/web-api.js",
	paths.npm + "typescript/lib/typescript.js",
	paths.npm + "angular2/ts/src/testing/shims_for_IE.js",
	paths.npm + "material-design-lite/dist/material.min.js"
];

var assets = [
    paths.npm + "material-design-lite/dist/material.deep_orange-pink.min.css"
];

gulp.task("libs", function () {
    var libTarget = gulp.src(libs).pipe(gulp.dest(paths.lib));
    var assetTarget = gulp.src(assets).pipe(gulp.dest(paths.assets));
    return merge(libTarget, assetTarget);
});

gulp.task("clean", function (callback) {
    rimraf(paths.lib, callback);
});