import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  
  return (
    <div>

      <footer className='mt-5 mb-5' class="mb-5 footer">
        <div class="container text-center">
          <span class="text-muted">© 2024 <Link to={'/login'} data-toggle="tooltip" data-placement="right" title="Admin panel" style={{textDecoration:"none",color:"darkslategray"}}>Anand</Link>. All rights reserved.</span>
        </div>
      </footer>

    </div>
  )
}

export default Footer