import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export const DemoCarousel = ()=> {
    return(
        <Carousel>
        <div className="item" > Great product. Excellent communication from the company. Arrived on time. 
            <div className="clientname font-weight-bold mt-20">Michael Bailey</div>
         </div>
       <div className="item" > Great product. Excellent communication from the company. Arrived on time. 
            <div className="clientname font-weight-bold mt-20">Michael Bailey</div>
       </div>
      <div className="item" > Great product. Excellent communication from the company. Arrived on time. 
            <div className="clientname font-weight-bold mt-20">Michael Bailey</div>
        </div>
    </Carousel>
    )
}
 
 