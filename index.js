const createLoggerFn = (customArguments, method) => function () {
  console[method].apply(console, concatToArguments(customArguments, arguments))
}

const concatToArguments = (customArguments, args) => {
  return customArguments.concat(Array.from(args))
}

const getCustomArguments = (date, logPrefix) => {
  var customArguments = [`[${logPrefix}]`]
  if (date) customArguments.unshift(getDate())
  return customArguments
}

const getDate = () => new Date().toISOString().replace(/T/, ' at ').replace(/\..+/, ' >>')

const init = (conf, date) => {
  var unique = typeof conf === 'string'
  return {
    log: createLoggerFn(getCustomArguments(date, (unique ? conf : conf.info)), 'log'),
    info: createLoggerFn(getCustomArguments(date, (unique ? conf : conf.info)), 'info'),
    warn: createLoggerFn(getCustomArguments(date, (unique ? conf : conf.warn)), 'warn'),
    error: createLoggerFn(getCustomArguments(date, (unique ? conf : conf.error)), 'error')
  }
}

module.exports = init
