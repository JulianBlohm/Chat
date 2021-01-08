import React, { useState } from 'react'
import { IonTextarea, IonItem } from '@ionic/react'

export const TextArea: React.FC = () => {
    const [text, setText] = useState<string>()

    return (
        <>
            <IonItem>
                <IonTextarea
                    value={text}
                    onIonChange={(e) => setText(e.detail.value!)}
                    placeholder="Nachricht"
                ></IonTextarea>
            </IonItem>
        </>
    )
}

export default TextArea