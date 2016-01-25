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
        
    },

    /*
        Method: print
        Traverse the list. For each node, append the current node's data to
        a master list of all data, including head and tail
    */
    print: function() {
       
    },

    /*
        Method: insertAtHead
        Insert a new Node at the head of the list.
    */
    
    insertAtHead: function(data) {
       
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
        Traverse the list. If a Node with the passed-in data exists, then return
        true. If not, return false
    */
    exists: function(data) {
        
    },

    /*
        Method: each
        Traverse the list. For each Node, call the function f on that Node.
        Example: f(current);
    */
    each: function(f) {

    },

    /*
        Method: indexOf
        Traverse the list. If a Node with the passed-in data is found, return an
         index (integer) of that Node's location.
    */
    indexOf: function(data) {
  
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
       
    },

    /*
        Method: delete
        Traverse the list, find the node with the corresponding data,
        and remove that node. List must still be fully intact after
        you remove the node!
    */
    delete: function(data) {
    }
}


/* LinkedList initialization */
var LinkedList = new List();
