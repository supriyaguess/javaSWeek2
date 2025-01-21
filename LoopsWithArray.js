let fruits=["mango","apple","banana","litchi","orange"];
fruits.push("pineapple");
for (let i = fruits.length - 1; i > 0; i--) {
    console.log(i, fruits[i]);
    
}
for (let i = 0; i < fruits.length; i++) {
    console.log(i,fruits[i]);
}

//nested-loops

let heroes =[
    ["ironman","spiderman","thor"],
    ["superman","wonder woman","flash"]
]

for (let i = 0; i < heroes.length; i++) {
    console.log(i , heroes[i], heroes[i].length);
    for (let j = 0; j <heroes[i].length; j++)  {
        console.log(`j=${j}, ${heroes[i][j]}`);
        
    }
    
}


let students =[ ["aman",95],["shradha",94.4],["karan,100"]];

for (let i = 0; i < students.length; i++) {
    console.log(`info of student #${i+}`)
    for(let j=0; j<students[i].length; j++) {
        console.log(students[i][j])
    }
    
}