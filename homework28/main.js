const mySet = new Set();
while (mySet.size < 10) {
    mySet.add(1 + Math.round(Math.random() * 9));
}
const arr = Array.from(mySet);
const myDiv = document.querySelector('.myDiv');
for (let i = 0; i < 10; i++){
    const k = document.createElement('img');
    k.setAttribute('width','300px');
    k.setAttribute('height', '400px');
    k.setAttribute('src',`images/${arr[i]}.jpg`);
    myDiv.append(k);
}
