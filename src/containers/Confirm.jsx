/* eslint-disable no-unused-vars */
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import '../assets/styles/componenets/Confirm.css';
import speechImg from '../assets/img/speech_password.svg';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import bcrypt from 'bcryptjs';

const Confirm = () => {
  const navigate = useNavigate();

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser support speech recognition.</span>;
  }
  let { code } = useParams();
  const hashedCodeData = JSON.parse(code);
  console.log('legooo hdp', hashedCodeData.hashedCode);
  console.log('username confirm', hashedCodeData.userName);

  const handleListening = () => {
    console.log('listening');
    SpeechRecognition.startListening();
  };

  /*console.log(transcript);*/
  const handleStop = async () => {
    let regexNumber = /^[0-9]+$/;
    const compareResult = await bcrypt.compare(
      transcript,
      hashedCodeData.hashedCode.replace(/slash/g, '/')
    );
    console.log('compareResult', compareResult);
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
    } else if (compareResult) {
      for (let i of transcript) {
        document.getElementById(`${count}`).value = i;
        count++;
      }
      navigate(`/welcome/${hashedCodeData.userName}`);
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
            <form className="confirm__form">
              <input className="btn__password" type="text" disabled id="1" maxLength="1" />
              <input className="btn__password" type="text" disabled id="2" maxLength="1" />
              <input className="btn__password" type="text" disabled id="3" maxLength="1" />
              <input className="btn__password" type="text" disabled id="4" maxLength="1" />
            </form>
          </div>
          <div className="confirm__options">
            <button onClick={handleListening} className="login__cta">
              Start
            </button>
            <button onClick={handleStop} className="login__cta">
              Stop
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

Confirm.propTypes = {
  match: PropTypes.string
};

export default Confirm;
