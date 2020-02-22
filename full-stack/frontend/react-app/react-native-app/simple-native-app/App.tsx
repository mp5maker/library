import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import * as Font from 'expo-font';

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

  componentDidMount() {
    Font.loadAsync({
      'fira-sans': require(`./assets/fonts/FiraSans/FiraSans-Regular.ttf`),
      'fira-sans-bold': require('./assets/fonts/FiraSans/FiraSans-Bold.ttf'),
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Navigation />
          <Home />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})