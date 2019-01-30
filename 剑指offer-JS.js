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


/*链表中倒数第k个节点
题目描述
输入一个链表，输出该链表中倒数第k个结点。*/

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
        var arr = [];
    while(head!=null){
        arr.push(head);
        head = head.next;
    }
    return arr[arr.length-k];
}

/*反转链表
题目描述
输入一个链表，反转链表后，输出新链表的表头。*/

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
        var node=pHead, arr=[];
    while(node!=null){
        arr.push(node.val);
        node=node.next;
    }
    node = pHead;
    while(node!=null){
        node.val = arr.pop();
        node = node.next;
    }
    return pHead;
}


/*合并两个排序的链表
题目描述
输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。*/

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
        let list = {}
    if(pHead1 === null){
        return pHead2;
    } else if (pHead2 === null) {
        return pHead1;
    }
    if(pHead1 > pHead2){
        list = pHead2;
        list.next = Merge(pHead2.next, pHead1);
    } else {
        list = pHead1;
        list.next = Merge(pHead2, pHead1.next)
    }
    return list;
}

/*最小的K的个数
题目描述
输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。*/

function GetLeastNumbers_Solution(input, k)
{
    // write code here
        var result = input.sort(function(a,b){
        return a-b;
    });
    return result.length>=k?result.slice(0,k):[];
}

/*把数组排成最小的数
题目描述
输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。*/

function PrintMinNumber(numbers)
{
    // write code here
    let minNum = numbers.sort(function(a,b){
    return [a,b].join("") - [b,a].join("")
    });
    return minNum.join("");

}

/*栈的压入，弹出序列
题目描述
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。
例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
（注意：这两个序列的长度是相等的）*/

function IsPopOrder(pushV, popV)
{
    // write code here
      var stack = [];
  var idx = 0;
  for (var i = 0; i < pushV.length; i++) {
    stack.push(pushV[i]);
    while (stack.length && stack[stack.length - 1] == popV[idx]) {
      stack.pop();
      idx++;
    }
  }
  return stack.length == 0;
}


/*数组中出现次数超过一半的数字
题目描述
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，
超过数组长度的一半，因此输出2。如果不存在则输出0。*/

function MoreThanHalfNum_Solution(numbers)
{
    // write code here
        var arr = [],
        len = numbers.length,
        a;
    for(var i = 0; i < len; i++){
        a = numbers[i];
        if(arr[a]){
            arr[a]++;
        }else{
            arr[a] = 1;
        }
    }
     
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > len/2){
            return i;
        }
    }
    return 0;
}


/*丑数
题目描述
把只包含质因子2、3和5的数称作丑数（Ugly Number）。
例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。*/

function GetUglyNumber_Solution(index)
{
    // write code here
        if(index <= 0) return 0;
    var count2 = 0,
        count3 = 0,
        count5 = 0;
    var uglyNum = [1];
    for(var i=1 ;i<index ;i++){
        uglyNum[i] = Math.min(uglyNum[count2]*2,uglyNum[count3]*3,uglyNum[count5]*5);
        if(uglyNum[i] == uglyNum[count2]*2) count2++;
        if(uglyNum[i] == uglyNum[count3]*3) count3++;
        if(uglyNum[i] == uglyNum[count5]*5) count5++;
    }
    return uglyNum[index-1];
}


/*第一个只出现一次的字符
题目描述
在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.*/

function FirstNotRepeatingChar(str)
{
    // write code here
        for(var i=0;i<str.length;i++){
        if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
            return i;
        }
    }
    return -1;
}

/*数字在排序数组中出现的次数
题目描述
统计一个数字在排序数组中出现的次数。*/
function GetNumberOfK(data, k)
{
    // write code here
       var count =0;
    for(var i =0 ;i<data.length;i++){
        if(data[i]==k){
            count++;
        }
    }
    return count;
}

/*数组中只出现一次的数字
题目描述
一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。请写程序找出这两个只出现一次的数字。*/
function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
        var arr = [];
    for(var i = 0; i < array.length; i++) {
        if(array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
            arr.push(array[i]);
        }
    }
    return arr;
}



/*和为S的两个数字
题目描述
输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
输出描述:
对应每个测试案例，输出两个数，小的先输出。*/

function FindNumbersWithSum(array, sum)
{
    // write code here      
    var idx,
        result = [],
        min;
      for (var i = 0; i<array.length-1&&array[i]<sum/2; i++) {
        idx = array.indexOf(sum - array[i], i + 1);
        if (idx != -1) {
            return [array[i], array[idx]];
        }
      }
      return result;
}

/*左旋转字符串
题目描述
汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，
请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！*/

function LeftRotateString(str, n)
{
    // write code here
        if(str==null||str.length==0){
        return "";
    }
    n=n%str.length;
    return str.slice(n)+str.slice(0,n);
}

/*正则表达式匹配
题目描述
请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 
在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配*/

//s, pattern都是字符串
function match(s, pattern)
{
    // write code here
    var reg=new RegExp("^" + pattern + "$");
    return reg.test(s);
}

/*重建二叉树
题目描述
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。*/

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    var result =null;
    if(pre.length>1){
        var root = pre[0];
        var vinRootIndex = vin.indexOf(root);
        var vinLeft = vin.slice(0,vinRootIndex);
        var vinRight = vin.slice(vinRootIndex+1,vin.length);
        pre.shift();
        var preLeft = pre.slice(0,vinLeft.length);
        var preRight = pre.slice(vinLeft.length,pre.length);
        result={
            val:root,
            left:reConstructBinaryTree(preLeft,vinLeft),
            right:reConstructBinaryTree(preRight,vinRight)
        }
       
    }else if(pre.length ===1){
        result= {
            val :pre[0],
            left:null,
            right:null
        }
    }
    return result;
}

树的子结构
题目描述
输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if (!pRoot1 || !pRoot2) {
    return false;
  }
  return isSubtree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
}
function isSubtree(root1, root2) {
  if (!root2) {
    return true;
  }
  if (!root1) {
    return false;
  }
  if (root1.val == root2.val) {
    return isSubtree(root1.left, root2.left) &&
      isSubtree(root1.right, root2.right);
  } else {
    return false;
  }
}

/*二叉树的镜像
题目描述
操作给定的二叉树，将其变换为源二叉树的镜像。
输入描述:
二叉树的镜像定义：源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
    	
*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    if(root === null) {
        return;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);
}