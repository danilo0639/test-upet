import { Route, Routes } from 'react-router-dom';
import Form from './components/pages/Form';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ThanksView from './components/pages/ThanksView';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/message" element={<ThanksView />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;