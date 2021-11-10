import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import NavbarTest from './components/navbar/NavbarTest'; 
import CalendarList from './components/calendarList/CalendarList';

function App() {
  return (
    <div className="App">
      {/* <NavbarTest /> */}
      
      <CalendarList />
    </div>
  );
}

export default App;