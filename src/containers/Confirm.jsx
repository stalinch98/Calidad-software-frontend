/* eslint-disable no-unused-vars */
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import '../assets/styles/componenets/Confirm.css';
import speechImg from '../assets/img/speech_password.svg';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Confirm = () => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser support speech recognition.</span>;
  }
  {
    /*  <section className='confirm'>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p style={{ color: '#000000' }}>{transcript}</p>
    </section>
    */
  }
  const handleSubmit = () => {
    console.log('submit');
  };
  const handleListening = () => {
    console.log('listening');
    SpeechRecognition.startListening();
  };

  /*console.log(transcript);*/
  const handleStop = () => {
    let regexNumber = /^[0-9]+$/;

    console.log('stop');
    SpeechRecognition.stopListening();
    let count = 1;
    console.log(transcript);
    if (!regexNumber.test(transcript)) {
      Swal.fire({
        title: 'Acceso denegado',
        text: 'No pude entenderte, repitelo',
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      });
    } else if (transcript.length !== 4) {
      Swal.fire({
        title: 'Acceso denegado',
        text: 'Codigo incompleto, repitelo',
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      });
      for (let i = 1; i <= 4; i++) {
        document.getElementById(`${i}`).value = '';
      }
    } else {
      for (let i of transcript) {
        document.getElementById(`${count}`).value = i;
        count++;
      }
    }
  };

  return (
    <>
      <section className="login">
        <figure className="login__picture">
          <img className="login__img" src={speechImg} alt="contact img" />
        </figure>
        <section className="login__form">
          <h2 className="login__title">Voice Authentication Login</h2>
          <div>
            <form>
              <input type="text" disabled id="1" maxLength="1" />
              <input type="text" disabled id="2" maxLength="1" />
              <input type="text" disabled id="3" maxLength="1" />
              <input type="text" disabled id="4" maxLength="1" />
            </form>
          </div>

          <button onClick={handleListening} className="login__cta">
            Start
          </button>
          <button onClick={handleStop} className="login__cta">
            Stop
          </button>
        </section>
      </section>
    </>
  );
};

export default Confirm;
