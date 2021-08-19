import {Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Watches from "./components/Watches";
import All from "./components/allWatchDes";
import Men from "./components/MenCollection";
import Women from "./components//WomenCollection";
import Unisex from "./components/UnisexCollection";
import MenW from "./components/MenWatches";
import WomenW from "./components/WomenWatches";
import UnisexW from "./components/UnisexWatches";
function App(){
  return(
    <>
     <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/login' component={Login} exact/>
      <Route path='/SignUp' component={SignUp} exact/>
      <Route path='/Luxury_Watches' component={Watches} exact/>
      <Route path='/Men' component={Men} exact/>
      <Route path='/Women' component={Women} exact/>
      <Route path='/Unisex' component={Unisex} exact/>
      <Route path='/All_Watches/:Name?/:img?/:des?/:name?/:price?/:inStock?' component={All} />
      <Route path='/MenWatches/:Name?/:img?/:des?/:name?/:price?/:inStock?' component={MenW} />
      <Route path='/WomenWatches/:Name?/:img?/:des?/:name?/:price?/:inStock?' component={WomenW} />
      <Route path='/UnisexWatches/:Name?/:img?/:des?/:name?/:price?/:inStock?' component={UnisexW} />
      <Route component={Error} />
     </Switch>
    </>
  )
}
export default App