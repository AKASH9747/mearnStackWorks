//

class student {
    constructor(rol, st_name, course, total) {
        this.rollNumber = rol
        this.studentName = st_name
        this.courseName = course
        this.total = total

    }
    printDetails() {
        console.log(this.rollNumber, this.studentName, this.courseName, this.total);
    }

}

var std1 = new student(1, "akash", "bsc", 100000)

