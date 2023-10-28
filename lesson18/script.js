//1 forEach
// let arr = [5, 6, 7, 8, 9];
// let p = 0 ;
// arr.forEach(element => {
//     p += element;
// });
// console.log(p);

//2 Map
// let arr = [5, 6, 7, 8, 9];
// let powArr = arr.map(value => Math.pow(value,2));
// console.log(powArr);

//3 every
// let arr = [{name: 'Ivan', country: 'Ukraine'},
// {name: 'Petro', country: 'Ukraine'},
// {name: 'Miguel', country: 'Cuba'}]
// let countryEveryArr = arr.every(value => value.country === 'Ukraine');
// console.log(countryEveryArr);

//4 some
// let arr = [{name: 'Ivan', country: 'Ukraine'},
// {name: 'Petro', country: 'Ukraine'},
// {name: 'Miguel', country: 'Cuba'}]
// let countrySomeArr = arr.some(value => value.country === 'Cuba');
// console.log(countrySomeArr);

//5 filter
// let arr = [1, 'string', [3, 4], 5, [6, 7]];
// let filterArr = arr.filter(value => typeof(value)=="object");
// console.log(filterArr);

//6.1 reduce
// let arr = [1, 2, 5, 0 , 4, 5, 6];
// let newArr = arr.slice(0,arr.indexOf(0)).reduce((total , elem) => total + elem);
// console.log(newArr);


//6.2 reduce
// let arr = [1, 2, 3, 0, 4, 5, 6];
// let count = 0;
// let countReduceArr = arr.reduce((sum, elem) => {
//     if(sum <= 10){
//         count++;
//         return sum + elem;
// }
// },0);
// console.log(count);

//7 filter map
// let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// let positivArr = arr.filter(value => value >= 0).map(value => Math.pow(value,2));
// console.log(positivArr);