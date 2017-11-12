var S3 = require("s3");
var login = function (key, secret) {
	let s3Client = S3.createClient({
		s3Options: {
			accessKeyId: "",
			secretAccessKey: "",
			region: "us-east-1"
		}
	});
	var params = {
		Bucket: "app-publishing-internalQA",
		MaxKeys: 2
	};
	let files = s3Client.listObjects(params, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(9, data); // successful response
	});
};
