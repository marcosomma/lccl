const should = require('chai').should()

const lcclSimple = require('../index')('TEXT UNIQUE FOR ALL OF THEM', false, true)
const lcclSimpleDate = require('../index')('TEXT UNIQUE FOR ALL OF THEM', true, false)

const lcclConfig = {
  info: 'TEXT SPECIFIC INFO',
  warn: 'TEXT SPECIFIC WARNING',
  error: 'TEXT SPECIFIC ERROR'
}
const lcclObject = require('../index')(lcclConfig, false, false)
const lcclObjectDate = require('../index')(lcclConfig, true, true)

describe('# Test : Simple Customiztion', function() {
  it('passed', function (done) {
    lcclSimple.log('TEST LOG')
    lcclSimple.info('TEST INFO')
    lcclSimple.warn('TEST WARN')
    lcclSimple.error('TEST ERROR')
    done()
  });
});
describe('# Test : Simple Customiztion and Date', function() {
  it('passed', function (done) {
    lcclSimpleDate.log('TEST LOG')
    lcclSimpleDate.info('TEST INFO')
    lcclSimpleDate.warn('TEST WARN')
    lcclSimpleDate.error('TEST ERROR')
    done()
  });
});
describe('# Test : Specific Customiztion', function() {
  it('passed', function (done) {
    lcclObject.log('TEST LOG')
    lcclObject.info('TEST INFO')
    lcclObject.warn('TEST WARN')
    lcclObject.error('TEST ERROR')
    done()
  });
});
describe('# Test : Specific Customiztion and Date', function() {
  it('passed', function (done) {
    lcclObjectDate.log('TEST LOG')
    lcclObjectDate.info('TEST INFO')
    lcclObjectDate.warn('TEST WARN')
    lcclObjectDate.error('TEST ERROR')
    done()
  });
});
