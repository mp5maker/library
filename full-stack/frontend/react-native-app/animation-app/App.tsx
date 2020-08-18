import 'react-native-gesture-handler';
import React from 'react';
import { I18nextProvider } from 'react-i18next'
import { AppLoading } from 'expo'
import * as Font from 'expo-font';
import {
  View,
  Image,
  Platform,
  UIManager,
  StyleSheet,
  Text
} from 'react-native'
import { Asset } from 'expo-asset'

import i18n from 'Native/Locales/i18n';
import { THEME, LIGHT, DARK, ANDROID, IOS } from 'Native/Constants/Settings'
import { AsyncGet, AsyncSet } from 'Native/Utilities/AsyncStorage'
import { ThemeContext } from 'Native/Contexts/ThemeContext'


export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});


if (Platform.OS == ANDROID && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const cacheImages = (images: Array<any>) => {
  return images.map((image: any) => {
    if (typeof image == 'string') return Image.prefetch(image)
    else return Asset.fromModule(image).downloadAsync()
  })
}

const cacheFonts = (fonts: any) => Font.loadAsync(fonts);

export const App = () => {
  const [isAssetsLoaded, setAssetsLoaded] = React.useState(false)
  const [theme, setTheme] = React.useState(LIGHT)

  const setThemeColor = async () => {
    const currentTheme = await AsyncGet({ key: THEME })
    if (!currentTheme) {
      await AsyncSet({
        key: THEME,
        data: LIGHT
      })
      setTheme(LIGHT)
    } else setTheme(currentTheme)
  }

  React.useEffect(() => {
    setThemeColor()
    return () => {}
  }, [])

  const loadAssets = async () => {
    const imageAssets = cacheImages([
      require('./assets/icon.png'),
      require('./assets/splash.png'),
    ])

    const fontAssets = cacheFonts({
      'fira-sans': require(`./assets/fonts/FiraSans-Regular.ttf`),
      'fira-sans-bold': require('./assets/fonts/FiraSans-Bold.ttf'),
    })

    await Promise.all([fontAssets, imageAssets])
  }

  if (!isAssetsLoaded) {
    return (
      <AppLoading
        onFinish={() => setAssetsLoaded(true)}
        startAsync={loadAssets} />
    )
  }

  if (isAssetsLoaded) {
    return (
      <I18nextProvider i18n={i18n}>
          <ThemeContext.Provider value={{ theme, setTheme, }}>
            <View style={styles.mainContainer}>
              <Text>
                Text on the way
              </Text>
            </View>
        </ThemeContext.Provider>
      </I18nextProvider>
    )
  }
}

export default App