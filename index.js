let obj1 = {
    a: 15,
    b: 10,
    yuzasi: function () {
        return this.a * this.b;
    }
};
console.log(obj1.yuzasi());

let obj2 = {
    soliq: 20,
    kamunal: 12,
    prava: 980,
    havo: 3,
    qanchaKoTarildi: function (foiz) {
        for (let key in this) {
            if (typeof this[key] === "number") {
                this[key] = this[key] + (this[key] * foiz / 100);
            }
        }
    }
};
obj2.qanchaKoTarildi(15);
console.log(obj2);

let obj3 = {
    Salim: 50,
    Vali: 87,
    Ali: 12,
    deleteUser: function (name) {
        delete this[name];
    }
};
obj3.deleteUser("Vali");
console.log(obj3);

let obj4 = {
    olma: 7,
    mandarin: 4,
    banan: 6,
    apelsin: 1
};
for (let key in obj4) {
    if (obj4[key] % 2 !== 0) {
        delete obj4[key];
    }
}
console.log(obj4);


let obj = { Salim: 25, Ali: 17, Malika: 21 };

for (let key in obj) {
  obj[key] += 2;
}
console.log(obj);

let users1 = [
  { name: "Ali", age: 20 },
  { name: "Vali", age: 25 },
  { name: "Sami", age: 22 }
];

console.log("2-masala:");
for (let user of users1) {
  console.log(`${user.name} : ${user.age}`);
}

let objTwo = { a: 10, b: "hello", c: 5, d: true };

console.log("3misol");
for (let key in objTwo) {
  if (typeof objTwo[key] === "number") {
    console.log(`${key}=${objTwo[key]}`);
  }
}


let person = { name: "Lola", age: null, job: "Teacher", city: null };

for (let key in person) {
  if (person[key] === null) {
    delete person[key];
  }
}
console.log(person);

const users2 = [
  { name: "Ali", age: 17 },
  { name: "Vali", age: 19 },
  { name: "Sami", age: 21 }
];

let filteredUsers = users2.filter(user => user.age > 18);

console.log(filteredUsers);
