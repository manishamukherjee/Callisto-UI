nx.define('MyExtendLink', nx.graphic.Topology.Link, {
    properties: {
        sourcelabel: null,
        targetlabel: null
    },
    view: function(view) {
        view.content.push({
            name: 'source',
            type: 'nx.graphic.Text',
            props: {
                'class': 'sourcelabel',
                'alignment-baseline': 'text-after-edge',
                'text-anchor': 'start'
            }
        }, {
            name: 'target',
            type: 'nx.graphic.Text',
            props: {
                'class': 'targetlabel',
                'alignment-baseline': 'text-after-edge',
                'text-anchor': 'end'
            }
        });
        
        return view;
    },
    methods: {
        update: function() {
            
            this.inherited();
            
            
            var el, point;
            
            var line = this.line();
            var angle = line.angle();
            var stageScale = this.stageScale();
            
            // pad line
            line = line.pad(18 * stageScale, 18 * stageScale);
            
            if (this.sourcelabel()) {
                el = this.view('source');
                point = line.start;
                el.set('x', point.x);
                el.set('y', point.y);
                el.set('text', this.sourcelabel());
                el.set('transform', 'rotate(' + angle + ' ' + point.x + ',' + point.y + ')');
                el.setStyle('font-size', 12 * stageScale);
            }
            
            
            if (this.targetlabel()) {
                el = this.view('target');
                point = line.end;
                el.set('x', point.x);
                el.set('y', point.y);
                el.set('text', this.targetlabel());
                el.set('transform', 'rotate(' + angle + ' ' + point.x + ',' + point.y + ')');
                el.setStyle('font-size', 12 * stageScale);
            }
        }
    }
});




var topo = new nx.graphic.Topology({
    adaptive: true,
    nodeConfig: {
        label: 'model.name',
        iconType:function(vertex) {
            var id = vertex.get("id");
            if (id <5) {
                return 'router'
            } 
            else{
            	return 'cloud'
            }
        }
    },
    nodeSetConfig: {
        label: 'model.name'
    },
    linkConfig: {
        linkType: 'parallel',
        color: function(link, model) {
        	var col=link.get("status");  
        		
        	if(String (col).match("Up")){ 
        		
        		return nx.path("green");}
        	if(String (col).match("Down")){
        		
        		return nx.path("red");}  
            
          },
                sourcelabel: 'model.srcTrafficMap.Default.EMPTYQUEUE',
                targetlabel: 'model.tgtTrafficMap.Default.EMPTYQUEUE'
    },
    showIcon: true,
    linkInstanceClass: 'MyExtendLink' // set the link class
});



topo.on('ready', function () {
    topo.data(topologyData);
});

topo.on('clickNode',function(topo,node){
	alert("Add to Overlay?");
})
//app
var app = new nx.ui.Application();
topo.attach(app);

var topologyData = {
    "nodes": [{
        "id": 0,
        "name": "SJC-0",
        
        "status": "Up",
        "IP": "1.2.3.0",
        
        "x": 490.2062921863415,
        "y": -110.45390150953385,
        
    }, {
        "id": 1,
        "name": "SJC-1",
        
        "status": "Up",
        "IP": "1.2.3.34",

        "x": -331.07087666658816,
        "y": -103.24153109870315,
        
    }, {
        "id": 2,
        "name": "SJC-2",
        
        "status": "Up",
        "IP": "1.2.3.120",
       
        "x": -27.032105478883352,
        "y": -108.8149899693051,
        
    }, {
        "id": 3,
        "name": "NYC-3",
        "x": 551.1799992926093,
        "y": 200.15306778945478,
        
        "status": "Down",
        "IP": "10.13.24.56",
       
        
    }, {
        "id": 4,
        "name": "NYC-4",
        "x": 271.6847872684018,
        "y": 3.8493599324645675,        
        "status": "Up",
        "IP": "12.34.56.78",
        
       
    }, {
        "id": 5,
        "name": "NYC-5",
        "x": -26.810317044921597,
        "y": 203.85257869994675,       
        "status": "Up",
        "IP": "54.56.7.8",
        
       
    }],
    "links": [{
        "id": 0,
        
        "source": 5,
        
        "target": 3,
        "status": "Down",        
        "Bandwidth":50,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/1"
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/0"
            }
        }
        
    }, {
        "id": 1,
        "source": 4,
        "target": 3,
        "status": "Up",        
        "Bandwidth":50,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/1"
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/0"
            }
        }
        
    }, {
        "id": 2,
        
        "source": 5,
        "target": 4,
        "status": "Up",        
        "Bandwidth":50,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/2"
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/3"
            }
        }
        
    }, {
        "id": 3,
        "source": 2,
        "target": 0,
        "status": "Down",        
        "Bandwidth":50,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/4"
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/6"
            }
        }
        
    }, {
        "id": 4,
        "source": 5,
        "target": 2,
        "status": "Down",        
        "Bandwidth":50,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/16"
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/56"
            }
        }
        
    }, {
        "id": 5,
        "source": 5,
        "target": 3,
        "status": "Down",        
        "Bandwidth":50,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/13"
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/45"
            }
        }
        
    }, {
        "id": 6,
        "source": 1,
        "target": 2,
        "status": "Down",        
        "Bandwidth":50,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/14"
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": "TenGigE0/0/0/67"
            }
        }
        
    }],
    "nodeSet": []
}