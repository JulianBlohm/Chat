import React, { useState } from 'react'
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import Chatinput from '../components/Chatinput'

function Tab1() {
    const [chat, setChat] = useState([])
    console.log(chat)

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Chat</IonTitle>
                </IonToolbar>
            </IonHeader>
            <Chatinput chat={chat} setChat={setChat}/>
        </IonPage>
    )
}

export default Tab1
