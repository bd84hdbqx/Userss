import React from 'react'
import Navbar from '../../layout/navbar'
import { Outlet } from 'react-router-dom'

type Props = {}

function UserRout({}: Props) {
  return (
    <><Navbar/>
    <Outlet/>
    </>
  )
}

export default UserRout