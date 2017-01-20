const createLogFn = (customArguments, method) => function () {
  console[method].apply(console, concatWithArguments(customArguments, arguments))
}

const concatWithArguments = (customArguments, args) => {
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
    log: createLogFn(getCustomArguments(date, (unique ? conf : conf.info)), 'log'),
    info: createLogFn(getCustomArguments(date, (unique ? conf : conf.info)), 'info'),
    warn: createLogFn(getCustomArguments(date, (unique ? conf : conf.warn)), 'warn'),
    error: createLogFn(getCustomArguments(date, (unique ? conf : conf.error)), 'error')
  }
}

module.exports = init
