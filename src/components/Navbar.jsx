import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.module.css'
import styles from './NavBar.module.css'
import logo from './img/sweet-logo.png'

const Navbar = () => {
  return (
    <nav>
       <div><span>Sweetbar</span></div> 
      <ul className={styles.main_links}>
        <li><Link to="/"><img src={logo} alt="logo" /></Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/candy">Candy Time</Link></li>
        <li><Link to="/choco">Chocolate</Link></li>
        <li><Link to="/seasons">Seasons goods</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;















// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.module.css'; 
// import logo from './img/sweet-logo.png';

// const Navbar = () => {
//   return (
//     <nav>
//     <div>
//       <h1 className='text' contentEditable>SweetBar</h1>
//     </div>

//       <ul className='main_links'>
//         <li><Link to="/"><img src={logo} alt="logo" /></Link></li>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/candy">Candy Time</Link></li>
//         <li><Link to="/choco">Chocolate</Link></li>
//         <li><Link to="/seasons">Seasons goods</Link></li>
//         <li><Link to="/reviews">Reviews</Link></li>
//         <li><Link to="/contacts">Contacts</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

