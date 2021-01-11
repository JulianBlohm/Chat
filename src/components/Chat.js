import React from 'react'
import styled from 'styled-components/macro'

function Chat({chat}) {
    return (
        <MessageArea>
            {chat.map((message) => 
            <Message key={message.id}>
                {message.text}
            </Message>)}
        </MessageArea>
    )
}

const MessageArea = styled.section`
display: flex;
flex-direction: column;
flex-wrap: wrap;
grid-gap: 5px;
margin-bottom: 60px;
overflow-y: scroll;
margin: 10px;
`

const Message = styled.p`
margin: 0;
border-radius: 5px;
padding: 10px;
background: #519e1e;
color: white;
`

export default Chat