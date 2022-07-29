build:
	docker build -t app:latest .
run:
	docker run -d -p 3000:3000 -v logs:/app/data --rm --name app_con  app
rm:
	docker rmi app
stop:
	docker stop app_con