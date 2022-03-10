import { createGlobalStyle } from 'styled-components';
import bg_image from './images/bg.jpg';

const GlobalStyles = createGlobalStyle`
   * {
	   margin: 0;
	   padding: 0;
	   box-sizing: border-box;
      font-family: 'Courier New', Courier,   monospace;
   }

   :root {
	   font-size: 16px;
   }

   body {
      background: url(${bg_image}) no-repeat center;
	   background-size: cover;
	   background-position: center;
	   background-repeat: no-repeat;
   }
`;

export default GlobalStyles;
