topo = new nx.graphic.Topology({
  adaptive: true,
  nodeConfig: {
    label: 'model.id'
  },
  showIcon: true,
  theme: 'yellow'
});


topo.on('ready', function() {
  topo.data(topologyData);
})

var app = new nx.ui.Application();
topo.attach(app);


addNewLink = function() {

  topo.addLink({
    source: 0,
    target: 4
  })

  // update linkSet

  var edgeSet = topo.graph().getEdgeSetBySourceAndTarget(0, 4)
  if (edgeSet) {
    topo.graph()._generateConnection(edgeSet)
  }

}

insetNodeSet = function() {
  topo.aggregationNodes([4, 3])
}


var topologyData = {
  nodes: [{
    "id": 0,
    "x": 410,
    "y": 100,
    "name": "12K-1"
  }, {
    "id": 1,
    "x": 410,
    "y": 280,
    "name": "12K-2"
  }, {
    "id": 2,
    "x": 660,
    "y": 280,
    "name": "Of-9k-03"
  }, {
    "id": 3,
    "x": 660,
    "y": 100,
    "name": "Of-9k-02"
  }, {
    "id": 4,
    "x": 180,
    "y": 190,
    "name": "Of-9k-01"
  }],
  links: [],
  nodeSet: [{
    id: 5,
    nodes: [0, 1],
    "x": 300,
    "y": 300,
    "name": "Node set 1",
    iconType: 'router'
  }]
};
