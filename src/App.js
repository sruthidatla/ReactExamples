import React, {lazy, Suspense, useEffect} from 'react';
import './App.css';
import ParentComponent from "./Components/PureComp/ParentComponent";
import {HooksExample} from "./Components/HooksExample/HooksExample";
import ErrorBoundary from "./Components/ErrorBoundariesExample/ErrorBoundary";
import CounterExample from "./Components/ErrorBoundariesExample/CounterExample";
import ClickCounter from "./Components/HigherOrderComponents/ClickCounter";
import HoverCounter from "./Components/HigherOrderComponents/HoverCounter";
import * as d3 from "d3";
const LazyComp = lazy(() => import("./Components/LazyLoadingExample/LazyComp"));

function App() {
    console.log("rendering app")

    function svgTest() {
        const svg = d3.select("svg");
        //  svg.style('background-color','red')
        const circle = svg.append('circle')
            .attr('r', 200)
            .attr('cx', 960 / 2)
            .attr('cy', 500 / 2)
            .attr('fill', 'yellow')
            .attr('stroke', 'black')
        ;
        const leftEye = svg.append('circle')
            .attr('r', 30)
            .attr('cx', 960 / 2 - 100)
            .attr('cy', 500 / 2 - 70);

        const rightEye = svg.append('circle')
            .attr('r', 30)
            .attr('cx', 960 / 2 + 100)
            .attr('cy', 500 / 2 - 70);

        const g = svg.append('g').attr('transform', 'translate(480,220)');

        const mouth = g.append('path').attr('d', d3.arc()({
            innerRadius: 160,
            outerRadius: 170,
            startAngle: Math.PI / 2,
            endAngle: Math.PI * 3 / 2
        })).attr()

        const g1=svg.append('g').attr('transform', 'translate(360,120)');
        const leftEyeBrow = g1.append('rect').attr('width', 40).attr('height', 10).transition().duration(2000).attr('y',-30).transition().duration(2000).attr('y',15);

        const g2=svg.append('g').attr('transform', 'translate(560,120)');
        const rightEyeBrow= g2.append('rect').attr('width', 40).attr('height', 10);

        d3.csv('data.csv').then(data =>{
            console.log(data);
        })
        // d3.shape
        //     .arc()
        //     .outerRadius(170)
        //     .innerRadius(150)
        //     .startAngle(Math.PI/2)
        //     .endAngle(Math.PI/2);'translate(

    }

    useEffect(svgTest);

    return (
        <div className="App">
            {console.log(d3)}
            <svg width="960" height="500"></svg>

            <ParentComponent/>
            <HooksExample/>
            <Suspense fallback={<div>Loading.....</div>}>
                <LazyComp/>
            </Suspense>
            <ErrorBoundary><CounterExample/></ErrorBoundary>


            <ClickCounter name={"Sruthi"}/>
            <ClickCounter name={"Sruthi"}/>
            <ClickCounter name={"Sruthi"}/>
            <HoverCounter/>
        </div>
    );
}

export default App;
