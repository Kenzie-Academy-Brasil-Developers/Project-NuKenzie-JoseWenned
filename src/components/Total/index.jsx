import { useContext } from "react"
import { TodoContext } from "../../providers"

export const Total = () => {

    const { listExpense } = useContext(TodoContext)

    const total = listExpense.reduce((acc, current) => {   

        if(current.value === "Prohibted"){
            return acc + parseFloat(current.price)
        } else if(current.value === "Exit") {
            return acc - parseFloat(current.price)
        }
        
        return acc
    }, 0)
    
    return(
        <>
            <div>
                <h3>Value total</h3>

                <span>{total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>
            </div>

            <p>The value refers to the balance.</p>
        </>
    )
}