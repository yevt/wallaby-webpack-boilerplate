/**
 * Created by y.evtushenko on 28.12.15.
 */
var app = require('../src/index');
var chai = require('chai');
var expect = chai.expect;

describe('Index', () => {
    it('Init function sould return true', () => {
        expect(app).eq(false);
    });
});