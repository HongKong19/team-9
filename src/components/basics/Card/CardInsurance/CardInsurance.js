import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CardInsurance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section2data: [
                {
                    cardContent: 'HEALTH INSURANCE',
                    link: 'http://www.google.com/',
                    showLink: false
                },
                {
                    cardContent: 'TRAVEL INSURANCE',
                    link: 'http://www.google.com/',
                    showLink: false
                },
                {
                    cardContent: 'LIFE INSURANCE',
                    link: 'http://www.google.com/',
                    showLink: false
                }
            ],

        }
        this.generateInsuranceCards = this.generateInsuranceCards.bind(this);
    }




    generateInsuranceCards(section2data) {
        console.log(section2data)
        return section2data.map((eachInfo, i) => {
            return <div
                key={'questionCard_' + i}
                className='carousel__item swiper-slide'
                style={{ marginRight: '15px' }}>
                <Link to="/Form" style={{ color: "Black" }}>
                    <div className='card card--question'>
                        <div className='card__container' >
                            <div className='card__content'>
                                <p style={{textAlign:"center"}}>{eachInfo.cardContent}</p>
                            </div>
                        </div>
                    </div>
                </Link>
                {
                    eachInfo.showLink
                    &&
                    <div className='link link--orange carousel__link mt-3 ml-4'>
                        <a className='link__text' href={eachInfo.link}>View Answers</a>
                    </div>
                }
            </div>
        });
    }



    render() {
        let insuranceCards = this.generateInsuranceCards(this.state.section2data);
        return (
            <div className='carousel__container swiper-wrapper '>
                {insuranceCards}
            </div>
        );
    }
}

export default CardInsurance;
