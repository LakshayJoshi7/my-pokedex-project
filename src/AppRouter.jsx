import React from 'react'
import {Routes ,Route, Navigate} from "react-router-dom"
import {Navigation} from "./components/Navigation"
import {HomePage,SearchPage,PokePage} from "./pages"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path = "/" element={<Navigation/>}>
            <Route index element={<HomePage/>}/>
            <Route path='pokemon/:id' element={<PokePage/>}/>
            <Route path='search' element={<SearchPage/>}/>
        </Route>

        <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}
