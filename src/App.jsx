import { Button } from "@/components/ui/button"
import Header from "./shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";


const App = () => {
  return (
    <div>
     <Header></Header>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default App;