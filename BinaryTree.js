/*
* @Author: Yin
* @Date:   2018-12-11 14:22:55
* @Last Modified by:   Yin
* @Last Modified time: 2018-12-11 15:57:56
*/

var tree={
	value:1,
	left:{
		value:2,                                           
		left:{
			value:4
		}
	},
	right:{
		value:3,
		left:{
			value:5,
			left:{
				value:7
			},
		right:{
			value:8
		}
	},
	right:{
		value:6
	}
    }
}

//广度优先遍历
function levelOrderTraversal(node){
	if(!node){
		throw new Error('Empty tree');
	}
	else{
		var que=[];
		que.push(node);
		while(que.length!==0){
			node=que.shift();
			console.log(node.value);
			if(node.left){
				que.push(node.left);
			}
			if(node.right){
				que.push(node.right);
			}
		}
	}
}
/*广度优先遍历是从二叉树的第一层（根结点）开始，自上至下逐层遍历；
在同一层中，按照从左到右的顺序对结点逐一访问。
实现：使用数组模拟队列。首先将根节点归入队列。当队列不为空的时候，
执行循环：取出队列的一个节点，如果该结点的左子树为非空，则将该结点
的左子树入队列；如果该结点的右子树为非空，则将该结点的右子树入队列。*/
//console.log(levelOrderTraversal(tree));



//递归遍历的深度优先遍历（DFS）

//先序遍历-先访问根节点，在先序遍历左子树，再先序遍历右子树
function preOrder(node){
	if(node){
		console.log(node.value);
		preOrder(node.left);
		preOrder(node.right);
	}
}

//console.log(preOrder(tree));// 1 2 4 3 5 7 8 6

//中序遍历-先中序遍历左子树，再根节点，再中序遍历右子树
function inOrder(node){
	if(node){
		inOrder(node.left);
		console.log(node.value);
		inOrder(node.right);
	}
}
//console.log(inOrder(tree)); //4 2 1 7 5 8 3 6

//后序遍历-先后序遍历左子树，再后序遍历右子树，再根节点
function backOrder(node){
	if(node){
		backOrder(node.left);
		backOrder(node.right);
		console.log(node.value);
	}
}
//console.log(backOrder(tree));// 4 2 7 8 5 6 3 1


//非递归深度优先遍历

//先序遍历
function preOrderUnRecur(node){
	if(!node){
		throw new Error('Empty Tree');
	}
	else{
		var stack=[];
		stack.push(node);
		while(stack.length!==0){
			node=stack.pop();
			console.log(node.value);
			if(node.right){
				stack.push(node.right);
			}
			if(node.left){
				stack.push(node.left);
			}
		}
	}
}
//console.log(preOrderUnRecur(tree))

//中序-先把数的左节点推入栈，然后取出，再推右节点。
function inOrderUnRecur(node){
	if(!node){
		throw new Error('Empty Tree');
	}
	else{
		var stack=[];
		while(stack.length!==0|| node){
			if(node){
				stack.push(node);
				node=node.left;
			}
			else{
				node=stack.pop();
				console.log(node.value);
				node=node.right;
			}
		}
	}
}
//console.log(inOrderUnRecur(tree))

//后序-这里使用了一个临时变量记录上次入栈/出栈的节点。
//思路是先把根节点和左树推入栈，然后取出左树，再推入右树，取出，最后取跟节点。
function posOrderUnRecur(node){
	if(!node){
		throw new Error('Empty Tree');
	}
	else{
		var stack=[];
		stack.push(node);
		var tmp=null;
		while(stack.length!==0){
			tmp=stack[stack.length-1];
			if(tmp.left&&node!==tmp.left&&node!==tmp.right){
				stack.push(tmp.left);
			}
			else if(tmp.right&&node!==tmp.right){
				stack.push(tmp.right);
			}
			else{
				console.log(stack.pop().value);
				node=tmp;
			}
		}
	}
}
console.log(posOrderUnRecur(tree))

//后序2
function posOrderUnRecur2(node){
	if(node){
		var s1=[],
		s2=[];
		s1.push(node);
		while(s1.length!==0){
			node=s1.pop();
			s2.push(node);
			if(node.left){
				s1.push(node.left);
			}
			if(node.right){
				s1.push(node.right);
			}
		}
		while(s2.length!==0){
			console.log(s2.pop().value);
		}
	}
}

console.log(posOrderUnRecur2(tree))

//翻转二叉树

function invertTree(node){
	if(node){
		var temp=node.left;
		node.left=node.right;
		node.right=temp;
		invertTree(node.left);
		invertTree(node.right);
	}
	return node;
}
console.log(invertTree(tree));