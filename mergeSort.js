/*
* @Author: Yin
* @Date:   2018-12-10 09:51:08
* @Last Modified by:   Yin
* @Last Modified time: 2018-12-10 10:05:45
*/

function mergeSort(arr){//采用自上而下的递归方法
	var len=arr.length;
	if(len<2){
		return arr;
	}
	else{
		var mid=Math.floor(len/2);
		var left=arr.slice(0,mid);
		var right =arr.slice(mid);
		return merge(mergeSort(left),mergeSort(right));
	}
}

function merge(left,right){
	var result=[];
	while(left.length && right.length){
		if(right[0]<left[0]){
			result.push(right.shift());
		}
		else{
			result.push(left.shift());
		}
	}
	while(left.length){
		result.push(left.shift());
	}
	while(right.length){
		result.push(right.shift());
	}
	return result;
}

console.log(mergeSort([1,8,5,6,99,74,51,23,64,85,33,6,4,5]))