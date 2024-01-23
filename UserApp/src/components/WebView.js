import * as React from 'react';
import { WebView } from 'react-native-webview';


export default function WebViewComponent() {
    return (
        <WebView
            originWhitelist={['*']}
            source={{ uri: 'https://app.sandbox.midtrans.com/snap/v3/redirection/6a502eb9-5f48-4599-b2de-18a8b1dcb2ae#/payment-list' }}
        />
    );
}