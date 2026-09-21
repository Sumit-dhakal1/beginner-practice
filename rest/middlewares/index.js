function logReqRes (filename) {
	return (req, res, next) => {
		Fs.appendfile(
			filename,
			` \n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`,
			(err, data) =>{
				next();
			}
		)
	} 
}

module.exports = {
	logReqRes,
}
