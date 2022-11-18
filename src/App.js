import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import { public_pages } from "./utils/consts";

function App() {
  return (
    <>
      <Routes>
        {
          public_pages.map((m,index)=>{
            return <Route key={index} path={m.path} element={m.element}/>
          })
        }
      </Routes>
    </>
  );
}

export default observer(App);