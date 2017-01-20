const should = require('chai').should()

const lcclSimple = require('../index')('test simple customization',false)
const lcclSimpleDate = require('../index')('test simple customization with date',true)

const lcclConfig = {
  info: 'TEST INFO',
  warn: 'TEST WARNING',
  error: 'TEST ERROR'
}
const lcclObject = require('../index')(lcclConfig,false)
const lcclObjectDate = require('../index')(lcclConfig,true)

describe('# Test : Simple Customiztion', function() {
  it('passed', function (done) {
    lcclSimple.log('test LOG')
    lcclSimple.info('test INFO')
    lcclSimple.warn('test WARN')
    lcclSimple.error('test ERROR')
    done()
  });
});
describe('# Test : Simple Customiztion and Date', function() {
  it('passed', function (done) {
    lcclSimpleDate.log('test LOG')
    lcclSimpleDate.info('test INFO')
    lcclSimpleDate.warn('test WARN')
    lcclSimpleDate.error('test ERROR')
    done()
  });
});
describe('# Test : Specific Customiztion', function() {
  it('passed', function (done) {
    lcclObject.log('test LOG')
    lcclObject.info('test INFO')
    lcclObject.warn('test WARN')
    lcclObject.error('test ERROR')
    done()
  });
});
describe('# Test : Specific Customiztion and Date', function() {
  it('passed', function (done) {
    lcclObjectDate.log('test LOG')
    lcclObjectDate.info('test INFO')
    lcclObjectDate.warn('test WARN')
    lcclObjectDate.error('test ERROR')
    done()
  });
});
