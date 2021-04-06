module.exports = function(RED) {

    function ac_power_mappingNode(config) {
        RED.nodes.createNode(this, config);
        this.name = config.name;
        this.slot = config.slot;

        this.connectorVN = config.connectorVN;  
        this.connectorVA = config.connectorVA;
        this.connectorVB = config.connectorVB; 
        this.connectorVC = config.connectorVC;

        this.connectorIAp = config.connectorIAp;
        this.connectorIAm = config.connectorIAm;
        this.connectorIBp = config.connectorIBp;
        this.connectorIBm = config.connectorIBm;
        this.connectorICp = config.connectorICp;
        this.connectorICm = config.connectorICm;
        
        var globalContext = this.context().global;
        var map = globalContext.get("map");

        var map_ac_power = [

            { feat: `AC POWER INSTANCE ${config.slot}`, pin: `VL: ${config.voltage_limit}`, board: `IL: ${config.current_limit}` },
            { feat: "VN", pin: "PIN 1", board: `TP ${config.connectorVN}` },
            { feat: "VA", pin: "PIN 2", board: `TP ${config.connectorVA}` },
            { feat: "VB", pin: "PIN 3", board: `TP ${config.connectorVB}` },
            { feat: "VC", pin: "PIN 4", board: `TP ${config.connectorVC}` },

            { feat: "IA+", pin: "PIN 2", board: `TP ${config.connectorIAp}` },
            { feat: "IA-", pin: "PIN 1", board: `TP ${config.connectorIAm}` },
            { feat: "IB+", pin: "PIN 2", board: `TP ${config.connectorIBp}` },
            { feat: "IB-", pin: "PIN 1", board: `TP ${config.connectorIBm}` },
            { feat: "IC+", pin: "PIN 2", board: `TP ${config.connectorICp}` },
            { feat: "IC-", pin: "PIN 1", board: `TP ${config.connectorICm}` }
            
        ];

        if(map) {
            map.ac_power[config.slot - 1] = [];
            for (row of map_ac_power){
                map.ac_power[config.slot - 1].push(row);
            }
        }

        globalContext.set("map", map);
    }

    RED.nodes.registerType("ac-power-mapping", ac_power_mappingNode);
};