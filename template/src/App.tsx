import React, { Suspense } from 'react'

const Home = React.lazy(() => import('./Home'))

const App = () => {
    return (
        <Suspense fallback='loading...'>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/' render={() => <div>404</div>}></Route>
            </Switch>
        </Suspense>
    )
}

export default App
