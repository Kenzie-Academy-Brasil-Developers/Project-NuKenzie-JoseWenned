import { useContext } from "react"
import { Button } from "../../../fragments/Button"
import { TodoContext } from "../../../providers"

export const CardExpense = () => {

    const { listExpense, removeExpense } = useContext(TodoContext)

    return(
        <>
            {listExpense.map((item) => (
                <li key={item.name}>
                    <h3>{item.name}</h3>
                    <p>{item.value}</p>
                    <span>{item.price}</span>
                    <Button onClick={() => removeExpense(item.name)} type="submit" text="Remove"/>
                </li>
            ))}
        </>
    )
}