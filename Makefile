# .PHONY: build test clean reconfigure

# index.js: source/Interface.js
# 	@ docker run --rm \
# 	-v `pwd`:/app \
# 	-w="/app" \
# 	node:12.6.0-alpine \
# 		npm install \
# 		&& npx babel source --out-dir ./

# test:
# 	@ docker run --rm \
# 	-v `pwd`:/app \
# 	-w="/app" \
# 	node:12.6.0-alpine \
# 		npm install \
# 		&& npx babel source test --out-dir ./ \
# 		&& node test.js

# reconfigure:
# 	@ docker run --rm \
# 	-v `pwd`:/app \
# 	-w="/app" \
# 	node:12.6.0-alpine \
# 		npm update \
# 		&& npx babel source test --out-dir ./ \

# clean:
# 	@ docker run --rm \
# 	-v `pwd`:/app \
# 	-w="/app" \
# 	node:12.6.0-alpine \
# 		rm -rf node_modules *.js configure;
.PHONY: build build-test install update test clean hooks

build:
	@ npx babel source --out-dir .

build-test:
	@ npx babel source test --out-dir .

build-dist:
	@ brunch build -p

install:
	@ npm install

update:
	@ npm update

test:
	@ node test.js

clean:
	@ rm -rf node_modules *.js

hooks:
	git config core.hooksPath .githooks
