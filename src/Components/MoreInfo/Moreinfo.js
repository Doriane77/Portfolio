import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function MoreInfo() {
  const [formSubmit, setFormSubmit] = useState(false);
  const form = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_jfpc9lj",
        "template_4ss09vg",
        form.current,
        "HiZq65u5h2n7UO5UD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormSubmit(true);
  }

  return (
    <div className="ContactMoreInfo ContactColor">
      <div className="MoreInfo">
        <h1>Thank you !</h1>
        <div className="ContactEmail">doriane.lollia.portfolio@gmail.com</div>
        <p>06 79 91 51 31 </p>
        <p>
          N'hésitez pas à me contacter, je suis à votre disposition pour plus
          d'information
        </p>
      </div>
      <form ref={form} className="ContactForm">
        <div>
          <input type="text" placeholder="Prénom" name="name" />
          <input type="text" placeholder="Nom" name="surname" />
        </div>
        <input type="email" placeholder="Email" name="email" />
        <textarea name="message" cols="30" rows="10" placeholder="Message" />
        {formSubmit ? (
          <p>Merci pour votre message, il sera traité au plus vite !</p>
        ) : (
          <button onClick={handleSubmit}>Envoyer</button>
        )}
      </form>
    </div>
  );
}

export default MoreInfo;
