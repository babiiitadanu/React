import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import StaticPage from "./pages/StaticPage";
import DynamicPage from "./pages/DynamicPage";
import CounterPage from "./pages/CounterPage";
import TodoPage from "./pages/TodoPage";
import RBBadges from "./components/RBBadges";

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

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;