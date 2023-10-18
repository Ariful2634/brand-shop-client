import Brands from "../../Brands/Brands";
import Banner from "./Banner";
import HotDeals from "./HotDeals";
import Sale from "./Sale";


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Brands></Brands>
            <Sale></Sale>
            <HotDeals></HotDeals>
        </div>
    );
};

export default Home;