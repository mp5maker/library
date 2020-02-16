import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  SafeAreaView,
  FlatList
} from 'react-native';

import employeeList from './server/employee.json'

const logo =  require('./img/icon.png');

export default function App() {
  const name = `Simple React Native App`

  const [state, setState] = React.useState({
    liked: 0,
    employee: employeeList
  })

  const onPress = () => {
    const { liked } = state
    setState({
      ...state,
      liked: liked + 1
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text  style={styles.logo}>
          <Image source={logo} style={styles.icon} />
        </Text>
        <Text style={styles.title}>
            { name }
          </Text>
        <View style={styles.heart}>
          <TouchableHighlight
            underlayColor={'firebrick'}
            onPress={onPress}
            style={styles.btn}>
            <Text style={styles.btnText}>
              ❤ { state.liked && state.liked }
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <SafeAreaView>
        <FlatList
            data={state.employee}
            keyExtractor={(item: any, index: number) => item.guid + index }
            renderItem={({ item }: any) => (
              <View style={styles.card}>
                <Text>
                  { item.name }
                </Text>
              </View>
            )}
          />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  innerContainer: {
    height: 60,
    lineHeight: 60,
    textAlign: 'center',
    display: 'flex',
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `firebrick`,
  },
  icon: {
    width: 16,
    height: 16,
  },
  logo: {
    marginTop: 16,
    marginRight: 6,
  },
  title: {
    marginTop: 16,
    color: `white`
  },
  heart: {
    marginLeft: 32,
    marginTop: 16,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  btn: {
    borderRadius: 5,
    padding: 5
  },
  btnText: {
    color: `white`
  },
  card: {
    display: `flex`,
    borderTopWidth: 1,
    borderColor: `firebrick`,
    borderStyle: `solid`,
    padding: 16,
    height: 50,
    justifyContent: `center`,
    alignItems: `center`
  }
});
