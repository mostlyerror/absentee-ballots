import React from "react"
import Layout from "../components/layout"
import BallotForm from "../components/ballotform"

const HomePage = ({ data }) => {
  return (
    <Layout>
      <div className="app">
        <div className="app-container">
          <header>
            <h1 className="headline">
              Tuesday, November 3rd is <span>Election Day!</span>
            </h1>
            <p className="sub-headline">
              Not sure you'll make it to the booth?
            </p>
            <p className="sub-headline">
              Request an absentee ballot below and{" "}
              <span className="underline">protect your right to vote.</span>{" "}
              Receive confirmation by text in seconds.
            </p>
          </header>
          <BallotForm />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
