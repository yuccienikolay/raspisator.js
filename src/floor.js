floor = {}

floor.table = function() {
    let content = tableRaspisator.decoded;

    let keys = Object.keys(content);
    for (let index = 0; index < keys.length; index++) {
        let element = content[keys[index]];
        let bobobob = $("<div class='columns' id='{}'><h2>{}</h2></div>".Format(keys[index].MakeNormal(''), keys[index]));
        $("#TableCont").append(bobobob);
        let paircount = Object.keys(element).length;
        for (let pos = 0; pos < paircount; pos++) {
            let pair = element[pos + 1];
            if (pair != "Окно") {
                $(bobobob).append("<strong>{}</strong><small>{}</small>".Format(pair["lesson"], pair["teacher"]));
            } else {
                $(bobobob).append("<strong>Окно</strong><small>Никто</small>");
                
            }
        }
    }
}

floor.json = function() {
    let content = tableRaspisator;
    print(content);
}