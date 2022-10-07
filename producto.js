 class Producto{
    constructor(codigo,nombre,costo,cantidad){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    obtenerDetalles(){
        return `Código: ${this.codigo}, Nombre: ${this.nombre}, Costo: ${this.costo}, Cantidad: ${this.nombre}`;
    }

    obtenerCodigo(){
        return this.codigo;
    }

    obtenerNombre(){
        return this.nombre;
    }

    obtenerCantidad(){
        return this.cantidad;
    }

    obtenerCosto(){
        return this.costo;
    }


}