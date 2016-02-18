//initialize a topology component
var topo = new nx.graphic.Topology({
    width: 800,
    height: 800,
    showIcon: true,
    nodeConfig: {
        label: 'model.name',
        iconType:function(vertex) {
            var id = vertex.get("id");
            if (id <4) {
                return 'router'
            } 
            else{
            	return 'cloud'
            }
        }
    },
    linkConfig: {
        linkType: 'parallel'
    }
});

//set data
topo.on('ready', function() {
    topo.data(topologyData);
});

//create app
var app = new nx.ui.Application();
//attach topo to app;
topo.attach(app);

var topologyData = {
    nodes: [{
        "id": 0,
        "x": 410,
        "y": 100,
        "IP":"1.2.3.0",
        "name": "A"
    }, {
        "id": 1,
        "x": 410,
        "y": 280,
        "IP":"1.2.3.1",
        "name": "B"
    }, {
        "id": 2,
        "x": 660,
        "y": 280,
        "IP":"1.2.3.2",
        "name": "C"
    }, {
        "id": 3,
        "x": 660,
        "y": 100,
        "IP":"1.2.3.3",
        "name": "D"
    }, {
        "id": 4,
        "x": 180,
        "y": 190,
        "IP":"1.2.3.4",
        "name": "E"
    }],
    links: [{
        "source": 0,
        "target": 1
    }, {
        "source": 1,
        "target": 2
    }, {
        "source": 1,
        "target": 3
    }, {
        "source": 4,
        "target": 1
    }, {
        "source": 2,
        "target": 3
    }, {
        "source": 2,
        "target": 0
    }, {
        "source": 3,
        "target": 0
    }, {
        "source": 3,
        "target": 0
    }, {
        "source": 3,
        "target": 0
    }, {
        "source": 0,
        "target": 4
    }, {
        "source": 0,
        "target": 4
    }]
};