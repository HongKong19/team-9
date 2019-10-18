import React, {Component} from 'react';

export default class SectionCard extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        
        return (
            <section className='section--card container'>
                <div
                    className='card card--title-p-btn-link card--dark-navy text-center swiper-container swiper-container-fade swiper-container-horizontal'>
                    <div className='swiper-wrapper' style={{
                        transitionDuration: '0ms',
                        display: 'flex',
                        justifyContent: 'center', textAlign: 'center',
                        alignItems: 'center'
                    }}>

                        <div
                            className='card__container swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active'
                            style={{width: 1110, opacity: 1}}>
                            <div className='card__title'>
                                <div className='heading '>
                                    <h2>{this.props.currentSectionCard.header}</h2>
                                </div>
                            </div>
                            <div className='card__paragraph'>
                                <p>{this.props.currentSectionCard.content}</p>
                            </div>
                            <div className='card__button-row'>
                                <div className='button d-inline-block button--lg-orange'>
                                    {/* <button type='button'>
                                        {this.props.currentSectionCard.button}
                                    </button> */}
                                </div>
                            </div>
                            {
                            
                            <div className='card__link-row'>
                                <div className='link link--orange'>
                                    <a className='link__text' href={this.props.currentSectionCard.learnMoreLink}>
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            }
                        </div>

                    </div>
                    <span className='swiper-notification' aria-live='assertive' aria-atomic='true'/>
                </div>
            </section>
        );
    }
}

