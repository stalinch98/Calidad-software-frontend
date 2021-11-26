import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import '../assets/styles/componenets/Confirm.css'
const Confirm = () => {
    const { transcript, resetTranscript } = useSpeechRecognition()

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <section className="confirm">
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
        </section>
    )
}

export default Confirm;