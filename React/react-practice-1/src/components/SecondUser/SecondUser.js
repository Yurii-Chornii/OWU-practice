import React, {Component} from 'react';

class SecondUser extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={'target whiteBackground'}>
                <p>{item.name} - {item.age} y.o. - {item.status.toString()}</p>
            </div>
        );
    }
}

export default SecondUser;
