const array = [1,2,3,5,[8,9,10], 'Ваня', true];

const generateList = (arr) => {
    const ul = document.createElement('ul');
    arr.forEach(item => {
        let li = document.createElement('li');
        if(Array.isArray(item)) {
           li.append(generateList(item));
        } else {
            li.textContent = item;
        }

        ul.append(li);
    });

    return ul;
}

document.body.prepend(generateList(array));
