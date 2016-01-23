var elixir = require('laravel-elixir');
var paths = {
    'bootstrap': './vendor/bower_components/bootstrap-sass/assets/',
    'fontawesome': './vendor/bower_components/font-awesome/',
    'jquery': './vendor/bower_components/jquery/'	
}

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('*.scss', 'public/css/', {includePaths: [paths.bootstrap + 'stylesheets', paths.fontawesome + 'scss']})
        .copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts/bootstrap')
        .copy(paths.fontawesome + 'fonts/**', 'public/fonts/fontawesome')
        .scripts([
            paths.jquery + "dist/jquery.js",
            paths.bootstrap + "javascripts/bootstrap.js",
            './resources/javascripts/**/*.js',
        ], 'public/js/app.js', './')
        .version([
            'css/app.css',
            'js/app.js'
        ])
});
