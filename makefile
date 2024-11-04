all:
	wget 'https://github.com/Dqixol/CV/blob/master/cv_academic.pdf?raw=true' -O ./public/assets/cv_academic.pdf
	docker build -t astropaper .
	docker run -p 4321:80 astropaper
	open http://localhost:4321
