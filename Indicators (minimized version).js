var ents = [];

function entityAddedHook(e) {
    var id = Entity.getEntityTypeId(e);
    if ((id >= 10 && id <= 13) || (id >= 32 && id <= 36)) {
        ents.push(e);
    }
}

function modTick() {

    for (var i = 0; i < ents.length; i++) {
        var h = Entity.getHealth(ents[i]);
        var s = "";

        for (var j = 0; j < h; j++) {
            s = s + "❤";
            Entity.setNameTag(ents[i], s);
        }

    }

}
