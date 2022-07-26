import React from "react"
import { Route } from "react-router-dom"

export const ApplicationViews = () => {
    return <>
    <main>
        <Route exact path ="/nurseries">
            <></>
        </Route>
        <Route exact path ="/distributors">
            <></>
        </Route>
        <Route exact path ="/retailers">
            <></>
        </Route>
    </main>
    </>
}