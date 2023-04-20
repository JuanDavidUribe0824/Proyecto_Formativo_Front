import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
    return (
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className='primaryText'>Get Started with HelperPeople</span>
                    <span className='secondaryText'>
                        We always ready to help by providijng the best services for you. We
                        <br />
                        beleive a good blace to live can make your life better
                    </span>

                    <button className='button'>
                        <a href="mailto:jduribe91@misena.edu.co">Get Started</a>
                    </button>

                </div>
            </div>
        </section>
    )
}

export default GetStarted