const accountId = 129
let accountName = "sumit dhakal";
let accountEmail = "sumit@example.com";
let accountPassword = "password123";
var accountPhone = "1322324242";

function createAccount() {
    console.log("account created successfully");
} 

let passwordLength = 8;

if(passwordLength < 8) {
console.log("password must be at least 8 characters long");
}

else(passwordLength >= 8); {
    console.log("password is valid");
}
/*
don't use var for variable declaration as it can lead to unexpected behavior due to its function scope. Instead, use let or const for block-scoped variables.
*/
console.table({accountId, accountName, accountEmail, accountPassword, accountPhone})

import React, {useEffect, useState } from 'react'

export default  function list({getItems}) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
        console.log('updating Items')
    }, [getItems])

return items.map(item => <div key={item}> {item}

</div>)
}