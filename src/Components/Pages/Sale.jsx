import ear from '../Pages../../../assets/ear.jpg'
import speaker from '../Pages../../../assets/speaker.jpg'

const Sale = () => {
    return (
        <div>
            <div className='flex lg:flex-row flex-col gap-5 mt-32'>
                <div >
                <h2 className='text-center font-bold text-blue-600 italic mt-3 text-2xl'>Winter Sale</h2>
                <div className='flex items-center shadow-xl p-6'>
                    <div>
                       
                        <h2 className='text-xl font-bold mb-4 '>GET AN EXTRA 50% OFF</h2>
                        <button className='btn font-bold text-blue-800'>View Collection</button>
                    </div>
                    <div>
                        <img className='w-[400px]' src={ear} alt="" />
                    </div>
                </div>
                </div>
                <div>
                <h2 className='text-center font-bold text-blue-600 mt-3 italic text-2xl'>Birthday Sale</h2>
                <div className='flex items-center shadow-xl p-6'>
                    <div>
                        
                        <h2 className='text-xl font-bold mb-4 '>40% DISCOUNT ON SPEAKER</h2>
                        <button className='btn font-bold text-blue-800'>Shop Now</button>
                    </div>
                    <div>
                        <img className='w-[400px]' src={speaker} alt="" />
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Sale;