#!/usr/bin/env node

import { getDeliveries } from './js/getDeliveries.js';

const deliveriesArgv = process.argv[2];
const truckPathArgv = process.argv[3];

const result = getDeliveries(deliveriesArgv, truckPathArgv);

console.log('-------- Delivery Checker -------');
console.log('---------------------------------');
console.log(result);
