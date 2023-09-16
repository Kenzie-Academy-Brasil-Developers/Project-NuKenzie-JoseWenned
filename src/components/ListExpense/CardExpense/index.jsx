import { useContext, useEffect, useState } from "react"
import { Button } from "../../../fragments/Button"
import { TodoContext } from "../../../providers"
import style from "./style.module.scss"

export const CardExpense = () => {

    const { listExpense, removeExpense} = useContext(TodoContext)
    
    return(
        <>
            {listExpense.map((item) => (
                <li className={`${style.cardList} ${item.value === 'Prohibted' ? style.borderGreen : (item.value === 'Exit' ? style.borderRed : '')}`} key={item.name}>
                    <div className={style.containerContext}>
                        <div>
                            <h3 className={style.titleCardList}>{item.name}</h3>
                            <p className={style.valueCardList}>{item.value}</p>
                        </div>

                        <div className={style.containerPriceList}>
                            <span className={style.priceCartList}>$: {item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>
                            <Button className={style.buttonCartList} onClick={() => removeExpense(item.name)} type="submit" text="Remove"/>
                        </div>
                    </div>
                </li>
            ))}
        </>
    )
}