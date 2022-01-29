import { RouteComponentProps } from "@reach/router"
import React, { ReactNode } from "react"
import withRoot from '../context/withRoot'
import AppFooter from "../modules/views/AppFooter"
import AppAppBar from "../modules/views/AppAppBar"

interface ILayoutProps extends RouteComponentProps {
  children?: ReactNode
}

const Layout = (props: ILayoutProps) => {
  return (
    <React.Fragment>
      <AppAppBar />
      {props.children}
      <AppFooter />
    </React.Fragment>
  )
}
export default withRoot(Layout)
