/*
* @Author: Yin
* @Date:   2018-12-07 12:53:12
* @Last Modified by:   Yin
* @Last Modified time: 2018-12-07 13:03:26
*/
function quickSort(arr){
	//如数组长度小于等于1返回
	if(arr.length<=1){
		return arr;
	}
	else{
		var pivotIndex = Math.floor(arr.length/2);
		var pivot = arr.splice(pivotIndex,1);//取数组中间的数为基准
		var left = [];
		var right = [];
		//小于基准的移到左边，大于的移到右边
		for(var i=0;i<arr.length;i++){
			if(arr[i]<pivot){
				left.push(arr[i]);
			}
			else{
				right.push(arr[i]);
			}
		}
		return quickSort(left).concat(pivot,quickSort(right));//递归调用
	}
}

console.log(quickSort([4,55,6,877,9,6,55,4,1,2,3]))