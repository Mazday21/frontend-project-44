install: 
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/games/brain-even.js

brain-calc:
	node bin/ganmes/brain-calc.js

brain-gcd:
	node bin/ganmes/brain-gcd.js

brain-progression:
	node bin/ganmes/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .