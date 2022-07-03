import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import CreateTask from './CreateTask'
import DisplayTask from './DisplayTask'
import Intro from './Intro'
import Front from './Front'
import Home from './Home'

const AppSwitchNavigator = createSwitchNavigator({
Intro:Intro,
 Front:Front,
 Home:Home,
CreateTask:CreateTask,
DisplayTask:DisplayTask
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

function App() {
  return (
<AppNavigator/>
  );
}

export default App;
