
//Reto 1
const canvas = d3.select("#canvas");

const svg = d3.select("#canvas").append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px");

const rectangle = svg.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50);

d3.select("#start").on("click", function () {
    rectangle
        .transition()
        .attr("x", 250);
});

d3.select("#reset").on("click", function () {
    rectangle
        .transition()
        .attr("x", 50);
});

//Reto 2

const svg2 = d3.select("#canvas").append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px");

const rectangle2 = svg2.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50);

d3.select("#start2").on("click", function () {
    rectangle2
        .transition()
        .attr("x", 250)
        .attr("width", 100) 
	    .attr("height", 100); 
});

d3.select("#reset2").on("click", function () {
    rectangle2
        .transition()
        .attr("x", 50)
        .attr("width", 50) 
	    .attr("height", 50); 
});

//Reto 3

const svg3 = d3.select("#canvas").append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px");

const circle = svg3.append("ellipse")
    .attr("cx", 50)
    .attr("cy", 70)
    .attr("rx", 30)
    .attr("ry", 30);

d3.select("#start3").on("click", function () {
    circle
        .transition()
        .attr("cx", 250)
    .attr("cy", 70)
    .attr("rx", 60)
    .attr("ry", 60)
    .style("fill", "red");
});

d3.select("#reset3").on("click", function () {
    circle
    .transition()
    .attr("cx", 50)
.attr("cy", 70)
.attr("rx", 30)
.attr("ry", 30)
.style("fill", "black");
});

//Reto 4

const data = [
    { name: "Medellín", w2005: 3, w2006: 33 },
    { name: "Cali", w2005: 39, w2006: 45 },
    { name: "Bogotá", w2005: 7, w2006: 31 },
    { name: "Pereira", w2005: 35, w2006: 36 },
    { name: "Bucaramanga", w2005: 16, w2006: 23 },
    { name: "Cúcuta", w2005: 45, w2006: 45 },
    { name: "Armenia", w2005: 6, w2006: 16 }
];

const width = 700;
const height = 500;
const margin = { top:10, left:50, bottom: 40, right: 10};
const iwidth = width - margin.left - margin.right;
const iheight = height - margin.top -margin.bottom;

const svg4 = canvas.append("svg");
svg4.attr("width", width);
svg4.attr("height", height);

let g = svg4.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

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

d3.select("#start4").on("click", function () {
    bar.transition()
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.w2006))
    .attr("height", d => iheight - y(d.w2006))
    .attr("width", x.bandwidth())
    .style("fill", "yellow");
});

d3.select("#reset4").on("click", function () {
    bar.transition()
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.w2005))
    .attr("height", d => iheight - y(d.w2005))
    .attr("width", x.bandwidth())
    .style("fill", "steelblue");
});







