function calcularArea(idBoton, idSector, idsCampos, formula) {
    let boton = document.getElementById(idBoton);
    boton.addEventListener("click", function() {
        const valores = document.getElementById(idSector);
        let inputsHTML = idsCampos.map((campo) => 
            `<label for="${campo.id}">${campo.label}</label>
            <input type="text" id="${campo.id}" name="${campo.name}"> <br>`
        ).join("");

        valores.innerHTML = `
            <div class="Lado">
                ${inputsHTML}
                <button id="Calcular" type="button">Resultado</button>
                <div id="Solucion"></div>
            </div>
        `;

        let calcular = document.getElementById("Calcular");
        calcular.addEventListener("click", function() {
            let inputs = idsCampos.map(campo => parseFloat(document.getElementById(campo.id).value));

            if (inputs.every(valor => !isNaN(valor) && valor > 0)) {
                let resultado = formula(...inputs);
                document.getElementById("Solucion").textContent = `El área es igual a: ${resultado}`;
            } else {
                document.getElementById("Solucion").textContent = "Ingrese valores válidos";
            }
        });
    });
}

calcularArea("BtnAreaRectangulo", "SectorRectanguloArea", [
    {id: "Base", label: "¿Cuánto mide la base?", name: "Base"},
    {id: "Altura", label: "¿Cuánto mide la altura?", name: "Altura"}
], (base, altura) => base * altura);

calcularArea("BtnAreaTriangulo", "SectorTrianguloArea", [
    {id: "BaseTriangulo", label: "¿Cuánto mide la base?", name: "BaseTriangulo"},
    {id: "AlturaTriangulo", label: "¿Cuánto mide la altura?", name: "AlturaTriangulo"}
], (base, altura) => (base * altura) / 2);

calcularArea("BtnAreaCuadrado", "SectorCuadradoArea", [
    {id: "Area", label: "¿Cuánto mide un lado?", name: "Area"}
], (lado) => lado * lado);
    
calcularArea("BtnAreaCirculo", "SectorCirculoArea", [
    {id:"Radio", label: "¿Cuanto Mide el radio?", name: "Radio"}
], (Radio) => Math.PI *(Radio*Radio)); 
//////////////////////////////////////////////////////////////////////////////
function calcularPerimetro(idBoton, idSector, idsCampos, formula) {
    let boton = document.getElementById(idBoton);
    boton.addEventListener("click", function() {
        const valores = document.getElementById(idSector);
        
        const formId = `form_${idBoton}`;
        const buttonId = `calcular_${idBoton}`;
        const resultadoId = `resultado_${idBoton}`;
        
        let inputsHTML = idsCampos.map((campo) => 
            `<label for="${campo.id}">${campo.label}</label>
            <input type="text" id="${campo.id}" name="${campo.name}"> <br>`
        ).join("");

        valores.innerHTML = `
            <div class="Lado" id="${formId}">
                ${inputsHTML}
                <button id="${buttonId}" type="button">Resultado</button>
                <div id="${resultadoId}"></div>
            </div>
        `;

        // Añadir evento al botón
        let calcular = document.getElementById(buttonId);
        calcular.addEventListener("click", function() {
            let inputs = idsCampos.map(campo => parseFloat(document.getElementById(campo.id).value));

            if (inputs.every(valor => !isNaN(valor) && valor > 0)) {
                let resultado = formula(...inputs);
                document.getElementById(resultadoId).textContent = `El perímetro es igual a: ${resultado}`;
            } else {
                document.getElementById(resultadoId).textContent = "Ingrese valores válidos";
            }
        });
    });
}

calcularPerimetro("BtnPerimetroRectangulo", "SectorRectanguloPerimetro", [
    {id: "BasePerimetro", label: "¿Cuánto mide la base?", name: "Base"},
    {id: "AlturaPerimetro", label: "¿Cuánto mide la altura?", name: "Altura"}
], (base, altura) => (2*base) + (2*altura));

calcularPerimetro("BtnPerimetroTriangulo", "SectorTrianguloPerimetro", [
    {id: "lado1", label: "¿Cuánto mide el lado1?", name: "lado1"},
    {id: "lado2", label: "¿Cuánto mide el lado2?", name: "lado2"},
    {id: "lado3", label: "¿Cuánto mide el lado3?", name: "lado3"}
], (lado1, lado2, lado3) => lado1 + lado2 + lado3);

calcularPerimetro("BtnPerimetroCuadrado", "SectorCuadradoPerimetro", [
    {id: "Perimetro", label: "¿Cuánto mide un lado?", name: "Area"}
], (lado) => lado * 4);
    
calcularPerimetro("BtnPerimetroCirculo", "SectorCirculoPerimetro", [
    {id:"RadioPerimetro", label: "¿Cuanto Mide el radio?", name: "Radio"}
], (Radio) => (2 * Math.PI) * Radio); 

