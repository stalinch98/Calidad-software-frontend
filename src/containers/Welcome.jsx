import React from 'react';
import greetingsCheems from './../assets/img/cheems.png';
import './../assets/styles/componenets/Welcome.css';

const Welcome = () => {
  return (
    <>
      <section className="welcome">
        <div className="welcome__container">
          <h1 className="welcome__title">Welcome Usuario</h1>
          <figure className="welcome__picture">
            <img className="welcome__image" src={greetingsCheems} alt="Greetings Cheems" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Welcome;
