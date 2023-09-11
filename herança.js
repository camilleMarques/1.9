class pessoa { //classe pai
constructor(nome, telefone, email){
this.nome = nome;
this.telefone = telefone;
this.email = email;
}
falar() {
    console.log('${this.nome} esta falando')
}
andar() {
    console.log('${this.nome} esta andando');
}
}
 
class pessoaFisica extends pessoa {// classe filho1
constructor(nome, telefone, email, cpf){
super(nome, telefone, email);
this.cpf = cpf;
}
}
class PessoaJuridica extends pessoa {//classe filho2 
constructor(nome, telefone, email, cnpj){
    super(nome,telefone,email);
    this.cnpj = cnpj;
} 
}


