import { CardExpense } from "./CardExpense"
import { TodoContext } from "../../providers"
import { useContext } from "react"
import style from "./style.module.scss"

export const ListExpense = () => {

    const { listExpense } = useContext(TodoContext)

    return(
        
        <section className={style.containerSection}>
            <div className={style.containerTitleFinancial}>
                <h2 className={style.titleFinancial}>Financial summary</h2>

                <ul>
                    <CardExpense /> 
                    {listExpense == 0 ? <p className={style.paragraphListExpense}>You don't have any releases yet.</p> : null}   
                </ul>
            </div>
           
        </section>
       
    )
}