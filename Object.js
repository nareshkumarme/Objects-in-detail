// // Type 1

// const Object1 = {
//     rocket:'santo',
//     model:'f16',
//     config :{
//       engine:'ran'
//     }
// }
// Object1.model = 'R23';
// Object1['rider'] = 'Naresh'

// Type 2

// const Obj2 = new Object()
// Obj2.redbook = 'sundayradar'
// console.log(Obj2)


// Type 3

// const Powers = {
//   name : 'naresh',
//   class:'tenth'
// }
// const obj3 = Object.create(Powers);
// console.log(obj3.name)

// Type 4

// const obj4 = Object.create({});
// obj4.name = 'naresh'

// 

// const obj5 = Object.create({});
// Object.defineProperty(obj5,'book',{
//   get: () => 'Aynrand',
//   set:(value) =>{
//     // console.log(value)
//   },
//   enumerable:true
// })
// obj5['book'] = 'naresh'
// // console.log(Object.getPrototypeOf(obj5))
//  for (k in obj5){
//    console.log('this is', obj5[k])
// }


//  Type 5

// const obj6 = {
//   comic:'naresh',
//   pen :'',
//   printComic: function(){
//     this.pen += 'book',
//     console.log(this)
//     return this
//   },

//   printaComic: () =>{
//     console.log(this)
//   }
  
// }
// console.log(obj6.printComic().printComic().printComic());












