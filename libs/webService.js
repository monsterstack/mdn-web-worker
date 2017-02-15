'use strict';
const Promise = require('promise');

const debug = require('debug')('web-service');

class WebService {
    constructor() {

    }

    web(record) {
        let p = new Promise((resolve, reject) => {
            resolve(record);
        });

        return p;
    }
}

module.exports = WebService;