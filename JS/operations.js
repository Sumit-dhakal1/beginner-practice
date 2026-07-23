// import { useCallback, useState } from "react";
// import List from './basic'

// import { useCallback } from "react";

// export default function Operation() {
//     const [number, setNumber] = useState(1)
//     const [dark, setDark] = useState(false)

//     const getItems = useCallback(() => {
//         return [number, number + 1, number + 2]
//     }, [number])

//     const them = {
//         backgroundColor: dark ? '#999' : '#111',
//         Color: dark ? '#111' : '#999'
//     }

//     return(
//         <div style={them}>
//         <input
//             type = "number"
//             value={number}
//             onChange={e => setNumber(parseInt(e.target.value))}
//             />

//             <button onClick={() => setDark(prevDark => !prevDark)}>
//                 click button
//             </button>
//         <List getItems= {getItems}/>

//         </div>
//     )
// }

//     let x = 20;
//     console.log(x);

//     let x = 30;
// console.log(x);

// // }
// /* in the js we cannot declare the same let variable inside the block with same 
// variable name/
// instead of that we decleare the same variable outside the block if we needs to use 

// // */

// const phone = ['apple', 'redmi', 'realme', 'samsung'];
// phone.splice(1, 1, 'oneplus');

// for (i=0; i<phone.length; i++){
//     console.log(phone[i]);
// }

// let a = 20
// let b = 30

// let value = (a+b)

// console.log(value);

// // arthematic operators 

// let a = 5
// let b = 2

// console.log("a+b =",a+b);
// console.log("a-b =", a-b);
// console.log("a*b =", a*b);
// console.log("a/b =", a/b);

// console.log("a**b =", a**b);


// // unary operator 

// let a = 20

// a--;

// console.log("a =", a);


// let b= 20

// b++;

// console.log("b=", b);


// let a = 12;

// console.log("++a", ++a); //in the ++a it says first print the value 
// console.log("a++", a++);// in the a++ it says first we print the previous value 
// console.log(a); // after that print the new value or update value 


// //asignment operator 

// let c = 20;

// c-= 4;

// console.log("c =", c);

// let a = 30;
// // we can operate the value through the assignment operator it means like a+= means> a= a+given value   
// a-= 15

// console.log("a =", a)

// let b = 2;

// b**= 4

// console.log("b =", b)

// // comprasion operator 

// let A = 1000000.3430
// let B = 1042252.52353

// A!=B

// console.log(A!=B);

// console.log(A<=B);


// depth comparision operator 

// let a = 40;
// let b = 40;


// console.log( a===b)

// let a = 2020203
// let b = 2984729

// console.log(a!==b)


let sumit = 20
let dipak = 30

sumit!=dipak

console.log(sumit!=dipak) //true

