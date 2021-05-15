const { cyan, dim } = require('chalk');

module.exports = () => {
	console.log(
		dim(
			cyan(
				'\nStar ⭐️ the repo: https://github.com/msaaddev/password-gen-cli/'
			)
		)
	);
	console.log(dim(cyan('Connect with me: https://twitter.com/MSaaddev/\n')));
};
