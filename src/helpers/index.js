
// creamos una funcion con una api de js para realizar la formateada a dolar estadounidense, y retornamos el valor que le pasamos formateado con el signo y todo
const formatearDinero= valor => {
    const formatter= new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(valor);
};

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    // mientras mayor es la cantidad, menor es el interés
    if(cantidad < 5000) {
        total = cantidad * 1.5;
    } else if(cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4;
    } else if(cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.3;
    } else {
        total = cantidad * 1.2;
    };

    // mientras mas cuotas mayor interes
    if(plazo === 6) {
        total *= 1.2;
    } else if(plazo === 12) {
        total *= 1.3;
    } else {
        total *= 1.4;
    };

    return total;
};

export {
    formatearDinero,
    calcularTotalPagar,
};
