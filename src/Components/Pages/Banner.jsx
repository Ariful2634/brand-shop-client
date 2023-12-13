import banner from '../../assets/ban.jpg'
// import banner2 from '../../assets/ban2.jpg'

const Banner = () => {
    return (
        <div className="flex justify-center mt-8">

            

            <div className="diff aspect-[16/9] max-w-7xl mx-auto">
                <div className="diff-item-1">
                    <img className='rounded-xl' src={banner} />
                </div>
                <div className="diff-item-2">
                    {/* <img className='rounded-xl' src={banner2} /> */}
                </div>
                <div className="diff-resizer"></div>
            </div>




        </div>





    );
};

export default Banner;