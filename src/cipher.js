const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const cipher = {
  encode: function cifrar(offset, mensaje) {
    let resultado = "";
    //toUpperCase  convierte texto a mayusculas 
    mensaje = mensaje.toUpperCase()

    for (let i = 0; i < mensaje.length; i++) {
      //reconocer cada una de las letras de mi mensaje
      const letraMensaje = mensaje[i];
      //traer indice de la letra de mi mensaje
      const indice = letras.indexOf(letraMensaje)
      // si la letra no existe devuelve -1
      if (indice !== -1) {
        const cifrado = (indice + offset) % 26
        resultado += letras[cifrado]
      } else if (letraMensaje === " ") {
        resultado += " "
      }
    }

    return resultado
  },
  decode: function descifrar(offset, mensaje) {
    let resultado = "";
    //toUpperCase  convierte texto a mayusculas 
    mensaje = mensaje.toUpperCase()

    for (let i = 0; i < mensaje.length; i++) {
      //reconocer cada una de las letras de mi mensaje
      const letraMensaje = mensaje[i];
      //traer indice de la letra de mi mensaje
      const indice = letras.indexOf(letraMensaje)
      // si la letra no existe devuelve -1
      if (indice !== -1) {
        const cifrado = (26 + ((indice - offset)%26)) % 26
        resultado += letras[cifrado]
      } else if (letraMensaje === " ") {
        resultado += " "
      }
    }

    return resultado
  }
}

export default cipher;