import Delivery from "./Delivery";
import Download from "./Download";
import Emergency from "./Emergency";
import Footer from "./Footer";
import Frequently from "./Frequently";
import "./index.css";
import Navbar from "./Navbar";
import Parcel from "./Parcel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Emergency />
      <Download />
      <Delivery />
      <Parcel />
      <Frequently />
      <Footer />
    </div>
  );
}

export default App;
