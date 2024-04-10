const arr1=[1,2,3];
const arr2=[2,34,5];
console.log(arr1.concat(arr2));


const arr1 = [1, 2, 3];
const arr2 = [2, 34, 5];
const arr3 = [7, 8, 9];

const concatenatedArray = [...arr1, ...arr2, ...arr3];

console.log(concatenatedArray);

var user =[
    {
      name:"aravind",
      aim:"bike",
    },
    {
      name:"ashok",
      aim:"lone",
    },
    ];
    
    var newUser={
      name:"ard",
      aim:"love"
    }
    
    pos=[...user,newUser];
    console.log({pos});
  


    