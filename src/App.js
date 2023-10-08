import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Carosouel from "./Components/Carosouel";
function App() {
  const [mode,setMode]=useState(false);
  const modeHandler=()=>{
    setMode(!mode);
  }
  return (
  <>
     <header className={mode===false?"ligh transition":"dark transition"}>
      <Navbar mode={modeHandler} mod={mode}/>
     </header>
   <main className={mode===false?"text-dark transition":"text-dark transition"}>
    <section>
    <Carosouel/>
    </section>
   </main>
  </>
  );
}
export default App;
