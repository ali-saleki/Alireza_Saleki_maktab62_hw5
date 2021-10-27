let personData = [
    {
        uid: 1,
        firstName: "Ali",
        lastName: "Mahdavi"
    },
    {
        uid: 2,
        firstName: "Reza",
        lastName: "Shahmardan"
    },
    {
        uid: 3,
        firstName: "Hassan",
        lastName: "Qolami"
    },
    {
        uid: 4,
        firstName: "Morteza",
        lastName: "Hamedani"
    },
    {
        uid: 5,
        firstName: "Sina",
        lastName: "Hejazi"
    },
    {
        uid: 6,
        firstName: "Hadi",
        lastName: "Sadri"
    }
]

let additionalPersonData = [
    {
        uid: 3,
        position: "UI Designer",
        city: "Biarjmand"
    },
    {
        uid: 1,
        position: "Back-End Develope",
        city: "Taleqan"
    },
    {
        uid: 2,
        position: "Front-End Developer",
        city: "Behbahan"
    },
    {
        uid: 4,
        position: "Devops",
        city: "Shiraz"
    },
    {
        uid: 6,
        position: "Server Admin",
        city: "Tehran"
    },
    {
        uid: 5,
        position: "Product Manager",
        city: "Hamedan"
    }
]

let len = personData.length
let result = [];

for (let i = 0; i < len; i++) {
    let single = {};
    for (let j = 0; j < len; j++) {
        if (personData[i].uid === additionalPersonData[j].uid) {
            single.uid = personData[i].uid;
            single.firstName = personData[i].firstName;
            single.lastName = personData[i].lastName;
            single.position = additionalPersonData[j].position;
            single.city = additionalPersonData[j].city;

            result.push(single);
        }


    }

}

function read() {
    return result;
}
console.log(read());

let newObj = {
    uid: 7,
    firstName: "Alireza",
    lastName: "Saleki",
    position: "Back-end Developer",
    city: "Karaj"
};

function create(newObj) {
    for (var i = 0; i < result.length; i++) {
        if (newObj.uid === result[i].uid) {
            return `Your uid(${newObj.uid}) has already been in object`;
        } else if (newObj.uid > result[i].uid) {
            if (result[i].uid == result.length) {
                return (result = result.concat(newObj));
            }
        } else if (newObj.uid < result[i].uid) {
            return (result = result.concat(newObj));
        }
    }
}
result = create(newObj);
console.log(result);

let updateObj = {
    uid: 5,
    firstName: "Mohammad",
    lastName: "Rad",
    position: "Front-end Developer",
    city: "Shiraz"
}


function update() {
    for (let i = 0; i < result.length; i++) {
        if (updateObj.uid === result[i].uid) {
            result[i].uid = updateObj.uid;
            result[i].firstName = updateObj.firstName;
            result[i].lastName = updateObj.lastName;
            result[i].position = updateObj.position;
            result[i].city = updateObj.city;

            return result;
        } if (updateObj.uid > result.length) {
            return `Update object error`;
        }

    }
}
result = update(updateObj);
console.log(update());

function dellete(input) {
    for (let i = 0; i < result.length; i++) {
        if (input === result[i].uid) {
            var filtered = result.filter(function (el) { return el.uid != input });
            return `Person with uid number ${input} is deleted successfully!`;
        } else if (input > result.length) {
            return `This person doesn't exist!`
        }
    }
}

console.log(dellete(8));