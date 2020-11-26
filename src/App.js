import { useEffect } from "react";
import "App.scss";
import Header from "components/Header";
import Tutorial from "components/Tutorial";
import Gallery from "components/Gallery";
import { GalleryType } from "components/utils/constants";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";

function App() {
   useEffect(() => {
      document.title = "Silver Islands";
   });

   return (
      <div className="ContentContainer">
         <Router>
            <Header />

            <main className="App-content">
               <Switch>
                  <Route path="/tutorial" render={() => <Tutorial />} />
                  <Route
                     path="/art-gallery"
                     render={() => (
                        <Gallery
                           type={GalleryType.MAIN}
                           key={window.location.pathname}
                        />
                     )}
                  />
                  <Route
                     path="/icons"
                     render={() => (
                        <Gallery
                           type={GalleryType.ICONS}
                           key={window.location.pathname}
                        />
                     )}
                  />
                  <Route
                     exact
                     path="/"
                     render={() => <Redirect to="/art-gallery" />}
                  />
                  *
                  <Route path="*">
                     <NoMatch />
                  </Route>
               </Switch>
            </main>
         </Router>
         <footer>
            All layouts, content, and custom images are © 2020 of The Silver
            Islands. None may be reproduced without permission. Pokemon is
            copyright © 2020 Nintendo GAME FREAK. This site is purely a fan made
            work and is in no way official.
         </footer>
      </div>
   );
}

function NoMatch() {
   return <h2>404 not found</h2>;
}

export default App;
