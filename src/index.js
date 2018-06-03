const chalk = require('chalk');
const logSymbols = require('log-symbols');
const moment = require('moment');

const Log = {};

Log.timeFormat = 'DD-MM-Y HH:mm:ss';

Log.logSymbol = function(level) {
  return logSymbols[level] || ' ';
};

Log.formatLogMessage = function(debugLevel, color, msg, time) {
  return `${this.logSymbol(debugLevel)} ${chalk[color](debugLevel.toUpperCase())} - ${time} - ${msg}`;
};

Log.log = function(debugLevel, color, msg) {
  let time = moment().format(this.timeFormat);
  console.log(this.formatLogMessage(debugLevel, color, msg, time));
};

Log.debug = function(msg) {
  this.log('debug', 'gray', msg);
};

Log.info = function(msg) {
  this.log('info', 'blue', msg);
};

Log.success = function(msg) {
  this.log('success', 'green', msg);
};

Log.warning = function(msg) {
  this.log('warning', 'yellow', msg);
};

Log.error = function(msg) {
  this.log('error', 'red', msg);
};

module.exports = Log;
