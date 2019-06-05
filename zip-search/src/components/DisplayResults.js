import React, {Component} from 'react'; 

class DisplayResults extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.result.city + ", " + this.props.result.state}</h1>
                
                <h2>{this.props.result.lat + " " + this.props.result.long} <br/>
                    {this.props.result.population} <br/>
                    {this.props.result.wages}
                    </h2>
            </div>
        );
    }
}

export default DisplayResults; 