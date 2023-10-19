import pic1 from '../AddProduct../../../assets/7995902.jpg'
import pic2 from '../AddProduct../../../assets/8642509.jpg'
import pic3 from '../AddProduct../../../assets/c72858992482c70d5ec3a585eec352ed.png'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full mt-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={pic2} className="w-full lg:h-[450px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={pic1} className="w-full lg:h-[450px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={pic3} className="w-full lg:h-[450px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Slider;