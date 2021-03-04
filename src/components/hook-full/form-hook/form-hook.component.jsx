import React, { useState } from 'react'
import InputHookComponent from './input-hook.component'

const FormHookComponent = (initialValues = {}) => {
    const [inputs, setInputs] = useState(initialValues)
    const onChangeForField = ({ target }) => setInputs(prevInputs => ({ ...prevInputs, [target.name]: (target.type === 'radio' || target.type === 'checkbox') ? target.checked : target.value }))
    const options = [{ key: '1', value: 'barber' }, { key: '2', value: 'engineer' }]

    return (
        <form autoComplete="false">
            <p>form to getting value from user</p>

            <InputHookComponent placeholder="name" name="name" value={inputs.name} onChangeForField={onChangeForField} />
            <InputHookComponent placeholder="email" name="email" value={inputs.email} onChangeForField={onChangeForField} />
            <InputHookComponent placeholder="password" name="password" value={inputs.password} onChangeForField={onChangeForField} />
            <InputHookComponent placeholder="is authenticated" type="checkbox" name="isAuthenticated" value={inputs.isAuthenticated} onChangeForField={onChangeForField} />
            <InputHookComponent placeholder="are you male" type="radio" name="isMale" value={inputs.isMale} onChangeForField={onChangeForField} />
            <InputHookComponent placeholder="selections" type="select" options={options} name="job" value={inputs.job} onChangeForField={onChangeForField} />

            <ul>
                {
                    Object.keys(inputs).map((key, index) => {
                        return <li key={index}>{key} : {`${inputs[key]}`}</li>
                    })
                }
            </ul>
        </form>
    )
}

export default FormHookComponent
