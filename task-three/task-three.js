class Worker {
    #experience = 1.2
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSallary () {
        return this.dayRate * this.workingDays
    }
    showSallaryWithExperience() {
        return this.dayRate * this.workingDays * this.#experience
    }
    get experience () {
        return this.#experience;
    }
    set experience(value) {
        this.#experience = value;
    }
}

const worker1 = new Worker("John Jonhson", 20, 23);
console.log(worker1)
console.log(worker1.fullName);
console.log(worker1.showSallary()); // 460
console.log("New experience: " + worker1.experience);
console.log(worker1.showSallaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(worker1.showSallaryWithExperience);


const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2)
console.log(worker2.fullName);
console.log(worker2.showSallary()); // 1056
console.log("New experience: " + worker2.experience);
console.log(worker2.showSallaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker2.experience);
console.log(worker2.showSallaryWithExperience);


const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3)
console.log(worker3.fullName);
console.log(worker3.showSallary()); // 667
console.log("New experience: " + worker3.experience);
console.log(worker3.showSallaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker3.experience);
console.log(worker3.showSallaryWithExperience);


worker1Copy = {
    fullName: worker1.fullName,
    salary: worker1.showSallaryWithExperience()
}

worker2Copy = {
    fullName: worker2.fullName,
    salary: worker2.showSallaryWithExperience()
}

worker3Copy = {
    fullName: worker3.fullName,
    salary: worker3.showSallaryWithExperience()
}


let arr =[]
arr.push(worker1Copy, worker2Copy, worker3Copy)

arr.sort(function(a,b) {
    return a.salary-b.salary
})

let result = []
for (let i = 0; i<arr.length; i++) {
    result[i] = arr[i].fullName + ': ' + arr[i].salary
}
console.log('Sorted salary:' +'\n'+ result[0]+'\n' + result[1] +'\n' + result[2])