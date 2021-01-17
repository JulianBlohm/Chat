import React, { useState } from 'react'
import styled from 'styled-components/macro'
import TextArea from './TextArea'
import SendButton from './SendButton'
import { ReactComponent as Icon } from '../assets/paper-plane-outline.svg'

function Chatinput({ chat, setChat }) {
    const [text, setText] = useState('')

    const lineBreaks = text.match(/\n/g)
    const numberOfLineBreaks = lineBreaks && lineBreaks.length

    function handleSubmitText(event) {
        event.preventDefault()
        setChat([...chat,{ id: chat.length + 1, text: text.trim() }])
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

            <SendButton onClick={handleSubmitText}>
                <SendIcon />
            </SendButton>
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

const SendIcon = styled(Icon)`
width: 25px;
height: auto;
`

export default Chatinput
