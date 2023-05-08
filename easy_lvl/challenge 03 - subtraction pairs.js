import {expect} from "chai";

/**
 * Given an array of integers and a target value, determine the number of pairs of array elements that have a difference equal to the target value.
 * For example, given array = [1,2,3,4] and k = 1:
 *     2-1 = k; 3-2 = k; 4-3 = k; so there are 3 pairs that when subtracted produce k = 1, therefore we'd return 3.
 */

function solution(k, array){
   // solution here
}

describe('tests', () => {
   it('1', () => expect(solution(1, [1, 2, 3, 4])).to.equal(3))
   it('2', () => expect(solution(2, [1, 5, 3, 4, 2])).to.equal(3))
   it('3', () => expect(solution(2, [1, 3, 5, 8, 6, 4, 2])).to.equal(5))
   it('4', () => expect(solution(1, [363374326, 364147530, 61825163, 1073065718, 1281246024,
      1399469912, 428047635, 491595254, 879792181, 1069262793])).to.equal(0))
})