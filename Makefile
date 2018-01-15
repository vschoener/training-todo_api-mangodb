build:
	docker-compose build

start:
	docker-compose up -d

down:
	docker-compose down

test:
	docker-compose -f docker-compose.test.yml up --exit-code-from app_test

prod:
	docker-compose -f docker-compose.yml up

install:
	docker-compose run app npm install

logs:
	docker-compose logs -f

app-logs:
	docker-compose logs -f app

db-logs:
	docker-compose logs -f database
