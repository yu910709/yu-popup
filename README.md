
  @param {object} option - one entry param to function popJs
  @param {string} [option.type] - accept 'success' 'error' 'loading' ''
  @param {string} [option.title]
  @param {(string|string[])} [option.desc]
  @param {number} [option.width = 180] - max width 100%
  @param {number} [option.timing = 3000] - autoclose when pop has timing
  @param {function} [option.mounted] - before pop's dom into html
  @callback callback
  @param {function} [option.callback] - after pop's dom removed
