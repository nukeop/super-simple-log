import test from 'ava';
import chalk from 'chalk';
import logSymbols from 'log-symbols';

import log from '../src';

test('tests if correct log symbols are returned', t => {
  t.deepEqual(log.logSymbol('info'), logSymbols['info']);
  t.deepEqual(log.logSymbol('success'), logSymbols['success']);
  t.deepEqual(log.logSymbol('warning'), logSymbols['warning']);
  t.deepEqual(log.logSymbol('error'), logSymbols['error']);
  t.deepEqual(log.logSymbol('debug'), ' ');
});

test('tests if log message is correctly built', t => {
  t.deepEqual(log.formatLogMessage('info', 'blue', '123', 'test'),
	      logSymbols['info'] + ' ' + chalk.blue('INFO') + ' - 123 - test' );
});

test('tests logging', t => {
  log.log('info', 'blue', 'test');
  t.pass();
});

test('tests logging levels', t => {
  log.debug('debug');
  log.info('info');
  log.success('success');
  log.warning('warning');
  log.error('error');
  t.pass();
});

test('test logging multiple arguments', t=> {
  log.info('test', 'another test');
  t.pass();
});
