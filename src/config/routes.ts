import React from 'react';
import { RoutePaths } from '../Constants/RoutePaths';
import IRoutes from "../interfaces/route";
import index from '../Pages/Services/Service';
// import Home from "../Pages/Home/Home";
const Home = React.lazy(() => import('../Pages/Home/Home'));

const routes: IRoutes[] = [
    { path: '/', name: 'Home', component: Home, exact: true, },
    { path: RoutePaths.SERVICEGOLD, name: 'Gold', component: index, exact: true, },
    { path: RoutePaths.SERVICESILVER, name: 'Silver', component: index, exact: true, },
    { path: RoutePaths.SERVICEBRONZE, name: 'Bronze', component: index, exact: true, },
    { path: RoutePaths.SERVICECUSTOM, name: 'Custom', component: index, exact: true, },

]

export default routes;