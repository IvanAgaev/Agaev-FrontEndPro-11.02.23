const array = [1,2,3,5,[8,9,10], 'Ваня', true];


const generateList = (arr) => {
    const p = document.createElement('ul');
    document.body.prepend(p);
    for (let i = 0; i<arr.length; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = arr[i];
        p.append(newLi);


    }

};
generateList(array);
