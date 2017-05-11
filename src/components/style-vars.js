import { css } from 'styled-components'

// constants
export const gold = '#D1AD54'
export const silver = '#CCC'
export const gray = '#444'
export const darkgray = '#999'

// mixins
export const clearfix = css`
    &::after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
    }
`
export const container = css`
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
`
