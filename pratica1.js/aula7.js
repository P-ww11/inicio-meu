//vamos fazer uma cadeia de prototype exemplo
const animal = {             //criaçao literal de um objeto para usar o prototype que e quase igual uma herança de classes
  tipo: "animal",
  som: "som de animal",
  emitirSom: function (){
    console.log(this.som)
  }
}
const gato = {
    tipo: "gato",
    som: "miau"
}
Object.setPrototypeOf(gato,animal)         //ele diz que o objeto prototype dele(ou pai) vai ser o animal
gato.emitirSom()   //no objeto gato ele nao tem emitir som entao ele vai no animal e procurar la e se encontrar vai executar
//o this da funçao aponta pro objeto que nois ta chamando(gato) e se ele nao encontrar no gato ele volta la pro animal pra achar
