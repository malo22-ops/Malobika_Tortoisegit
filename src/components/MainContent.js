import React from "react"
import Todo from "./Todo.js"

function MainContent () {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }


        return (
            <div>
                <h1>Good {timeOfDay}</h1>
                <Todo/>
            </div>
        )
}

export default MainContent
