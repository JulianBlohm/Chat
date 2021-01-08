import React from 'react'
import styled from 'styled-components/macro'

function ChatInput() {
    return <Input placeholder="Nachricht" />
}

const Input = styled.textarea`
resize: none;
outline: none;
width: 80vw;
padding: 20px;
`

export default ChatInput
