import { useContext } from "react"
import { TodoContext } from "../../providers"
import style from "./style.module.scss"

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
        <div className={style.containerTotal}>
            <div className={style.containerValue}>
                <h3 className={style.titleValue}>Value total:</h3>

                <span className={style.price}>{total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>
            </div>

            <p className={style.paragraphValue}>The value refers to the balance.</p>
        </div>
    )
}