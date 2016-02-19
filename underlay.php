{ "records":[{
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
}] };