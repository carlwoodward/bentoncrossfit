dist/css/app.css: $(shell find web/scss -name \*.scss)
	mkdir -p $(dir $@)
	sass web/scss/app.scss:$@

dist/index.html: web/index.html
	mkdir -p $(dir $@)
	cp $^ $@

all: dist/css/app.css dist/index.html

.DEFAULT: all

.PHONY: all
