install: 
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/games/brain-even.js

brain-calc:
	node bin/ganmes/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .