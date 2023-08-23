import Main from '../../main';
import Sub02 from "../../sub02";
import { RouteObject } from "react-router-dom";
import { useRoutes } from 'react-router-dom';

const routes: RouteObject[] = [
  { path: '/', element: <Main /> },
  { path: '/sub02/*', element: <Sub02 /> },
  { path: "*", element: <Main /> } // NotFound -> Main 대체
];

function Router() {
  const routing = useRoutes(routes);
  return routing;
}

export default Router;