// // import logo from './logojeff.svg';
// import logo from './logo.svg';
// import './App.css';
// import {NavBar} from './components/NavBar';
// import {Banner} from './components/Banner';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css'
// import {Nav, Navbar, NavDropdown, ButtonGroup} from 'react-bootstrap'
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
// import Image from 'react-bootstrap/Image'
// import moteo from "../src/assets/Moteo Style.png"
// import wooom from "../src/assets/WOOOM.png"
// import { Component } from 'react';

import React, { Component } from 'react'
import { Carousel } from "react-bootstrap";
import s3 from "../assets/s3.jpg"
import s2 from "../assets/s2.jpg"
import s4 from "../assets/s4.jpg"
import s5 from "../assets/s5.jpg"
import s6 from "../assets/s6.jpg"



export default class Salon extends Component {
  render() {
    return (
      <div>
          {/* Salon------------------------------------------------------ */}


      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Salon</h3>
            <p>Un confort assurer pour votre salon.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
        <div class="col-lg-6"><img class="img-fluid" src={s2} alt="..." /></div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Salon KOUBRI</h4>
                <p class="mb-0 text-white-50">Doter d'un total de 12 places, ce salon reunis confort et luxe. Vous etes a la recherche de deux salon au prix d'un ? Koubri est fais pour vous .</p>
                <hr class="d-none d-lg-block mb-0 ms-0" />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row gx-0 justify-content-center">
        <div class="col-lg-6"><img class="img-fluid" src={s4} alt="..." /></div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Salon PISSI</h4>
                <p class="mb-0 text-white-50">Reunissant ambiance chaleureuse et detente, ce salon saura vous gardez dans une humeur positive.</p>
                <hr class="d-none d-lg-block mb-0 me-0" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
        <div class="col-lg-6"><img class="img-fluid" src={s5} alt="..." /></div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Salon DORI</h4>
                <p class="mb-0 text-white-50">Salon simple et sophistiquer emmene une touche de rafiner a votre environement.</p>
                <hr class="d-none d-lg-block mb-0 ms-0" />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row gx-0 justify-content-center">
        <div class="col-lg-6"><img class="img-fluid" src={s6} alt="..." /></div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Salon FRAMBOISE</h4>
                <p class="mb-0 text-white-50">Haut de gamme, le salon Framboise saura entretenir votre position lombaire et vous preserver des courbature.</p>
                <hr class="d-none d-lg-block mb-0 me-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
        
          <div class="bg-white text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-black">Votre confort, notre prioriter.</h4>
                <p class="mb-0 text-black-50">@JeffHoldingCorporation.</p>
                <hr class="d-none d-lg-block mb-0 ms-0" />
              </div>
            </div>
          </div>
      </div>


      </div>
    )
  }
}

