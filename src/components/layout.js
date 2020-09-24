import React from "react"
import Footer from './footer'

import "../assets/scss/style.scss"

const Layout = ({children, className}) => {
  return (
    <div className="primary-container">
      <main className={"container " + className}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

