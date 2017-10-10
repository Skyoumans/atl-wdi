import React, { Component } from 'react'
import Oven from '../images/pizzaoven.jpg'

class Description extends Component {
    render() {
        return (
            <div className="description">
                <img src={Oven} alt='pizza oven'/>
            <p>I have a 10 year old son. He has words. He is so good with these words it's
            unbelievable. You have so many different things placeholder text has to be able
            to do, and I don't believe Lorem Ipsum has the stamina. Look at that text! Would
            anyone use that? Can you imagine that, the text of your next webpage?! Lorem
            Ispum is a choke artist. It chokes!</p>
            </div>
        );
    }
}

export default Description