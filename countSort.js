function countSort(arr){
	var len=arr.length;
	var max;
	for(var i=1;i<len;i++){
		if(arr[i-1]<arr[i]){
			max=arr[i];
		}
		else{
			max=arr[i-1];
		}
	}

	var bucket=new Array(max+1);
	for(var j=0;j<len;j++){
		if(!bucket[arr[j]]){
			bucket[arr[j]]=0;
		}
		bucket[arr[j]]++;
	}
    var index=0
	for(var m=0;m<bucket.length;m++){
		while(bucket[m]>0){
			arr[index]=m;
			bucket[m]--;
			index++;
		}
	}
	return arr;

}

console.log(countSort([1,5,4,5,6,6,5,48,5,6,3,2,1,4,9,8,7,98]));