import './App.css';
import CrudRouting from './LiveCrud/CrudRouting';
// import MyRoute from './HomeApi/MyRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
     <ToastContainer />
      {/* <MyRoute/> */}
      <CrudRouting/>
    </>
  );
}

export default App;
