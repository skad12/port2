import Navbar from './Navbar.js'

const Layout = ({ children }) => {
    return ( 
       <div className="content">
           <Navbar /> 
           { children }
       </div>
     );
}
  
export default Layout;