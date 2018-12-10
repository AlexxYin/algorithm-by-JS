/*
* @Author: Yin
* @Date:   2018-12-10 10:07:18
* @Last Modified by:   Yin
* @Last Modified time: 2018-12-10 10:30:06
*/

function insert(arr){
	var len=arr.length;
	if(len<2){
		return arr;
	}
	else{
		for(var i=1;i<len;i++){
			var temp=arr[i];
			var j=i-1;//默认已排好的元素
			while(temp<arr[j]&&j>=0){ //在已排序好的队列中从后向前扫描
				arr[j+1]=arr[j]; //已排序的元素大于新元素，将该元素移到一下个位置
				j--;
		        }
		        arr[j+1]=temp;//插入
	        }
	return arr;
        }
}

console.log(insert([1,47,56,89,44,12,36,54,8,4,1,2,3,6,9,8]));

/*1）从第一个元素开始，该元素可以被认为已经被排序
2）取出下一个元素，在已经排好序的序列中从后往前扫描
3）直到找到小于或者等于该元素的位置
4）将该位置后面的所有已排序的元素从后往前依次移一位
5)将该元素插入到该位置
6)重复步骤2~5*/