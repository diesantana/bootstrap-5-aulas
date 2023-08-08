(function(){
    const form = document.querySelector('form');
    const inputUser = document.querySelector('#nomeProduto');
    const inputPreco = document.querySelector('#precoProduto');
    const inputDescription = document.querySelector('#descricaoProduto');
    const inputCategoria = document.querySelector('#categoriaProduto');

    // Manipula o evento submit
    function handleSubmit(event){
        valueIsValid(inputUser, event);
        valueIsValid(inputPreco, event);
        valueIsValid(inputDescription, event);
        valueIsValid(inputCategoria, event);
    }

    // Verifica se o campo foi preenchido
    function valueIsValid(input, event){
        if(!input.value){
            input.classList.add('is-invalid');
            event.preventDefault();
        }
    }   
    
    // Remove as classes de erro 
    function valueValid(input){
        input.addEventListener('input', () => {
            if(input.value){
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else{
                input.classList.remove('is-valid');
            }
        })
    }

    form.addEventListener('submit', handleSubmit);
    valueValid(inputUser);
    valueValid(inputPreco);
    valueValid(inputCategoria);
    valueValid(inputDescription);
})();