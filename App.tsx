/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconFill} from '@ant-design/icons-react-native';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#8CABFF',
        padding: 10,
        gap: 10,
      }}>
      <View style={styles.container}>
        <Image
          source={require('./assets/img/background.jpg')}
          style={styles.backgroundImage}
        />
      </View>
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#484b50e6'}}>
          LILO
        </Text>
      </View>
      <View style={{width: '70%', marginTop: 20}}>
        <Text style={{fontSize: 15, textAlign: 'center'}}>
          Modern Attendace Tracking for Everyone, Say goodbye to manual records.
          <Text style={{fontWeight: 'bold', color: 'blue'}}> Embrace LILO</Text>
        </Text>
      </View>
      <View
        style={{
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 20,
        }}>
        <Image
          style={{width: 100, height: 100}}
          source={require('./assets/img/menOne.png')}
        />
        <Image
          style={{width: 100, height: 100}}
          source={require('./assets/img/menTwo.png')}
        />
        <Image
          style={{width: 100, height: 100}}
          source={require('./assets/img/women.png')}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#484b50e6',
          padding: 10,
          width: '90%',
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
          Continue
        </Text>
        {/* <MaterialIcons name="arrow-forward" size={22} color="#000" />
        <IconFill name="heart" size={22} color="#000" /> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 800,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  backgroundImage: {
    height: '100%',
    width: 500,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
  },
});

export default App;
