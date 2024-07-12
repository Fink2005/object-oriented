// string number boolean: primitive data types / pass by value

//object, array, function : non-primitive data types /  pass by reference

// pass by value :copy gia tri moi bien chua vung nho doc lap

var  a = 2 
var b  = 2
b = 3 
// a= 2


// pass by  reference : copy dia chi ~ 2 bien cung tro den 2 vung nho khac nhau
 
var color  = ["red","blue","green"]

var copy = color
copy.push("orange")


console.log({color, copy})

// array ~ luu tru nhieu gia tri (thuong la cung loai)


// object ~ luu tru cac thong tin khac nhau, mieu ta chung ve 1 thuc the ( doi tuong)

// tao 1 object luu thong tin cua sinh vien



// key property: key chua data
// key method: key chua function
var sv = {
    name: "Phan Tan sy",
    age: 20,
    study: function () {
        console.log("hoc bai")
    }

}
console.log("sv", sv)

// lay gia tri cua 1 key

console.log(sv.age)

sv.study()

sv.age = 21
console.log('sv', sv)


// so sanh array va object 


// array [] / quan li phan tu theo index

// object ()  / quan li value theo key



// tao 1 con meo


var cat1 = {
    name: "Tom",
    age: 2,


}

var cat2 = {
    name: "Jerry",
    age: 3,
}

// array cat ~~ array chua object

var catArr = [cat1,cat2]

// duyet mang, in ra ten cua tung con meo

for (var index = 0; index < catArr.length; index++;) {
    var cat = catArr[index]
    console.log(cat.name)
}

var cat3 = cat1

cat3.name ="Kitty"

//  sau khi thay doi cat3, thi ca cat3 va cat1 se bi thay doi


// LUU Y BEN NGOAI LA SV.NAME BEN TRONG LA THIS.NAME