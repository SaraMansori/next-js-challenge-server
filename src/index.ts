import app from './app';

app.listen(app.get('PORT'), () => {
	console.log('Server on port ', app.get('PORT'));
});
