/*
* @Author: Yin
* @Date:   2018-12-09 20:15:31
* @Last Modified by:   Yin
* @Last Modified time: 2018-12-09 20:35:34
*/
function bubbleSort(arr){
	var num=0;
	if(arr.length<=1){
		return arr;
	}
	else{
		for(var i=0;i<arr.length-1;i++){ //第一个i作用为循环次数
			for(var j=0;j<arr.length-i-1;j++){//第二个j作用是比较两个数大小
				if(arr[j+1]<arr[j]){
					num=arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=num;//比较数组中随机的两个数字的大小，如果第一个数比第二个数大，则交换顺序，
					               //存放在中间变量iNum中，并把第二个小的数放前面，如此规律循环下去。
				}
			}
		}
		return arr;
	}
}
console.log(bubbleSort([1]));
