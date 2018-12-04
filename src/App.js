import React, { Component } from "react";
import "./App.css";
import { SkillList } from "./Features/Skill/skill-list.component";

import { skills } from "./data/skills";

import { SkillImprovementContext } from "./Features/Skill/skill-improvement.context";
import { skillImprovements } from "./data/skill-improvements";

class App extends Component {
    render() {
        return (
            <div className="App">
                <SkillImprovementContext.Provider value={skillImprovements}>
                    <SkillList skills={skills} />
                </SkillImprovementContext.Provider>
            </div>
        );
    }
}

export default App;
