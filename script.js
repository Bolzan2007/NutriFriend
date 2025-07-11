function validarFormulario() {
    const campos = ["nome", "email", "telefone", "senha", "crn"];
    let preenchido = true;
  
    campos.forEach(id => {
      const campo = document.getElementById(id);
      if (!campo.value.trim()) {
        preenchido = false;
        campo.style.border = "2px solid red";
      } else {
        campo.style.border = "none";
      }
    });
  
    if (preenchido) {
      document.getElementById("pagina1").classList.add("oculto");
      document.getElementById("pagina2").classList.remove("oculto");
    }
  }
  