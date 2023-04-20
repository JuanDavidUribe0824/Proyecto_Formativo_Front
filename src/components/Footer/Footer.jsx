import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className='f-wrapper'>
            <div className="paddings innerWidth flexCenter f-container">
                {/*Left Side */}
                <div className="flexColStart f-left">
                <div  className='logo-two'>
                    <div className='circle-orange'></div>
                    <h2 className='primaryText'>HELPER PEOPLE</h2>
                </div>

                    <span className="secondaryText">
                        Our vision is to make all people
                        <br />
                        the best place to live for them.
                    </span>
                </div>

                {/*Left Side */}
                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>Armenia, Quindío</span>

                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer