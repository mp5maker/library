import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import * as Font from 'expo-font';
import { AppLoading } from 'expo'

/* Components */
import { Navigation } from './components/Navigation'

/* Screens */
import Home from './screens/Home'

interface AppPropsInterface {}
interface AppStateInterface {
  isFontLoaded: boolean
}

export default class App extends React.Component<AppPropsInterface, AppStateInterface> {
  constructor(props: AppPropsInterface) {
    super(props)
    this.state = {
      isFontLoaded: false
    }
  }

  render() {
    const {
      isFontLoaded
    } = this.state

    if (isFontLoaded) {
      return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <Navigation />
            <Home />
          </View>
        </TouchableWithoutFeedback>
      )
    }

    if (!isFontLoaded) {
      return (
        <AppLoading
            startAsync={async () => {
              return await Font.loadAsync({
                'fira-sans': require(`./assets/fonts/FiraSans/FiraSans-Regular.ttf`),
                'fira-sans-bold': require('./assets/fonts/FiraSans/FiraSans-Bold.ttf'),
              })
            }}
            onFinish={() => this.setState({ isFontLoaded: true })}
          />
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})