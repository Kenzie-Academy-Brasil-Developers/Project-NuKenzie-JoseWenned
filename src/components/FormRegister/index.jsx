import { Input } from "../../fragments/Inputs"
import { useForm } from "react-hook-form"
import { Button } from "../../fragments/Button"
import { useContext } from "react"
import { TodoContext } from "../../providers"

export const FormRegister = () => {

    const {register, handleSubmit, reset} = useForm()

    const { AddExpense, setValueSelect } = useContext(TodoContext)

    const submit = (formData) => {
        console.log(formData)
        AddExpense(formData)
        setValueSelect(formData.value)
        reset()
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input 
                label= "Description" 
                type= "name"
                placeholder= "Digite your description here"
                required
                {...register("name")}
            />
 
            <Input 
                label= "Value ($)"
                type= "number"
                placeholder= "1"
                required
                {...register("price")}
            />

            <select {...register("value")} required>
                <option value="">Select type</option>
                <option value="Prohibted">Prohibted</option>
                <option value="Exit">Exit</option>
            </select>

            <Button type="submit" text="Enter expense"/>
        </form>
    )
}