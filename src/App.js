import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import NavbarTest from './components/navbar/NavbarTest'; 
import CalendarList from './components/calendarList/CalendarList';
import CalendarModal from './components/calendarModal/CalendarModal';
import Appbar from "./components/datepicker/Appbar";

function App() {
  return (
    <div className="App">
      {/* <NavbarTest /> */}
      
      <CalendarList />

      {/* <Appbar />  */}
    </div>
  );
}

export default App;