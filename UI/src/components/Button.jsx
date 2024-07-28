import React from 'react'
import './Button.css'

const Button = ({ btnText }) => {
    // const spanned = [...btnText].map((ch, index) => {
    //     return <span key={index}>{ch}</span>;
    // });

    return (
        <button className='option-btn'>{btnText}</button>
    )
}

export default Button
