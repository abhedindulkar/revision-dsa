
                        Topics Wise

Fraz DSA Sheet.

1. Array
2. Dynamic Programming
3. Strings
4. Maths
5. Greedy
6. DFS
7. Tree
8. Hash Tables
9. Binary Search
10. BFS
11. 2 pointers.
12. Backtracking
13. Stack.
14. Design
15. Graph
16. Bit Manipulation
17. linked list
18. Heap
19. Sliding Window
20. Trie
21. Segment Tree

                        Pattern Wise

1. Sliding Window
2. Two Pointers.
3. Fast and slow pointers.
4. Merge Intervals.
5. Cylic Sort.
6. In place reversal of linkedList.
7. Tree BFS
8. Tree DFS.
9. Two Heaps. // Need to create maxHeap and minHeap
10. Subsets.
11. Modified Binary Search.
12. Top K Elements.
13. K Way Merge
14. Topological Sort.


If an input array is sorted then
  - Binary search
  - Two pointers

If asked for all permutations/subsets then
  - Backtracking // checkout and solve problems

If given a tree then
  - DFS
  - BFS

If given a graph then
  - DFS
  - BFS

If given a linked list then
  - Two pointers

If recursion is banned then
  - Stack

If must solve in-place then
  - Swap corresponding values
  - Store one or more different values in the same pointer

If asked for maximum/minimum subarray/subset/options then
  - Dynamic programming

If asked for top/least K items then
  - Heap

If asked for common strings then
  - Map
  - Trie

if given range 1 -> n 
    use cyclic sort O(n)
    loop one by one and swap with appropriate index and its value index = value - 1;

if overlapping subproblems / optimal substructures
    DP
    memoization (dp)
    tabulation (storing in array)

Else
  - Map/Set for O(1) time & O(n) space
  - Sort input for O(nlogn) time and O(1) space



aaa
a

a
aaa

case 1
both elements are equal.
 - count equal elements in both the strings.
 - compare both counts
    -> if typed count is higher than actual string count then move ahead to next char.
    -> if typed count is lesser then return false

case 2
both pointer element are unequal
 - return false


In place Reversal of LinkedList

1 -> 2 -> 3 -> 4 -> 5 -> null

null <- 1 <- 2 <- 3 <- 4 <- 5

let l = null, m = null, r = null;

let r = head;

if ( m === null || r || null )
    return node;

while ( r !== null )
{
    m.next = l;
    l = m;
    m = r;
    r = r.next;
}

m.next = l;
m = node;

return node;

Implement a queue data structure using two stacks. The queue should have the following operations: enqueue, dequeue, and isEmpty.

Sample Input:
enqueue(1)
enqueue(2)
enqueue(3)
dequeue() -> returns 1
enqueue(4)
dequeue() -> returns 2
isEmpty() -> returns False

Explanation:
The queue stores elements in the order [1, 2, 3]. After dequeuing once, the order becomes [2, 3], and after dequeuing again, the order is [3, 4].

s1 = []
s2 = []

// js

let s1 = [];
let s2 = [];

function enqueue(element) {

    s1.push(element)
}

function dequeue() {
    
    if ( ! s1.length && ! s2.length )
        return 'empty queue';
    
    if ( s2.length > 0 ) {
        
        return s2.pop()
    }
    
    while ( s1.length !== 0 ) {
        
        s2.push(s1.pop())
    }
    
    return s2.pop();
}

function isEmpty() {
    
    if ( ! s1.length && ! s2.length )
        return true;
        
    return false;
}


In a bustling city, a freelance worker has N tasks to complete, but can only work on one task at a time.

Given an array A representing the start times of the tasks and an array B representing the finish times of the tasks.

Return the maximum number of tasks the worker can complete.



Sample Input:
A: [1, 3, 0, 5, 8, 5]
B: [2, 4, 6, 7, 9, 9]

A: [0, 1, 2, 5, 5, 8]
B: [6, 2, 4, 7, 9, 9]

0 -> 6
    1 -> 2
    2 -> 7
    increment  += 2
  
from 4   
check largest end time
5 -> 9
    6 -> 10
    increment += 1
   
from 7 
8 -> 9
    increment + = 1;
    


Sample Output:  4

Explanation:  
The worker can complete the tasks with the following start and finish times: (1, 2), (3, 4), (5, 7), (8, 9).


js Advanced
vue.js project.
React.js project.
Advanced DSA
HLD
LLD
node.js