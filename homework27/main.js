const bodyElement = document.body;
const table = document.createElement('table');
const tableBody = document.createElement('tbody');
table.appendChild(tableBody);
bodyElement.append(table);
let o = 0;

for (let i = 1; i<=10;i++) {
    let k = document.createElement('tr');
    k.style = "padding: 0 0 5px";
    tableBody.append(k);
    for(let b = 1; b<=10; b++) {
        o++;
        let c = document.createElement('td');
        c.style = "padding: 0 0 0 5px";
        c.innerHTML = o;
        k.append(c);
    }
    o+=10;
    o=o-10;
}


