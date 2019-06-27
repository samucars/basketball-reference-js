const { makeLogger } = require('tpz-logger');
const { connect } = require('tpz-baas-db');
const TpzQueue = require('tpz-queue');

const createAccount = require('./src/consumer');

const second = 1000;
const minute = 60 * second;

const logger = makeLogger(process.pid);
logger.info('worker started');

/**
 * database connect
 */
connect(process.env.DB_HOST);

/**
 * queue
 */
TpzQueue.bankaccountCreate
  .consume(createAccount)
  .retry([
    5 * second,
    15 * second,
    5 * minute,
  ]);
