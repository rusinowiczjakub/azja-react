import React, {Component} from 'react';
import './App.scss';
import Header from "./Component/Header/Header";
import Slider from "./Component/Shared/Slider/Slider";
import Offer from "./Component/Offer/Offer";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Offer/>
            </div>
        );
    }
}

export default App;
