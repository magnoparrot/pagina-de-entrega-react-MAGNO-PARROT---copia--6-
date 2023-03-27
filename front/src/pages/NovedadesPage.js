import { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';




const NovedadesPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);

      const response = await axios.get('http://localhost:3000/api/novedades');
      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades();
  }, []);


    return(
      <section className="holder">
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
          <h2>Latest News</h2>
        </section>
        <div className="wave" style={{height: '150px', overflow: 'hidden'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: 'rgb(255, 255, 255)'}} /></svg></div>
      </header>
      <div className="titulo-novedades">
        <h2>Latest News</h2>
        </div>
      {loading ? (
        <p>Cargando...</p>
      ) : ( 
        novedades.map(item => <NovedadItem key={item.id}
          title={item.titulo} subtitle={item.subtitulo}
          imagen={item.imagen} body={item.cuerpo} />)

     
        
      )}
       </section>
    );
        }

  export default NovedadesPage;