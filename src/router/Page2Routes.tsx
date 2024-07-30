import Page2 from "../Page2";
import UrlParameter from "../UrlParameter";

interface RouteType {
  path: string;
  element: JSX.Element;
}

const Page2Routes: RouteType[] = [
  {
    path: "/",
    element: <Page2 />,
  },
  {
    path: "/:id",
    element: <UrlParameter />,
  },
];

export default Page2Routes;
