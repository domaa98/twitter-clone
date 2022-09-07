import FeedSec from "./components/feed/FeedSec";
import LeftSide from "./components/leftSide/LeftSide";
import Navbar from "./components/navbar/Navbar";
import RightSide from "./components/rightSide/RightSide";


function App() {
  return (
    <div className="app-contanier">
     <Navbar/>

      <div className="app-body">
        <LeftSide />
        <FeedSec />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
