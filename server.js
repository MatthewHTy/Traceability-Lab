const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar ({
    accessToken: '50e4a655b9f64093934060fb75eaa349',
    captureUncaught: true,
    captureUnhandledRejections: true
})
const app = express()

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'))
//     rollbar.info('html file served successfully.')
    
// })

app.get('/', (req, res, next) => {
	try {
		res.sendFile(path.join(__dirname, './public/index.html'));
		rollbar.info('html file served succesfully');
	} catch (err) {
		rollbar.critical(err);
	}
});



app.get('/js', (req, res) => {
	try {
		// res.sendFile(path.join(__dirname, './public/server.js'));
		// rollbar.info('file served succesfully');
        nonExistentFunction()
	} catch (err) {
		alert(err);
		rollbar.warning('js error.');
	}
});

app.get('/js', (req, res) => {
	try {
		// res.sendFile(path.join(__dirname, './public/server.js'));
		// rollbar.info('file served succesfully');
        nonExistentFunction()
	} catch (err) {
		alert(err);
		rollbar.error('js error.');
	}
});

// try {
//     nonExistentFunction();
// } catch (error) {
//     console.error(error)
// }

const port = process.env.PORT || 4545


app.use(rollbar.errorHandler())
// app.listen(4545, () => console.log('Welcome to 4545.'))
app.listen(port, () => console.log(`Welcome to ${port}`))