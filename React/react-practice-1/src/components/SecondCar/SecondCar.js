import React, {Component} from 'react';

class SecondCar extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={'target whiteBackground'}>
                {item.model} - {item.madeYear} - {item.power} hp
            </div>
        );
    }
}

export default SecondCar;
