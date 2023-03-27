
const HomePage = (props) => {
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
          <h2>Home</h2>
        </section>
        <div className="wave" style={{height: '150px', overflow: 'hidden'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: 'rgb(255, 255, 255)'}} /></svg></div>
      </header>
      
      <main>
        <section className="contenedor sobre-nosotros">
          <h2 className="titulo">The BST Products </h2>
          <div className="contenedor-sobre-nosotros">
            <img src="/imagenes/plantaclean.jpg" alt="" className="imagen-about-us" />
            <div className="contenido-textos">
              <h3><span>1</span>What is our Goal</h3>
              <p>bst-prcs goal is to SAVE your valuable time, recommending you the BST products at the BST prices you will find. (certified sellers and high rating products) </p>
              <h3><span>2</span>What is the meaning of the name bst-prcs?</h3>
              <p>The meaning of this name is BEST (bst) PRICES (prcs) because here you will find the best products at the best prices</p>
            </div>
          </div>
        </section>
        <section className="portafolio">
          <div className="contenedor">
            <h2 className="titulo">PC COMPONENTS</h2>
            <div className="galeria-port">
              <div className="imagen-port">
                <img src="/imagenes/intel.jpg" alt="intel" />
                <button onclick="location.href='http://localhost:3001/novedades'">
                  <div className="hover-galeria">
                    <img src="/imagenes/intel-logo-8.png" alt="intel" />
                    <p>Intel Processors (Cpu)</p>
                  </div>
                </button></div>
              <div className="imagen-port">
                <img src="/imagenes/i29yzL5Qg4BGkv5N3xJ65a.jpg" alt="" />
                <button onclick="location.href='/admin/amd'">
                  <div className="hover-galeria">
                    <img src="/imagenes/AMD_Logo.svg.png" alt="amd" />
                    <p>AMD Processors (Cpu)</p>
                  </div>
                </button></div>
              <div className="imagen-port">
                <img src="/imagenes/geforce-rtx-30-series-key-visual-ogimage.jpg" alt="" />
                <button onclick="location.href='/admin/nvidia'">
                  <div className="hover-galeria">
                    <img src="/imagenes/icon-nvidia-rtx-d@2x.png" alt="rtx series" />
                    <p>NVIDIA RTX 30 SERIES (Gpu)</p>
                  </div>
                </button></div>
              <div className="imagen-port">
                <img src="/imagenes/amd radeon.jpg" alt="amd" />
                <button onclick="location.href='/admin/radeon'">
                  <div className="hover-galeria">
                    <img src="/imagenes/radeon2.png" alt="amd " />
                    <p>AMD RX 6000 SERIES (Gpu)</p>
                  </div>
                </button></div>
            </div></div></section>
        <section className="info contenedor">
          <h2 className="title-how">FOLLOW US!</h2>
          <div className="cards">
            <div className="card">
              <img src="/imagenes/asd34.jpg" alt="follow us" />
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
                <img src="/imagenes/747305.png" alt="services" /> 
                <h3>Feel safe</h3>
                <p> All the products recomended in this website are going to be from a certified seller, with high reputacion.
                </p>
              </div>
              <div className="services-ind">
                <img src="/imagenes/clock-png-25770 real.png" alt="services" /> 
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
          export default HomePage;




    
