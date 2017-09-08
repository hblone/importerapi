'use strict';

/**
 * Module dependencies.
 */
var sourceConfig = require('./sourceConfig'),
  _ = require('lodash'),
  path = require('path'),
  requireGlob = require('require-glob');

  // joi used to validate schema for testing
const Joi = require('joi');

const retsData = {
  name1: 'data1',
  e1: 'some data',
  c1: 'some more data',
  d1: 'and more'
};

// represents our listing model
const myObj = {
  name: '',
  firstValue: '',
  secondValue: '',
  thirdValue: ''
}

var modules = requireGlob(sourceConfig.sources.info);
modules.then(function (modules) {
  // console.log(modules);
  var files = _.reduce(modules, function (result, file, key) {
    var firstKey = _.findKey(file);
    // console.log(firstKey);
    // console.log();
    result.push(file[firstKey].source);
    // console.log(result);
    return result;
  }, []);
  // console.log(files);

  var firstMapping = _.reduce(files[0], function (result, value, key) {
    result[key] = retsData[value];
    return result;
  }, {});
  console.log(firstMapping);
});

// const internals = {};


// const schema = Joi.object().options({ abortEarly: false }).keys({
//     email: Joi.string().email().required().label('User Email'),
//     password: Joi.string().min(8).required(),
//     password_confirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' }, label: 'Password Confirmation' } }).label('This label is not used because language.label takes precedence'),
//     first_name: Joi.string().required(),
//     last_name: Joi.string().required(),
//     company: Joi.string().optional()
// });