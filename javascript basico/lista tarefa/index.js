const inf = document.querySelector(`#texto`)
const addINF = document.querySelector(`.add-tarefa`)
const tarefa = document.querySelector(`.tarefa`)
/*uma função na nosso selecionado que e um escutador de evento que vai ser click e oq vai escutar nesse evento click*/ 
addINF.addEventListener(`click`, function(event){
    console.log(inf.value)
} )
