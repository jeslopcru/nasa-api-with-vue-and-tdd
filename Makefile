.PHONY: all deps test fixer phpstan
current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

.DEFAULT_GOAL := help

build: ## Build the container
	@docker build -t jeslopcru/searchvuejs .

help: ## Prints this help.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

run: ## run the app in
    @docker run -it -p 8080:8080 jeslopcru/searchvuejs

sh: ## open sh inside container
	@docker exec jeslopcru/searchvuejs /bin/sh

test: ## run all tests
	@docker-compose run --rm php composer run-script test

test-mutation: ## run tests with mutation
	@docker-compose run --rm php composer run-script test-mutation

