import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import StaticPage from "./StaticPage";
import DynamicPage from "./pages/DynamicPage";
import CounterPage from "./pages/CounterPage";
import TodoPage from "./pages/TodoPage";

import RBBadges from "./components/RBBadges";
import RBBreadcrumbs from "./components/RBBreadcrumbs";
import RBButtons from "./components/RBButtons";
import RBButtonGroups from "./components/RBButtonGroups";
import RBCards from "./components/RBCards";
import RBImages from "./components/RBImages";
import RBListGroup from "./components/RBListGroup";
import RBFigure from "./components/RBFigure";
import RBPagination from "./components/RBPagination";
import RBProgressBars from "./components/RBProgressBars";
import RBSpinners from "./components/RBSpinners";
import RBTables from "./components/RBTables";
import RBAccordion from "./components/RBAccordion";
import RBCarousel from "./components/RBCarousel";
import RBDropdowns from "./components/RBDropdowns";
import RBModal from "./components/RBModal";
import RBNavbarOffcanvas from "./components/RBNavbarOffcanvas";
import RBNavTabs from "./components/RBNavTabs";
import RBOverlays from "./components/RBOverlays";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="static" element={<StaticPage />} />
          <Route path="dynamic" element={<DynamicPage />} />
          <Route path="counters" element={<CounterPage />} />
          <Route path="todo" element={<TodoPage />} />

          <Route path="badges" element={<RBBadges />} />
          <Route path="breadcrumbs" element={<RBBreadcrumbs />} />
          <Route path="buttons" element={<RBButtons />} />
          <Route path="buttongroup" element={<RBButtonGroups />} />
          <Route path="cards" element={<RBCards />} />
          <Route path="images" element={<RBImages />} />
          <Route path="listgroup" element={<RBListGroup />} />
          <Route path="figure" element={<RBFigure />} />
          <Route path="pagination" element={<RBPagination />} />
          <Route path="progressbars" element={<RBProgressBars />} />
          <Route path="spinners" element={<RBSpinners />} />
          <Route path="tables" element={<RBTables />} />
          <Route path="accordion" element={<RBAccordion />} />
          <Route path="carousel" element={<RBCarousel />} />
          <Route path="dropdowns" element={<RBDropdowns />} />
          <Route path="modal" element={<RBModal />} />
          <Route path="navbaroffcanvas" element={<RBNavbarOffcanvas />} />
          <Route path="navtabs" element={<RBNavTabs />} />
          <Route path="overlays" element={<RBOverlays />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
