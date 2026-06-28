import { useCallback, useState } from "react";
import List from './basic'

import { useCallback } from "react";

export default function Operation() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])

    const them = {
        backgroundColor: dark ? '#999' : '#111',
        Color: dark ? '#111' : '#999'
    }

    return(
        <div style={them}>
        <input
            type = "number"
            value={number}
            onChange={e => setNumber(parseInt(e.target.value))}
            />

            <button onClick={() => setDark(prevDark => !prevDark)}>
                click button
            </button>
        <List getItems= {getItems}/>

        </div>
    )
}

    let x = 20;
    console.log(x);

    let x = 30;
console.log(x);

// }
/* in the js we cannot declare the same let variable inside the block with same 
variable name/
instead of that we decleare the same variable outside the block if we needs to use 

// */

const phone = ['apple', 'redmi', 'realme', 'samsung'];
phone.splice(1, 1, 'oneplus');

for (i=0; i<phone.length; i++){
    console.log(phone[i]);
}

let a = 20
let b = 30

let value = (a+b)

console.log(value);

const phone_items = ['redmi', 'xoimi', 'realme', 'iphone']

phone_items.splice(1,1, 'oneplus');

for (i=0; i<phone_items.length; i++) {
}


console.log(phone_items[i]);
