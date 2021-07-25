import chalk from 'chalk';

const { dim, cyan } = chalk;

export default () => {
	console.log(
		dim(
			cyan(
				'\nStar ⭐️ the repo: https://github.com/msaaddev/password-gen-cli/'
			)
		)
	);
	console.log(dim(cyan('Connect with me: https://twitter.com/MSaaddev/\n')));
};
