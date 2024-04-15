import NavigationBar from "../components/Navbar/Nav";
import Destinations from "../components/Destination/DestForSeason";

const WinterDestPage = () => {
    return (
        <>
        <NavigationBar/>
        <Destinations season={'winter'} />
        </>
    )
};

export default WinterDestPage;