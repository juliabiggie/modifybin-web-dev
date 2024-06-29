const path = require("path");
module.exports = {
  mode: "production", // set mode to production - minify
  entry: {
    ["global"]: "./src/index.js", // what to take and where to put it
  },
  output: {
    path: path.resolve(__dirname, "dist"), // where the files are output to
    filename: "[name].js", // whatever the name is . Can be hard coded
    library: "[name]",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
    clean: true,
  },
};
