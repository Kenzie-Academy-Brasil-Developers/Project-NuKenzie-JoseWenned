import { CardExpense } from "./CardExpense"
import { TodoContext } from "../../providers"
import { useContext } from "react"

export const ListExpense = () => {

    const {} = useContext(TodoContext)

    return(
        
        <section>
            <h2>Financial summary</h2>

            <ul>
                <CardExpense /> 
                <p>You don't have any releases yet.</p>   
            </ul>
        </section>
       
    )
}