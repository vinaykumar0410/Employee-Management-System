import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EmployeeList from "./components/EmployeeList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Employee from "./components/Employee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/addemployee" element={<Employee />} />
          <Route path="/editemployee/:id" element={<Employee />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
