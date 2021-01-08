import React, { useState } from 'react'
import { IonTextarea, IonItem, IonItemDivider } from '@ionic/react'

export const TextArea: React.FC = () => {
    const [text, setText] = useState<string>()

    return (
        <>
            <IonItemDivider>Default textarea</IonItemDivider>
            <IonItem>
                <IonTextarea
                    value={text}
                    onIonChange={(e) => setText(e.detail.value!)}
                ></IonTextarea>
            </IonItem>
        </>
    )
}
