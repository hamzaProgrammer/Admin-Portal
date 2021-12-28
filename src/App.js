import './App.css';
import Home from './pages/home/Home'
import DataTable from './pages/tables/DataTables'
import Map from './pages/map/Map'
import Profile from './pages/profile/Profile'
import { Routes , Route } from 'react-router-dom'

function App() {
  return (
    <>
          <Routes >
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/dataTables" element={<DataTable/>} />
            <Route exact path="/map" element={<Map/>} />
          </Routes>
    </>
  );
}

export default App;
