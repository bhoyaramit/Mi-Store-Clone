import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreNavbar from "./components/PreNavbar";
import NavBar from './components/Navbar';
import Slider from './components/Slider';
import data from "./data/data.json"
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from './components/NavOptios';


const App = () => {
  return (

<Router>
<PreNavbar />
<NavBar />
<NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones}
 tv={data.tv} laptop={data.laptop} 
 fitnessAndLifeStyle={data.fitnessAndLifeStyle} 
 home={data.home} audio={data.audio}  accessories={data.accessories}
/>
<Slider start={data.banner.start}/>
<Offers offer={data.offer} />
<Heading text="Star Product" />
<StarProduct starProduct={data.starProduct}/>
<Heading text="Hot Acceries" />
<HotAccessoriesMenu  />

<Routes>
<Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
}>
</Route>
<Route exact path='/smartDevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
}>

</Route>
<Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}></Route>
<Route exact path='/lifeStyle' element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}></Route>
<Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}></Route>
</Routes>

{/* <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  /> */}
{/* <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  /> */}
{/* <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  /> */}



<Heading text="PRODUCT REVIEWS"/>
<ProductReviews productReviews={data.productReviews}/>
<Heading text="VIDEOS" />
<Videos  videos={data.videos}/>
<Heading  text="IN THE PRESS"/>
<Banner banner={data.banner}/>
<Footer footer={data.footer}/>

</Router>



)
}

export default App
