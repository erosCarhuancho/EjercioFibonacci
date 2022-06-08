const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(3000, ()=>console.log("Servidor en puerto 3000"))

app.get('/fibonacci/:n', (req, res) => {
    const n = req.params.n;
    var num1 = 0;
    var num2 = 1;
    var total = 0;
	for (i=2; i<=n; i++) {
		total = num2 + num1;
        num2 = total;
        num1 = num2;
	}
    res.send(`Fibonacci de ${n} = ${total}`)
})