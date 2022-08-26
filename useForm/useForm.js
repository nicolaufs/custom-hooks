import { useState } from "react"

export const useForm = (form) => {

    const [formState, setFormState] = useState(form)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({ ...formState, [name]: value })
    }

    const onResetForm = () => {
        setFormState(form)
    }


    return { ...formState, formState, onInputChange, onResetForm }
}
