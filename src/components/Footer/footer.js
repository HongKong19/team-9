import React, {Component} from 'react';



class Footer extends Component {
  render() {
    return (
        <footer className='footer'>
          <div className='footer__sitemap'>
            <div className='footer__sitemap-container container'>
              <div className='row justify-content-center'>
                <div className='col-10'>
                  <div className='row'>
                    <div className='col-7'>
                      <nav className='footer__nav row'>
                        <div className='col-4'>
                          <div className='footer__nav-title'>About</div>
                          <div className='link link--white footer__nav-link'>
                            <a className='link__text' href='http://www.google.com/'>Company</a>
                          </div>
                          <div className='link link--white footer__nav-link'>
                            <a className='link__text' href='http://www.google.com/'>Insurances</a>
                          </div>
                          <div className='link link--white footer__nav-link'>
                            <a className='link__text' href='http://www.google.com/'>Contact Us</a>
                          </div>
                        </div>
                        <div className='col-4'>
                          <div className='footer__nav-title'>Premium Offers</div>
                          <div className='link link--white footer__nav-link'>
                            <a className='link__text' href='http://www.google.com/'>Golden band</a>
                          </div>
                          <div className='link link--white footer__nav-link'>
                            <a className='link__text' href='http://www.google.com/'>Silver band</a>
                          </div>
                          <div className='link link--white footer__nav-link'>
                            <a className='link__text' href='http://www.google.com/'>Bronze band</a>
                          </div>
                        </div>
                        <div className='col-4'>
                          <div className='footer__nav-title'>Support</div>
                          <div className='link link--white footer__nav-link'>
                            <a className='link__text' href='http://www.google.com/'>Register</a>
                          </div>
                          <div className='link link--white footer__nav-link'>
                            <a className='link__text' href='http://www.google.com/'>Insurance Policies</a>
                          </div>
                          <div className='link link--white footer__nav-link'>
                            <a className='link__text' href='http://www.google.com/'>License</a>
                          </div>
                        </div>
                      </nav>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer__copyright'>
            <div className='footer__copyright-container container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='row align-items-center'>
                    <div className='col-2'>
               
                    </div>
                    <div className='col-auto'>
                      <div className='footer__copyright-text'>©
                        
                        2019 Our Brand Name, All Rights Reserved.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
