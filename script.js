const origemInput = document.getElementById("origem");
origemInput.addEventListener("input", () => {
    const origem = origemInput.value.toLowerCase();

    if (origem ==="academico" || origem === "acadêmico"){
        document.querySelector('.tecnologia').value = 5;
        document.querySelector('.investigacao').value = 5;
    }
    if (origem ==='assassino arrependido'){
        document.querySelector('.nen').value = 5;
        document.querySelector('.luta').value = 5;
    }
    if (origem ==='atleta'){
        document.querySelector('.atletismo').value = 5;
        document.querySelector('.acrobacia').value = 5
    }
    if (origem ==='companheiro'){
        document.querySelector('.medicina').value = 5;
        document.querySelector('.diplomacia').value = 5
    }
    if (origem ==='criminoso'){
        document.querySelector('.crime').value = 5
        document.querySelector('.furtividade').value = 5
    }
    if (origem ==='espiao' || origem ==='espião'){
        document.querySelector('.furtividade').value = 5
        document.querySelector('.enganacao').value = 5
    }
    if (origem ==='humano normal'){
        document.querySelector('.sobrevivencia').value = 5
        document.querySelector('.intuicao').value = 5
    }
    if (origem ==='investigador'){
        document.querySelector('.investigacao').value = 5
        document.querySelector('.percepcao').value = 5
    }
    if (origem ==='lutador'){
        document.querySelector('.luta').value = 5
        document.querySelector('.reflexos').value = 5
    }
    if (origem ==='mercenario' || origem ==='mercenário'){
        document.querySelector('.pontaria').value = 5
        document.querySelector('.intimidacao').value = 5
    }
    if (origem ==='militar'){
        document.querySelector('.fortitude').value = 5
        document.querySelector('.pontaria').value = 5
    }
    if (origem ==='tank'){
        document.querySelector('.luta').value = 5
        document.querySelector('.fortitude').value = 5
    }
    if (origem ==='tecnico de informatica' || origem ==='técnico de informática'){
        document.querySelector('.investigacao').value = 5
        document.querySelector('.tecnologia').value = 5
    }
if (origem ==='vingador'){
        document.querySelector('.intimidacao').value = 5
        document.querySelector('.sanidade').value = 5
    }
    if (origem ==='vitima' || origem ==='vítima'){
        document.querySelector('.sobrevivencia').value = 5
        document.querySelector('.intuicao').value = 5
    }
});

const atrInput = document.getElementsByClassName('atr');
document.querySelector('.forca').value = 1
document.querySelector('.agilidade').value = 1
document.querySelector('.intelecto').value = 1
document.querySelector('.carisma').value = 1
document.querySelector('.vigor').value = 1

const agilidade = document.querySelector(".agilidade");
const valordefesa = document.getElementById("valordefesa");
const agi = Number(agilidade.value);

agilidade.addEventListener("input", () => {
    const agi = Number(agilidade.value);
    if (agi === 1) valordefesa.textContent = 16;
    if (agi === 2) valordefesa.textContent = 17;
    if (agi === 3) valordefesa.textContent = 18;
    if (agi === 4) valordefesa.textContent = 19;
    if (agi === 5) valordefesa.textContent = 20;
    if (agi === 0) valordefesa.textContent = 15;
});
if (agi === 1) valordefesa.textContent = 16;
