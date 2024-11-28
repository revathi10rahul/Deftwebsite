import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div  >
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='me-4 text-white'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-white'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
             <img src="../../Assets/deft.png" alt="" style={{height:'20vh',width:'auto'}}/>
              <p className='me-4 text-white'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Products</h6>
              <p>
                <a href='#!' className='text-white'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Useful links</h6>
              <p>
                <a href='#!' className='text-white'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact</h6>
              <p className='me-4 text-white' >
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p className='me-4 text-white'>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p className='me-4 text-white'>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p className='me-4 text-white'>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center text-white p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      2024 ©  <a className='text-white fw-bold' href='https://mdbootstrap.com/'>Deft Lab   </a>
         All rights reserved.
      </div>
    </MDBFooter>
    </div>
  );
}