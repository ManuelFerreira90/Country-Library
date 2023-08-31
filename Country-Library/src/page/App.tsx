import { Wrapper } from '../assets/components/App.style';
import Country from '../assets/components/Country/Country';
import useAppContext from '../assets/hook/useAppContext';

function App() {

  const {
    darkMode
  } = useAppContext();

  return (
    <Wrapper background={darkMode ? 'primary' : 'secondary'}>
      <Country />
    </Wrapper>
  );
}

export default App;