import React, { Component } from 'react';
import SectionCard from '../../basics/Card/SectionCard/SectionCard';
import Banner001 from '../../../images/main_page/banner.jpg';


class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            slideSectionCard: {

                0: {
                    header: 'HIA',
                    content: 'EMPOWERING HEALTH   ',
                    // button: 'Logged In',
                    showLearnMore: false

                },

            },
            currentIndex: 0,

            
        };

    }



    render() {
        return (
            <div>

                <div className='carousel carousel--hero-slider carousel--grey-bg swiper-container swiper-container-horizontal'>
                    <div >
                        <div className='carousel__container swiper-wrapper'>
                            <div className='carousel__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active'
                                style={{ width: '100%' }}>
                                <div className='carousel__item-img bg bg--cover-center' style={{ backgroundImage: `url(${Banner001})` }} />
                            </div>
                        </div>
                        <SectionCard currentSectionCard={this.state.slideSectionCard[this.state.currentIndex]} />
                        <span className='swiper-notification' aria-live='assertive' aria-atomic='true' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;


