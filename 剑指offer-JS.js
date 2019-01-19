/*二维数组中的查找
题目描述
在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，
判断数组中是否含有该整数。*/
function Find(target, array)
{
    // write code here
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array[i].length;j++){
            if(target===array[i][j]){
                return true;
            }
        }
    }
    return false;
}


/*替换空格
题目描述
请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。*/
function replaceSpace(str)
{
    // write code here
    return str.replace(/\s/g,"%20");
}



/*从头到尾打印列表
题目描述
输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。*/

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var arr=[];
    while(head){
        arr.unshift(head.val);
        head=head.next;
    }
    return arr;
}


