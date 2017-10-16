import React from 'react'
import PropTypes from 'proptypes'
import styled from 'styled-components'
import { Link } from 'phenomic'


const Grid = styled.div`
  display: flex;
  @media (max-width: 500px) {
      flex-direction: column;
  }
  @media (min-width: 501px) {
      flex-direction: row;
  }
  justify-content: space-around;
  align-items: stretch;
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
`

const Mascot = styled.img`
  width: 110px;
`

const Description = styled.p`
  padding: 0rem 2rem;
  text-align:left;
  color:#fbfbfb;
  font-size: 1rem;
  font-weight: 400;
  width: 350px;
  margin-top: -10px;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 1px 1px #909090;
`

const FormHeader = styled.p`
  padding: 0rem 2rem;
  text-align:left;
  color:#fbfbfb;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  font-size: 13px,
  margin-bottom: -20px;
  margin-top: 10px;
  letter-spacing: 2px;
  text-shadow: 1px 1px #909090;
`

const FormNote = styled.div`
  width: 350px;
  margin-top: -1.4rem;
  padding: 0 2rem;
  color: #fbfbfb;
  font-size: 0.4rem;
  font-weight: 400;
`

const CinemaHeader = styled.p`
  padding: 0rem 2rem;
  text-align:left;
  color:#fbfbfb;
  font-size: 1rem;
  font-weight: 400;
  font-size: 14px;
  padding-top: 20px;
  border-top: 1px solid #f9f9f9;
`

const Feedback = styled.p`
  padding: 0rem 2rem;
  color:#fbfbfb;
  font-weight: 400;
  text-align: center;
  font-size: 13px;
  margin-top: 40px;
  letter-spacing: 2px;
  text-shadow: 0px 1px #909090;
`

const BoardingSection = ({iframeSrc}) => (
        <Grid>
          <Column>
            <Description>
              <p>
                Mit der neuen App deines Kinos kannst du deinen
                nächsten Kinobesuch
                einfach und unkompliziert planen.
              </p>
              <p>
                Schon bald wird Cinuru dir Filme empfehlen,
                dich an Filmstarts erinnern und tolle Angebote
                für dich bereit halten.
              </p>
            </Description>
            <Mascot src="/assets/mascotHome.png" alt="Hi." />
          </Column>
          <Column>
            <FormHeader>
              Melde dich an und werde Betatester.
            </FormHeader>
            <iframe
              src={iframeSrc}
              width="330px"
              height="270px"
              allowTransparency="true"
            />
            <FormNote>
              * Wir nutzen diese Informationen lediglich,
              um dich zum Betatest der App einladen zu können und
              dich eventuell per Email nach Feedback zur App zu befragen.
              Wenn du die App nicht mehr nutzen möchtest, kannst du sie löschen.
              Zur Löschung deiner Daten aus unserem System,
              sende uns bitte eine Email an: datenschutz@cinuru.com.
            </FormNote>
            <CinemaHeader>
              Cinuru findest du in ausgewählten Kinos.
            </CinemaHeader>
            <Link to="https://www.scala-kino.net">
              <img src="/assets/scalaLogo.png" alt="Scala Lüneburg." style={{width: "100px"}} />
            </Link>
            <Feedback>
                Du hast die App bereits? Was können wir besser machen?
               Was wünscht du dir in einer Kinoapp? Sende uns Feedback.
               <Link to="mailto:support@cinuru.com">
                 support@cinuru.com
               </Link>
            </Feedback>
          </Column>
        </Grid>
)

BoardingSection.propTypes = {
    iframeSrc: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default BoardingSection
