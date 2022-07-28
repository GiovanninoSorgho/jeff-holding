import React, { Component } from 'react'
import { Carousel } from "react-bootstrap";
import c from "../assets/c.jpg"
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"

export default class Chambre extends Component {
    render() {
        return (
            <div>
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Chambre</h3>
                            <p>Un sommeil de qualiter.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>



                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={c1} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Chambre POGSADA</h4>
                                    <p class="mb-0 text-white-50">Doter d'un total de 12 places, ce salon reunis confort et luxe. Vous etes a la recherche de deux salon au prix d'un ? Koubri est fais pour vous .</p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={c2} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Chambre AKIKA</h4>
                                    <p class="mb-0 text-white-50">Reunissant ambiance chaleureuse et detente, ce salon saura vous gardez dans une humeur positive.</p>
                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={c3} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Chambre YINBE</h4>
                                    <p class="mb-0 text-white-50">Salon simple et sophistiquer emmene une touche de rafiner a votre environement.</p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={c4} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Chambre YAKA</h4>
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
