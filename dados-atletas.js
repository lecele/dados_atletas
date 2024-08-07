class Atleta {
    consturctor(nome, idade, peso, altura, notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
        };

        calculaCategoria(){
            let categoria = this.idade
            if( idade >= 9 && idade <= 11 ){
                return "infantil"
            if( idade >= 12 && idade <= 13)
                return "juvenil"
            if( idade >= 14 && idade <= 15)
                return "intermediário"
            if( idade >= 16 && idade <= 30)
                return " adulto"
            else 
                return "Sem Categoria"
            return categoria
            };
        };

        calculaIMC(){
            let imc = this.peso
            return this.imc = this.peso / (this.altura * altura)

        };

        calculaMediaValida(){
            let soma = 0;
            let media = 0;
            notasComputadas.forEach(function(notas){
                soma = soma + notas;
        
                media = soma / notasComputadas.length
                return media;
            });

        };

        obtemNomeAtleta(){
            return `${this.nome}`
            console.log("nome:" + this.nome)

        };

        obtemIdadeAtleta(){
            return this.idade
            console.log("idade:" + this.idade)


        };

        obtemPesoAtleta(){
            return this.peso
            console.log("peso:" + this.peso)


        };

        obtemAlturaAtleta(){
            return this.altura
            console.log("altura:" + this.altura)
        };

        obtemNotasAtleta(){
            return this.notas
            console.log("notas:" + notas)


        };

        obtemCategoria(){
            return this.categoria           
            console.log("categoria:" + this.categoria)

        };

        obtemIMC(){
            return this.imc
            console.log("imc:" + this.imc)
        };

        obtemMediaValida(){
            return this.media
            console.log("média:" + this.media)
                   

        };

  

};

let atletas = [
    {
      nome:[],
      idade:[],
      peso:[],
      altura:[],
      notas:[],

    }];

    const atleta = new Atleta("Cesar Abascal",
        30, 80, 1.70,
        [10, 9.34, 8.42, 10, 7.88]);
    
        atleta.obtemNomeAtleta()
        atleta.obtemIdadeAtleta()
        atleta.obtemPesoAtleta()
        atleta.obtemAlturaAtleta()
        atleta.obtemCategoria()
        atleta.obtemIMC()
        