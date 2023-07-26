import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div> <footer class="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 px-2 flecx flex-column col-md-3">
         <div>   <h2 className='d-flex brand' href=""><div className="logo"> </div>Hoo<span className="bank">Bank</span></h2>
<p className='text-white  '>A new way to make the payments easy, reliable and secure.</p>
          </div>
                  </div>
                  <div className=" col-sm-6 col-6 col-md-3 addpad"><h6>Useful Links</h6>
          <ul className="footer-links">
            <li><a href="">Content</a></li>
            <li><a href="">How it works</a></li>
            <li><a href="">Create</a></li>
            <li><a href="">Explore</a></li>
            <li><a href="">Terms & Services</a></li>
            </ul>
          </div>


        <div className="col-sm-6 col-6 col-md-3">
          <h6>Community</h6>
          <ul className="footer-links">
            <li><a href="">Help Center</a></li>
            <li><a href="">Partners</a></li>
            <li><a href="">Suggestions</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Newsletters</a></li>
           </ul>
        </div>

        
      </div>
      <hr className='brand-color'/>
    </div>
    
</footer>
</div>
  )
}

export default Footer
