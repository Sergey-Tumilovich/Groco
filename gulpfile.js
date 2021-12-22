//dependencies
//source, destination, watchtask, series
import pkg from 'gulp';
const {src, dest, watch, series} = pkg

//sass, autoprefixer, minifier, terser, imgmin, imgwebp
//node-sass compile fix
import gulpSass from 'gulp-sass';
import nodesass from 'sass';
const sass = gulpSass(nodesass);

import  prefix from 'gulp-autoprefixer';
import  minify from 'gulp-clean-css';
import terser from 'gulp-terser';
import imagemin from 'gulp-imagemin';
import imagewebp from 'gulp-webp';

//paths
const source = 'src/'
const destination = 'public/'

//----functions----//

//scss =>css
function makeCss(){
    return src(`${source}scss/*.scss`)//get source scss'
    .pipe(sass())//then make css
    .pipe(prefix())//then autoprefix
    .pipe(minify())//then minify
    .pipe(dest(`${destination}css`))//then place it into css folder
}

//js
function jsMin(){
    return src(`${source}js/*.js`)//source js
    .pipe(terser())//min
    .pipe(dest(`${destination}js`));//place to destination folder
}

//img optimization
function imgOptimize(){
    return src(`${source}img/*.{jpg,png}`)
    .pipe(imagemin())
    .pipe(dest(`${destination}img`))
}

//webp-ing
function imgToWebp(){
    return src(`${destination}img/*.{jpg,png}`)
    .pipe(imagewebp())
    .pipe(dest(`${destination}img`))
}

//watchtask
function watchTask(){
    watch(`${source}scss/*.scss`,makeCss);
    watch(`${source}js/*.js`,jsMin);
    watch(`${source}img/*.{jpg,png}`,imgOptimize);
    watch(`${destination}scss/*.{jpg,png}`,imgToWebp);
}

//default gulp
export default series(
    makeCss,
    jsMin,
    imgOptimize,
    imgToWebp,
    watchTask
);