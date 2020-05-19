import React from 'react';


const Input = ( {value, onChangeHandler }) => {

    return (
        <>
        <input value={value} onChange={onChangeHandler} />
        </>
    )
}

export default Input;