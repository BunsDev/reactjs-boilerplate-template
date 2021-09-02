import { ThemeProvider } from 'styled-components';

import theme from "../themes";
import { GlobalStyles } from './GlobalStyles';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;