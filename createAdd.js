/* html 동적 생성 */

const liTag = document.createElement('li'),
    olTag = document.createElement('ol'),
    ulTag = document.createElement('ul'),
    divTag = document.createElement('div'),
    pTag = document.createElement('p');

console.log(liTag);
console.log(olTag);
console.log(ulTag);
console.log(divTag);
console.log(divTag);

// 텍스트 설정
liTag.innerText = "공우정";
pTag.innerText = "여기는 p태그";

// 속성 설정
liTag.setAttribute('id', 'name');
liTag.setAttribute('class', 'list');

//스타일 설정
liTag.style.color = 'red';

console.log(liTag);

/* 동적 요소 추가 */
const listParent = document.querySelector('.listParent');


listParent.append(liTag); // 태그 추가 
listParent.append('텍스트로 추가'); // 텍스트값 추가
listParent.append(liTag, pTag, '공백공백공백'); // 여러개의 태그 및 텍스트 추가 
console.log(listParent.append(liTag, pTag, '공백공백공백')); // undefined


listParent.appendChild(liTag);
// listParent.appendChild('텍스트 값'); 에러가 난다. 해당 appendChild는 텍스트는 인자로 받지 않는다. 
listParent.appendChild(liTag, pTag); // 인자를 두개이상을 전달하면 가장 첫번째로 전달받은 인자만 추가한다. 
console.log(listParent.appendChild(liTag)); // 추가한 태그를 반환한다. 

liTag.style.color = 'blue';

listParent.insertBefore(liTag, null); // 맨 끝에 추가
listParent.insertBefore(pTag, listParent.firstChild); // 맨 처음에 추가 

/* 동적 요소 삭제 */

listParent.removeChild(listParent.firstChild); // 첫번째 요소 삭제
listParent.removeChild(listParent.lastChild); // 마지막 요소 삭제

const secondLi = document.querySelector('#second'); // 어떤 요소를 찾아 해당 하는 요소 삭제
listParent.removeChild(secondLi);