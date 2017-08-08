import { css } from 'styled-components';

// constants
export const brand = '#66ABE5';
export const silver = '#EFF2F2';
export const gray = '#B5BFCB';
export const darkgray = '#9CA6B2';
export const black = '#15161B';
export const text = '#1A1D24';

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
`;
export const container = css`
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
`;
