import React from 'react'
import styled from 'styled-components/macro'

const Button = styled.button`
    display: inline-block;
    background: #519e1e;
    border-radius: 50%;
    min-width: 50px;
    min-height: 50px;
`

const SendButton = (props) => <Button {...props} />

export default SendButton
