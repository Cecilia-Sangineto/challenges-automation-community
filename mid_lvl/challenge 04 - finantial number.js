/**
 * A Financial number is a number that can be obtained by the sum of consecutive natural numbers.
 *
 * For example:
 *     10 is a financial number, because 1+2+3+4=10
 *     21 is a financial number, because 6+7+8=21
 *     8 is NOT a financial number
 *
 * Write an algorithm that takes a number N as a parameter, and returns true when the number N is financial and false otherwise.
 */

import {expect} from "chai";


function solution(N){
   // solution here
}

describe('tests', () => {
   it('3', () => expect(solution(3)).to.be.true)
   it('8', () => expect(solution(8)).to.be.false)
   it('10', () => expect(solution(10)).to.be.true)
   it('130', () => expect(solution(130)).to.be.true)
   it('5000', () => expect(solution(5000)).to.be.true)
   it('large number', () => expect(solution(4294967296)).to.be.false)
})