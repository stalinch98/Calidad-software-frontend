import React from 'react';
import greetingsCheems from './../assets/img/cheems.png';
import './../assets/styles/componenets/Welcome.css';
import { useParams } from 'react-router-dom';

const Welcome = () => {
  let { username } = useParams();

  return (
    <>
      <section className="welcome">
        <div className="welcome__container">
          <h1 className="welcome__title">Welcome {username}</h1>
          <figure className="welcome__picture">
            <img className="welcome__image" src={greetingsCheems} alt="Greetings Cheems" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Welcome;
