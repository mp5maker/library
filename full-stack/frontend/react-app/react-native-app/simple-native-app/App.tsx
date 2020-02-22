import React from 'react';
import { StyleSheet, View } from 'react-native'

/* Components */
import { Navigation } from './components/Navigation'

/* Screens */
import Home from './screens/Home'

interface AppPropsInterface {}
interface AppStateInterface {}

export default class App extends React.Component<AppPropsInterface, AppStateInterface> {
  constructor(props: AppPropsInterface) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigation />
        <Home />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})