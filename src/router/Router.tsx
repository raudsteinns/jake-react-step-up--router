import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Page1Routes from "./Page1Routes";
import Page2Routes from "./Page2Routes";
import Page404 from "../Page404";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1/*" element={<Page1Wrapper />} />
      <Route path="/page2/*" element={<Page2Wrapper />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

const Page1Wrapper: React.FC = () => {
  return (
    <Routes>
      {Page1Routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

const Page2Wrapper: React.FC = () => {
  return (
    <Routes>
      {Page2Routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Router;
