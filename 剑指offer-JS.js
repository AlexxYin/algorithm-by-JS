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

/*1.*/function Power(base, exponent)
{
    // write code here
    return Math.pow(base,exponent);
}

/*2.*/function Power(x,n){
    if(n < 0) {
        if(x <= 0) {
            throw new Error("分母不能小于等于0");
        }else {
            if(-n % 2 == 1) {
                return 1/(Power(x,-n-1) * x);
            }else {
                var r = 1/Power(x,-n/2);
            return r * r;
            }
        }
    }
    if(n == 0) {
        return 1;
    }
    else {
        if(n % 2 == 1) {
            return Power(x,n-1) * x;
        }else {
            var r = Power(x,n/2);
            return r * r;
        }
    }
    
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

【/*思路】借用一个辅助的栈，遍历压栈顺序，先讲第一个放入栈中，这里是1，然后判断栈顶元素是不是出栈顺序的第一个元素，这里是4，很显然1≠4，所以我们继续压栈，直到相等以后开始出栈，出栈一个元素，则将出栈顺序向后移动一位，直到不相等，这样循环等压栈顺序遍历完成，如果辅助栈还不为空，说明弹出序列不是该栈的弹出顺序。

举例：

入栈1,2,3,4,5

出栈4,5,3,2,1

首先1入辅助栈，此时栈顶1≠4，继续入栈2

此时栈顶2≠4，继续入栈3

此时栈顶3≠4，继续入栈4

此时栈顶4＝4，出栈4，弹出序列向后一位，此时为5，,辅助栈里面是1,2,3

此时栈顶3≠5，继续入栈5

此时栈顶5=5，出栈5,弹出序列向后一位，此时为3，,辅助栈里面是1,2,3

….

依次执行，最后辅助栈为空。如果不为空说明弹出序列不是该栈的弹出顺序。*/
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

/*树的子结构
题目描述
输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）*/

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



/*顺时针打印矩阵
题目描述
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，
如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.*/

function printMatrix(matrix)
{
    // write code here
    var m=matrix.length;
    var n=matrix[0].length;
    if(m==0||n==0){
        return res
    }
    var res=[];
    var left=0,top=0,right=n-1,bottom=m-1;
    while(left<=right&&top<=bottom){
        for(var i=left;i<=right;i++){
            res.push(matrix[top][i])
        }
        for(var i=top+1;i<=bottom;i++){
            res.push(matrix[i][right])
        }
        if(top!=bottom){
            for(var i=right-1;i>=left;i--){
                res.push(matrix[bottom][i])
            }
        }
        if(left!=right){
            for(var i=bottom-1;i>top;i--){
                res.push(matrix[i][left])
            }
        }
        left++;
        right--;
        top++;
        bottom--;   
    }
    return res;
}


/*包含min函数的栈
题目描述
定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。*/

var stack = [];
function push(node)
{
    stack.push(node);
}
function pop()
{
    return stack.length==0?null:stack.pop();
}
function top()
{
    return stack.length==0?null:stack[0];
}
function min()
{
    return Math.min.apply(this,stack);
}


/*从上往下打印二叉树
题目描述
从上往下打印出二叉树的每个节点，同层节点从左至右打印。*/

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    var arr=[];
    var data=[];
    if(root!=null){
        arr.push(root);
    }
    while(arr.length!=0){
        var node=arr.shift();
        if(node.left!=null){
            arr.push(node.left);
        }
        if(node.right!=null){
            arr.push(node.right);
        }
        data.push(node.val);
    }
    return data;
}



/*二叉搜索树的后序遍历序列
题目描述
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。*/

function VerifySquenceOfBST(sequence) {
    if(!sequence.length) {
        return false;
    }
    return adjustSquence(sequence,0,sequence.length-1);
 
}
 
function adjustSquence(sequence,start,end) {
    if(start >= end) {
        return true;
    }
    var i = start;
    while(i < end && sequence[i] < sequence[end]) {
        i++;
    }
    for(var j = i; j < end; j++){
        if(sequence[j] < sequence[end]) {
            return false;
        }
    }
    return adjustSquence(sequence,start,i-1) && adjustSquence(sequence,i,end-1)
}


/*二叉树中和为某一值的路径
题目描述
输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)*/

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
//举例让抽象具体化
//前序遍历二叉树，每次更新当前路径的和curtSum；
//判断当前结点是否是叶子结点，以及curtSum是否等于expectNumber。如果是，把当前路径保存在res结果中；
//若不符合条件，则弹出此结点。
function FindPath(root, expectNumber) {
    var result = [];
    if (root === null) {
        return [];
    }
    dfsFind(root, expectNumber, [], 0, result);
    return result;
}
function dfsFind(root, expectNumber, path, currentSum, result) {
    currentSum += root.val;
    path.push(root.val);
  
    if (currentSum == expectNumber && root.left == null && root.right == null) {
        result.push(path.slice(0));
    }
    if (root.left != null) {
        dfsFind(root.left, expectNumber, path, currentSum, result);
    }
  
    if (root.right != null) {
        dfsFind(root.right, expectNumber, path, currentSum, result);
    }
  
    path.pop();
}


/*二叉搜索树与双向链表
题目描述
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。*/

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    // write code here
    if(!pRootOfTree)
        return null;
    var stack = [];
    var p = pRootOfTree;
    var pre;
    var isFirst = true;
    while (p!=null || stack.length>0){
        while (p){
            stack.push(p);
            p = p.left;
        }
        p = stack.pop();
        if(isFirst){
            root = p;
            pre = root;
            isFirst = false;
        }else{
            pre.right = p;
            p.left = pre;
            pre = p;
        }
        p = p.right;
    }
    return root;
}

/*复杂链表的复制
题目描述
输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）*/

/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    // write code here
    if (!pHead) {
        return null;
    }
    var newHead = new RandomListNode(pHead.label);
    newHead.random = pHead.random;
    newHead.next = Clone(pHead.next);
    return newHead;
}

/*字符串的排列
题目描述
输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
输入描述:
输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。*/

function Permutation(str)
{
    // write code here
    var strArr = str.split("").sort();  //字母先进行排序
    var result = [];
    for(var i = 0; i < strArr.length; i++){
        //当相邻元素相同时，则跳过此次循环
        if((i > 0) && (strArr[i] == strArr[i - 1])) continue;
        //截取前面部分
        var front  = strArr.slice(0, i);
        //截取后面部分
        var end = strArr.slice(i + 1);
        excuteFind(result, strArr[i], front.concat(end));
    }
    return result;
}
  
function excuteFind(result, mid, strArr){
    if(strArr.length == 0) {
        result.push(mid);
    }else{
        for(var i = 0; i < strArr.length; i++){
            if((i > 0) && (strArr[i] == strArr[i - 1])) continue;
            var front = strArr.slice(0, i);
            var end = strArr.slice(i + 1);
            excuteFind(result, mid + strArr[i], front.concat(end));
        }
    }
}


/*求1+2+3+...+n
题目描述
求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。*/

function Sum_Solution(n)
{
    // write code here
    var res = n;
    (n>0)&&(res += Sum_Solution(n-1));
    return res;
}


/*不用加减乘除做加法
题目描述
写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。*/

function Add(num1, num2)
{
    // write code here
  let tmp = num1;
  while (num2) {
    tmp = num1 ^ num2;
    num2 = (num2 & num1) << 1;
    num1 = tmp;
  }
  return num1;
}