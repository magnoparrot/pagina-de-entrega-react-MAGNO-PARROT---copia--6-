const NosotrosPage = (props) => {
    return(
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>bst-prcs [Get the BST prices]</title>
          <link rel="stylesheet" href="styleAbout US.css" />
          <link rel="shortcut icon" href="./imagenes/asd3.jpg" type="image/x-icon" />
          
          <main>
            <section className="contenedor sobre-nosotros">
              <h2 className="titulo">Frequent questions </h2>
              <div className="contenedor-sobre-nosotros">
                <div className="contenido-textos">
                  <h3><span>1</span>What is our Goal</h3>
                  <p>bst-prcs goal is to SAVE your valuable time, recommending you the BST products at the BST prices you will find. (certified sellers and high rating products) </p>
                  <h3><span>2</span>What is the meaning of the name bst-prcs?</h3>
                  <p>The meaning of this name is BEST (bst) PRICES (prcs) because here you will find the best products at the best prices</p>
                  <h3><span>3</span>Why the page is not perfect?</h3>
                  <p>This website is currently in developing by only 1 person (the owner) so be kind</p>
                  <h3><span>4</span>When was this website created</h3>
                  <p>This Website was created on September 4, 2022</p>
                  <h3><span>5</span>Is it safe to buy on this page?</h3>
                  <p>This page has an SSL certificate that protects it from viruses and malware so feel safe!</p>
                </div>
              </div>
            </section>
            <section className="portafolio">
              <div className="contenedor">
                <h2 className="titulo">Follow US</h2>
                <div className="galeria-port">
                  <div className="imagen-port">
                    <img src="./imagenes/insta2.jpg" alt="" />
                    <button onclick="location.href='https://www.instagram.com/bst_prcs/'">
                      <div className="hover-galeria">
                        <img src="./imagenes/Instagram-Logo-PNG-Free-Download-1.png" alt="" />
                        <p>BST_PRCS_SHOP</p>
                      </div>
                    </button></div>
                  <div className="imagen-port">
                    <img src="./imagenes/twitter-logo-mundocuentas.png" alt="" />
                    <button onclick="location.href='https://twitter.com/BST_PRCS_SHOP'">
                      <div className="hover-galeria">
                        <img src="./imagenes/Twitter-Transparent-PNG.png" alt="" />
                        <p>@BST_PRCS_SHOP</p>
                      </div>
                    </button></div>
                  <div className="imagen-port">
                    <img src="./imagenes/gmail-45-700x393.jpg" alt="" />
                    <button onclick="location.href='https://www.google.com/intl/es-419/gmail/about/'">
                      <div className="hover-galeria">
                        <img src="./imagenes/Email-PNG-Clipart.png" alt="" />
                        <p>business@bst-prcs.com</p>
                      </div>
                    </button></div>
                  <div className="imagen-port">
                    <img src="./imagenes/yt_1200.png" alt="" />
                    <button onclick="location.href='https://www.youtube.com/channel/UCpHXDpYV7d0iZtH55k4CTdg'">
                      <div className="hover-galeria">
                        <img src="./imagenes/YouTube-Play-Button-PNG-Free-Download.png" alt="" />
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
                  <img src="./imagenes/asd34.jpg" alt="" />
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
                    <img src="./imagenes/747305.png" alt="" /> 
                    <h3>Feel safe</h3>
                    <p> All the products recomended in this website are going to be from a certified seller, with high reputacion.
                    </p>
                  </div>
                  <div className="services-ind">
                    <img src="./imagenes/clock-png-25770 real.png" alt="serices" /> 
                    <h3>Save your time</h3>
                    <p>We search the BEST products for you, so you can save time
                    </p>
                  </div>
                  <div className="services-ind">
                    <img src="./imagenes/price-icon-7323.png" alt="services" /> 
                    <h3>The best products, only for you!</h3>
                    <p>Our goal is to find the best quality products at the BEST prices
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          
        </div>
      )
    }
    export default NosotrosPage; 