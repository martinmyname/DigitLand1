import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';

export default function Contact() {
  return (
    <div className="mx-auto mt-5" style={{ maxWidth: '900px' }}>
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">Address Details</MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <form>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='First name' type='text' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Last name' type='text' />
                  </MDBCol>
                </MDBRow>

                <MDBInput label='Company name' type='text' className="mb-4" />
                <MDBInput label='Address' type='text' className="mb-4" />
                <MDBInput label='Email' type='text' className="mb-4" />
                <MDBInput label='Phone' type='text' className="mb-4" />
                <MDBTextArea label='Additional information' rows={4} className="mb-4" />

                <div className="d-flex justify-content-center">
                <MDBBtn size="lg" block>
                <i class="fa fa-send-o" aria-hidden="true">Send</i>
              </MDBBtn>                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
      </MDBRow>
    </div>
  );
}