function calcularCuotas() {
    var monto = parseFloat(document.getElementById("monto").value);
    var tasa = parseFloat(document.getElementById("tasa").value);
    var cuotas = parseInt(document.getElementById("cuotas").value);

    if (isNaN(monto) || isNaN(tasa) || isNaN(cuotas) || monto <= 0 || tasa <= 0 || cuotas <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    var tasaInteres = tasa / 100;
    var montoTotal = monto * (1 + tasaInteres);
    
    var montoCuota = montoTotal / cuotas;

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Monto total a pagar: $" + montoTotal.toFixed(2) + "<br>";
    resultadoDiv.innerHTML += "Monto de cada cuota: $" + montoCuota.toFixed(2);
}
