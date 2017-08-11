### npm install --save-dev yu-popup

### import popup from 'yu-popup'



  @param {object} option - one entry param to function popJs

  @param {string} [option.type] - accept 'success' 'error' 'loading' ''

  @param {string} [option.title]

  @param {(string|string[])} [option.desc]

  @param {number} [option.width = 80] - max width 100%  min width 80px

  @param {number} [option.timing = 3000] - autoclose when pop has timing

  @param {function} [option.mounted] - before pop's dom into html

  @callback callback

  @param {function} [option.callback] - after pop's dom removed

