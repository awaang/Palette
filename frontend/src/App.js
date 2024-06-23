import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchBar from './components/SearchBar';
import ResultsPage from './components/ResultsPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={SearchBar} />
            <Route path="/results" component={ResultsPage} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;