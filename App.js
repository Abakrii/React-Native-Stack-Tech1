import React from 'react';
import { View } from 'react-native';
import reducers from './src/reducers';
import {Header} from './src/components/common/Header';
import LibraryList from './src/components/LibraryList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
          <View style={{flex:1}}>
          <Header headerText="Tech Stack"/>
                <LibraryList/>
        </View>

        </Provider>
    );
  }
}

