const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|html)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
