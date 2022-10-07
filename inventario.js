class Inventario{
    constructor(){
        this.inventario = new Array();
    }

    buscar(codigo){
        var min = 0;
        var max = this.inventario.length -1;
        while(min <= max){
            var middle = Math.trunc((min + max)/2);
            var num = middle;
            if(this.inventario[0].obtenerCodigo() === codigo){
             return 0;
            }
            if(this.inventario[this.inventario.length-1].obtenerCodigo() === codigo){
             return this.inventario.length;
            }
            if(this.inventario[num].obtenerCodigo() === codigo){
             return middle;
            } else if(num > codigo)  {
                max = middle - 1;
            }else{
                min = middle +1;
        }
        
        }
        return null;  
       
}

    conseguirPosicion(codigo){

        var min = 0;
        var max = this.inventario.length -1;
        var i = 0;
        while(min <= max){
          i++;
            var middle = Math.trunc((min + max)/2);
            var num = middle;
            if(this.inventario[0].obtenerCodigo() === codigo){
             return 0;
            }
            if(this.inventario[this.inventario.length-1].obtenerCodigo() === codigo){
             return this.inventario.length;
            }
            if(this.inventario[num].obtenerCodigo() === codigo){
             return i;
            } else if(num > codigo)  {
                max = middle - 1;
            }else{
                min = middle +1;
        }
        
        }
        return -1;  
}

    agregar(producto){
        let posicion = this.buscar(producto.obtenerCodigo());
          if(posicion === null){
            if(this.inventario.length == 0){
              this.inventario.push(producto);
            }
            let tamanio = this.inventario.length;
            let prueba = 0;
            let aux = this.inventario[this.inventario.length-1];
            for(let i = 0; i < tamanio; i++){
          
              if(producto.obtenerCodigo() < this.inventario[0].obtenerCodigo()){
                this.inventario.push(aux);
                for(let j = this.inventario.length-1; j < 0; j--){
                    this.inventario[j] = this.inventario[j-1];
                }
                this.inventario[0] = producto;
            }
              if(producto.obtenerCodigo() > this.inventario[tamanio-1].obtenerCodigo() && prueba == 0){
                    this.inventario.push(producto);
                    prueba = 1;
                   
            }
            if(producto.obtenerCodigo() > this.inventario[i].obtenerCodigo() && producto.obtenerCodigo() < this.inventario[i+1].obtenerCodigo()){
              for(let j = this.inventario.length-1; j < i; j--){
                  this.inventario[j] = this.inventario[j-1];
              }
              this.inventario.push(aux);
              this.inventario[i+1] = producto;
          }
       
            }
          }else{
            return null;
          }
      
    }
    
    lista(){
     let res=" ";
      for(let i=0; i<this.inventario.length;i++){
        res += `<br> ${this.inventario[i].obtenerDetalles()} </br>`;
      }
      if(res != " "){
       return res;
      }
      else{
        return null;
      }
    }

    listainverso(){
      let res=" ";
      for(let i=this.inventario.length-1; i >=0;i--){
        res += `<br> ${this.inventario[i].obtenerDetalles()} </br>`;
      }
      if(res != " "){
        return res;
       }
       else{
         return null;
       }
    }

    eliminar(codigo){
        let posicion = this.conseguirPosicion(codigo);
       
        if(posicion!= -1){
          for(let i = 0; i < this.inventario.length; i++){
            let aux = this.inventario[i].codigo;
            if(Number(aux) === Number(codigo)){
                let aux = this.inventario[i];
                for (let j=i; j<this.inventario.length-1; j++){
                    this.inventario[j]=this.inventario[j+1];
                }
                this.inventario[this.inventario.length-1]=aux;
                return this.inventario.pop();
              } 
              }
       } else{
        return null;
       }
      
    }
}