import React, {Component} from 'react';

import Loader from "../Loader";

const CarouselBox = React.lazy(() => import("../CarouselBox"))

class Home extends Component {
    render() {
        return (
            <>
                <React.Suspense fallback={<Loader/>}>
                    <CarouselBox/>
                </React.Suspense>
            </>
        );
    }
}

export default Home;