import React from 'react'
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import ChatInput from '../components/ChatInput'
import styled from 'styled-components/macro'

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Chat</IonTitle>
                </IonToolbar>
            </IonHeader>
            <InputWrapper>
                <ChatInput />
            </InputWrapper>

            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    )
}

const InputWrapper = styled.div`

`

export default Tab1
