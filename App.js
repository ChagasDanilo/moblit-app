import React, { useRef, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler, Alert, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import * as Device from 'expo-device';

export default function App() {

  const webView = useRef(null);

  useEffect(() => {
    const backAction = () => {
      if (webView.current)
        webView.current.goBack();
      return true

      if (urlCurrent == 'https://moblit.app/') {
        BackHandler.exitApp()
      } else {
        webView.current.goBack();
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Constants.statusBarHeight
    }}>
      <StatusBar style="dark" />
      <WebView
        ref={webView}
        style={styles.webView}
        source={{ uri: 'https://moblit.app/' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Constants.statusBarHeight * 2,
  },
  webView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
