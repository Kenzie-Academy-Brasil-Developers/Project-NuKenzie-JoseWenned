import { CardExpense } from "./CardExpense"
import { TodoContext } from "../../providers"
import { useContext } from "react"
import style from "./style.module.scss"

export const ListExpense = () => {

    const {} = useContext(TodoContext)

    return(
        
        <section>
            <h2 className={style.titleFinancial}>Financial summary</h2>

            <ul>
                <CardExpense /> 
                <p>You don't have any releases yet.</p>   
            </ul>
        </section>
       
    )
}