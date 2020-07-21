
module.exports = function(RED) {

    function mappingSetVoltagetNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.slot = config.slot;
        this.labelPort1 = config.labelPort1;
        this.valuePort1 = config.valuePort1;
        
        this.labelPort2 = config.labelPort2;
        this.valuePort2 = config.valuePort2;

        this.labelPort3 = config.labelPort3;
        this.valuePort3 = config.valuePort3;

        this.labelPort4 = config.labelPort4;
        this.valuePort4 = config.valuePort4;
    }

    RED.nodes.registerType("mapping-voltage", mappingSetVoltagetNode);
}
