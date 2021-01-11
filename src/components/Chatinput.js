import React, { useState } from 'react'
import styled from 'styled-components/macro'
import TextArea from './TextArea'
import SendButton from './SendButton'

function Chatinput({ chat, setChat }) {
    const [text, setText] = useState('')

    const lineBreaks = text.match(/\n/g)
    const numberOfLineBreaks = lineBreaks && lineBreaks.length

    function handleSubmitText(event) {
        event.preventDefault()
        setChat([{ id: chat.length + 1, text: text }, ...chat])
        setText('')
    }

    return (
        <Chattools>
            <TextArea
                rows={numberOfLineBreaks > 3 ? '4' : numberOfLineBreaks + 1}
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Nachricht"
            />
            <SendButton onClick={handleSubmitText} />
        </Chattools>
    )
}

const Chattools = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px;
    background: black;
    position: absolute;
    bottom: 0;
`

export default Chatinput
