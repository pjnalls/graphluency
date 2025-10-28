// This file can live anywhere, e.g., components/visjs-html.js
export const VIS_JS_HTML = (initialData: unknown) => `
<!DOCTYPE html>
<html>
<head>
    <title>Vis.js Graph</title>
    <link href="/styles/vis.css" rel="stylesheet" type="text/css" />
    <style>
        body, html { background-color: transparent; margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden; display: flex; justify-content: center; }
        #mynetwork { width: 100%; height: 100%; }
        #mynetwork * *, #mynetwork * * * { font-size: 48px; color: #8cf; margin: 24px; border-width: 0 !important; }
        #mynetwork { background: transparent !important; }
        #mynetwork * { 
            background: transparent !important; 
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
            line-height: 48px;
            height: fit-content;
            width: fi-content;
        }
        div.vis-network div.vis-navigation {
            height: fit-content !important;
            background: blue !importnant;
        }
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
        manipulation: { 
            enabled: true,
            editNode: function (nodeData, callback) {
                // You can display a custom dialog or form here to allow the user
                // to modify the nodeData. For this example, we'll just prompt for a new label.
                var newLabel = window.prompt("Enter new label for node " + nodeData.id + ":", nodeData.label);

                if (newLabel !== null) { // If the user didn't cancel
                    nodeData.label = newLabel;
                    callback(nodeData); // Apply the changes
                } else {
                    callback(null); // Cancel the edit
                }
            },
            editEdge: function (edgeData, callback) {
                // You can display a custom dialog or form here to allow the user
                // to modify the nodeData. For this example, we'll just prompt for a new label.
                var newLabel = window.prompt("Enter new label for node " + edgeData.id + ":", edgeData.label);

                if (newLabel !== null) { // If the user didn't cancel
                    edgeData.label = newLabel;
                    callback(edgeData); // Apply the changes
                } else {
                    callback(null); // Cancel the edit
                }
            }
        },
        // A simple, clean style
        edges: { 
            smooth: { 
                enabled: true 
            },
            font: {
                color: 'white',
                background: 'none',
                strokeWidth: 0, // px
                strokeColor: '#ffffff',
                align: 'horizontal'
                }
        }

    };

    var network = new vis.Network(container, data, options);

    function setInitialZoom() {
        network.moveTo({ scale: 4 })
    }

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

    // Attach listeners to Vis.js events to trigger an update
    network.on("afterDrawing", setInitialZoom);
    network.on("afterAddingNode", sendGraphUpdate);
    network.on("afterAddingEdge", sendGraphUpdate);
    network.on("afterRemovingNode", sendGraphUpdate);
    network.on("afterRemovingEdge", sendGraphUpdate);
</script>
</body>
</html>
`;
