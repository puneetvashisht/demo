//var mode = null;//production
var mode = "development";

var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: mode ? "inline-sourcemap" : null,
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  plugins: mode ? [] : [
//      Search for equal or similar files and deduplicate them in the output
    new webpack.optimize.DedupePlugin(),
      
//      Assign the module and chunk ids by occurrence count.
    new webpack.optimize.OccurenceOrderPlugin(),
      
//      Minimize all JavaScript output of chunks.
    new webpack.optimize.UglifyJsPlugin({ compress: true, sourcemap: false })
  ],
};