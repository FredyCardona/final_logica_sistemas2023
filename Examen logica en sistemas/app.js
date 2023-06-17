function validarOperacion() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var input3 = parseInt(document.getElementById("input3").value);

    var resultado = document.getElementById("resultado");

    if (input1 > input3) {
      var multiplicacion = input1 * input2 * input3;
      resultado.textContent = "Operación: Multiplicación | Resultado: " + multiplicacion;
    } else if (input1 === input2) {
      var suma = input1 + input2 + input3;
      resultado.textContent = "Operación: Suma | Resultado: " + suma;
    }
  }

  function unirValores() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var input3 = parseInt(document.getElementById("input3").value);

    var resultadoUnir = document.getElementById("resultadoUnir");

    var textoConcatenado = "";
    var repeticiones = input1 * input2 + input3;

    for (var i = 0; i < repeticiones; i++) {
      textoConcatenado += input1.toString() + input2.toString() + input3.toString();
    }

    resultadoUnir.textContent = "Texto concatenado: " + textoConcatenado;
  }