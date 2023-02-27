// class Stack{
//     constructor(stack){
//         this.stack = stack
//     }

//     pushIntoStack(value){
//         //Complete this function
//         //it takes the value and pushes it into the stack
//         //this function doesnt return anything
//         this.stack.push(value);
//     }

//     popFromStack(){
//         //complete this function 
//         // It returns the last element of the stack 
//         //if no element present in stack , it should return -1
//         if(this.stack.length!=0){
//            return  this.stack.pop();
//         }else{
//             return -1;
//         }
//     }
// }

// // Do not change anything below this line
// function implementStack(arr){
//     const stack1 = new Stack(arr)
//     stack1.pushIntoStack(1)
//      console.log(stack1.popFromStack())
//      console.log(stack1.popFromStack())
//      console.log(stack1.popFromStack())
//      stack1.pushIntoStack(1)
//      console.log(stack1.popFromStack())
//      console.log(stack1.popFromStack())
// }
// let arr = [3,4,5,7,8];
// implementStack(arr);

// let arr = []
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.shift();
// console.log(arr);

// class Queue{
//     constructor(queue){
//         this.queue = queue
//         this.minpos = 0;
//         this.maxpos = queue.length - 1
//     }

//     pushIntoQueue(value){
//         // Complete this function 
//         // Push the value into the queue
//         this.queue.push(value);
//     }

//     popFromQueue(){
//         // Complete this function
//         //return the elements based on FIFO logic
//         //When no elements remain to return , return -1
//         if(this.queue.length==0){
//             return -1;
//         }else{
//             return this.queue.shift();
//         }
//     }
// }

// // DO not touch the functions below this line

// function implementStack(arr){
    
//     const queue1 = new Queue(arr)
//     queue1.pushIntoQueue(1)
//      console.log(queue1.popFromQueue())
//      console.log(queue1.popFromQueue())
//      console.log(queue1.popFromQueue())
//      queue1.pushIntoQueue(1)
//      console.log(queue1.popFromQueue())
//      console.log(queue1.popFromQueue())
// }






