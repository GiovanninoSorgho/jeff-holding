import { Carousel } from "react-bootstrap";
import logo from '../logojeff.svg'






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

        <div class="bg-black text-center h-100 project">
          <div class="d-flex h-100">
            <div class="project-text w-100 my-auto text-center text-lg-left" >
              <h4 class="text-white">Votre confort, notre prioriter.</h4>
              <p class="mb-0 text-white-50">@JeffHoldingCorporation.</p>
              <hr class="d-none d-lg-block mb-0 ms-0" />
            </div>
          </div>
        </div>
      </div>

    </>


  )
}

C:\Users\giova\OneDrive\Documents\summer 2k22\SEG3525\jeff-holding\src\components






