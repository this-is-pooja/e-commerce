import React from "react"
import Navbar from './Navbar';
import Footer from './Footer'

const Layout=(props)=>(
  <>
  <Navbar />
 {props.children}
  </>
)
export default Layout;