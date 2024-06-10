import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Loader from './MobileScreen/components/loader/Loader';
import Home from './MobileScreen/pages/Home';
import LocalTrips from './MobileScreen/pages/localTrips/LocalTrips';
import LocationMaster from './MobileScreen/pages/allLocations/state/LocationMaster';
import VehicleMaster from './MobileScreen/pages/vehicle/VehicleMaster';
import Airport from './MobileScreen/pages/airport/Airport';
import Landingpage from './website/pages/home/Landingpage';
import Header from './website/components/header/Header';
import AboutUs from './website/pages/about/AboutUs';
import ContactUs from './website/pages/contact/ContactUs';

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOverLap, setmenuOverLap] = useState(true)
  // const [menuOverLap, setmenuOverLap] = useState(true)
  const [addPakagesModal, setAddPakagesModal] = useState(false);
  const [activeMainTab, setActiveMainTab] = useState("Airport/Local")

  const userlocation = useLocation();
  const currentLocation = userlocation.pathname;

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Perform your asynchronous operation here

      // Simulate a delay (remove this line in a real application)
      await new Promise(resolve => setTimeout(resolve, 500));

      // Once the data is loaded, set loading to false
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleaddPakagesModal = () => {
    setAddPakagesModal(true)
  }

  return (
    <>
      <div className="w-100">
        {loading ?
          <Loader />
          :
          <>
            <div className='w-100 max-w-[100%] ease-in flex md:!hidden gap-4 justify-between'>
              <div className={`col ease-in h-[100vh] flex flex-col ${menuOverLap ? " gap-0" : " gap-0"} justify-between`}>
                {/* <Topbar activeMainTab={activeMainTab} setActiveMainTab={setActiveMainTab} menuOverLap={menuOverLap} setmenuOverLap={setmenuOverLap} setAddPakagesModal={setAddPakagesModal} currentLocation={currentLocation} /> */}
                <div className={`w-100 ${menuOverLap ? "h-[calc(100vh-0px)]" : "h-[calc(100vh-175px)]"} mx-auto shadow-md overflow-hidden `}>
                  <Routes>
                    <Route path="/" element={<Home activeMainTab={activeMainTab} setActiveMainTab={setActiveMainTab} menuOverLap={menuOverLap} setmenuOverLap={setmenuOverLap} />} />
                    <Route path="/airport" element={<Airport />} />
                    <Route path="/local-trips" element={<LocalTrips setAddPakagesModal={setAddPakagesModal} addPakagesModal={addPakagesModal} />} />
                    <Route path="/location" element={<LocationMaster />} />
                    <Route path="/vehicle" element={<VehicleMaster />} />
                  </Routes>
                </div>
              </div>
            </div>
            <div className='w-100 max-w-[100%] ease-in hidden md:!block'>
              <Header />
              <div className={`w-100 mx-auto shadow-md `}>
                <Routes>
                  <Route path="/" element={<Landingpage />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default App
