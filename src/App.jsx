import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";
import GivePage from "./pages/GivePage";
import AboutPage from "./pages/AboutPage";
import ChildrensPage from "./ministries/ChildrensPage";
import WomensPage from "./ministries/WomensPage";
import MensPage from "./ministries/MensPage";
import YouthPage from "./ministries/YouthPage";
import BeliefsPage from "./pages/BeliefsPage";
import ValuePage from "./pages/ValuePage";
import EvangelismPage from "./ministries/EvangelismPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/give" element={<GivePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/childrens-ministry" element={<ChildrensPage />} />
      <Route path="/womens-ministry" element={<WomensPage />} />
      <Route path="/mens-ministry" element={<MensPage />} />
      <Route path="/youth-ministry" element={<YouthPage />} />
      <Route path="/beliefs" element={<BeliefsPage />} />
      <Route path="/values" element={<ValuePage />} />
      <Route path="/evangelism-ministry" element={<EvangelismPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
