class Tarjeta{
    constructor(marca, numero, cardholder, dia, mes, año, importe){
        this.marca = marca;
        this.numero = numero;
        this.cardholder = cardholder;
        this.dia= dia;
        this.mes = mes;
        this.año = año;
        this.importe = importe
    }
    info(){
        console.log("marca de la tarjeta: "+this.marca+" numero de tarjeta: "+this.numero+" nombre de usuario: "+this.cardholder+" vencimiento: "+this.dia+"/"+this.mes+"/"+this.año+" monto de importe: "+this.importe)
    }
    validateMonto(monto){
        if(monto<1000){
            console.log("operacion valida, monto a extraer: "+monto)
        }
        else{
            console.log("operacion invalida, usted quiso extraer: "+monto)
        }
    }
    validateOperation(){
        var date=new Date()
        var fechaActual=date.getDate()
        var mesActual=date.getMonth()
        var añoActual=date.getFullYear()
        if(this.dia>fechaActual){
            if(this.mes>=mesActual){
                if(this.año>=añoActual){
                    console.log("Su operacion es valida, su vencimiento es superior a la fecha actual ("+fechaActual+"/"+mesActual+"/"+añoActual+")")
            }
            else{console.log("No se puede realizar la operacion, su fecha de vencimiento caducó")}
        }
        else{console.log("No se puede realizar la operacion, su fecha de vencimiento caducó")}

    }
    else if(this.dia<=fechaActual && this.mes>mesActual && this.año>=añoActual){
        console.log("Su operacion es valida, su vencimiento es superior a la fecha actual ("+fechaActual+"/"+mesActual+"/"+añoActual+")")
    }
    
    else{console.log("No se puede realizar la operacion, su fecha de vencimiento caducó")}
}

    tasa(){
        if(this.marca="visa"){
            var tasa=this.año/this.mes
            var precioFinal=this.importe-tasa
            console.log("Tarjeta: "+this.marca+" monto de importe: "+this.importe+" tasa de la operacion: "+tasa+ " precio final incluyendo impuesto: "+precioFinal)

        }
        if(this.marca="nara"){
            var tasa=this.mes*0.5
            var precioFinal=this.importe-tasa
            console.log("Tarjeta: "+this.marca+" monto de importe: "+this.importe+" tasa de la operacion: "+tasa+ " precio final incluyendo impuesto: "+precioFinal)
        }
        if(this.marca="amex"){
            var tasa=this.mes*0.1
            var precioFinal=this.importe-tasa
            console.log("Tarjeta: "+this.marca+" monto de importe: "+this.importe+" tasa de la operacion: "+tasa+ " precio final incluyendo impuesto: "+precioFinal)
        }
    }
}


/*La clase incluye 4 metodos, al instanciar se debe hacer de la siguiente forma

(nombre de la tarjeta, nombre de la tarjeta , nombre de la persona , dia , mes , año ,importe )

El dia,mes y año se refiere al vencimiento de la tarjeta, ejemplo:

var tarjeta=new Tarjeta("nara",23,"damian",1,9,2022,1000);

para llamar a sus métodos: 

tarjeta.info()
tarjeta.validateMonto()
tarjeta.validateOperation()
tarjeta.tasa()

los resultados se mostraran en consola.
*/

