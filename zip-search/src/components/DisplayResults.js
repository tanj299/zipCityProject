import React, {Component} from 'react'; 

class DisplayResults extends Component {
    render() {
        return (
            <div>
                <ul class="a">
                 <label class="header">
                <p>{this.props.result.city + ", " + this.props.result.state}</p> 
                   <li>State: {this.props.result.state}</li>
                   <li> Location: ({this.props.result.lat + " " + this.props.result.long}) </li>
                    <li>Population (estimated): {this.props.result.population}</li>
                   <li> Total Wages: {this.props.result.wages}</li>
            </label>
            </ul> 
                
            </div>
        );
    }
}

export default DisplayResults; 