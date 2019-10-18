import React, { Component } from 'react';
import Carousel from '../../components/modules/Carousel/Carousel';
import InsuranceSection from '../../components/basics/InsuranceSection/InsuranceSection';
import CardInsurance  from '../../components/basics/Card/CardInsurance/CardInsurance';
import ServiceData from '../../components/basics/ServiceData/ServiceData';


class MainPage extends Component {
    render() {
        return (
            <div style={{ margin: '0px -15px' }}>
                <Carousel />
                <ServiceData/>

            </div>
        );
    }
}

export default MainPage;
