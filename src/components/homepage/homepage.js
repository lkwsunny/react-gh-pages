import React, { Component } from 'react';
import './homepage.css'
import DatePicker from '@bit/nexxtway.react-rainbow.date-picker';
import DailyPick from './dailyPick'
import PieChart from './pie-chart'
import Grid from '@material-ui/core/Grid';


class Homepage extends Component {
    constructor(){
        super();
        console.log(this.state.date)
    }
    state = {
        date: new Date()        
    }
    

    handleLeftClick = () => {

        this.setState({ date:new  Date(this.state.date.setDate(this.state.date.getDate() - 1)) })

    }

    handlRightClick = () => {
        this.setState({ date:new  Date(this.state.date.setDate(this.state.date.getDate() + 1)) })
    }
    
    render() {
        return (
            <div className="homepage-container">
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <div className="left-icon" onClick={this.handleLeftClick}>
                            <i className="fas fa-angle-left"></i>
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                            <DatePicker
                                value={this.state.date}
                                onChange={value => this.setState({ date: value })}
                                hideLabel={true} />

                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <div className="right-icon" onClick={this.handlRightClick}>
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </Grid>
                </Grid>

                <PieChart dateProp={this.state.date}/>
                <DailyPick dateProp={this.state.date} />
            </div>
        )
    }
}

export default Homepage;