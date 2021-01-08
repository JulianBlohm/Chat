import React from 'react'
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import TextArea from '../components/TextArea'
import SendButton from '../components/SendButton'
import styled from 'styled-components/macro'

function Tab1() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Chat</IonTitle>
                </IonToolbar>
            </IonHeader>

            <Chattools>
                <TextArea />
                <SendButton />
            </Chattools>
        </IonPage>
    )
}

const Chattools = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px;
`

export default Tab1
