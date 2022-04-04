import { createGlobalStyle } from 'styled-components';
import bg_image from './images/bg.jpg';

const GlobalStyles = createGlobalStyle`
   * {
	   margin: 0;
	   padding: 0;
	   box-sizing: border-box;
      font-family: 'Courier New', Courier;
   }

   :root {
	   /* font-size: 16px; */
   }

   body {
      background: url(${bg_image}) no-repeat center;
	   background-size: cover;
	   background-position: center;
	   background-repeat: no-repeat;
      width: 100vw;
      height: 100vh;
      color: white;
      font-size: 16px;
      overflow: hidden;
   }
`;

export default GlobalStyles;
