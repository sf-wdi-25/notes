/* Linked List */
function List() {
    this.start = null;
    this.end = null;
}

/*  List methods */
List.prototype = {
    /*
        Method: makeNode
        Make a simple Node object
    */
    makeNode : function() {
        return {data: null, next: null};
    },

    /*
        Method: addAtEnd
        Adds a Node to the END of the List
    */
    addAtEnd: function(data) {
        // if linkedList is empty
        if(this.start === null) {
            // start becomes a node
            this.start = this.makeNode();
            // end becomes the start node
            this.end = this.start;

            // else linkedList isn't empty
        } else {
            // create a next property for end and assign it a new Node
            this.end.next = this.makeNode();
            // move the end node to end's next node
            this.end = this.end.next;
        }
        // finally, add the data to the end Node
        this.end.data = data;
    },

    /*
        Method: print
        Traverse the list. For each node, append thte current node's data to
        a master list of all data, including head and tail
    */
    print: function() {
        var listString = 'Head -> ';
        // set our 'current' Node to the starting node
        var current = this.start;
        // while the 'current' Node isn't null
        while(current !== null) {
            // print out the 'current' Node's data
            listString += current.data + ' -> ';
            // assign our 'current' Node's next to be 'current' (increment!)
            current = current.next;
        }
        console.log(listString +'Tail');
    },

    /*
        Method: insertAtHead
        Insert a new Node at the head of the list.
    */
    insertAtHead: function(data) {
        var temp = this.makeNode();
        temp.data = data;
        temp.next = this.start;
        this.start = temp;
    },

    /*
        Method: length
        Traverse the list. Return the amount of Nodes in the list.
    */
   length: function() {
       var current = this.start;
       var i = 0;
       while(current !== null) {
         i++;
         current = current.next;
       }
       return i;
    },


    /*
        Method: exists
        Traverse the list. If a Node with the data passed in exists, then return
        true. If not, return false
    */
    exists: function(data) {
        // start our node at the start of the list
        var node = this.start;
        // loops through list until node === null
        while(node !== null){
            // conditional check for data match
            if(data === node.data){
                return true;
            }
            // increment our node
            node = node.next
        }
        return false;
    },

    /*
        Method: each
        Traverse the list. For each Node, call the function f on that Node.
        Example: f(current);
    */
    each: function(f) {
        var node = this.start;
        while(node !== null) {
            f(node);
            node = node.next;
        }
    },

    /*
        Method: indexOf
        Traverse the list. If a Node with the data passed is found, return an
         index (integer) of that Node's location.
    */
    indexOf: function(data) {
        var node = this.start;
        var i = 0;
        while(node !== null) {
            if (node.data === data) {
                return i;
            } else {
                node = node.next;
                i++;
            }
        }
        return -1;
    },

    /*
        Method: dataFrom
        Traverse the list to the ith position and return the corresponding data.
              */
    dataFrom: function(i) {
        // Enter code here!
    },

    /*
        Method: insertAt
        Traverse the List.  Find the ith Node in the list and insert a new Node
         after it.  You must preserve the list structure!
    */
    insertAt: function(i, data){
        var previousNode;
        var newNode = this.makeNode();
        newNode.data = data;
        var current = this.start;
        var index = 0;
        if(i > this.length() + 1){
            return "index out of range";
        }
        if(i === 0){
            this.insertAtHead(data);
        }
        while(current !== null){
            if(index === i - 1){
                newNode.next = current.next;
                current.next = newNode;
                if(i === this.length() - 1){
                    this.end = newNode;
                }
                return "inserted";
            }
            index++;
            current = current.next;
        }
    },

    /*
        Method: delete
        Traverse the list, find the node with the corresponding data,
        and remove that node. List must still be fully intact after
        you remove the node!
    */
    delete: function(data) {
        // Enter code here!
    }
}


/* LinkedList initialization */
var LinkedList = new List();
/* We're creating our "base" linkedList */
var i = 2;
while(i <= 20) {
    LinkedList.addAtEnd(i);
    i+=2;
}
/* print */
console.log("Before:");
LinkedList.print();
/* Run your functions here */
// Insert functions here to test.
/* Print again to see your results */

// check insertAtHead method
LinkedList.insertAtHead("Breakfast Burrito");

// check length method
var length = LinkedList.length();
console.log("Length: " + length);

// check exists method
var foundData = LinkedList.exists(8);
console.log("Does 8 exist in our list: " + foundData);

// check each method
function accessor(node) {
    console.log(node.data + " has been accessed.")
}
LinkedList.each(accessor);



// check indexOf methodd
var indexOfSix = LinkedList.indexOf(6);
console.log("Index of six: " + indexOfSix);

LinkedList.insertAt(3, 'Bertha');

console.log("After");
LinkedList.print();
