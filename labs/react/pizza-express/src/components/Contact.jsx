import React, { Component } from 'react'
import '../index.css'

class Contact extends Component {
    render() {
        return (
            <div>
                <div className='contact'>
                    <h1 className='contact'>Store Hours</h1>
                </div>
                <div className='contact'>
                    <p>
                        <strong>Sunday - Thursday:</strong>
                            {' 11:00am to 12:00am | '}
                        <strong>Friday - Saturday:</strong>
                            {' 11:00am to 1:00am '}
                    </p>
                <div>
                    <p>
                        <strong>Phone:</strong>
                            {' 404-555-1234 '}
                    </p>  
                </div>
                <div>
                    <p>
                        <strong>Email: </strong>
                            {' pizzaheaven@yes.please '}
                    </p>
                </div>
                </div>
            </div>
        )
    }
}


export default Contact