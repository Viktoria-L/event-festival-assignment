import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import './App.css'
import Root from "./pages/Root";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import ActivityDetailPage from "./pages/ActivityDetailPage";
// import AboutPage from "./pages/About";
// import ContactPage from "./pages/Contact";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}></Route>
      <Route path='/program' element={<Activities />}></Route>
      <Route path='/program/:id' element={<ActivityDetailPage />}></Route>
     {/*} <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route> */}
      {/* <Route path='*' element={<PageNotFound />}></Route> */}
    </Route>
    ));

  return (
    <>
      <RouterProvider router={router} />     
    </>
  );
};

export default App;
