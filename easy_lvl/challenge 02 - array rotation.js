/**
 * Given an array of integers, write an algorithm that 'rotates' the array K times.
 * A rotation is the movement of each element of the array to the right K times.
 *
 * For example:
 * 		(array = [1,2,3,4,5]; K = 2) => [4,5,1,2,3]
 * 		(array = [3,4,5,6,7]; K = 3) => [5,6,7,3,4]
 * 		(array = [1,2,3]; K = 3)     => [1,2,3]
 */

import {expect} from "chai";

function solution(array, K){
   // solution here
}

describe('tests', () => {
   it('1', () => expect(solution([1, 2, 3, 4, 5], 2)).to.have.ordered.members([4, 5, 1, 2, 3]))
   it('2', () => expect(solution([3, 4, 5, 6, 7], 3)).to.have.ordered.members([5, 6, 7, 3, 4]))
   it('3', () => expect(solution([1, 2, 3], 3)).to.have.ordered.members([1, 2, 3]))
})