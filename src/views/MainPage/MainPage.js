import React, { Component } from 'react';
import Carousel from '../../components/modules/Carousel/Carousel';
import AddYourGoal from '../../components/basics/AddYourGoal/AddYourGoal';


class MainPage extends Component {
    render() {
        return (
            <div style={{ margin: '0px -15px' }}>
                <Carousel />
                <AddYourGoal/>

            </div>
        );
    }
}

export default MainPage;
