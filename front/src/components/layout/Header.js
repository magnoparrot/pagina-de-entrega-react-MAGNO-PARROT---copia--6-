const Header = (props) => {
return(
<header className="encabezado">
                   
                   <section className="text-header">
                     <h1>bst-prcs</h1>
                     <h2>Get the BST prcs</h2>
                   </section>
                   <div className="wave" style={{height: '150px', overflow: 'hidden'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '2500px'}}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: 'rgb(255, 255, 255)'}} /></svg></div>
                 </header>
)
}

export default Header;