import { useState } from 'react';
import axios from 'axios';



const ContactoPage = (props) => {

const intialForm = {
  nombre: '', 
  email: '',
  telefono: '',
  mensaje: ''
}

const [sending, setSending] = useState(false);
const [msg, setMsg] = useState('');
const [formData, setFormData] = useState(intialForm);

const handleChange = e => {
  const { name, value } = e.target;
  setFormData(oldData => ({
    ...oldData,
    [name]: value
  }));
}

const handleSubmit = async e => {
  e.preventDefault();
  setMsg('');
  setSending(true)
  const response = await
  axios.post('http://localhost:3000/api/contacto', formData);
  setSending(false);
  setMsg(response.data.message);
  if (response.data.error === false) {
    setFormData(intialForm)
  }
}

  return(
    
      <div>
       <title>{'{'}{'{'}title{'}'}{'}'}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>bst-prcs [Get the BST prices]</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <link rel="stylesheet" href="/stylesheets/style.css" />
      <link rel="shortcut icon" href="/imagenes/asd3.jpg" type="image/x-icon" />
      <header className="encabezado">
        <nav>
        <a href="http://localhost:3000/admin/login">Home</a> 
          <a href="http://localhost:3000/admin/aboutUs">About US</a>
          <a href="http://localhost:3000/admin/services">Services</a>
          <a href="http://localhost:3001/contacto">Contact US</a>
          <a href="http://localhost:3001/novedades">Latest News</a>
        </nav>
        <section className="text-header">
          <h1>bst-prcs</h1>
          <h2>Contact Page</h2>
        </section>
        <div className="wave" style={{height: '150px', overflow: 'hidden'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: 'rgb(255, 255, 255)'}} /></svg></div>
      </header>
        <main class ="holder-contacto">
          <h2>Contact Us</h2>
          <form class="formulario" action="/contacto" method="post" onSubmit={handleSubmit}>
            <p>
              <label for="nombre">Name</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            </p>
            <p>
              <label for="email">Email</label>
              <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </p>
            <p>
              <label for="telefono">Phone number</label>
              <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
            </p>
            <p>
            <label for="mensaje">Message</label>
              <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
            </p>
            <p class="acciones"><input type="submit" value="Send" /></p>
            {sending ? <p>Sending...</p> :null}
            {msg ? <p>{msg}</p> :null}

          </form>
          <section className="portafolio">
            <div className="contenedor">
              <h2 className="titulo">Social medias</h2>
              <div className="galeria-port">
                <div className="imagen-port">
                  <img src="/imagenes/insta2.jpg" alt="" />
                  <button onclick="location.href='https://www.instagram.com/bst_prcs/'">
                    <div className="hover-galeria">
                      <img src="/imagenes/Instagram-Logo-PNG-Free-Download-1.png" alt="" />
                      <p>BST_PRCS_SHOP</p>
                    </div>
                  </button></div>
                <div className="imagen-port">
                  <img src="/imagenes/twitter-logo-mundocuentas.png" alt="" />
                  <button onclick="location.href='https://twitter.com/BST_PRCS_SHOP'">
                    <div className="hover-galeria">
                      <img src="/imagenes/Twitter-Transparent-PNG.png" alt="" />
                      <p>@BST_PRCS_SHOP</p>
                    </div>
                  </button></div>
                <div className="imagen-port">
                  <img src="/imagenes/gmail-45-700x393.jpg" alt="" />
                  <button onclick="location.href='https://www.google.com/intl/es-419/gmail/about/'">
                    <div className="hover-galeria">
                      <img src="/imagenes/Email-PNG-Clipart.png" alt="" />
                      <p>business@bst-prcs.com</p>
                    </div>
                  </button></div>
                <div className="imagen-port">
                  <img src="/imagenes/yt_1200.png" alt="" />
                  <button onclick="location.href='https://www.youtube.com/channel/UCpHXDpYV7d0iZtH55k4CTdg'">
                    <div className="hover-galeria">
                      <img src="/imagenes/YouTube-Play-Button-PNG-Free-Download.png" alt="" />
                      <p>bst-prcs / Official</p>
                    </div>
                  </button></div>
              </div>
            </div>
          </section>
          <section className="info contenedor">
            <h2 className="title-how">FOLLOW US!</h2>
            <div className="cards">
              <div className="card">
                <img src="/imagenes/asd34.jpg" alt="" />
                <div className="contenido-text-card">
                  <p>follow our social medias to see the BST daily discounts</p>
                </div>
              </div>
            </div>
          </section>
          <section className="about-services">
            <div className="contenedor">
              <h2 className="title-services">Our Services</h2>
              <div className="services-cont">
                <div className="services-ind">
                  <img src="/imagenes/747305.png" alt="" /> 
                  <h3>Feel safe</h3>
                  <p> All the products recomended in this website are going to be from a certified seller, with high reputacion.
                  </p>
                </div>
                <div className="services-ind">
                  <img src="/imagenes/clock-png-25770 real.png" alt="serices" /> 
                  <h3>Save your time</h3>
                  <p>We search the BEST products for you, so you can save time
                  </p>
                </div>
                <div className="services-ind">
                  <img src="/imagenes/price-icon-7323.png" alt="services" /> 
                  <h3>The best products, only for you!</h3>
                  <p>Our goal is to find the best quality products at the BEST prices
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
      </div>
    );
  }
;

export default ContactoPage;