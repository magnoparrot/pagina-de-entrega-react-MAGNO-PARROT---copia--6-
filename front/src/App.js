import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";
import IntelPage from "./pages/IntelPage";
import './styles/pages/HomePage.css';

import './styles/pages/ContactoPage.css';

import './styles/layout/Header.css';
import './styles/layout/Footer.css';




function App ( ) {
  return (
  <div className="App">


<BrowserRouter>

<Routes>
<Route path="/" element={<HomePage/>} />
<Route path="nosotros" element={<NosotrosPage/>} />
<Route path="novedades" element={<NovedadesPage/>} />
<Route path="contacto" element={<ContactoPage/>} />
<Route path="intel" element={<IntelPage/>} />
</Routes>

</BrowserRouter>

<Footer/>

  </div>



  );

} 

export default App;
