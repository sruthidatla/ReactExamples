import React,{lazy,Suspense} from 'react';
import './App.css';
import ParentComponent from "./Components/PureComp/ParentComponent";
import {HooksExample} from "./Components/HooksExample/HooksExample";
import ErrorBoundary from "./Components/ErrorBoundariesExample/ErrorBoundary";
import CounterExample from "./Components/ErrorBoundariesExample/CounterExample";
const LazyComp = lazy(() => import("./Components/LazyLoadingExample/LazyComp"));

function App() {
    console.log("rendering app")
  return (
    <div className="App">
{/*/!*<ParentComponent/>*!/*/}
{/*<HooksExample/>*/}
{/*        <Suspense fallback={<div>Loading.....</div>}>*/}
{/*            <LazyComp />*/}
{/*        </Suspense>*/}
        <ErrorBoundary><CounterExample/></ErrorBoundary>
    </div>
  );
}

export default App;
