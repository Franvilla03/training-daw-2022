function listarTodosLosDivs() {
    const allDivs = document.querySelectorAll('div');
    console.log('Todos los divs:', allDivs);
}

function listarTodosLosElementosButtons() {
    const allButtonsClassElements = document.querySelectorAll('.buttons');
    console.log('Todos los elementos con class "buttons":', allButtonsClassElements);
}

function listarPrimerDivButtons() {
    const firstButtonsDiv = document.querySelector('div.buttons');
    console.log('Primer div con class "buttons":', firstButtonsDiv);
}

function listarTodosLosDivsButtons() {
    const allButtonsDivs = document.querySelectorAll('div.buttons');
    console.log('Todos los divs con class "buttons":', allButtonsDivs);
}
