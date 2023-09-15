import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext({})

export const ThemeContext = ( { children } ) => {

    const [ listExpense, setListExpense ] = useState([])
    const [ valueSelect, setValueSelect ] = useState("")
    const [ amount, setAmount ] = useState(0)

    const AddExpense = (formData) => {
       setListExpense([...listExpense, formData])
       setAmount()
    }

    const removeExpense = (expenseName) => {
        const updateList = listExpense.filter((item) => item.name !== expenseName)
        setListExpense(updateList)
    }

    return(
        <TodoContext.Provider value={{
            
            listExpense, 
            AddExpense,
            removeExpense,
            valueSelect,
            amount,
            setValueSelect,

            }}>

            {children}
        </TodoContext.Provider>
    )
}