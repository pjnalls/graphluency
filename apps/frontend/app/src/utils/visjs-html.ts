// This file can live anywhere, e.g., components/visjs-html.js
export const VIS_JS_HTML = (initialData: unknown) => `
<!DOCTYPE html>
<html>
<head>
    <title>Vis.js Graph</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.css" rel="stylesheet" type="text/css" />
    <style>
        body, html { background-color: transparent; margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden; }
        #mynetwork { width: 100%; height: 100% }
    </style>
</head>
<body>

<div id="mynetwork"></div>

    <script
      type="text/javascript"
      src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"
    ></script>

<script type="text/javascript">
    // 1. Data passed from React Native (Expo)
    var initialData = ${JSON.stringify(initialData || { nodes: [], edges: [] })};

    // 2. Setup the Vis.js Network
    var container = document.getElementById('mynetwork');
    var data = {
        nodes: new vis.DataSet(initialData.nodes),
        edges: new vis.DataSet(initialData.edges)
    };
    var options = {
        // Beautiful physics-based layout
        physics: { enabled: true },
        // Enable built-in editing UI
        manipulation: { enabled: true },
        // A simple, clean style
        edges: { smooth: { enabled: true } }

    };

    var network = new vis.Network(container, data, options);

    // 3. Communication: Send updates back to React Native
    function sendGraphUpdate() {
        var updatedNodes = data.nodes.get({ fields: ['id', 'label'] });
        var updatedEdges = data.edges.get({ fields: ['id', 'from', 'to', 'label'] });

        var updatedGraph = {
            nodes: updatedNodes,
            edges: updatedEdges
        };

        // Use the postMessage function provided by react-native-webview
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(JSON.stringify(updatedGraph));
        }
    }
    
    function changeNodeLabel() {
        data.nodes.update({ id: 1, label: 'changed label' })
    }

    // Attach listeners to Vis.js events to trigger an update
    network.on("afterAddingNode", sendGraphUpdate);
    network.on("afterAddingEdge", sendGraphUpdate);
    network.on("afterRemovingNode", sendGraphUpdate);
    network.on("afterRemovingEdge", sendGraphUpdate);
    network.on("click", changeNodeLabel);
</script>
</body>
</html>
`;
