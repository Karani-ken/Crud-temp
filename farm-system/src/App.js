import Dashboard from './Major components/Dashboard';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './Major components/Home';
import Livestock from './Major components/Livestock';
import Records from './Major components/Records';
import AddAnimal from './sub components/Livestock/AddAnimal';
import Header from './sub components/Dashboard/Header';
import FarmProfile from './sub components/Farm/FarmProfile';
import Notification from './sub components/Notification';
import Earnings from './sub components/Earnings/Earnings';
import Farmdetails from './sub components/Farm/Farmdetails';
import Assets from './sub components/Assets/Assets';
import AddAsset from './sub components/Assets/AddAsset';
import AddEarnings from './sub components/Earnings/AddEarnings';
import LivestockOverview from './sub components/Livestock/LivestockOverview'
import AddExpenditures from './sub components/Expenses/AddExpenditures';
import Expenditures from './sub components/Expenses/Expenditures'
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import Navbar from './sub components/Dashboard/Navbar'


 function App() {
    const user = localStorage.getItem("token")
  return (
    <Router>
          <div className='h-screen'>                
                <Header/>
                <Routes>
                 { user &&  <Route path="/" exact element={<Dashboard/>}/> }
                  <Route path="/earnings"  element={<Earnings/>}/>
                  <Route path="/assets"  element={<Assets/>}/>
                  <Route path="/expenditures"  element={<Expenditures/>}/>
                  <Route path="/liabilities"  element={<Earnings/>}/>                           
                  <Route path="/farmprofile"  element={<FarmProfile/>}/> 
                  <Route path="/editfarm/:id" element={<Farmdetails/>}/>
                  <Route path="/newasset" element={<AddAsset/>}/>
                  <Route path="/recordearnings" element={<AddEarnings/>}/>
                  <Route path="/livestock" element={<Livestock/>}/>
                  <Route path="/overview" element={<LivestockOverview/>}/>
                  <Route path="/newanimal" element={<AddAnimal/>}/>
                  <Route path="/expenses" element={<AddExpenditures/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
                  <Route path="/navbar" element={<Navbar/>}/>



                </Routes>
                  
          </div>
    </Router>
        
    
    
  )
}
export default App;
