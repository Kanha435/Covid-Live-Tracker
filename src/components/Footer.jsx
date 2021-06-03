import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer">
                <p>Created By : Kanhaiya Lal Verma </p>
                <p>Copyright {new Date().getFullYear()}</p>
                <ul className='contact'>
                    <li><a href="https://twitter.com/Kanhaiy32483632"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://github.com/Kanha435/"><i class="fab fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/k_a_n_h_a_verma/"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"><i class="fab fa-linkedin-in"></i></a></li>
                    
                </ul>
            </div>
        </>
    )
}

export default Footer;
