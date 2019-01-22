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


/*用两个栈实现队列
题目描述
用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。*/
var stack1=[];
function push(node)
{
    // write code here
    stack1.push(node);
}
function pop()
{
    // write code here
    return stack1.shift();
}

/*旋转数组的最小数字
题目描述
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，
输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 
NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
*/

function minNumberInRotateArray(arr)
{
    //二分查找
    let len = arr.length;
    if(len == 0)  return 0;
    let low = 0, high = len - 1;
    while(low < high) {
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid] > arr[high]) {
            low = mid + 1;
        } else if(arr[mid] == arr[high]) {
            high = high - 1;
        } else {
            high = mid;
        }
    }
 
    return arr[low];
}


/*斐波那契数列
题目描述
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
n<=39*/

function Fibonacci(n)
{
  if (n == 0) {
    return 0;
  }
  var pre = 0, // 前一个值
    cur = 1; // 当前值
  for (var i = 2; i <= n; i++) { // 更新两个值
    cur += pre;
    pre = cur - pre;
  }
  return cur;
}


/*跳台阶
一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
对于本题,前提只有 一次 1阶或者2阶的跳法。

a.如果两种跳法，1阶或者2阶，那么假定第一次跳的是一阶，那么剩下的是n-1个台阶，跳法是f(n-1);

b.假定第一次跳的是2阶，那么剩下的是n-2个台阶，跳法是f(n-2)

c.由a\b假设可以得出总跳法为: f(n) = f(n-1) + f(n-2) 

d.然后通过实际的情况可以得出：只有一阶的时候 f(1) = 1 ,只有两阶的时候可以有 f(2) = 2

e.可以发现最终得出的是一个斐波那契数列：

        

              | 1, (n=1)

f(n) =     | 2, (n=2)

              | f(n-1)+f(n-2) ,(n>2,n为整数)*/

function jumpFloor(number)
{
    // write code here
    if (number < 2) {
        return 1
    }
    let arr = [1, 1]
    for (let i = 2; i <= number; i ++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[number]
}

/*变态跳台阶
一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
因为n级台阶，第一步有n种跳法：跳1级、跳2级、到跳n级
跳1级，剩下n-1级，则剩下跳法是f(n-1)
跳2级，剩下n-2级，则剩下跳法是f(n-2)
所以f(n)=f(n-1)+f(n-2)+...+f(1)
因为f(n-1)=f(n-2)+f(n-3)+...+f(1)
所以f(n)=2*f(n-1)*/

function jumpFloorII(number)
{
    // write code here
        let i = 1;
    while(-- number) {
        i *= 2;
    }
    return i;
}

/*矩形覆盖
题目描述
我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？*/

function rectCover(number)
{
    // write code here
        if(number == 0){
        return 0;
    }
    var result = [1,1];
    for(var i=2;i<=number;i++){
        result[i] = result[i-1]+result[i-2];
    }
    return result[number];
}

/*二进制中1的个数
题目描述
输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。*/
function NumberOf1(n)
{
    // write code here
    var count = 0,flag=1;
    while(flag){
        if(n&flag)count++;
        flag=flag<<1;
    }
    return count;
}

/*数值的整数次方
题目描述
给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方*/

function Power(base, exponent)
{
    // write code here
    return Math.pow(base,exponent);
}


/*调整数组顺序使奇数位于偶数前面
题目描述
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数
组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。*/
function reOrderArray(array)
{
    // write code here
        var jishu=[];
    var oushu=[];
   array.forEach(function(item,index){
       if(item%2==0){  //说明是偶数
           oushu.push(item);
       }else{    //奇数
           jishu.push(item);
       }
 
    })
   return jishu.concat(oushu);
}

