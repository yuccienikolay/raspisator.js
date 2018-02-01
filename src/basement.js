// Kreator += KiselevNikolay


// BC - BaseCounters
let BC = {
  tid: 1, // Teacher ID counter
  lid: 1, // Lesson  ID counter
  Damaged: false
};


// Basement Class
class bsmnt {
  constructor() {
    this.type = "global bsmnt"
  }
  // Then class use as string
  toString() {
    let temp = this.type + ": ";
    let clipped = JSON.parse(JSON.stringify(this));
    delete clipped.type;
    temp += JSON.stringify(clipped, null, '  ');
    return temp
  }
  // Run Analyze and Build
  run() {
    // 
  }
}


// Group Class
class Group extends bsmnt {
  // Group is special list of links to obj
  constructor(name) {
    super();
    this.name = name;
    let type = "Group(";
    type += name;
    type += ")";
    this.type = type;
  }
  get count() {
    return Object.keys(this).length
  }
}


// Class Lesson
class Lesson extends bsmnt {
  // Lesson as datakeeper
  constructor(name, time) {
    super();
    this.type = "Lesson"
    let current = BC.lid++;
    this.id = current;
    this.name = name;
    this.time = time;
    LSSNS[current] = this;
  }
}


// Class Teacher
class Teacher extends bsmnt {
  // Teacher as datakeeper
  constructor(name) {
    super();
    this.type = "Teacher"
    let current = BC.tid++;
    this.id = current;
    this.name = name;
    this.lessonsList = [];
    TCHRS[current] = this;
  }
  // Keep new Lesson()
  addLesson(name, pairCount) {
    let time = pairCount * 120; // total pairs time in seconds
    let lesson = new Lesson(name, time);
    lesson.ownerId = this.id
    this.lessonsList.push(lesson.id);
    return lesson
  }
}


//
// Body
//

let TCHRS = new Group("TCHRS");
let LSSNS = new Group("LSSNS");

let Raspisanie = new Group("Расписание");
Raspisanie.data = {};
let d = Raspisanie.data;
    