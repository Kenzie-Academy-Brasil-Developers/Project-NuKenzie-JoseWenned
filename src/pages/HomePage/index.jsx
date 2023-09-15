import { useContext } from "react"
import { FormRegister } from "../../components/FormRegister"
import { Header } from "../../components/Header"
import { ListExpense } from "../../components/ListExpense"
import { TodoContext } from "../../providers"
import { Total } from "../../components/Total"

export const HomePage = () => {

    const { amount } = useContext(TodoContext)

    return(
        <>
            <Header />

            <FormRegister />

            <Total />

            <ListExpense />
        </>
    )
}