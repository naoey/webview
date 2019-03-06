/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, WebView} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  onWebViewMessage = message => console.log('Received message', message)

  render() {
    return (
      <WebView
        scrollEnabled
        javaScriptEnabled
        geolocationEnabled
        domStorageEnabled
        allowFileAccess
        allowUniversalAccessFromFileURLs
        automaticallyAdjustContentInsets
        originWhitelist={['*']}
        ref={(webview) => { this.webview = webview; }}
        onMessage={this.onWebViewMessage}
        style={styles.container}
        scalePagesToFit={false}
        source={require('./html/index.html')}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
