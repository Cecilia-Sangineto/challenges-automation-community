/* Print a list of number from MIN to MAX, but if the element is divisible by:
*     3, print 'Fizz' instead
*     5, print 'Buzz' instead
*     7, print 'Rezz' instead
*     11, print 'Tozz' instead
*     13, print 'Pazz' instead
* 
* For numbers with multiple divisors, print all words related to those divisors, for example:
*     for 15, print 'FizzBuzz'
*     for 385, which is 5*7*11, print 'BuzzRezzTozz'
*/

import {expect} from "chai";

const map = Object.freeze(new Map([
   [3, 'Fizz'],
   [5, 'Buzz'],
   [7, 'Rezz'],
   [11, 'Tozz'],
   [13, 'Pazz']
]))

function solution(max, min){
   //solution here
}

const FzBz = (n) => {
   //solution here
}

it('superFizzBuzz', () => {
   solution(100)
})

it('single number FizzBuzz', () => {
   // basic
   expect(FzBz(1)).to.be.equal('1')
   expect(FzBz(97)).to.be.equal('97')
   expect(FzBz(3)).to.be.equal('Fizz')
   expect(FzBz(5)).to.be.equal('Buzz')
   expect(FzBz(7)).to.be.equal('Rezz')
   expect(FzBz(11)).to.be.equal('Tozz')
   expect(FzBz(13)).to.be.equal('Pazz')
   
   // mix
   expect(FzBz(3*5)).to.be.equal('FizzBuzz')
   expect(FzBz(3*13)).to.be.equal('FizzPazz')
   expect(FzBz(5*7*11)).to.be.equal('BuzzRezzTozz')
   expect(FzBz(3*5*7*11*13)).to.be.equal('FizzBuzzRezzTozzPazz')
})