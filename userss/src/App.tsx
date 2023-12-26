import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routers } from './routes';
const router = createBrowserRouter(routers)

type Props = {}

function App({}: Props) {
  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}

export default App