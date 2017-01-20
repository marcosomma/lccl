require('colors')

const getDate = () => new Date().toISOString().replace(/T/, ' at ').replace(/\..+/, '')

const concatWithArguments = (customArguments, args) => {
  return customArguments.concat(Array.from(args))
}

const processCustomArguments = (date, logPrefix, colors) => {
  var customArguments = [colors ? `# ${logPrefix} #`.white.bold : `# ${logPrefix} #`]
  if (date && colors) customArguments.unshift(getDate().gray.bold.underline , '>>'.grey )
  if (date && !colors) customArguments.unshift(getDate() , '>>' )
  return customArguments
}

const getCustomArguments = (unique, date, conf, colors) => {
  return unique ?
      processCustomArguments(date, conf, colors)
    :
      {
        info : processCustomArguments(date, (unique ? conf : conf.info), colors),
        warn : processCustomArguments(date, (unique ? conf : conf.warn), colors),
        error : processCustomArguments(date, (unique ? conf : conf.error), colors)
      }
}

const createLogFn = (customArguments, method) => function () {
  console[method].apply(console, concatWithArguments(customArguments, arguments))
}


const init = (conf, date, colors) => {
  var unique = typeof conf === 'string'
  var customArgumrnts = getCustomArguments(unique, date, conf, colors)
  return {
    log: createLogFn((unique ? customArgumrnts : customArgumrnts.info), 'log'),
    info: createLogFn((unique ? customArgumrnts : customArgumrnts.info), 'info'),
    warn: createLogFn((unique ? customArgumrnts : customArgumrnts.warn), 'warn'),
    error: createLogFn((unique ? customArgumrnts : customArgumrnts.error), 'error')
  }
}

module.exports = init
