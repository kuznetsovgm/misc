/*
Пользуясь навигатором, многие видели «градусник» при построении автомобильного маршрута. 
Он представляет собой разноцветную прямую, на которой изображена загруженность дорог на маршруте. 
В этой задаче предлагается написать функцию, которая адаптирует данные «градусника» для разных размеров экрана.

На вход функции дан массив цветов длины length и размер экрана width (length ≥ width), 
на котором будет изображен градусник. Используемые цвета GREEN, YELLOW и RED отвечают низкой, 
средней и высокой загруженности соответственно. Цвета сравнимы по степени загруженности дорог: GREEN < YELLOW < RED.

Исходный массив, начиная с первого элемента, разбивается на подряд идущие непересекающиеся 
подмассивы длины length / width (число всегда будет целым). В каждом подмассиве необходимо 
упорядочить цвета по возрастанию степени загруженности дорог, выбрать медианный цвет и заменить 
на него всю совокупность. В случае массива четной длины выбирается «нижняя медиана» 
(элемент с номером n/2 в упорядоченном ряду из n элементов). В итоге должен получиться массив цветов длины width.

ввод
const segments = ['GREEN', 'GREEN', 'RED', 'GREEN', 'YELLOW', 'RED', 'GREEN', 'YELLOW', 'RED', 'YELLOW'];
const width = 5;

вывод
['GREEN', 'GREEN', 'YELLOW', 'GREEN', 'YELLOW']

*/

//let s = ['GREEN', 'GREEN', 'RED', 'GREEN', 'YELLOW', 'RED', 'GREEN', 'YELLOW', 'RED', 'YELLOW'];
//let w = 5;

module.exports = function solution(segments, width) {
	let block = segments.length / width;
	let colors = {
		GREEN: 1,
		YELLOW: 2,
		RED: 3
	}
	let res = [];

	for (var i = 0; i < segments.length; i += block) {
		// debugger;
		let arr = segments.slice(i, i + block);
		arr = arr.sort((a, b) => (colors[a] - colors[b]));
		res.push(arr[arr.length / 2 - 1]);
	}
	return res;
}

//solution(s, w);


// правильное решение от яндекса
module.exports = function solution(segments, width) {
    const blockSize = segments.length / width;

    const result = [];

    for (let i = 0; i < width; i++) {
        result.push(getMedian(segments.slice(i * blockSize, (i + 1) * blockSize)));
    }

    return result;
};

function getMedian(array) {
    const map = {
        GREEN: 1,
        YELLOW: 2,
        RED: 3
    };

    return array.sort((a, b) => map[a] - map[b])[Math.floor((array.length - 1) / 2)];
}