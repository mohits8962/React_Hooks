import './App.css';
import { ErrorBoundary } from 'react-error-boundary'

// UseState Hook ********************************
// import UseStateHook from "./Components/01_UseStateHook/01_UseStateHook/00_UseStateHook"
// import UseStateWithPrevState from './Components/02_UseStateWithPrevState/00_UseStateWithPrevState';
// import UseStateWithObject from './Components/03_UseStateWithObject/00_UseStateWithObject';
// import UseStateWithArray from './Components/04_UseStateWithArray/UseStateWithArray';
// **********************************************

// useEffect Hook *******************************
// import UseEffect from './Components/02_UseEffectHook/01_UseEffectHook/00_UseEffect';
// import RunEffectOnlyOnce from "./Components/02_UseEffectHook/02_RunEffectOnlyOnce/00_RunEffectOnlyOnce"
// import UseEffectWithCleanUp from './Components/02_UseEffectHook/03_UseEffectWithCleanUp/00_UseEffectWithCleanUp';
// import UseEffectWithIncorrectDependency from './Components/02_UseEffectHook/04_UseEffectWithIncorrectDependency/00_UseEffectWithIncorrectDependency';
// import FetchingDataWithUseEffect from './Components/02_UseEffectHook/05_FetchingDataWithUseEffect/00_FetchingDataWithUseEffect';
// ************************************************

// UseContext Hook ********************* 
// import ContextHook from './Components/03_UseContextHook/01_ContextHook/00_ContextHook';

// UseReducer Hook ********************* 
// import UseReducerHook from './Components/04_UseReducerHook/01_ReducerHook/00_UseReducerHook';
// import UseReducerWithUseContext from './Components/04_UseReducerHook/02_UseReducerWithUseContext/00_UseReducerWithUseContext';
// import FetchingDataWithUseReducer from './Components/04_UseReducerHook/03_FetchingDataWithUseReducer/00_FetchingDataWithUseReducer';

// CallBack Hook ********************* 
// import CallBackHook from './Components/05_UseCallBackHook/01_CallBackHook/CallBackHook';

// UseMemo Hook ********************* 
// import MemoHook from './Components/06_UseMemoHook/01_MemoHook/00_MemoHook';

// UseRef Hook ********************* 
// import RefHook from './Components/07_UseRefHook/01_RefHook/00_RefHook';

// UseCustom Hook ********************* 
import CustomHook from './Components/08_UseCustomHook/01_UseCustomHook/00_CustomHook';





function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}


function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <div className="App">
        {/* ***************** UseState Hook ********************* */}
        {/* <UseStateHook /> */}
        {/* <UseStateWithPrevState/> */}
        {/* <UseStateWithObject/> */}
        {/* <UseStateWithArray/> */}
        {/* ***************************************************** */}

        {/* ***************** UseEffect Hook ********************* */}
        {/* <UseEffect /> */}
        {/* <RunEffectOnlyOnce /> */}
        {/* <UseEffectWithCleanUp/> */}
        {/* <UseEffectWithIncorrectDependency/> */}
        {/* <FetchingDataWithUseEffect/> */}

        {/* ***************** UseContext Hook ********************* */}
        {/* <ContextHook /> */}

        {/* ***************** UseContext Hook ********************* */}
        {/* <UseReducerHook/> */}
        {/* <UseReducerWithUseContext/> */}
        {/* <FetchingDataWithUseReducer/> */}

        {/* *****************  CallBack Hook ********************* */}
        {/* <CallBackHook/> */}

        {/* *****************  UseMemo Hook ********************* */}
        {/* <MemoHook /> */}

        {/* *****************  UseRef Hook ********************* */}
        {/* <RefHook /> */}

        {/* *****************  UseCustom Hook ********************* */}
        <CustomHook />


      </div>
    </ErrorBoundary>
  );
}

export default App;
