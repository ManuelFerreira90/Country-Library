import { Wrapper } from '../assets/components/App.style';
import Country from '../assets/components/Country/Country';
import Search from '../assets/components/Search/Search';
import useAppContext from '../assets/hook/useAppContext';

function App() {

  const {
    darkMode
  } = useAppContext();

  return (
    <Wrapper background={darkMode ? 'primary' : 'secondary'}>
      <Search />
      <Country />
    </Wrapper>
  );
}

export default App;