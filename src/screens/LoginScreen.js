import React from 'react';
import { SecureStore } from 'expo';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';

class LoginScreen extends React.Component {
  state = {
    email: 'user1@example.com',
    password: 'password',
    isLoading: false,
  }

  async componentDidMount() {
    /*
    const email = await SecureStore.getItemAsync('email');
    const password = await SecureStore.getItemAsync('password');
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ isLoading: false });
        this.navigateToHome();
      })
      .catch();
    */
  }


  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          ログイン
        </Text>

        <TextInput value="mail" style={styles.input} />
        <TextInput value="password" style={styles.input} />

        <TouchableHighlight style={styles.button} onPress={() => { this.props.navigation.navigate('Home'); }} underlayColor="#C70F66">
          <Text style={styles.buttonTitle}>ログイン</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.signup} onPress={() => { this.props.navigation.navigate('MemoList'); }}>
          <Text style={styles.signupText}>登録する</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
  signup: {
    marginTop: 16,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16,
  },
});

export default LoginScreen;