import React, { useState } from 'react'
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import Chatinput from '../components/Chatinput'
import Chat from '../components/Chat'
import styled from 'styled-components/macro'

function Tab1() {
    const [chat, setChat] = useState([
        { id: 1, text: 'Schreibe etwas um den Chat zu beginnen' },
    ])
    console.log(chat)

    return (
        <IonPageModified>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Chat</IonTitle>
                </IonToolbar>
            </IonHeader>
            <Chat chat={chat}/>
            <Chatinput chat={chat} setChat={setChat} />
        </IonPageModified>
    )
}

const IonPageModified = styled(IonPage)`
justify-content: start;
`

export default Tab1
