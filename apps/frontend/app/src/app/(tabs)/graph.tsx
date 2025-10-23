import { usePathname } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { VIS_JS_HTML } from '../../utils/visjs-html';
import { matchRoute } from '../../utils/tabs';

import { ThemedText } from '../../components/ThemedText';
import TabContainer from '../../components/ui/TabContainer';

const initialGraph = {
  nodes: [
    { id: 1, label: 'Node A', color: '#6AA84F' },
    { id: 2, label: 'Node B', color: '#F1C232' },
  ],
  edges: [{ id: 'e1', from: 1, to: 2, label: 'connects' }],
};

export default function GraphScreen() {
  const path = usePathname();
  const [graphData, setGraphData] = useState(initialGraph);
  const webViewRef = React.useRef(null);

  // Function to handle data sent from the WebView (Vis.js)
  const handleWebViewMessage = (event: { nativeEvent: { data: string } }) => {
    try {
      const updatedGraph = JSON.parse(event.nativeEvent.data);
      console.log('Graph Updated:', updatedGraph);
      // **CRITICAL:** Save the updated graph state to your app's storage/backend here!
      setGraphData(updatedGraph);
    } catch (e) {
      console.error('Error parsing graph message:', e);
    }
  };

  return (
    matchRoute(path, 'graph') && (
      <TabContainer>
        <View style={styles.container}>
          <WebView
            ref={webViewRef}
            style={styles.webView}
            // Load the HTML content with the initial data
            source={{ html: VIS_JS_HTML(initialGraph) }}
            // Set up the message listener
            onMessage={handleWebViewMessage}

            // Allows scrolling on Android (important for graph interaction)
            androidHardwareAccelerationDisabled
          />
          <ThemedText style={styles.footer}>
            Nodes: {graphData.nodes.length} | Edges: {graphData.edges.length}
          </ThemedText>
        </View>
      </TabContainer>
    )
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: '100%' },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
  },
  webView: { flex: 1, minHeight: 640, backgroundColor: 'transparent' },
  footer: { textAlign: 'center', padding: 8, backgroundColor: 'transparent' },
});
