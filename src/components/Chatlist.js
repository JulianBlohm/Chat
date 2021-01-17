import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'

function Chatlist({chat}) {

    useEffect(() => focusNewMessage(),[chat])

    const messages = useRef([])

    console.log(messages)

    function focusNewMessage() {
        messages.current[messages.current.length - 1].scrollIntoView(false)
    }
    
    return (
        <MessageArea>
            {chat.map((message, index) => 
            <Message ref={(element) => messages.current[index] = element} key={message.id}>
                {message.text}
            </Message>)}
        </MessageArea>
    )
}

const MessageArea = styled.section`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
grid-gap: 5px;
margin-bottom: 60px;
overflow-y: scroll;
padding: 10px;
`

const Message = styled.p`
margin: 0;
border-radius: 5px;
padding: 10px;
background: #519e1e;
color: white;
white-space: pre-wrap;
`

export default Chatlist