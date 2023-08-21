import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import { HomeAdmin } from './pages/admin/HomeAdmin'
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HomeAdmin />
    </ThemeProvider>
  </React.StrictMode>
)
