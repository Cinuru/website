import React, { PropTypes } from "react"
// import styled from 'styled-components'

import Container from "./Container"

const ErrorPage = ({ error, errorText }) => (
    <Container head={{title: 'Error'}}>
        <div>
            <div>{"😱 Oooops!"}</div>
            <div>
                <p>
                    <strong>{ error }</strong>
                    { errorText }
                </p>
                { error === 404 &&
                    <div>
                        { "It seems you found a broken link. " }
                        { "Sorry about that. " }
                        <br />
                        { "Do not hesitate to report this page." }
                    </div>
                }
            </div>
        </div>
    </Container>
)

ErrorPage.propTypes = {
    error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    errorText: PropTypes.string,
}

ErrorPage.defaultProps = {
    error: 404,
    errorText: "Page Not Found",
}

export default ErrorPage
