import React, {Component} from 'react'; 

class DisplayResults extends Component {
    render() {
        return (
            <div>
                <label>
                <p>{this.props.result.city + ", " + this.props.result.state}</p>
                </label> <br/>  
                <label><p2 id="info">State: {this.props.result.state}<br/>
                    Location: ({this.props.result.lat + " " + this.props.result.long}) <br/>
                    Population (estimated): {this.props.result.population} <br/>
                    Total Pages: {this.props.result.wages}
                     </p2></label>
            </div>
        );
    }
}

export default DisplayResults; 