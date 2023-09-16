import { useContext } from "react"
import { FormRegister } from "../../components/FormRegister"
import { Header } from "../../components/Header"
import { ListExpense } from "../../components/ListExpense"
import { TodoContext } from "../../providers"
import { Total } from "../../components/Total"
import style from "./style.module.scss"

export const HomePage = () => {

    const {listExpense} = useContext(TodoContext)

    return(
        <>
            <Header />

            <div className={style.container}>
                <div className={style.containerOne}>
                    <FormRegister />

                    {listExpense != 0 ? <Total /> : null}
                </div>

                
                <div className={style.containerTwo}>
                    <ListExpense /> 
                </div>
            </div>
        </>
    )
}