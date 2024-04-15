import NavigationBar from "../components/Navbar/Nav";
import Destinations from "../components/Destination/DestForSeason";

const SummerDestPage = () => {
    return (
        <>
        <NavigationBar/>
        <Destinations season={'summer'} />
        </>
    )
};

export default SummerDestPage;