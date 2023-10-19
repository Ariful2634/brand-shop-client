import Marquee from "react-fast-marquee";
import mac from '../Pages../../../assets/mac.jpg'
import pixel from '../Pages../../../assets/pixel.jpg'
import oppo from '../Pages../../../assets/oppo.jpg'


const HotDeals = () => {
    return (
        <div className="mt-16">
            <h2 className="font-bold text-center text-4xl text-blue-600 mb-8">Hot Deals</h2>
            <Marquee pauseOnHover={true}>
            <div className="mr-20">
                <img className="w-[300px] h-[200px]" src={mac} alt="" />
                <h2 className='font-bold text-center text-2xl mb-3 mt-3'>Macbook Air</h2>
                <div className='flex gap-4 justify-center mb-3'>
                    <p className='font-bold'>$̶1̶8̶0̶0̶0̶0̶ </p>
                    <p className='font-bold '>$80000</p>
                </div>
                <div className='text-center'>
                    <button className='btn'>Shop Now</button>
                </div>
            </div>
            <div className="mr-20">
                <img className="w-[300px]  h-[200px]" src={pixel} alt="" />
                <h2 className='font-bold text-center text-2xl mb-3 mt-3'>Google Pixel-7</h2>
                <div className='flex gap-4 justify-center mb-3'>
                    <p className='font-bold'>$̶4̶5̶0̶0̶0̶ </p>
                    <p className='font-bold '>$25000</p>
                </div>
                <div className='text-center'>
                    <button className='btn'>Shop Now</button>
                </div>
            </div>
            <div className="mr-20">
                <img className="w-[300px]  h-[200px]" src={oppo} alt="" />
                <h2 className='font-bold text-center text-2xl mb-3 mt-3'>Oppo Air Buds</h2>
                <div className='flex gap-4 justify-center mb-3'>
                    <p className='font-bold'>$̶3̶0̶0̶0̶ </p>
                    <p className='font-bold '>$1000</p>
                </div>
                <div className='text-center'>
                    <button className='btn'>Shop Now</button>
                </div>
            </div>
            </Marquee>
            
            
        </div>
    );
};

export default HotDeals;