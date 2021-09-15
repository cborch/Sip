import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GaugeChart from 'react-gauge-chart'

function AddButton(props) {
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
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <WaterChart/>
            </div>
        )
    }
}


ReactDOM.render(
    <Home />,
    document.getElementById('root')
  );