
function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  Animal.prototype.emitirSom = function () {
    console.log(`${this.nome} emitiu um som.`);
  };
  
  function Mamifero(nome, idade, tipo) {
    Animal.call(this, nome, idade);
    this.tipo = tipo;
  }
  
  Mamifero.prototype = Object.create(Animal.prototype);

  Mamifero.prototype.amamentar = function () {
    console.log(`${this.nome} está amamentando.`);
  };
  
  function Ave(nome, idade, tipo) {
    Animal.call(this, nome, idade);
    this.tipo = tipo;
  }
  
  Ave.prototype = Object.create(Animal.prototype);

  Ave.prototype.voar = function () {
    console.log(`${this.nome} está voando.`);
  };

  const leao = new Mamifero('Leão', 5, 'Felino');
  leao.emitirSom();
  leao.amamentar();
  
  const aguia = new Ave('Águia', 3, 'Ave de Rapina');
  aguia.emitirSom();
  aguia.voar();
  