import { Carousel } from "react-bootstrap";
import wooom from "../assets/WOOOM.png"
import moteo from "../assets/Moteo Style.png"
import f from "../assets/f.jpg"



import React, { Component } from 'react'

export default class ergo extends Component {
  render() {
    return (
      <div>

        <Carousel slide={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={f}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Salle a Manger</h3>
              <p>Manger en armonie.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

         <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
        <div class="col-lg-6"><img class="img-fluid" src={wooom} alt="..." /></div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">WOOOM</h4>
                <p class="mb-0 text-white-50">D'une part, le caractère cosy et l'intimité favorisent l'inspiration. D'autre part, l'équipement de bureau conventionnel facilite le travail pratique. WOOOM réunit ces deux univers. Il combine un travail détendu et concentré avec des fonctionnalités ultramodernes – au service d'une efficacité maximale.   </p>
                <hr class="d-none d-lg-block mb-0 ms-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row gx-0 justify-content-center">
        <div class="col-lg-6"><img class="img-fluid" src={moteo} alt="..." /></div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Moteo</h4>
                <p class="mb-0 text-white-50">Fauteuil de bureau haut de gamme Klöber, FASCINATION MOTEO89 est un fauteuil de direction design, Un siège ergonomique et technique.</p>
                <hr class="d-none d-lg-block mb-0 me-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
        
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Votre confort, notre prioriter.</h4>
                <p class="mb-0 text-white-50">@JeffHoldingCorporation.</p>
                <hr class="d-none d-lg-block mb-0 ms-0" />
              </div>
            </div>
          </div>
      </div>
      
      </div>
    )
  }
}

