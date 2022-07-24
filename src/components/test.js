import React, { Component } from 'react'
import { Container, Row, Col, Carousel } from "react-bootstrap";
import s3 from '../assets/s3.jpg'

export default class test extends Component {
  render() {
    return (
        

        <Carousel slide={false}>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={s3} 
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
    )
  }
}
