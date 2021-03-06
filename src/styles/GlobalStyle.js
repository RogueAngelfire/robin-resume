import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
:root{
  --primary-color: #007bff;
  --primary-color-light: #057FFF;
  --secondary-color: #6c757d;
  --background-dark-color: #10121A;
  --background-dark-grey: #191D2B;
  --border-color: #2e344e;
  --background-light-color: #F1F1F1;
  --background-light-color-2: rgba(3,127,255,.3);
  --white-color: #FFF;
  --font-light-color: #a4acc4;
  --font-dark-color: #313131;
  --font-dark-color-2: #151515;
}
/* This is currently Removed as it is playing with current sizes on original design.
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
}*/

body{
  background-color: var(---background-dark-color);
  color: var(--font-light-color);
}

a{
  font-family: inherit;
  color: inherit;
  font-size: inherit;
}

`;

export default GlobalStyle;