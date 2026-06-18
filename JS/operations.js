import { useCallback, useState } from "react";
import List from './basic'

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


