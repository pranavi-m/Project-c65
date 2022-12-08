import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  };

  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Header
            backgroundColor={'#07B89E'}
            centerComponent={{
              text: 'TEXT TO SPEECH',
              style: {
                color: 'black',
                fontSize: 20,
                textAlign: 'center',
                fontStyle: 'bold',
                alignSelf: 'center',
                fontWeight: 'bold',
              },
            }}
          />
          <Image
            style={styles.imageIcon}
            source={{
              uri: 'download.png',
            }}
          />
          <Text style={styles.text2}>Enter the word</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ name: text });
            }}
          />

          <TouchableOpacity style={styles.textContainer1} onPress={this.speak}>
            <Text style={styles.button}> Click to hear speech </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 60,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    backgroundColor: 'black',
    color: 'white',
    fontSize:20,
    borderRadius: 30,
  },
  textContainer1: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },

  text2: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#07B89E',
    marginTop: 30,
    borderRadius: 30,
    width: '80%',
    alignSelf: 'center',
    height: 50,
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
