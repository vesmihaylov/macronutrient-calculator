import {useState} from "react";
import Layout from "./Layout";

function Calculator() {
    const [macrosState, setMacrosState] = useState({
        kcal: 0,
        carbs: 0,
        fats: 0,
        protein: 0,
        grams: 0
    })

    const handleMacrosStateChange = (e) => {
        setMacrosState((prevMacrosState) => ({
                ...prevMacrosState,
                [e.target.name]: e.target.value
            })
        )
    }

    return <Layout macrosState={macrosState} handleMacrosStateChange={handleMacrosStateChange}/>
}

export default Calculator;
