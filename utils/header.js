// importing packages

import { readFile } from 'fs/promises';
import welcome from 'cli-welcome';

const pkgJSON = JSON.parse(
	await readFile(new URL('../package.json', import.meta.url))
);

export default () => {
	welcome({
		title: `${pkgJSON.name}`,
		tagLine: `by ${pkgJSON.author.name}`,
		description: `${pkgJSON.description}`,
		bgColor: `#6cc644`,
		color: `#000000`,
		bold: true,
		clear: true,
		version: `${pkgJSON.version}`
	});
};
