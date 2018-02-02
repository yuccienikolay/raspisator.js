function ReadyToGo(T, L) {
    let Raspisanie = new Group("Расписание");
    Raspisanie.data = {};
    let data = Raspisanie.data;
    let teachers = T;
    let lessons = L;

    for (let index = 0; index < lessons.count; index++) {
        let lookfor = lessons[index + 1];
        let gcoll = data[lookfor.groupname] || {};
        data[lookfor.groupname] = gcoll;
        for (let nowtime = lookfor.time; nowtime > 0; nowtime--) {
            let gsize = Object.keys(gcoll).length + 1;
            gcoll[gsize] = {"id":lookfor.id, "td":lookfor.ownerId};
        }
    }

    let newdata = {};
    let keys = Object.keys(data);
    let maxPairCount = 0;
    for (let index = 0; index < keys.length; index++) {
        let element = data[keys[index]];
        let ov = {};
        let paircount = Object.keys(element).length;
        if (paircount > maxPairCount) {
            maxPairCount = paircount;
        }
        for (let pos = 0; pos < paircount; pos++) {
            ov[pos + 1] = element[pos + 1]["td"]
        }
        newdata[keys[index]] = ov;
    }

    function swapairs(pair, last, group) {
        let element = newdata[keys[group]];
        const a = element[pair];
        element[pair] = null;
        element[last] = a;
        let beforelement = data[keys[group]];
        const b = beforelement[pair];
        beforelement[pair] = null;
        beforelement[last] = b;
    }

    function NoReplica() {
        for (let index = 0; index < maxPairCount; index++) {
            let pair = index + 1;
            let usedTeachers = {};
            for (let group = 0; group < keys.length; group++) {
                let element = newdata[keys[group]];
                let teacher = element[pair];
                if (teacher) {
                    if (usedTeachers[teacher]) {
                        if (Math.random() >= 0.5) {   
                            let last = Object.keys(element).length + 1;
                            swapairs(pair, last, group);
                        } else {
                            let group = usedTeachers[teacher].g;
                            let pair = usedTeachers[teacher].p;
                            let element = newdata[keys[group]];
                            let last = Object.keys(element).length + 1;
                            swapairs(pair, last, group);
                        }
                    } else {
                        usedTeachers[teacher] = {"p":pair, "g":group};
                    }
                }
            }
        }
    }

    NoReplica();

    Raspisanie.data = data;
    Raspisanie.shortdata = newdata;

    let decoded = {};
    for (let index = 0; index < keys.length; index++) {
        let element = data[keys[index]];
        let ov = {};
        let paircount = Object.keys(element).length;
        for (let pos = 0; pos < paircount; pos++) {
            let love = {};
            if (element[pos + 1]) {
                love.lesson = lessons[element[pos + 1]["id"]]["name"];
                love.teacher = teachers[element[pos + 1]["td"]]["name"];
            } else {
                love = "Окно";
            }
            ov[pos + 1] = love;
        }
        decoded[keys[index]] = ov;
    }


    Raspisanie.decoded = decoded;
    return Raspisanie;
}
