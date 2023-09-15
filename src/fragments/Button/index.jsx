import { forwardRef } from "react"

export const Button = forwardRef(({text, ...rest}, ref) => {
    return(

        <div>
            <button ref={ref} {...rest}>{text}</button>
        </div>
        
    )
})