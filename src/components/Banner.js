import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import wooom from "../assets/WOOOM.png"
import moteo from "../assets/Moteo Style.png"
import s3 from "../assets/s3.jpg"
import s2 from "../assets/s2.jpg"
import s4 from "../assets/s4.jpg"
import s5 from "../assets/s5.jpg"
import s6 from "../assets/s6.jpg"
import d from "../assets/d.jpg"
import d1 from "../assets/d1.jpg"
import d2 from "../assets/d2.jpg"
import d3 from "../assets/d3.jpg"
import d4 from "../assets/d4.jpg"
import c from "../assets/c.jpg"
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"

// import {ArrowRightCircle} from "react-bootstrap-icons";
// import headerImg from "../assets/demo-image-02.jpg";



export const Banner = () => {
  return (
    <>

      {/* Home page........................ */}

      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block"
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Interieur de salon</h3>
            <p>Un confort assurer pour votre salon.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block"
            // style={height=500}
            src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Confort de chambre a coucher</h3>
            <p>Une detente et un repos de qualiter clinique.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
          <img
            className="d-block"
            src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Equipement de bureau</h3>
            <p>
              Un milieux de travail de qualiter.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.gapsa.es/wp-content/uploads/2015/08/ng_gapsa_1-1300x731.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
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


      <ul>
        <h3>SALON</h3>
      </ul>



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


      <ul>
        <h3>SALLE A MANGER</h3>
      </ul>



      {/* Salle a manger------------------------------------------------------ */}


      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={d}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Salle a Manger</h3>
            <p>Manger en armonie.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
        <div class="col-lg-6"><img class="img-fluid" src={d1} alt="..." /></div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Salle a Manger MRIMI</h4>
                <p class="mb-0 text-white-50">Doter d'un total de 12 places, ce salon reunis confort et luxe. Vous etes a la recherche de deux salon au prix d'un ? Koubri est fais pour vous .</p>
                <hr class="d-none d-lg-block mb-0 ms-0" />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row gx-0 justify-content-center">
        <div class="col-lg-6"><img class="img-fluid" src={d2} alt="..." /></div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Salle a Manger DIMM</h4>
                <p class="mb-0 text-white-50">Reunissant ambiance chaleureuse et detente, ce salon saura vous gardez dans une humeur positive.</p>
                <hr class="d-none d-lg-block mb-0 me-0" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
        <div class="col-lg-6"><img class="img-fluid" src={d3} alt="..." /></div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Salle a Manger RITA</h4>
                <p class="mb-0 text-white-50">Salon simple et sophistiquer emmene une touche de rafiner a votre environement.</p>
                <hr class="d-none d-lg-block mb-0 ms-0" />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="row gx-0 justify-content-center">
        <div class="col-lg-6"><img class="img-fluid" src={d4} alt="..." /></div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Salle a Manger AYO</h4>
                <p class="mb-0 text-white-50">Manger dans les meilleurs conditions avec un maintient lombaire adequat.</p>
                <hr class="d-none d-lg-block mb-0 me-0" />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Chambre------------------------------------------------------ */}

      <ul>
        <h3>CHAMBRE</h3>
      </ul>

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


    </>

    
  )
} 








// Home page........................

{/* <Carousel>
<Carousel.Item interval={2000}>
    <img
        className="d-block"
        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="First slide"
    />
    <Carousel.Caption>
        <h3>Interieur de salon</h3>
        <p>Un confort assurer pour votre salon.</p>
    </Carousel.Caption>
</Carousel.Item>

<Carousel.Item interval={2000}>
    <img
        className="d-block"
        // style={height=500}
        src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Second slide"
    />
    <Carousel.Caption>
        <h3>Confort de chambre a coucher</h3>
        <p>Une detente et un repos de qualiter clinique.</p>
    </Carousel.Caption>
</Carousel.Item>

<Carousel.Item >
    <img
        className="d-block"
        src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Third slide"
    />
    <Carousel.Caption>
        <h3>Equipement de bureau</h3>
        <p>
           Un milieux de travail de qualiter.
        </p>
    </Carousel.Caption>
</Carousel.Item>

{/* <Carousel.Item>
    <img
        className="d-block w-100"
        src="https://www.gapsa.es/wp-content/uploads/2015/08/ng_gapsa_1-1300x731.jpg"
        alt="Third slide"
    />
    <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
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
</div> */}



// Salon------------------------------------------------------

{/* <Carousel slide={false}>
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
</div> */}