import React from "react"
import Header from "../components/header"
import Drawer from "../components/drawer"

const drawerWidth = 350;
export default function Home() {
  return (<div>
    <Header drawerWidth={drawerWidth}/>
    <Drawer drawerWidth={drawerWidth}/>
    Hello world!
  </div>)
}
