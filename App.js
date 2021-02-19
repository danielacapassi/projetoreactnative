// import React from 'react';
// import { View, Text, StatusBar} from 'react-native';

// import Login from "./src/screens/Login";

// function App() {
// return (
// <View>

// <StatusBar />
// <Login />

// </View>
// )
// }

// export default App;
import React from 'react';
import { View, Text, StatusBar,} from 'react-native';

// import Login from './src/screens/Login';
// import Tarefas from './src/screens/tarefas';
import Routes from './src/routes';


function App() {
  return (
    <View>
      <StatusBar />
     
      <Routes />
    </View>
  )
}

export default App;