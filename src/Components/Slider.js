import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from '../img/doroga.jpg';
import neboImg from '../img/nebo.jpg';
import beautiful from '../img/beautiful.jpg'

export default class Slider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={forestImg}
                        height={800}
                        all='Forest'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={neboImg}
                        height={800}
                        all='nebo'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block w-100 '
                        src={beautiful}
                        height={800}
                        all='Forest'
                    />
                </Carousel.Item>
            </Carousel>

        )
    }
}
