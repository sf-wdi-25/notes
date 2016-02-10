# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Drills
 
# Day 1: Trees!

## Graphs

In computer science, graphs are just collections of **vertices** (also known as nodes) and **edges**. Each edge connects two vertices together.  You can think of vertices as cities on a map and think of edges as the roads between them.  Graphs are widely used in computer science and algorithms, but today we'll focus on a particular kind of graph.

## Trees

In computer science, trees are a kind of "directed acyclic graph".

In "directed" graphs, the edges are all like one-way roads. You can only move on an edge (called "traversing" the edge) in one direction. The word "acyclic" describes graphs without any cycles; that is, there's no cycle of edges that will lead you back to a node if you leave it.

Trees have a few additional rules. First, every tree has a unique, special start node called the "root" node. And second, the nodes in trees can only ever have one "parent."

We usually draw trees vertically with the "root" at the top of the tree.

Let's go into the terminology a little more with some diagrams.

## Terminology

Graphs have vertices (aka "nodes") that usually represent data, or the current "state" (configuration) of something.  Edges connect the vertices and usually represent a relationship between data objects, or a transistion from one state to another.  A sequence of edges is called a "path".


<img src="https://cloud.githubusercontent.com/assets/8397980/11751255/47bebfc0-9fed-11e5-9d4b-3b16f25732f5.jpg" width="300px">

Tree data structures adopt language from family trees. If an edge in a tree connects two vertices, the source vertex is called the "parent", and the target vertex is called the "child".  From the perspective of a single node, some other nodes will be on the path between that node and the root. These are the node's "ancestors." Other nodes might be children of the  node, or children of the node's children. These are called the node's "descendants."  Nodes that share the same "parent" are known as "siblings."


Trees start with a unique "root" node at the top of the tree.  The edges in a tree are sometimes referred to as "branches".  Nodes of the tree that do not have any children are called "leaves" because no branches lead away from them. The length of the longest path from the root to a leaf is called the tree's "height".

<img src="https://cloud.githubusercontent.com/assets/8397980/11751262/4ec8d62a-9fed-11e5-876a-49880df45288.jpg" width="300px">

## Trees to Know for Interviews

### Binary Trees

The most common types of trees for interviews are "binary trees," which allow each node to have up to 2 children. We say each node can have a "left child" and a "right child."  The left child can be considered the root of a "left subtree", and the right child can be considered the root of a "right subtree".

### Binary Search Trees

Binary search trees add on an extra restriction to binary trees: each node's left child subtree (if it has one) will  contain only nodes whose values are lower than the original node's value.  In each node's right child subtree (if it has one), all nodes must have a greater value than the original node itself.


<img src="https://cloud.githubusercontent.com/assets/8397980/11751252/4232a814-9fed-11e5-8bcf-2efa30f8d355.jpg" width="300px">


### Balanced Binary Trees

Balanced binary trees are another basic variant of binary trees. A "balanced" tree has a height about as low as it can possibly be while still holding all its nodes.  For binary trees, that means the height is O(log<sub>2</sub>(n)), where n is the number of nodes in the tree.  There are different definitions of exactly how to balance a tree, but you can tell a tree is balanced if all of the leaves are either at the very bottom level of the tree or just one level higher.

### Balanced Binary Search Trees

Balanced binary search trees combine the balanced structure requirement with the node value requirement of binary search trees.  If an interview question asks about a tree, try to clarify whether the tree is balanced and whether it is a binary search tree.


### Tries

Tries, also called prefix trees, aren't usually binary.  They allow each node to have as many children as needed. The special thing about tries is how they store data. The data builds up over the path from the root to each node.  Here's an example:

<img src="https://cloud.githubusercontent.com/assets/8397980/11751248/39165f5a-9fed-11e5-9a9e-04867719515c.jpg" width="300px">

## Challenges

PLEASE DO NOT CODE UNLESS A CHALLENGE SPECIFICALLY INSTRUCTS YOU TO

Assume for the following challenges that you have a `binary_tree` data structure allowing you to:

* access the root node with `.root`.
* given any node, find the left child of that node with `.left_child`
* given any node, find the right child of that node with `.right_child`
* given any node, find the parent of that node with `.parent`

Also assume a `trie` data structure that allows you to:

* find the root with `.root`
* given any node, get a list of the node's children with `.children`
* given any node, find the node's parent with `.parent`


### Challenges - Binary Search Trees

1. Create a binary search tree from the following array: [0,1,2,3,4,5,6].

2. Describe an algorithm to check if a particular number value is inside a binary search tree.  *Hint: start by checking if it's the value of the root.*

3. In a binary search tree, how can you find the minimum element? The maximum?

4. You run a website where users can assign creative names to colors. You store named colors as nodes in a self-balancing binary search tree, where the key of a node is the hex code of its color (for example: `#30af99`, `#c0ffee`). Each node also contains the name assigned to the color, the username of the user who named it, and the date and time when it was named. Users shouldn't be able to change the name of a color.  Pseudocode a `has_key` function to check if a particular hex value is already in the tree.  If the key is in the tree, your function should return `true`. If the key is not in the tree, your function should return `false`. Your function should take the tree and the hex color key as arguments.

**Get as far in this challenge (number 4) as you can in 15 minutes.**


### Actual Interview Questions

1. You're tasked with setting up a quiz that adapts to the user by displaying different questions based on the percent of questions the user has gotten right so far. If the user has above 70% right so far, the next question should be slightly harder. If the user has below 70% right, the next set question should be slightly easier.  Question difficulty is rated on a scale from 1 to 10. Describe how you could use a tree to run this quiz.

1. Your job is to write a program that recognizes common words typed in on a 10-digit phone keypad (see the image below). Assume the user input comes to you as a sequence of numbers types into the phone.  Also assume you get a list of all the words you should include ahead of time. How would you structure your data?  

  ![phone keypad with letters](https://parentsof10.files.wordpress.com/2013/03/phone-keypad-picture-application.png)


# Day 2: Let's make some Trees!

Today is the day you make your own Binary Search Tree in Javascript!  We'll provide you with some rough starter code and you can fill out the methods below.

```javascript

/* Binary Search Tree Constructor */
function BinarySearchTree(){
  this.root = null;
}
/* Node Constructor */
function Node(data){
  this.data = data;
  this.left = null;
  this.right = null;
}

```

Create a push method that will properly insert a new node into your BinarySearchTree

```javascript
BinarySearchTree.prototype.push = function(val){

 /* Enter excellent code here */

}

```


<details>
<summary>BinarySearchTree Push Solution</summary> 
```javascript
BinarySearchTree.prototype.push = function(data){
   var root = this.root;

   if(!root){
      this.root = new Node(data);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.data){
          if(!currentNode.left){
             currentNode.left = data;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }

}
```
</details>


Create a method to return the depth of your BinarySearchTree

```javascript
BinarySearchTree.prototype.depth = function(val){

 /* Enter excellent code here */
 
}

```

Create a method to print out a binarySearchTree in a fancy manner

```javascript
BinarySearchTree.prototype.print = function(val){

 /* Enter excellent code here */

}
```

# Day 3: Tries!

##What is a Trie?
A Trie is a data structure that will store Strings in an extremely efficient manner.  Words are grouped according to shared spelling (apple and app share a-p-p,  beethoven and beech share b-e-e) and we are able to store multiple words using less repeated letters.

The Trie structure resembles a tree, in that there is a `root` (beginning) that branches & branches & branches out to leaves (end.) Each branch or node is a `child` of the node above it.  Appropriately, each node that has a `child` is called a `parent`.  The root node has no parent. Leaf nodes have no children.

![A simple Trie Diagram](http://meandmark.com/blog/wp-content/uploads/2012/07/TrieExampleCropped.png)  

*Above: A simple Trie diagram that stores the following words: ace, aced, aces, acre, acres, act, acted, acting, & acts*

 Storing words in this manner makes searching for strings extremely fast; the worst case scenario for finding the word is the word's length.  Some Tries also 'smoosh' their words together when they only have one `child` node. Image the diagram above, only with a single element with the letters `res` below `c` for the word *acre* or `ing` below `t` for the word *acting*.  For simplicity, we will only work with nodes that contain only single letters.

Notice the node `c`. It has three children.  Node `t` below `c` also has three children.  Others have two. Some have one.  How would you store those children in an orderly manner?  



##Day 3 Pt. 1: Challenge: Let's try a trie!

Let's spend the first day trying to handroll our own Trie data structure.  For a gentle start, we will attempt to create a Trie that will store the words from above: 

```javascript
['ace', 'aces', 'aced', 'acre', 'acres', 'act', 'acted', 'acting', 'acts']
```


**Some deep things to ponder before you code:**
- What would a node object have inside it? Surely it would least have a single letter.  
- How would you store any and all of the children?  
- How would you know when you have found a valid word? (Hint: don't forget that ace is inside aced and act is in acting)

**Please implement the following:**
- A Trie object with the following prototypical methods:
	- add(word)
		- integrate the word into the Trie
	- exists(word)
		- returns whether or not the word exists within the Trie
	- printPrettyTrie() 
		- prints the Trie structure to the console *breadth* first not *depth* first
	- printTrieList()
		- prints all of the words contained within the Trie
- A node object that contains:
	-  the necessary internal data structures to hold all possible children nodes
	-  a single character (a-z only)
	-  an indication whether or not the node is the last letter in a valid word

<!--

### Day 4: Topic
 -->
