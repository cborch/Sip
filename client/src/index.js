import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GaugeChart from 'react-gauge-chart'
import { Chart } from "react-charts";

function MyChart(props) {
    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          //data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
          data: props.data
        },
      ],
      [props.data]
    )

    const series = React.useMemo(
        () => ({
          type: 'area'
        }),
        []
    )
   
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )
   
    const lineChart = (
      // A react-chart hyper-responsively and continuously fills the available
      // space of its parent element automatically
      <div
        style={{
          width: '400px',
          height: '210px'
        }}
      >
        <Chart data={data} axes={axes} series={series}/>
      </div>
    )

    return (
        <div className="card" style={{width: 400}}>
            {lineChart}
        </div>
        
    )
  }

 




function AddButton(props) {
  React.useEffect(() => {
    
    fetch('/api')
      .then(response => response.json())
      .then(data => console.log(data));
      console.log("use effect")
  }, []);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <button className="addbutton" onClick={props.onClick} >
                Add
            </button>
        </div>
        
    )
}


class WaterChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percentFull: 0.2,
        }
    }

    handleAddClick() {
        console.log('click')
        const newPercentFull = this.state.percentFull + 0.1
        this.setState({
            percentFull: newPercentFull
        })

    }

    render () {
        const sectionArray = [this.state.percentFull, 1-this.state.percentFull]
        const colorArray = ['#55B7F8','#F3F7F7']

        return (
            <div className="card" style={{width: 400}}>
                <GaugeChart id="gauge-chart4" 
                nrOfLevels={2}
                arcPadding={0.01} 
                cornerRadius={10} 
                percent={this.state.percentFull}
                textColor={'#55B7F8'}
                animDelay={100}
                arcsLength={sectionArray}
                colors={colorArray}
                />
                <AddButton onClick={() => this.handleAddClick()}/>
            </div>
            
            
        )
    }
}


class Home extends React.Component {
    render () {
        return (
            <div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <WaterChart/>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: '10px'
                }}>
                    <MyChart data={[[0, 1], [1, 2], [2, 4], [3, 2]]}/>
                </div>
                    
                
            </div>
        )
    }
}


ReactDOM.render(
    <Home />,
    document.getElementById('root')
  );