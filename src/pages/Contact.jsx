import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      <p>N'hésitez pas à nous contacter pour toute question, demande de collaboration ou simplement pour dire bonjour.</p>
      
      <div className="contact-info">
        <h3>Contact :</h3>
        <ul>
          <li>Adresse e-mail : <a href="mailto:votre@email.com">sarahcraze13@gmail.com</a></li>
          <li>Téléphone : +XX XXX XXX XXX</li>
          <li>Réseaux sociaux : <a href="[https://www.linkedin.com/in/sarah-craze-7b1345281/]">Linkedin</a></li>
        </ul>
      </div>
      
      <div className="message">
        <h3>Laissez-moi un message :</h3>
        <p>Vous pouvez également utiliser le formulaire ci-dessous pour m'envoyer un message. Je vous répondrais dans les plus brefs délais.</p>
        {/* Ajoutez ici le formulaire de contact */}
      </div>
      
      <p>Je suis impatiente d'avoir de vos nouvelles !</p>
    </div>
  );
}

export default Contact;
