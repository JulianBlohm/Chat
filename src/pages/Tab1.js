import React from 'react'
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import TextArea from '../components/TextArea'
import styled from 'styled-components/macro'


function Tab1() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Chat</IonTitle>
                </IonToolbar>
            </IonHeader>

            <Chatarea>
                <TextArea />
            </Chatarea>
        </IonPage>
    )
}

const Chatarea = styled.div`
width: 100%;
padding: 20px;
`

export default Tab1
