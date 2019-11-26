import React, { Component } from 'react';
import * as d3 from 'd3';

class Grafica extends Component {

    componentDidMount() {
        const data = [
            { name: "Medellín", w2005: 3, w2006: 33 },
            { name: "Cali", w2005: 39, w2006: 45 },
            { name: "Bogotá", w2005: 7, w2006: 31 },
            { name: "Pereira", w2005: 35, w2006: 36 },
            { name: "Bucaramanga", w2005: 16, w2006: 23 },
            { name: "Cúcuta", w2005: 45, w2006: 45 },
            { name: "Armenia", w2005: 6, w2006: 16 }
        ];
        this.drawChart(data);
    }

    render() {
        return (
            <div>
            <button id="start">Start!</button>
            <button id="reset">Reset!</button>
            <div ref="canvas">
                
            </div>
            </div>
        );
    }
    drawChart(data){

        const width = 700;
        const height = 500;
        const margin = { top:10, left:50, bottom: 40, right: 10};
        const iwidth = width - margin.left - margin.right;
        const iheight = height - margin.top -margin.bottom;
        
        const svg = d3.select(this.refs.canvas).append('svg');
        svg.attr("width", width);
        svg.attr("height", height);
        
        let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
        
        const y = d3.scaleLinear() 
            .domain([0, 50])
            .range([iheight, 0]);
        
        const x = d3.scaleBand()
        .domain(data.map(d => d.name) ) 
        .range([0, iwidth])
        .padding(0.1); 
        
        const bars = g.selectAll("rect").data(data);
        
        const bar = bars.enter().append("rect")
        .attr("class", "bar")
        .style("fill", "steelblue")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.w2005))
        .attr("height", d => iheight - y(d.w2005))
        .attr("width", x.bandwidth())  
        
        g.append("g")
        .classed("x--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0, ${iheight})`);  
        
        g.append("g")
        .classed("y--axis", true)
        .call(d3.axisLeft(y));

        d3.select("#reset").on("click", function () {
            bar.transition()
            .attr("x", d => x(d.name))
            .attr("y", d => y(d.w2005))
            .attr("height", d => iheight - y(d.w2005))
            .attr("width", x.bandwidth())
            .style("fill", "steelblue");
        });
        
        
        d3.select("#start").on("click", function () {
            bar.transition()
            .attr("x", d => x(d.name))
            .attr("y", d => y(d.w2006))
            .attr("height", d => iheight - y(d.w2006))
            .attr("width", x.bandwidth())
            .style("fill", "yellow");
        });
        }
}



export default Grafica;