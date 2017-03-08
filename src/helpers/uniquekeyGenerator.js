function* uniqueKeyGenerator() {
  let key = 0;
  /* eslint-disable no-constant-condition */
  while (true) {
    key += 1;
    yield key;
  }
  /* eslint-enable */
}

export default uniqueKeyGenerator;
