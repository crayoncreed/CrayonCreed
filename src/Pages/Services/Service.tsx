import React, { useEffect, useState } from 'react'
import { RoutePaths } from '../../Constants/RoutePaths';
import Bronze from './Bronze';
import Custom from './Custom';
import Gold from './Gold'
import ServiceForm from './ServiceForm'
import Silver from './Silver';
// declare var $: any;

const Service = (props: any) => {
    const [path, setPath] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    useEffect(() => {
        const pathURL = props.location.pathname;
        switch (pathURL) {
            case RoutePaths.SERVICEGOLD:
                setTitle('Gold');
                break;

            case RoutePaths.SERVICESILVER:
                setTitle('Silver');
                break;

            case RoutePaths.SERVICEBRONZE:
                setTitle('Bronze');
                break;

            case RoutePaths.SERVICECUSTOM:
                setTitle('Custom');
                break;

            default:
                break;
        }
        // $('.popover-dismiss').popover({
        //     trigger: 'focus'
        // })
        setPath(pathURL);
    }, []);

    const renderServiceTag = () => {
        switch (path) {
            case RoutePaths.SERVICEGOLD:
                return <Gold />;

            case RoutePaths.SERVICESILVER:
                return <Silver />;

            case RoutePaths.SERVICEBRONZE:
                return <Bronze />;

            case RoutePaths.SERVICECUSTOM:
                return <Custom />;

            default:
                break;
        }
    }

    return (
        <section className="srv-main">
            <div className="srv-container">
                <div className="row justify-content-center">
                    <div className="col-md-8 order-2 order-sd-1 order-md-1">
                        <ServiceForm path={path} title={title} />
                    </div>
                    <div className="col-md-3 order-sd-2 order-md-2">
                        {renderServiceTag()}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Service;
