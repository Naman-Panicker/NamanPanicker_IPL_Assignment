import { Route, Routes } from "react-router";
import Topbar from "./components/Topbar";
import PlayerTable from "./components/PlayerTable";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComp from "./components/ErrorComp";
import TeamCard from "./components/TeamCard";
import Stats from "./components/Stats";



function App(){



  
  

  return(
    
    <>
    
    <Topbar/>

    <Routes>
      <Route path="/players" element={<ErrorBoundary fallback={<ErrorComp/>}><PlayerTable/></ErrorBoundary>}/>
      <Route path="/" element={<ErrorBoundary fallback={<ErrorComp/>}><TeamCard/></ErrorBoundary>}/>
      <Route path="/stats/:tid" element={<ErrorBoundary fallback={<ErrorComp/>}><Stats/></ErrorBoundary>}/>
    </Routes>

    </>
    


  )
}


export default App;