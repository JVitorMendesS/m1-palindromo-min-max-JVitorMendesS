function isPalindrome(str){
    let modifyStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // metodo para deixar todas os caracteres minusculos, retirar os espaços e cacteres especiais

    let leftIndex = 0;
    let rightIndex = modifyStr.length - 1;

    while (leftIndex < rightIndex) {
        if (modifyStr[leftIndex] !== modifyStr[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }

    return true;
}

function arrayMaxMin(arr){
    let min = arr[0];
    let max = arr[0];

    // Percorre o array a partir do segundo elemento
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Atualiza o valor mínimo
        }
        if (arr[i] > max) {
            max = arr[i]; // Atualiza o valor máximo
        }
    }

    // Retorna um novo array com o valor mínimo e máximo
    return [min, max];
}

