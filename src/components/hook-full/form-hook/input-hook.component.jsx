import React from 'react'

const InputHookComponent = ({ name, value, type, placeholder, options, onChangeForField }) => {
    return (
        <>
            {
                type === 'select'
                    ?
                    (
                        <select name={name} onChange={onChangeForField}>
                            {
                                options.map(option => {
                                    return <option key={option.key} value={option.key}>{option.value}</option>
                                })
                            }
                        </select>
                    )
                    :
                    (

                        <>
                            <input type={type ? type : 'text'} placeholder={placeholder} name={name} onChange={onChangeForField} value={value} />
                            {(type === 'checkbox' || type === 'radio') ? <label>{placeholder}</label> : ''}
                        </>

                    )

            }
        </>
    )
}

export default InputHookComponent
