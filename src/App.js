import { useEffect } from 'react';
import { petApi } from './api';
import './App.css';
import Button from './components/Button'
import { soemImg, asdkmklas, asdkma , aska} from './images'

function App() {

  useEffect(() => {
    petApi.updatePet()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Button projectType='warningBtn'>Button</Button>
    </div>
  );
}

export default App;
