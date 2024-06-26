import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <header className="header fixed-top">
        <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar-expand-lg navbar-light"> 
      <button className="menuIconbtn" >
        <i className="fas fa-bars"></i> 
      </button>
      <div className="collapse sidebarMenu show navbar-collapse" id="navbarNav">
      <div className="menuLogo onlyMob"><img src="/images/footerLogo-demo.png" alt="Hemp Oil" />
      <div className="closeMenu"><img src="/images/cancel.png" className="responsive" alt='cancel btn' /></div>
      </div>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/"> Home </Link> 
          </li>
          <li className="nav-item">
           <Link className="nav-link" to="/product/"> Hemp Oil </Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to="#">Pomi- T</Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to="#">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
                    </div>
    <div className="col"><nav className="navbar-expand-lg navbar-light RightMenu"> 
      <div className="collapse show navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
           <Link className="nav-link" to="#">Login </Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to="#"> Register </Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to="#">Trade</Link>
          </li> 
        </ul>
      </div>
    </nav> 
    <div className="cart"><i className="fas fa-shopping-basket"></i> <span className="quantity">1</span></div>
    </div> 
                </div>
        <div className="logo"><Link to="/"><img src="/images/hempOil-demo.png" alt="Hemp Oil" /></Link> </div>
        </div>
    </header>
    )
}
