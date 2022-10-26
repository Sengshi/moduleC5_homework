const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);

// console.log('data', data); //Данная команда выводит необходимы результат, без дополнительных манипуляций

const result = {list: []};
for (var i=0; i<=data.list.length-1; i++) {
	result.list.push({
	  name: data.list[i].name,
	  age: data.list[i].age,
	  prof: data.list[i].prof,
	  }
	);
}
console.log('result', result);
