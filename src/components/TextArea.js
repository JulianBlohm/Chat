import React, { useState } from 'react'
import styled from 'styled-components/macro'

function TextArea() {
    const [text, setText] = useState('')

    return (
        <ChatInput
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Nachricht"
        />
    )
}

const ChatInput = styled.textarea`
    color: white;
    background: #004b6e;
    border-radius: 5px;
    padding: 10px;
    margin-right: 5px;
    display: block;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    border: 0;
    outline: none;
    box-sizing: border-box;
    resize: none;
    appearance: none;
`

export default TextArea
