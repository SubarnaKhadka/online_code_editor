import { useEffect, useState } from "react";
const PRFX = "online-editor-"

const useLocalStorage = (key, initVal) => {
    const pkey = PRFX + key;
    const [val, setVal] = useState(() => {
        const jsonValue = localStorage.getItem(pkey)
        if (jsonValue) {
            return JSON.parse(jsonValue)
        }
        if (typeof initialValue === "function") {
            return initVal()
        } else {
            return initVal;
        }
    })

    useEffect(() => {
        localStorage.setItem(pkey, JSON.stringify(val))
    }, [pkey, val])

    return [val, setVal];
}
export default useLocalStorage;