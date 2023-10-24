import logo from './logo.svg';
import './App.css';
import  AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchBar from './components/SearchBar';
import Typography from '@mui/material/Typography';
import Carlist from './components/Carlist';
import Accueil from './components/Accueil';
function App() {
  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar >
          <Accueil></Accueil>
          <Typography variant="h6" className='titre' >Carshop</Typography>
          <SearchBar className="search-bar"></SearchBar>
        </Toolbar>
      </AppBar>
      <Carlist></Carlist>
    </div>
  );
}

export default App;
