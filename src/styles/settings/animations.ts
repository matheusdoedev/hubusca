import { createGlobalStyle } from "styled-components";

export const Animations = createGlobalStyle`
    @keyframes fade-down {
        from {
            opacity: 0;
            transform: translateY(-40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
`;
