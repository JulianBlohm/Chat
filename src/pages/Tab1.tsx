import React from 'react'
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import TextArea from '../components/TextArea'
import styled from 'styled-components/macro'

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Chat</IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <TextArea/>

        </IonPage>
    )
}

export default Tab1
