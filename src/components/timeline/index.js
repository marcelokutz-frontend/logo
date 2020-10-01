import React, { Component } from "react";
import { Link } from "react-scroll";
import './style.scss';

class Timeline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }
  
    toggle(e){
        this.setState({active: !this.state.active});
    }

    render() { 
        return (
            <div className={(this.state.active ? `timeline__card timeline__card--${this.props.layoutColor} active` : `timeline__card timeline__card--${this.props.layoutColor}`)} name={`timeline__card-${this.props.number}`}>
                <Link to={`timeline__card-${this.props.number}`} spy={false} smooth={true} offset={-150} duration={500} title={this.props.title} onClick={e => this.toggle(e)}>
                    <div className="timeline__card__header">
                        <h2><span>{this.props.number}.</span>{this.props.title}</h2>
                        <div className="timeline__card__image">  
                            <img src={this.props.icon} alt={this.props.title} />
                        </div>
                    </div>
                </Link>
                <div className="timeline__description">
                     <h2>{this.props.title}</h2>
                     <div dangerouslySetInnerHTML={{__html: this.props.content}} />
                </div>
            </div>
        )
    }
}
export default Timeline;
