import { forwardRef } from "react"
import style from "./style.module.scss"

export const Input = forwardRef(({label, ...rest}, ref) => {
    return(

        <div className={style.containerDivInput}>
            <label className={style.titleLabel}>{label}</label>
            <input className={style.input} ref={ref} {...rest}/>
        </div>
        
    )
})