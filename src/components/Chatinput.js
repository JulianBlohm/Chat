import React, { useState } from 'react'
import styled from 'styled-components/macro'
import TextArea from '../components/TextArea'
import SendButton from '../components/SendButton'

function Chatinput({chat, setChat}) {
    const [text, setText] = useState([])

    function handleSubmitText(event) {
        event.preventDefault()
        setChat(text)
        setText('')
    }

    return (
        <Chattools>
            <TextArea
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
`

export default Chatinput
