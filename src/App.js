import { useEffect, Suspense, lazy } from "react";
import "App.scss";
import Header from "components/Header";
import { GalleryType } from "components/utils/constants";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Root from "Root";

const Tutorial = lazy(() => import("components/Tutorial"));
const Gallery = lazy(() => import("components/Gallery"));

function App() {
    useEffect(() => {
        document.title = "Silver Islands";
    });

    return <Root />;

    //   return (
    //     <div className="ContentContainer">
    //       <Router>
    //         <Header />

    //         <main className="App-content">
    //           <Suspense fallback={<Loading />}>
    //             <Routes>
    //               <Route path="/tutorial" component={Tutorial} />
    //               <Route
    //                 path="/art-gallery"
    //                 render={() => (
    //                   <Gallery
    //                     type={GalleryType.MAIN}
    //                     key={window.location.pathname}
    //                   />
    //                 )}
    //               />
    //               <Route
    //                 path="/icons"
    //                 render={() => (
    //                   <Gallery
    //                     type={GalleryType.ICONS}
    //                     key={window.location.pathname}
    //                   />
    //                 )}
    //               />
    //               <Route
    //                 exact
    //                 path="/"
    //                 render={() => <Navigate to="/art-gallery" replace />}
    //               />
    //               <Route component={NoMatch} />
    //             </Routes>
    //           </Suspense>
    //         </main>
    //       </Router>
    //       <footer>
    //         All layouts, content, and custom images are © 2020 of The Silver
    //         Islands. None may be reproduced without permission. Pokemon is copyright
    //         © 2020 Nintendo GAME FREAK. This site is purely a fan made work and is
    //         in no way official.
    //       </footer>
    //     </div>
    //   );
}

export default App;
