const { series, parallel } = require ('gulp')
const gulp = require('gulp')

const { appHTML,appCSS,appJS, appIMG}= require('./gulpstasks/app')
const { depsCSS, depsFonts}= require('./gulpstasks/deps')
const {monitorarArq, servidor}= require('./gulpstasks/servidor')

module.exports.default =series(
    parallel(
        series(appHTML,appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArq
)