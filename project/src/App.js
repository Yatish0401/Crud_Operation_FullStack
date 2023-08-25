
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Signln from './components/Signln';
import UserHome from './components/UserHome';
import SignUp from './components/SignUp';
import Update from './components/Update';
import ViewUser from './components/ViewUser';

import Delete from './components/Delete';
import Protect from './components/Protect';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import EditProduct from './components/EditProduct';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signln/>}></Route>
       <Route path='/userhome' element={<Protect Child={UserHome}/>}/>
       <Route path='/signup' element={<SignUp/>}></Route>
       <Route path= '/viewuser' element={<Protect Child={ViewUser}/>}/>
       <Route path='/update' element={<Protect Child={Update}/>}/>
       <Route path='/delete' element={<Protect Child={Delete}/>}/>
       <Route path='/addproduct' element={<Protect Child={AddProduct}/>}/>
       <Route path='/viewproduct' element={<Protect Child={ViewProduct}/>}/>
       <Route path='/editproduct' element={<Protect Child={EditProduct}/>}/>
       
     
    </Routes>
    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
