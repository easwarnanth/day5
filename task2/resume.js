let myresume={
    "name":"Easwar S",
    "mailid":"easwarnanthu0@gmail.com",
    "location":"Nagercoil,TamilNadu",
    "country":"india"
}
let a= Object.keys(myresume);


// for loop

for(let i=0; i>=0; i++)
{
 if(a[i])
 {
    console.log(`${a[i]} : ${myresume[a[i]]}`);
 }
 else
 {
    break;
 }
}
console.log('-----------------------------------------------------------------');

//for in

for (let i in myresume) 
{
  console.log(i+" : "+myresume[i]);
}

console.log('-----------------------------------------------------------------');

// for of

for (let i of a) {
console.log(i+" : "+myresume[i]);
}

console.log('-----------------------------------------------------------------');

// forEach

a.forEach(b =>{console.log(`${b} : ${myresume[b]}`)})

console.log('-----------------------------------------------------------------');