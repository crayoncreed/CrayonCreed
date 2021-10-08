import React from 'react';
import { Redirect, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from '../../../config/routes';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = (props: any) => {

    const getRoutes = (routes: any) => {
        window.scrollTo(0, 0)
        return routes.map((route: any, i: any) => {
            return <Route
                key={i}
                path={route.path}
                exact={route.exact}
                // strict={route.strict}
                render={(props: RouteComponentProps<any>) => (
                    <route.component
                        name={route.name}
                        {...props}
                        {...route.props} />
                )}
            />
        })
    }


    return (
        <>
            <Header />
            <Switch>
                {getRoutes(routes)}
                {/* <Redirect to="/404" from="*" /> */}
            </Switch>
            <Footer />
        </>
    )
}

export default Layout;
