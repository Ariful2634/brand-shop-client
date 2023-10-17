import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/BVQHF70/06d50a103854047-5f5669a16b9db.jpg')] bg-center  lg:bg-cover bg-no-repeat bg-contain h-[230px] lg:h-[500px] w-full lg:mt-4">
            
            <Marquee>
            <h2 className="lg:text-4xl text-2xl text-center text-pink-500 italic py-4 font-bold mr-10 lg:mr-20">Welcome To Gadget World</h2>
            <h2 className="lg:text-4xl text-2xl text-center text-blue-800 italic mr-10 py-4 font-bold">Welcome To Gadget World</h2>
            </Marquee>
        </div>
    );
};

export default Banner;