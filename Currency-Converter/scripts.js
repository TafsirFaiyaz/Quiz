
const rates = {
    usd: { usd: 1, gbp: 0.79, cad: 1.37, eur: 0.94, aud: 1.51 },
    gbp: { usd: 1.26, gbp: 1, cad: 1.73, eur: 1.18, aud: 1.90 },
    cad: { usd:0.73 , gbp: 0.58, cad: 1, eur:0.68, aud: 1.10 },
    eur: { usd:1.07 , gbp: 0.85, cad: 1.46, eur: 1, aud: 1.61  },
    aud: { usd: 0.66, gbp: 0.52, cad: 0.91, eur: 0.62, aud: 1 }
};

function convertCurrency(fromCurrency) {
    const value = parseFloat(document.getElementById(fromCurrency).value);
    if (isNaN(value)) return;

    for (const currency in rates[fromCurrency]) {

        if (currency !== fromCurrency) {
            document.getElementById(currency).value= (value * rates[fromCurrency][currency]);
        }
    }
}

