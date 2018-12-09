/*
* @Author: Yin
* @Date:   2018-12-09 22:01:11
* @Last Modified by:   Yin
* @Last Modified time: 2018-12-09 22:32:18
*/

function AdjustHeap(arr,pos,len){
	var swap=arr[pos];//将pos节点的数字保存
	var child = pos*2+1;//计算pos节点左子节点的位置
	while(child<len){//循环直到没有子节点
		if(child+1<len && arr[child]<arr[child+1]){//若pos子节点有右子节点且右子节点较大，用右子节点
			child+=1;
		}
		if(arr[pos]<arr[child]){//若pos节点小于较大子节点，则交换并将pos定位到子节点位置
			arr[pos]=arr[child];
			pos=child;
			child=pos*2+1;
			arr[pos]=swap;//将最初的pos节点存到pos指向的位置
		}
		else{
			break;
		}

	}
}
function heapSort(arr){
	for(var i=arr.length/2-1;i>=0;i--){//从第一个有子节点的节点开始建堆
		AdjustHeap(arr,i,arr.length);
	}
	for(var i=arr.length-1;i>0;i--){//取出堆的最大值后继续构建最大堆
		var temp=arr[i];
		arr[i]=arr[0];
		arr[0]=temp;
		AdjustHeap(arr,0,i);//对未排序的区域继续建堆
	}
	return arr;
}



console.log(heapSort([3, 1, 5, 7, 2, 4, 9, 6, 10, 8,555,6,45,213,8784,211]));