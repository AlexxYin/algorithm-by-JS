/*
* @Author: Yin
* @Date:   2018-12-09 20:38:28
* @Last Modified by:   Yin
* @Last Modified time: 2018-12-09 22:05:39
*/
function binSort(arr,count){
	if(arr.length<=1){
		return arr;
	}
	else{
		var min=arr[0],max=arr[0],n=0,result=[];
		for(var i=1;i<arr.length;i++){
			min=min<arr[i]?min:arr[i];
			max=max>arr[i]?max:arr[i];
		}//确定最大最小值
		var delta=(max-min+1)/count;//每个桶的范围

		var buckets=[];//初始化桶
		for(var i=0;i<arr.length;i++){//存储数据到桶
			var index=Math.floor((arr[i]-min)/delta);//桶索引

			if(buckets[index]){//非空桶
				var k=buckets[index].length-1;
				while(k>=0 && buckets[index][k]>arr[i]){
					buckets[index][k+1]=buckets[index][k];
					k--;
				}
				buckets[index][k+1]=arr[i];
			}
			else{//空桶，初始化
				buckets[index]=[];
				buckets[index].push(arr[i]);
			}
		}
		while(n<count){
			result=result.concat(buckets[n]);
			n++;
		}//整合
	}
	return result;
}

console.log(binSort([1,4,522,366,54,2,13,654,78,69,54,12,6,7],3))