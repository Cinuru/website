import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'


const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  justify-content: center;
  align-items: center;
`

const FormHeader = styled.p`
  @media (min-width: 501px) {
    padding: 0rem 2rem;
    margin-top: 0;
  }
  @media (max-width: 501px) {
    padding: 0;
    margin-top: 20px;
  }
  color:#fbfbfb;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: -20px;
  letter-spacing: 2px;
`

const FormNote = styled.div`
  width: 320px;
  text-align: center;
  margin-top: -1.4rem;
  padding: 0 1rem;
  color: #fbfbfb;
  font-size: 7px;
`

const BoardingSectioniOS = ({iframeSrc, formHeader, formNote}) => (
          <Column>
            <FormHeader>
              {formHeader}
            </FormHeader>
            <iframe
              src={iframeSrc}
              width="330px"
              height="270px"
              allowTransparency="true"
            />
            <FormNote>
              {formNote}
            </FormNote>
          </Column>
)

BoardingSectioniOS.propTypes = {
    iframeSrc: PropTypes.string.isRequired,
    formHeader: PropTypes.string,
    formNote: PropTypes.string,
}

export default BoardingSectioniOS
