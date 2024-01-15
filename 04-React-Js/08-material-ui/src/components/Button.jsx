import React from 'react'
import Button from '@mui/material/Button'

const Buttons = (props) => {
    return (
        <Button variant={props.variant}>{props.title}</Button>
    )
}

export default Buttons