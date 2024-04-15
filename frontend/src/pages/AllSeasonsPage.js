import NavigationBar from "../components/Navbar/Nav";
import Destinations from "../components/Destination/DestForSeason";

const AllSeasonsDestPage = () => {
    return (
        <>
        <NavigationBar/>
        <Destinations season={'all_seasons'} />
        </>
    )
};

export default AllSeasonsDestPage;