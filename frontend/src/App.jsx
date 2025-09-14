import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbord from "./components/Home/Dashbord/Dashbord";
import Home from "./components/Home/Home";
import TableBooking from "./components/Home/TableBooking/TableBooking";
import AddBooking from "./components/Home/AddBooking/AddBooking";

import UpdateBooking from "./components/Home/Update/update";
// import TotalDashbord from "./components/Home/Dashbord/TotalDashbord/TotalDashbord";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/TableBooking" element={<TableBooking />} />
        <Route path="/AddBookings" element={<AddBooking />} />
        <Route path="/updateBookings/:id" element={<UpdateBooking />} />
        {/* <Route path="/TotalDashbord" element={<TotalDashbord />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
