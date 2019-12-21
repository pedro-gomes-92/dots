const params = process.argv.reduce((_object, arg, index, array) => {
  const object = { ..._object };
  const argName = arg.replace('--', '').toLowerCase();

  object[argName] = array[index + 1] || true;

  return object;
}, {});

module.exports = params;
