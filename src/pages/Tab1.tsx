import React from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ChatInput from '../components/ChatInput'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>

      <ChatInput/>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
    
    </IonPage>
  );
};

export default Tab1;
