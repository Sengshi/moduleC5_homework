const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
	<list>
		<student>
			<name lang="en">
				<first>Ivan</first>
				<second>Ivanov</second>
			</name>
			<age>35</age>
			<prof>teacher</prof>
		</student>
		<student>
			<name lang="ru">
				<first>Петр</first>
				<second>Петров</second>
			</name>
			<age>58</age>
			<prof>driver</prof>
		</student>
	</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const result = {list: []};
for (var i=0; i<=listNode.children.length-1; i++) {
	const nameNode = listNode.children[i].querySelector("name");
	const firstNode = nameNode.querySelector("first");
	const secondNode = nameNode.querySelector("second");
	const ageNode = studentNode.querySelector("age");
	const profNode = studentNode.querySelector("prof");
	const langAttr = nameNode.getAttribute('lang');
	result.list.push({
	  // list: {
	  name: firstNode.textContent + " " + secondNode.textContent,
	  age: Number(ageNode.textContent),
	  prof: profNode.textContent,
	  lang: langAttr,
	  }
	);
}
console.log('result', result);
