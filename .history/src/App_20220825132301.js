import logo from './logo.svg';
import './App.css';
import BarcodeForm from './BarcodeForm/BarcodeForm';
import WelcomeAlert from './WelcomeAlert/WelcomeAlert';
import NavBar from './NavBar/NavBar';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BarcodeForm/>
      <WelcomeAlert/>
      
      
    </div>
  );
}

export default App;
