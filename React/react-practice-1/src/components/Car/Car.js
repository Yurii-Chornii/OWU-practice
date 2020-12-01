import React, {Component} from 'react';

class Car extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={'target whiteBackground'}>
                <p>{item.producer} - {item.model} - {item.year} - {item.power} hp</p>
            </div>
        );
    }
}

export default Car;
