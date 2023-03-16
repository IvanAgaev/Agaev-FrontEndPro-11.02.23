const array = [1,2,3,5,[8,9,10], 'Ваня', true];

const generateList = (arr) => {
    const p = document.createElement('ul');
    document.body.prepend(p);
    for (let i = 0; i<arr.length; i++) {
        if(Array.isArray(arr[i])){
            let newLiParent = document.createElement('li');
            let newUl = document.createElement('ul');
            for (let j = 0; j<arr[i].length;j++) {
                let newLiinUl = document.createElement('li');
                newLiinUl.innerHTML = arr[i][j];
                newUl.append(newLiinUl);
                newLiParent.append(newUl);
                p.append(newLiParent);
            }

        } else {
        let newLi = document.createElement('li');
        newLi.innerHTML = arr[i];
        p.append(newLi);
    }
}
};

generateList(array);
