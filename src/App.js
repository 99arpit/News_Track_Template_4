// import './App.css';
// import Header from './HEADER/Header';
// import Ad from './HEADER/Ad';
// import NavSection from './HEADER/NavSection';
// import ImageSection from './MAIN/ImageSection';
// import NewPage from './New/NewPage';
// import Footer from './FOOTER/Footer';
// import Tranding from './MAIN/Trending';
// import LatestNews from './HEADER/LatestNews';




// function App() {
//   return (
//     <>
    // <div style={{display:"flex",flexDirection:"column"}}>
    //   <div>
    //     <Header />
    //     <Ad />
    //     <NavSection />
    //   </div>
      

//       <div style={{display:"flex",background:"#fff"}}>
//         <NewPage/>
//       <ImageSection />
    
//       </div>
//       </div>

//       <div>
//         <Footer/>
//       </div>
//     </>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./Template/Template";
// import CategoryPage from "./Navigation/CategoryPage";
// import ViewNews from "./Navigation/ViewNews";
import './App.css';
import ViewNews from "./ViewNews/ViewNews";
import CategoryPage from "./New/CategoryPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Template />} />
         <Route path="/:id/DetailedNews/:newsId" element={<ViewNews />} />
        <Route path="/:id/category/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
