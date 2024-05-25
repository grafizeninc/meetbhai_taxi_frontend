import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Loader from './components/loader/Loader';
import Home from './pages/Home';
import Airport from './pages/airport/Airport';
import LocationMaster from './pages/allLocations/state/LocationMaster';
import LocalTrips from './pages/localTrips/LocalTrips';
import VehicleMaster from './pages/vehicle/VehicleMaster';

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
      await new Promise(resolve => setTimeout(resolve, 0));

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
            <div className='w-100 max-w-[100%] ease-in  flex gap-4 justify-between'>
              <div className={`col ease-in h-[100vh] flex flex-col ${menuOverLap ? " gap-0" : " gap-0"} justify-between `}>
                {/* <Topbar activeMainTab={activeMainTab} setActiveMainTab={setActiveMainTab} menuOverLap={menuOverLap} setmenuOverLap={setmenuOverLap} setAddPakagesModal={setAddPakagesModal} currentLocation={currentLocation} /> */}
                <div className={`w-100  ${menuOverLap ? "h-[calc(100vh-0px)]" : "h-[calc(100vh-175px)]"} mx-auto shadow-md  overflow-hidden `}>
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
          </>
        }
      </div>
    </>
  )
}

export default App
