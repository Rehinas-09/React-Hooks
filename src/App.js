
import React from 'react';
import './App.css';
import ClassCounter from './Component/ClassCounter';
import ClassCounterOne from './Component/ClassCounterOne';
import ClassMouse from './Component/ClassMouse';
import ComponentC from './Component/ComponentC';
import Datafetching from './Component/Datafetching';
import ExampleOfUseState from './Component/ExampleOfUseState';
import FetchData from './Component/FetchData';
import HookCounter from './Component/HookCounter';
import HookCounter2 from './Component/HookCounter2';
import HookCounterFour from './Component/HookCounterFour';
import HookCounterOne from './Component/HookCounterOne';
import HookCounterThree from './Component/HookCounterThree';
import HookMouse from './Component/HookMouse';
import IntervalClassCounter from './Component/IntervalClassCounter';
import IntervalHookCounter from './Component/IntervalHookCounter';
import MouseContainer from './Component/MouseContainer';
// export const UserContext=React.createContext()
// export const ChannelContext=React.createContext()
import userContext  from './Component/UserContext';
import ProfileClass from './Component/ProfileClass';
import CounterOne from './Component/CounterOne';
import CounterTwo from './Component/CounterTwo';
 
function App() {    
  // const user={
  //   name:"Rehi",
  //   email:'rehinas@example.com'
  // }  
  return (
    <div className="App">
      {/* <ClassCounte   r/>   */}  
       {/* <HookCounter2/>  */}
       {/* <HookCounterThree/>    */}
        {/* <HookCounterFour/>     */}
         {/* <ClassCounterOne/>   */}
        {/* <HookCounterOne/>   */}
      {/* <HookCounterOne/>  */}   
      {/* <ClassCounterOne/> */}  
      {/* <ClassMouse/>  */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <ExampleOfUseState/> */}  
       {/* <Datafetching/>  */}                
      {/* <FetchData/> */}     
      {/* <ExampleOfUseState/> */}  
       {/* <UserContext.Provider value={'rehinas'}>  
        <ChannelContext.Provider value={'ajmal'}>
                  <ComponentC/>       
        </ChannelContext.Provider>   
       </UserContext.Provider> */}
       {/* <userContext.Provider value={user}>
        <ProfileClass/>
       </userContext.Provider> */}
         {/* <CounterOne/>                                      */}
         <CounterTwo/>
    </div>                       
  );                                   
}                       
export default App;       
                            