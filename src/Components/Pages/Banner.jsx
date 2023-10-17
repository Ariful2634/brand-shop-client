import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/BVQHF70/06d50a103854047-5f5669a16b9db.jpg')] bg-center bg-cover h-[500px] w-full mt-4">
            
            <Marquee>
            <h2 className="text-4xl text-center text-pink-500 italic py-4 font-bold mr-20">Welcome To Gadget World</h2>
            <h2 className="text-4xl text-center text-blue-800 italic py-4 font-bold">Welcome To Gadget World</h2>
            </Marquee>
        </div>
    );
};

export default Banner;