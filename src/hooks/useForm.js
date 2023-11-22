import {useState} from "react";

export default function useForm(submitHandler, initialValues) {  //submitHandler (callback)

    const [values, setValues] = useState(initialValues)

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value  // name="email" from form
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        submitHandler(values)
    }

    return {values, onChange, onSubmit}
}