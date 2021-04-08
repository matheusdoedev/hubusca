import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    *,
    *:before,
    *:after,
    ul,
    ol,
    dl,
    p {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    a,
    button {
        text-decoration: none;
        color: initial;
        padding: 0.625rem;
    }

    a:hover,
    button:hover {
        cursor: pointer;
        text-decoration: none;
    }

    button {
        border: none;
        background: none;
    }

    body {
        min-height: 100vh;
    }

    img {
        display: block;
        width: 100%;
    }

    ul {
        list-style: none;
    }

    fieldset {
        border: none;
    }

    input,
    select {
        border: none !important;
    }
`;
