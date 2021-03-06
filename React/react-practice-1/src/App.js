import React, {Component} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import SecondUsers from "./components/SecondUsers/SecondUsers";
import Cars from "./components/Cars/Cars";
import SecondCars from "./components/SecondCars/SecondCars";

class App extends Component {


    render() {
        return (
            <div>
                <div className={'target defaultBackground'}>
                    <h3>Users</h3>
                    <Users/>
                </div>
                <div className={'target defaultBackground'}>
                    <h3>Second users</h3>
                    <SecondUsers/>
                </div>
                <div className={'target defaultBackground'}>
                    <h3>Cars</h3>
                    <Cars/>
                </div>
                <div className={'target defaultBackground'}>
                    <h3>Second cars</h3>
                    <SecondCars/>
                </div>
            </div>
        );
    }

}

export default App;
