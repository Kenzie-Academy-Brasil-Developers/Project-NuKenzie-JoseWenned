import { Input } from "../../fragments/Inputs"
import { useForm } from "react-hook-form"
import { Button } from "../../fragments/Button"
import { useContext } from "react"
import { TodoContext } from "../../providers"
import style from "./style.module.scss"

export const FormRegister = () => {

    const {register, handleSubmit, reset} = useForm()

    const { AddExpense, setValueSelect } = useContext(TodoContext)

    const submit = (formData) => {
        
        AddExpense(formData)
        setValueSelect(formData.value)
        reset()
        
    }

    return(
        <form className={style.containerForm} onSubmit={handleSubmit(submit)}>

            <Input 
                label= "Description" 
                type= "name"
                placeholder= "Digite your description here"
                required
                {...register("name")}
            />
            <p className={style.paragraph}>Ex: buy clothes</p>
            
           
            <Input 
                label= "Value ($)"
                type= "text"
                placeholder= "1"
                required
                {...register("price")}
            />
        
            <label className={style.titleLabelSelect} htmlFor="value">Type Value</label>
            <select className={style.select} {...register("value")} id="value" required>
                <option value="">Select type</option>
                <option value="Prohibted">Prohibted</option>
                <option value="Exit">Exit</option>
            </select>

            <Button className={style.buttonEnter} type="submit" text="Enter expense"/>
        </form>
    )
}