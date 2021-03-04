import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

const HomePage = React.lazy(() => import('./pages/home/home.page'))
const EtcPage = React.lazy(() => import('./pages/etc/etc.page'))

function App() {
  return (
    <BrowserRouter>
      <div id="body">
        <React.Fragment>
          <Switch>

            <Route path="/" exact render={() => <Suspense fallback={<div>در حال بارگزاری صفحه ....</div>}><HomePage /></Suspense>} />
            <Route path="/etc" exact render={() => <Suspense fallback={<div>در حال بارگزاری صفحه ....</div>}><EtcPage /></Suspense>} />

            {/* <Route render={() => <Suspense fallback={<div>در حال بارگزاری صفحه ....</div>}><NotFound /></Suspense>} /> */}
          </Switch>
        </React.Fragment>

      </div>
    </BrowserRouter>
  );
}

export default App;
