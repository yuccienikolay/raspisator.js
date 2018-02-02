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
            gcoll[gsize] = [lookfor.id, lookfor.ownerId];
        }
    }
    print(Raspisanie);
    return Raspisanie;
}
