
import React from 'react';
import firebase from "../../Firebase/firestore";
import CanvasJSReact from './canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class PieChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      date: this.props.dateProp
    }
  }

  initDataListener = () =>{

    firebase.firestore().collection('itemStorage').onSnapshot(snapShot => {
    const count = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })).filter(data => {
        return (new Date(data.date).getDate() === new Date(this.state.date).getDate() &&  data.remove ==="true")
    }).reduce((acc,it) => {
      acc[it.itemName] = acc[it.itemName] + 1 || 1;
      return acc;
    }, {});

    const data = Object.keys(count).map(key => ({ name: key, 'y': count[key]}))
    this.setState({data})
  
  })
}
  
  componentDidMount(){
    this.initDataListener();
  
  }

  componentDidUpdate(){
    this.initDataListener();

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dateProp !== this.props.dateProp) {
        this.setState({
          date: nextProps.dateProp
        });
        console.log(this.state.data)
      }
  }


render(){
  //console.log(this.state.data)
  const options = {
        height: 300,
        animationEnabled: true,

        data: [{
            type: "doughnut",
            radius: "90%",
            showInLegend: false,
            indexLabel: "{name}: #percent%",
			percentFormatString: "#0.##",
            dataPoints: this.state.data
        }]
    }
    return (
        <div>
            <CanvasJSChart options={options}/>
        </div>
    );

}
}
export default PieChart