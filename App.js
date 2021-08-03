/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 02/08/2021 - 23:20:51
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 02/08/2021
 * - Author          :
 * - Modification    :
 **/
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Home} from './src/screens/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    justifyContent: 'space-between',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Home />
    </SafeAreaView>
  );
};

export default App;
