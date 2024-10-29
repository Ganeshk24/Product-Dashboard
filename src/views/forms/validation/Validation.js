import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'


const Validation = () => {
  return (
    <CRow>
  
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Enter</strong> <small>Product details</small>
          </CCardHeader>
          <CCardBody>
              <CForm className="row g-3 needs-validation">
                <CCol md={4}>
                  <CFormLabel htmlFor="validationServer01">Product Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="validationServer01"
                    // defaultValue="Mark"
                    valid
                    required
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationServer02">SKU</CFormLabel>
                  <CFormInput
                    type="text"
                    id="validationServer02"
                    // defaultValue="Otto"
                    valid
                    required
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationServerUsername">Price</CFormLabel>
                  <CInputGroup className="has-validation">
                    <CFormInput
                      type="number"
                      id="validationServerUsername"
                      defaultValue=""
                      aria-describedby="inputGroupPrepend03"
                      invalid
                      required
                    />
                    <CFormFeedback invalid>Please enter price.</CFormFeedback>
                  </CInputGroup>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="validationServer03">Quantity </CFormLabel>
                  <CFormInput type="text" id="validationServer03" invalid required />
                  <CFormFeedback invalid>Please provide a valid Quantity.</CFormFeedback>
                </CCol>
                <CCol xs={12}>
                  <CFormCheck
                    type="checkbox"
                    id="invalidCheck"
                    label="Agree to terms and conditions"
                    invalid
                    required
                  />
                  <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
                </CCol>
                <CCol xs={12}>
                  <CButton color="primary" type="submit">
                    Submit form
                  </CButton>
                </CCol>
              </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Validation
