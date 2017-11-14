import React from "react";
import Header  from '../Header/Header';
import ChangePasswordScreen from "../ChangePasswordScreen/ChangePasswordScreen";

const App = (props) => {
  return(
    <div className='application_wrapper'>
      <Header/>
      <ChangePasswordScreen/>
    </div>
  )
}

export default App ;
