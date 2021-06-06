fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
        console.log(data.bpi.GBP.rate) // Prints result from `response.json()` in getRequest
        document.getElementById("price").innerHTML = data.bpi.GBP.rate;
    })
    .catch(error => console.error(error))

