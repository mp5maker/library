const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA' },
    { id: 'd1', value: 11, region: 'INDIA' },
    { id: 'd1', value: 12, region: 'CHINA' },
    { id: 'd1', value: 6, region: 'GERMANY' },
]

let container = d3.select('#d3-output')
    .classed('data-container', true)
    .style('box-shadow', '0 1px 15px 0 rgba(0, 0, 0, 0.1)')

container
    .selectAll('.bar')
    .data(DUMMY_DATA, data => data)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', (data) => `${_.get(data, 'value', 0) * 10}px`)
    .text(data => _.get(data, 'region', ''))