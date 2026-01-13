  let fichaAtualId = null;

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




  const tipoNen = document.getElementById("nen");
  const nivelInput = document.getElementById("nivel");
  const vigorInput = document.querySelector(".vigor");


  // Sanidade
  const carismaInput = document.querySelector('.carisma');

  const sanidadeTexto = document.getElementById('sanidade-numero');
  const sanidadeBarra = document.querySelector('.sanidade-atual');


  const btnMaisSan = document.getElementById('sanidade-mais');
  const btnMenosSan = document.getElementById('sanidade-menos');


  let sanidadeAtual = 0;
  let sanidadeMax = 0;


  function calcularSanidadeMax() {
    const carisma = Number(carismaInput.value);
    const nivel = Number(nivelInput.value);
    const tipo = tipoNen.value; //



    let sanidadeBase = 0;
    let ganhoPorNivelSan = 0;

    if (tipo ==='Emissão') {
      sanidadeBase = 9;
      ganhoPorNivelSan = 2 + carisma;
    }
    if (tipo ==='Conjuração') {
      sanidadeBase = 10;
      ganhoPorNivelSan = 3 + carisma;
    }

    if (tipo === "Fortificação") {
      sanidadeBase = 8;
      ganhoPorNivelSan = 3 + carisma;
    }
    if (tipo === "Transmutação") {
      sanidadeBase = 13;
      ganhoPorNivelSan = 2 + carisma;
    }
    if (tipo === "Manipulação") {
      sanidadeBase = 12;
      ganhoPorNivelSan = 3 + carisma;
    }
    if (tipo === "Especialização") {
      sanidadeBase = 10;
      ganhoPorNivelSan = 2 + carisma;
    }


    sanidadeMax = sanidadeBase + (nivel * ganhoPorNivelSan );

    if (sanidadeAtual ===0 || sanidadeAtual > sanidadeMax){
      sanidadeAtual = sanidadeMax;
    }

    atualizarBarraSan();
  }

  function atualizarBarraSan() {
    sanidadeTexto.textContent = sanidadeAtual + " / " + sanidadeMax;
    const porcentagem = (sanidadeAtual / sanidadeMax) *100;
    sanidadeBarra.style.width = porcentagem + "%";
    if (sanidadeMax <=0) return;
  }

  btnMaisSan.addEventListener('click', () =>{
    if (sanidadeAtual < sanidadeMax) sanidadeAtual++;
    atualizarBarraSan();
  });
  btnMenosSan.addEventListener('click', () => {
    if (sanidadeAtual > 0) {
      sanidadeAtual--;
      atualizarBarraSan();
    }
  });

  tipoNen.addEventListener('input', calcularSanidadeMax);
  nivelInput.addEventListener('change', calcularSanidadeMax);
  carismaInput.addEventListener('input', calcularSanidadeMax);

  calcularSanidadeMax();


  // defesa
  const agilidadeInput = document.querySelector(".agilidade");
  const valordefesa = document.getElementById("valordefesa");
  valordefesa.textContent = 16;
  const agilidade = Number(agilidadeInput.value);-

  agilidadeInput.addEventListener("input", () => {
    const agilidade = Number(agilidadeInput.value);
      if (agilidade === 1) valordefesa.textContent = 16;
      if (agilidade === 2) valordefesa.textContent = 17;
      if (agilidade === 3) valordefesa.textContent = 18;
      if (agilidade === 4) valordefesa.textContent = 19;
      if (agilidade === 0) valordefesa.textContent = 15;
  });


  // vida
  const vidaTexto = document.getElementById("vida-numero");
  const vidaBarra = document.querySelector(".vidaAtual");


  const btnMais = document.getElementById("vida-mais");
  const btnMenos = document.getElementById("vida-menos");



  let vidaAtual = 0;
  let vidaMax = 0;
  const vigor = Number(vigorInput.value);

  function calcularVidaMax() {
    const nivel = Number(nivelInput.value);
    const tipo = tipoNen.value; // 
    const vigorInput = document.querySelector(".vigor");
    const vigor = Number(vigorInput.value);

    let vidaBase = 0;
    let ganhoPorNivel = 3;

    if (tipo === "Emissão") {
      vidaBase = 10;
      ganhoPorNivel = 3 + vigor;
    }


    if (tipo === "Fortificação") {
      vidaBase = 16 + vigor;
      ganhoPorNivel = 4;
    }
    if (tipo === "Transmutação") {
      vidaBase = 14;
      ganhoPorNivel = 3;
    }
    if (tipo === "Conjuração") {
      vidaBase = 13;
      ganhoPorNivel = 2;
    }
    if (tipo === "Manipulação") {
      vidaBase = 11;
      ganhoPorNivel = 2;
    }
    if (tipo === "Especialização") {
      vidaBase = 15;
      ganhoPorNivel = 2;
    }


    vidaMax = vidaBase +  (nivel * ganhoPorNivel);


    if (vidaAtual === 0 || vidaAtual > vidaMax) {
      vidaAtual = vidaMax;
    }


    atualizarBarra();
  }


  function atualizarBarra() {
    vidaTexto.textContent = vidaAtual + " / " + vidaMax;
    const porcentagem = (vidaAtual / vidaMax) * 100;
    vidaBarra.style.width = porcentagem + "%";
  }
  btnMais.addEventListener("click", () => {
      vidaAtual++;
      atualizarBarra();
  });

  btnMenos.addEventListener("click", () => {
    if (vidaAtual > 0) {
      vidaAtual--;
      atualizarBarra();
    }
  });

  tipoNen.addEventListener("input", calcularVidaMax);
  nivelInput.addEventListener("change", calcularVidaMax);
  vigorInput.addEventListener("input", calcularVidaMax);

  calcularVidaMax();



  // PN
  const pnTexto = document.getElementById('pn-numero');
  const pnBarra = document.querySelector('.pn-atual');
  const intelectoInput = document.querySelector('.intelecto');

  const btnMaisPN = document.getElementById('pn-mais');
  const btnMenosPN = document.getElementById('pn-menos');

  let pnAtual = 0;
  let pnMax = 0;


  function calcularPNMax() {
    const nivel = Number(nivelInput.value);
    const tipo = tipoNen.value;
    const intelecto = Number(intelectoInput.value);

    let pnBase = 0;
    let ganhoPorNivelPN = 0;

    if (tipo === 'Emissão') {
      pnBase = 11 + intelecto;
      ganhoPorNivelPN = 3;
    }

    if (tipo === "Conjuração") {
      pnBase = 10 + intelecto;
      ganhoPorNivelPN = 3;
    }

    if (tipo === "Fortificação") {
      pnBase = 9 + intelecto;
      ganhoPorNivelPN = 2;
    }
    if (tipo === "Transmutação") {
      pnBase = 8 + intelecto;
      ganhoPorNivelPN = 3;
    }
    if (tipo === "Manipulação") {
      pnBase = 12 + intelecto;
      ganhoPorNivelPN = 3;
    }
    if (tipo === "Especialização") {
      pnBase = 11 + intelecto;
      ganhoPorNivelPN = 2;
    }


    pnMax = pnBase + (nivel * ganhoPorNivelPN);

    if (pnAtual === 0 || pnAtual > pnMax) {
      pnAtual = pnMax;
    }

    atualizarBarraPN();
  }

  function atualizarBarraPN() {
    pnTexto.textContent = pnAtual + " / " + pnMax;
    if (pnMax <= 0) return;
    const porcentagem = (pnAtual / pnMax) * 100;
    pnBarra.style.width = porcentagem + "%";
  }

  btnMaisPN.addEventListener('click', () => {
    if (pnAtual < pnMax) pnAtual++;
    atualizarBarraPN();
  });

  btnMenosPN.addEventListener('click', () => {
    if (pnAtual > 0) pnAtual--;
    atualizarBarraPN();
  });

  tipoNen.addEventListener('input', calcularPNMax);
  nivelInput.addEventListener('change', calcularPNMax);
  intelectoInput.addEventListener('input', calcularPNMax);


  calcularPNMax();




  const nomeInput = document.querySelector('input[name="nome"]');
  const idadeInput = document.querySelector('input[name="idade"]');
  const inventarioInput = document.getElementById('inventario');
  const poderesInput = document.getElementById('poderes');
  const forcaInput = document.querySelector('.forca');
  const acrobaciaInput = document.querySelector('.acrobacia');
  const adestramentoInput = document.querySelector('.adestramento');
  const atletismoInput = document.querySelector('.atletismo');
  const crimeInput = document.querySelector('.crime');
  const diplomaciaInput = document.querySelector('.diplomacia');
  const enganacaoInput = document.querySelector('.enganacao');
  const fortitudeInput = document.querySelector('.fortitude');
  const furtividadeInput = document.querySelector('.furtividade');
  const iniciativaInput = document.querySelector('.iniciativa');
  const intimidacaoInput = document.querySelector('.intimidacao');
  const intuicaoInput = document.querySelector('.intuicao');
  const investigacaoInput = document.querySelector('.investigacao');
  const lutaInput = document.querySelector('.luta');
  const medicinaInput = document.querySelector('.medicina');
  const sanidadeInput = document.querySelector('.sanidade');
  const nenInput = document.querySelector('.nen');
  const percepcaoInput = document.querySelector('.percepcao');
  const pontariaInput = document.querySelector('.pontaria');
  const reflexosInput = document.querySelector('.reflexos');
  const sobrevivenciaInput = document.querySelector('.sobrevivencia');
  const tecnologiaInput = document.querySelector('.tecnologia');



  function salvarFicha() {
    const fichas = JSON.parse(localStorage.getItem("fichas")) || [];
    const nomeInput = document.querySelector('input[name="nome"]');
    const idadeInput = document.querySelector('input[name="idade"]');

    const novaFicha = {
      nome: nomeInput.value,
      dados: {
        nome: nomeInput.value,
        idade: idadeInput.value,
        inventario: inventarioInput.value,
        poderes: poderesInput.value,
        nivel: nivelInput.value,
        tipoNen: tipoNen.value,
        origem: origemInput.value,
        vidaAtual,
        vidaMax,
        sanidadeAtual,
        sanidadeMax,
        pnAtual,
        pnMax,
        valordefesa,
        atributos: {
          forca: Number(forcaInput.value),
          agilidade: Number(agilidadeInput.value),
          carisma: Number(carismaInput.value),
          vigor: Number(vigorInput.value),
          intelecto: Number(intelectoInput.value)
        },
        pericias: {
          acrobacia: Number(acrobaciaInput.value),
          adestramento: Number(adestramentoInput.value),
          atletismo: Number(atletismoInput.value),
          crime: Number(crimeInput.value),
          diplomacia: Number(diplomaciaInput.value),
          enganacao: Number(enganacaoInput.value),
          fortitude: Number(fortitudeInput.value),
          furtividade: Number(furtividadeInput.value),
          iniciativa: Number(iniciativaInput.value),
          intimidacao: Number(intimidacaoInput.value),
          intuicao: Number(intuicaoInput.value),
          investigacao: Number(investigacaoInput.value),
          luta: Number(lutaInput.value),
          medicina: Number(medicinaInput.value),
          nen: Number(nenInput.value),
          percepcao: Number(percepcaoInput.value),
          pontaria: Number(pontariaInput.value),
          reflexos: Number(reflexosInput.value),
          sanidade: Number(sanidadeInput.value),
          sobrevivencia: Number(sobrevivenciaInput.value),
          tecnologia: Number(tecnologiaInput.value)
        }

      }
    };

    if (fichaAtualId) {
    const index = fichas.findIndex(f => f.id === fichaAtualId);
    if (index !== -1) {
      fichas[index].dados = novaFicha.dados;
      fichas[index].nome = novaFicha.nome;
    }
  } else {
    novaFicha.id = Date.now();
    fichas.push(novaFicha);
  }


    localStorage.setItem("fichas", JSON.stringify(fichas));
    listarFichas();
    fichaAtualId = novaFicha.id || fichaAtualId;
  }



  function carregarFicha(id) {
    alert("Cliquei na ficha ID: " + id);


    const fichas = JSON.parse(localStorage.getItem("fichas")) || [];
    const ficha = fichas.find(f => f.id === id);
      console.log("Fichas salvas:", fichas);
      console.log("ID recebido:", id);
    if (!ficha) return;

    const d = ficha.dados;
    nomeInput.value = d.nome;
    idadeInput.value = d.idade;
    nivelInput.value = d.nivel;
    tipoNen.value = d.tipoNen;
    origemInput.value = d.origem;
    poderesInput.value = d.poderes;
    inventarioInput.value = d.inventario;
    
    forcaInput.value = d.atributos.forca;
    agilidadeInput.value = d.atributos.agilidade;
    carismaInput.value = d.atributos.carisma;
    vigorInput.value = d.atributos.vigor;
    intelectoInput.value = d.atributos.intelecto;

    acrobaciaInput.value = d.pericias.acrobacia;
    adestramentoInput.value = d.pericias.adestramento;
    atletismoInput.value = d.pericias.atletismo;
    crimeInput.value = d.pericias.crime;
    diplomaciaInput.value = d.pericias.diplomacia;
    enganacaoInput.value = d.pericias.enganacao;
    fortitudeInput.value = d.pericias.fortitude;
    furtividadeInput.value = d.pericias.furtividade;
    iniciativaInput.value = d.pericias.iniciativa;
    intimidacaoInput.value = d.pericias.intimidacao;
    intuicaoInput.value = d.pericias.intuicao;
    investigacaoInput.value = d.pericias.investigacao;
    lutaInput.value = d.pericias.luta;
    medicinaInput.value = d.pericias.medicina;
    nenInput.value = d.pericias.nen;
    percepcaoInput.value = d.pericias.percepcao;
    pontariaInput.value = d.pericias.pontaria;
    reflexosInput.value = d.pericias.reflexos;
    sanidadeInput.value = d.pericias.sanidade;
    sobrevivenciaInput.value = d.pericias.sobrevivencia;
    tecnologiaInput.value = d.pericias.tecnologia;


    vidaAtual = d.vidaAtual;
    vidaMax = d.vidaMax;
    atualizarBarra();

    sanidadeAtual = d.sanidadeAtual;
    sanidadeMax = d.sanidadeMax;
    atualizarBarraSan();

    pnAtual = d.pnAtual;
    pnMax = d.pnMax;
    atualizarBarraPN();

    valordefesa = d.valordefesa;

    fichaAtualId = id;
  }


  function listarFichas() {
  const lista = document.getElementById("lista-fichas");
  const fichas = JSON.parse(localStorage.getItem("fichas")) || [];

  lista.innerHTML = "";

  fichas.forEach(f => {
    lista.innerHTML += `
      <div class="linha-ficha">
        <span>${f.dados.nome || "Sem Nome"}</span>
        <button onclick="carregarFicha(${f.id})" class="carregarficha">Abrir</button>
        <button onclick="apagarFicha(${f.id})" class="apagarficha">🗑</button>
      </div>
    `;
  });
}

function apagarFicha(id) {
  const fichas = JSON.parse(localStorage.getItem("fichas")) || [];
  const novasFichas = fichas.filter(f => f.id !== id);
  localStorage.setItem("fichas", JSON.stringify(novasFichas));

  if (fichaAtualId === id) {
    fichaAtualId = null;
  }

  listarFichas();
}







  // Chama essa função toda vez que salvar ou atualizar fichas
  listarFichas();
