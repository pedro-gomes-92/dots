class CustomHookPlugin {
  constructor({hook, callback}) {
    this.hook = hook;
    this.fn = callback;
  }

  apply(compiler) {
    compiler.hooks[this.hook].tapAsync('compiler-hook-plugin', (params, callback) => {
      this.fn(params);
      callback();
    });
  }
}

module.exports = CustomHookPlugin;