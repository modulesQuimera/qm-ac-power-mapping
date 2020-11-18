module.exports = function(RED) {

    function mappingSetVoltageNode(config) {
        RED.nodes.createNode(this, config);
        this.name = config.name;
        this.slot = config.slot;

        this.labelPort1A = config.labelPort1A;
        this.labelPort1 = config.labelPort1;
        this.valuePort1 = config.valuePort1;

        this.labelPort2A = config.labelPort2A;
        this.labelPort2 = config.labelPort2;
        this.valuePort2 = config.valuePort2;

        this.labelPort3A = config.labelPort3A;
        this.labelPort3 = config.labelPort3;
        this.valuePort3 = config.valuePort3;

        this.labelPort4 = config.labelPort4;
        this.valuePort4 = config.valuePort4;

        var globalContext = this.context().global;
        var map = globalContext.get("map");

        if(map) {
            map.ac_power[this.slot - 1][0].pin =  "AC-POWER Slot " + String(this.slot);
            map.ac_power[this.slot - 1][0].board =  "";
            map.ac_power[this.slot - 1][0].user = "";
    
            map.ac_power[this.slot - 1][1].pin =  "VA - PIN - 12";
            map.ac_power[this.slot - 1][1].board =  "TP" + String(this.labelPort1);
            map.ac_power[this.slot - 1][1].user = this.labelPort1A;
    
            map.ac_power[this.slot - 1][2].pin =  "VB - PIN - 13";
            map.ac_power[this.slot - 1][2].board =  "TP" + String(this.labelPort2);
            map.ac_power[this.slot - 1][2].user = this.labelPort2A;
    
            map.ac_power[this.slot - 1][3].pin =  "VC - PIN - 14";
            map.ac_power[this.slot - 1][3].board =  "TP" + String(this.labelPort3);
            map.ac_power[this.slot - 1][3].user = this.labelPort3A;   
        }


        globalContext.set("map", map);
    }

    RED.nodes.registerType("mapping-voltage", mappingSetVoltageNode);
};