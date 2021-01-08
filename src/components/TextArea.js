import React from 'react'
import styled from 'styled-components/macro'

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

const TextArea = (props) => <ChatInput {...props} />

export default TextArea
