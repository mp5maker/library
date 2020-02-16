import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';

import employeeList from './server/employee.json'

const logo =  require('./img/icon.png');

interface AppPropsInterface {}
interface AppStateInterface {
  liked: number,
  employee: Array<any>,
  name: string|number
}

export default class App extends React.Component<AppPropsInterface, AppStateInterface> {
  constructor(props: AppPropsInterface) {
    super(props)
    this.state = {
      liked: 0,
      employee: employeeList,
      name: ``
    }
    this.onPress = this.onPress.bind(this)
    this.onChange = this.onChange.bind(this)
    this.addEmployee = this.addEmployee.bind(this)
  }

  onChange({ event }: any) {
    this.setState({
      [event.target.name]: event.target.value
    } as Pick<AppStateInterface, keyof AppStateInterface>)
  }

  addEmployee() {

  }

  onPress() {
    const { liked } = this.state
    this.setState({ liked: liked + 1 })
  }

  render() {
    const name = `Simple React Native App`

    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.logo}>
            <Image source={logo} style={styles.icon} />
          </Text>
          <Text style={styles.title}>
            {name}
          </Text>
          <View style={styles.heart}>
            <TouchableHighlight
              underlayColor={'firebrick'}
              onPress={this.onPress}
              style={styles.btn}>
              <Text style={styles.btnText}>
                ❤ {this.state.liked && this.state.liked}
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.form}>
          <TextInput
              style={styles.input}
              placeholder={`Name`}
              placeholderTextColor={`firebrick`}
              onChangeText={(text) => this.onChange({ event: { target: { name: `name`, value: text }}})}
            />
        </View>
        <SafeAreaView>
          <FlatList
            data={this.state.employee}
            keyExtractor={(item: any, index: number) => item.guid + index}
            renderItem={({ item }: any) => (
              <View style={styles.card}>
                <Text>
                  {item.name}
                </Text>
              </View>
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
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
  },
  form: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 2,
    marginRight: 2
  },
  input: {
    borderWidth: 1,
    borderColor: `firebrick`,
    borderStyle: `solid`,
    padding: 10,
    height: 50
  }
});
