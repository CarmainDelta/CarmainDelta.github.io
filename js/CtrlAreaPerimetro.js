var forma = document.getElementById("forma"),
    btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2"),
    btn3 = document.getElementById("btn3"),
    salidaRectagulo = document.getElementById("salidaRectagulo"),
    salidaTriangulo = document.getElementById("salidaTriangulo"),
    salidaCirculo = document.getElementById("salidaCirculo");

    btn1.addEventListener("click", rec, false);
    btn2.addEventListener("click", tri, false);
    btn3.addEventListener("click", cir, false);

    function rec(e){ 
        let rectangulo = NuevaForma();
        e.preventDefault();
        salidaRectagulo.value=rectangulo[0];
  
      } 
      function tri(e){ 
        e.preventDefault();
        let triangulo=[];
        triangulo = NuevaForma();
        salidaTriangulo.value=triangulo[1];
  
      } 
      function cir(e){ 
        e.preventDefault(); 
        let circulo=[];
        circulo = NuevaForma();
        salidaCirculo.value=circulo[2];
      } 
    
    function NuevaForma(){
      let salidaMsj=[];
      const formaF = [
          new Rectangulo(forma["color1"].value,"Rectángulo",forma["ladoMayor"].value,forma["ladoMenor"].value),
          new Triangulo(forma["color2"].value,"Triángulo",forma["base"].value,forma["altura"].value,forma["lados"].value),
          new Circulo(forma["color3"].value, "Círculo", forma["radio"].value)];
        for (var figu of formaF) {
          salidaMsj.push(`${figu.imprimir()},
          ${figu.calcularArea()},
          ${figu.calcularPerimetro()}`);
        }
        return salidaMsj;

    }

    class Formas {
        constructor(color, nombre){
          this.color = color;
          this.nombre = nombre;
        }
        imprimir(){
          return `La figura es un ${this.nombre} y su color es ${this.color}`;
        }

        calcularArea(){
          throw new Error("abstract");
        }
        calcularPerimetro(){
          throw new Error("abstract");
        }


    }
    /** @implements {Formas} */
    class Rectangulo  extends Formas{
        constructor(color, nombre,ladoMayor,ladoMenor){
          super(color,nombre);
          this.ladoMayor = ladoMayor;
          this.ladoMenor = ladoMenor;
        }
        /** @override*/
        calcularArea(){
          let area = this.ladoMayor * this.ladoMenor;
          return `El Área del Rectángulo es: ${area}`;
        }
        calcularPerimetro(){
          let perimetro = (this.ladoMayor * 2)+ (this.ladoMenor * 2);
           return `El Perímetro del Rectángulo es: ${perimetro}`;
        }

    }
    /** @implements {Formas} */
    class Triangulo  extends Formas{
        constructor(color, nombre,base, altura,lados){
          super(color,nombre);
          this.base = base;
          this.altura = altura;
          this.lados = lados;
          
        }
        /** @override*/
        calcularArea(){
           let area = (this.base * this.altura)/2;
           return `El Área del Triangulo es: ${area}`;
        }
        calcularPerimetro(){
          let perimetro = (this.lados * 3);
          return `El Perímetro del Triangulo es: ${perimetro}`;
        }
    }
    /** @implements {Formas} */
    class Circulo extends Formas{
        constructor(color, nombre,radio){
          super(color,nombre);
          this.radio = radio;
        }
         /** @override*/
        calcularArea(){
          let area = (this.radio * this.radio) * 3.1416;
          return `El Área del Circulo es: ${area}`;
        }
        calcularPerimetro(){
          let perimetro = 2 * 3.1416 * this.radio;
          return `El Perímetro del Circulo es: ${perimetro}`;
        }

    }