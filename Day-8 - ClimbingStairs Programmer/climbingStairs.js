// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// -------------------->Output<--------------------

var climbStairs = function(n) {
    if (n < 4) return n;
    let n1=1,n2=1,n3;
    for (i=2;i<=n;i++){
        n3=n1+n2;
        n1=n2;
        n2=n3;

    }return n3
};

// Explanation:-
// Steps:-
// 1. The tree structure is followed using steps 1 and 2 for each branch.
// 2. The same tree construction is eliminated for time complexity.
// 3. After eliminating, we can approach this using a reverse methodology, such as going from 5 to 0 rather than   0 to 5.
// 4. Possibilities may be added in the opposite manner, and so on, we realise that the series mirrors the Fibonacci sequence, and
// 5. finaly we end up in the solution
