const { resolve } = require("path");
const { callbackify } = require("util");

module.exports = function loader(source) {
  const data = JSON.parse(source);

  callbackify(async () => {
    data.asset = await this.importModule(resolve(this.context, data.asset));

    return JSON.stringify(data);
  })(this.async());
};
