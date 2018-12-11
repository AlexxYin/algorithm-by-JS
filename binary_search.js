/*
* @Author: Yin
* @Date:   2018-12-11 13:48:21
* @Last Modified by:   Yin
* @Last Modified time: 2018-12-11 15:55:46
*/
function binarySearch(arr,key){
	var low=0,
	    high=arr.length-1;
	while(low<=high){
		var mid=Math.floor((low+high)/2);
		if(key===arr[mid]){
			return mid;
		}
		else if(key<arr[mid]){
			high=mid-1;
		}
		else{
			low=mid+1;
		}
	}
	return -1;
}

console.log(binarySearch([4,5,6,8,7,9,6,3,2,1,4,5,6,99,87,45,63],100))

/*二分搜索(折半查找)算法的基本思想如下：
(1) 选择数组的中间值。 
(2) 如果选中值是待搜索值，那么算法执行完毕（值找到了）。 
(3) 如果待搜索值比选中值要小，则返回步骤(1)并在选中值左边的子数组中寻找。 
(4) 如果待搜索值比选中值要大，则返回步骤(1)并在选种值右边的子数组中寻找。*/

