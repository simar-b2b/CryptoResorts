import React from 'react'
import logo from "../images/logo.png"
import wallet from "../images/wallet.svg"
import mobilewallet from "../images/mobile-wallet.png"
import toggle from "../images/toggle-mobile.png"

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-xl p-0 ">
  <div  className="container px-md-4 py-3 bg-blur-ss">
  <button className="btn d-block d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  <img src={toggle} alt="" />
</button>
    <a className="navbar-brand" href="#"><img src={logo}  className="img-fluid" alt="" /></a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4 ">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">Resorts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">NFT’s</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Creators</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Timeline</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Citizenship</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Opportunities</a>
        </li>
      </ul>
      <a className="border wallet m-0 border-warning  rounded-4 px-3 py-1 h6 text-decoration-none text-white d-flex gap-2" href="#"><img src={wallet} className="" alt="" /><span className=''>Connect <br/> Wallet</span></a>
    </div>


<div className="offcanvas offcanvas-start d-block d-xl-none w-75" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    
    <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <div className="navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4 ">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Resorts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">NFT’s</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Creators</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Timeline</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Citizenship</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Opportunities</a>
        </li>
      </ul>
    </div>
  </div>
</div>
    <a className="navbar-brand d-block d-xl-none" href="#"><img src={mobilewallet}  className="img-fluid" alt="" /></a>
  </div>
</nav>
    </>
  )
}

export default Navbar