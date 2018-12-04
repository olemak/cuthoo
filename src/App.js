import React, { Component } from "react";
import "./App.css";
import { SkillList } from "./Features/Skill/skill-list.component";

import { skills } from "./data/skills";

// import { SkillImprovementContext } from "./Features/Skill/skill-improvement.context";

class App extends Component {
    render() {
        /* <SkillImprovementContext> */
        return (
            <div className="App">
                <SkillList skills={skills} />
            </div>
        );
        /* </SkillImprovementContext> */
    }
}

export default App;
