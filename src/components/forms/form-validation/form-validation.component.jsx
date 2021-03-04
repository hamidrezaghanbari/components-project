import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidationComponent = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    console.log(watch("name"));


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const customValidation = async (value) => {
        await sleep(5000)
        if (value === '1') return true
        return false
    }
 
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>react form validation with react hook validation</h1>

            <input type="text" ref={register({ required: true })} name="name" />
            {errors.name && <p>the name is have error</p>}

            <input type="text" ref={register({ required: true, minLength: 2 })} name="family" />
            {errors.family && errors.family.type === 'minLength' && <p>the name is have error</p>}

            <select name="job" ref={register({ required: true, validate: customValidation })}>
                <option value="1">ali</option>
                <option value="2">abolfazl</option>
            </select>
            {errors.job && errors.job.type === 'validate' && <p>the selection is have error</p>}

            <button>submit</button>
        </form>
    )
}

export default FormValidationComponent
