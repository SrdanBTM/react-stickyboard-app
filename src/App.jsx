

import AppContent from './AppContent.jsx'
import MainProvider from './providers/MainProvider.jsx'
import ClickOutsideElementProvider from './providers/ClickOutsideElementProvider.jsx'
import AppModalsProvider from './providers/AppModalsProvider.jsx'
import ThemeProvider from './providers/ThemeProvider.jsx'


export default function App() {

  return (
    <ThemeProvider>
      <AppModalsProvider>
        <ClickOutsideElementProvider>
          <MainProvider>

              <AppContent />

          </MainProvider>
        </ClickOutsideElementProvider>
      </AppModalsProvider>
    </ThemeProvider>
  )
}