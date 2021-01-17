import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'

function Chatlist({ chat }) {
    useEffect(() => focusNewMessage(), [chat])

    const messages = useRef([])

    console.log(messages)

    function focusNewMessage() {
        messages.current[messages.current.length - 1].scrollIntoView(false)
    }

    return (
        <MessageArea>
            {chat.map((message, index) => (
                <Message
                    ref={(element) => (messages.current[index] = element)}
                    key={message.id}
                >
                    <MessageText>{message.text}</MessageText>
                </Message>
            ))}
        </MessageArea>
    )
}

const MessageArea = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    grid-template-columns: 1;
    grid-gap: 5px;
    margin: 0 0 60px 0;
    overflow-y: scroll;
    padding: 10px;
`

const Message = styled.li`
    margin: 0;
    border-radius: 5px;
    color: white;
    white-space: pre-line;
    display: inline-block;
`

const MessageText = styled.p`
    margin: 0;
    border-radius: 5px;
    padding: 10px;
    background: #519e1e;
    color: white;
    white-space: pre-line;
    display: inline-block;
`


export default Chatlist
