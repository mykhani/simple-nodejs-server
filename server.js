const port = 3000;

const express = require('express') 
const app = express() 

app.use(express.static(`${__dirname}/../ui/build`));

app.listen(port, function() {
	console.log('Express server listening on port ' + port);
});
