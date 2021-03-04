module.exports = function(RED) {

    function mappingSetVoltageNode(config) {
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

        if(map) {
            map.ac_power[this.slot - 1][0].pin =  "AC-POWER Slot " + String(this.slot);
            map.ac_power[this.slot - 1][0].board =  "";
            map.ac_power[this.slot - 1][0].user = "";
    
            map.ac_power[this.slot - 1][1].pin =  "VA - PIN - 3";
            map.ac_power[this.slot - 1][1].board =  "TP" + String(this.connectorVA);
            map.ac_power[this.slot - 1][1].user = this.labelVA;
    
            map.ac_power[this.slot - 1][2].pin =  "VB - PIN - 2";
            map.ac_power[this.slot - 1][2].board =  "TP" + String(this.connectorVB);
            map.ac_power[this.slot - 1][2].user = this.labelVB;
    
            map.ac_power[this.slot - 1][3].pin =  "VC - PIN - 3";
            map.ac_power[this.slot - 1][3].board =  "TP" + String(this.connectorVC);
            map.ac_power[this.slot - 1][3].user = this.labelVC;

            map.ac_power[this.slot - 1][4].pin =  "IA+ - PIN - 1";
            map.ac_power[this.slot - 1][4].board =  "TP" + String(this.connectorIAp);
            map.ac_power[this.slot - 1][4].user = this.labelIAp;
            
            map.ac_power[this.slot - 1][5].pin =  "IA- - PIN - 2";
            map.ac_power[this.slot - 1][5].board =  "TP" + String(this.connectorIAm);
            map.ac_power[this.slot - 1][5].user = this.labelIAm;

            map.ac_power[this.slot - 1][6].pin =  "IB+ - PIN - 1";
            map.ac_power[this.slot - 1][6].board =  "TP" + String(this.connectorIBp);
            map.ac_power[this.slot - 1][6].user = this.labelIBp;

            map.ac_power[this.slot - 1][7].pin =  "IB- - PIN - 2";
            map.ac_power[this.slot - 1][7].board =  "TP" + String(this.connectorIBm);
            map.ac_power[this.slot - 1][7].user = this.labelIBm;

            map.ac_power[this.slot - 1][8].pin =  "IC+ - PIN - 1";
            map.ac_power[this.slot - 1][8].board =  "TP" + String(this.connectorICp);
            map.ac_power[this.slot - 1][8].user = this.labelICp;


            // map.ac_power[this.slot - 1][9].pin =  "IC- - PIN - 2";
            // map.ac_power[this.slot - 1][9].board =  "TP" + String(this.connectorICm);
            // map.ac_power[this.slot - 1][9].user = this.labelICm;

          
        }


        globalContext.set("map", map);
    }

    RED.nodes.registerType("mapping-voltage", mappingSetVoltageNode);
};