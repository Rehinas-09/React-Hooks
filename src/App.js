
import React, { useReducer } from 'react';
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
import CounterThree from './Component/CounterThree';
import Ca from './Component/Ca';
import Cd from './Component/Cd';
import Cb from './Component/Cb';
import Cc from './Component/Cc';
import UseReducer from './Component/UseReducer';
import TodoList from './Component/TodoList';
import DataFetchingOne from './Component/DataFetchingOne';
import DtaFetchingTwo from './Component/DtaFetchingTwo';
import ParentComponent from './Component/ParentComponent';
import Parent from './Component/Parent';
import Counter2 from './Component/Counter2';
import FocusInput from './Component/FocusInput';
import ClassTimer from './Component/ClassTimer';
import HookTimer from './Component/HookTimer';
import AccessDom from './Component/AccessDom';
import DocTitle from './Component/DocTitle';
import DocTitleTwo from './Component/DocTitleTwo';
import COne from './Component/COne';
import CTwo from './Component/CTwo';

// export const countContext=React.createContext()
// const initialState=0
// const reducer=(state,action)=>{ 
//   switch(action){
//      case `incremnet`:
//       return state+1
//      case `decrement`:
//       return state-1
//      case `reset`:
//       return initialState
//       default: 
//         return state
//   }
// }  
 
function App() {         
//    const [count,dispatch]=useReducer(reducer,initialState)
    
  return (  
    // <countContext.Provider vlaue={{countState:count,countDispatch:dispatch}}>
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
         {/* <CounterTwo/> */}
         {/* <CounterThree/> */}
         {/* <countContext.Provider value={{countSate:count,countDispatch:dispatch}}>
         <Ca/>        
         <Cb/>      
         <Cc/>
         </countContext.Provider> */}
        {/* <useReducer/> */}
         {/* <UseReducer/> */}
         {/* <TodoList/> */}               
         {/* <CounterOne/> */}      
         {/* <CounterTwo/> */}
         {/* <CounterThree/> */}
         {/* <Ca/> 
         <Cb/>
         <Cc/> */}
         {/* <DataFetchingOne/> */}
         {/* <DtaFetchingTwo/> */}
         {/* <ParentComponent/> */}
         {/* <Parent/>    */}
         {/* <Counter2/> */}
         {/* <FocusInput/> */}
         {/* <ClassTimer/>  */}
         {/* <HookTimer/> */}
         {/* <AccessDom/> */}
         {/* <DocTitle/>
         <DocTitleTwo/> */}
         <COne/>
         <CTwo/>   
           </div>     
    // </countContext.Provider>                        
  );                                     
}  
export default App;    