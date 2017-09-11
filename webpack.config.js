

//Konfiguracja Webpack
module.exports= {
 entry: "./js/app.jsx", // tu wpisujemy nazwe pliku poczatkoweg
 output: {filename: "./js/out.js"},
 watch: true,
 module: {
     loaders: [
         {
             test: /\.jsx$/, exclude: /node_modules/,
             loader: 'babel-loader',
             query: {presets: ['es2015', 'react']}
         }
     ]
 }
};
