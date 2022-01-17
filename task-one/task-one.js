class Student {
    constructor(fullName, direction) {
        this._fullName = fullName;
        this._direction = direction;
    }

    showFullName(){
        let result = this._fullName;
        return result;
    }
    nameIncludes(data) {
        if (this.showFullName().includes(data)) return console.log (true);
        return console.log(false);
    }
    static studentBuilder(fullName, direction){
        return new Student (fullName, direction);
    }
}
    const stud1 = new Student ("Ivan Petrenko", "web");
    const stud2 = new Student ("Sergiy Koval", "puthon");
    const stud3 = Student.studentBuilder ("Ihor Kohut", "qc");

    stud1.nameIncludes('Ivan'); 
    stud1.nameIncludes('Denysenko');