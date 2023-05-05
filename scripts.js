const form = document.getElementById("form");
 const primeironome = document.getElementById("primeironome");
 const ultimonome = document.getElementById("ultimonome");
 const email = document.getElementById("email");
 const senha = document.getElementById("senha");
 const endereco = document.getElementById("endereco");
 const numero = document.getElementById("numero");
 const estado = document.getElementById("estado");
 const cidade = document.getElementById("cidade");
 const bairro = document.getElementById("bairro");

 form.addEventListener("submit", (e) => {
 e.preventDefault();

 checkInputs(); 
 });

 function checkInputs() {
    const primeironomeValue = primeironome.value;
    const ultimonomeValue = ultimonome.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const enderecoValue = endereco.value;
    const numeroValue = numero.value;
    const estadoValue = estado.value;
    const cidadeValue = cidade.value;
    const bairroValue = bairro.value;

    if(primeironomeValue ==="") {
        setErrorFor(primeironome,"Este campo é obrigatório.");
    }  else {
        setSuccessFor(primeironome);
    }

    
    if(ultimonomeValue ==="") {
      setErrorFor(ultimonome,"Este campo é obrigatório.");
  }  else {
      setSuccessFor(ultimonome);
  }
    
    if (emailValue === "") {
        setErrorFor(email, "O e-mail é obrigatório.");
      }  else {
        setSuccessFor(email);
      }

      if (senhaValue === "") {
        setErrorFor(senha, "A senha é obrigatória.");
      } else if (senhaValue.length < 8) {
        setErrorFor(senha, "A senha precisa ter no mínimo 8 caracteres.");
      } else {
        setSuccessFor(senha);
      }

      if(enderecoValue ==="") {
        setErrorFor(endereco,"Este campo é obrigatório.");
    }  else {
        setSuccessFor(endereco);
    }

    if(numeroValue ==="") {
      setErrorFor(numero,"Este campo é obrigatório.");
  }  else {
      setSuccessFor(numero);
  }
    if(estadoValue ==="") {
      setErrorFor(estado,"Este campo é obrigatório.");
  }  else {
      setSuccessFor(estado);
  }
    if(cidadeValue ==="") {
      setErrorFor(cidade,"Este campo é obrigatório.");
  }  else {
      setSuccessFor(cidade);
  }
  
    if(bairroValue ==="") {
      setErrorFor(bairro,"Este campo é obrigatório.");
  }  else {
      setSuccessFor(bairro);
  }
 }

 const formControls = form.querySelectorAll(".form-control");

 const formIsValid = [...formControls].every((formControl) => {
   return formControl.className === "form-control success";
 });

 if (formIsValid) {
   console.log("O formulário está 100% válido!");
 }

 function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
  
   
    small.innerText = message;
  
    
    formControl.className = "form-control error";
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
  
   
    formControl.className = "form-control success";
  }

