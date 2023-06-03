import {Navigate, Route, Routes} from "react-router-dom";
import React from 'react';

import {LoginPage, CrmPage} from "./pages";
import {AuthRequiredLayout, MainLayout} from "./layaots";

function App() {
  return (
    <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'crm'}/>}/>

                    <Route element={<AuthRequiredLayout/>}>
                        <Route path={'crm'} element={<CrmPage/>}/>
                    </Route>

                    <Route path={'login'} element={<LoginPage/>}/>
                </Route>
            </Routes>
    </div>
  );
}

export default App;
