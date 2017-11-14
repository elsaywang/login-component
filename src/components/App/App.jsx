import React from "react";
import Header  from '../Header/Header';
import Footer from '../Footer/Footer';
import ChangePasswordScreen from "../ChangePasswordScreen/ChangePasswordScreen";

const App = (props) => {
  return(
    <div className='application_wrapper'>
      <Header/>
      <ChangePasswordScreen/>
      <Footer/>
    </div>
  )
}

export default App ;
