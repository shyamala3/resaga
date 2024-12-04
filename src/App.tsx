import { Button } from '@mui/material';
import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Button variant="contained" component="a" onClick={() => navigate('/add-customer')}>Add Customer</Button>
    </>
  )
}

export default App
