module.exports = function(RED) {

    function ac_power_mappingNode(config) {
        RED.nodes.createNode(this, config);
        this.name = config.name;
        this.slot = config.slot;

        this.connectorVA = config.connectorVA;
        this.labelVA = config.labelVA;
        this.connectorVN = config.connectorVN;  
        this.labelVN = config.labelVN;
        this.connectorVB = config.connectorVB; 
        this.labelVB = config.labelVB;
        this.connectorVC = config.connectorVC;
        this.labelVC = config.labelVC;
        this.connectorIAp = config.connectorIAp;
        this.labelIAp = config.labelIAp;
        this.connectorIAm = config.connectorIAm;
        this.labelIAm = config.labelIAm;
        this.connectorIBp = config.connectorIBp;
        this.labelIBp = config.labelIBp;
        this.connectorIBm = config.connectorIBm;
        this.labelIBm = config.labelIBm;
        this.connectorICp = config.connectorICp;
        this.labelICp = config.labelICp;
        this.connectorICm = config.connectorICm;
        this.labelICm = config.labelICm;
        
        var globalContext = this.context().global;
        var map = globalContext.get("map");

        var map_ac_power = [

            { feat: `AC-POWER Slot ${config.slot}`, pin: "", board: `Voltage Limit: ${config.voltage_limit}`, user: `Current Limit: ${config.current_limit}` },
            { feat: "VA", pin: "PIN3", board: `TP ${config.connectorVA}`, user: config.labelVA },
            { feat: "VB", pin: "PIN2", board: `TP ${config.connectorVB}`, user: config.labelVB },
            { feat: "VC", pin: "PIN3", board: `TP ${config.connectorVC}`, user: config.labelVC },
            { feat: "IA+", pin: "PIN1", board: `TP ${config.connectorIAp}`, user: config.labelIAp },
            { feat: "IA-", pin: "PIN2", board: `TP ${config.connectorIAm}`, user: config.labelIAm },
            { feat: "IB+", pin: "PIN1", board: `TP ${config.connectorIBp}`, user: config.labelIBp },
            { feat: "IB-", pin: "PIN2", board: `TP ${config.connectorIBm}`, user: config.labelIBm },
            { feat: "IC+", pin: "PIN1", board: `TP ${config.connectorICp}`, user: config.labelICp },
            { feat: "IC-", pin: "PIN2", board: `TP ${config.connectorICm}`, user: config.labelICm }
            
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