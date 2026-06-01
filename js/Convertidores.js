       //conversion de temperaturas celsius a fahrenheit
        const celsius = 25;
        const fahrenheit = (celsius * 9/5 + 32);
        console.log (`${celsius} °c equivalen a ${fahrenheit} °F`);

        //conversion de kilometros a millas
        const kilometros = 100;
        const millas = (kilometros * 0.621371);
        console.log (`${kilometros} km equivalen a ${millas .toFixed(2)} `);

        //conversion de pesos colombianos a dolares (tasa de ejemplo: 4000)
        const pesosColombianos = 50000;
        const tasaCambio = 4000;
        const dolares = pesosColombianos / tasaCambio;
        console.log (`$${pesosColombianos} COP equivale a US$${dolares.toFixed(2)}`);

        //peso en kg y estatura en metros 
        const pesoKg =61;
        const estaturaMetros =1.71;
        const IMC = pesoKg / (estaturaMetros * estaturaMetros);
        console.log (`${pesoKg} kg y ${estaturaMetros} m IMC es ${IMC.toFixed(2)}`);
        