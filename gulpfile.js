 


const {src, dest, watch, parallel} = require ("gulp")
const sass = require("gulp-sass")(require('sass'))
const plumber = require ('gulp-plumber')
 

//Conversor de img 

const webp = require('gulp-webp')


function css (done){

    src('src/scss/**/*.scss') // Identificar el archivo SASS
    .pipe(plumber())
    .pipe(sass()) //Compilar
    .pipe(dest("build/css")) // Almacenar 

    done() // Callback que avisa cuando termina la funcion
}

function versionWebp (done){
    const opciones ={
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
    .pipe(webp(opciones))
    .pipe( dest('build/img'))

    done()
}


function js (done){
    src('src/js/**/*.js')
    .pipe(dest('build/js'))

    done()
}

function dev (done){

    watch("src/scss/**/*.scss", css)
    watch("src/js/**/*.js", js)


    done()
}

exports.css = css
exports.js = js
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, js, dev); 
