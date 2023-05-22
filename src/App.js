
import {  Header ,Footer} from "./components";
import AllRoutes from "./routes/AllRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  return (
    <>
    <Header/>
    <AllRoutes/>
    <Footer/>
    </>
  );
}

export default App;
