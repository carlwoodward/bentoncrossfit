dist/css/app.css: $(shell find dist/scss -name \*.scss)
	mkdir -p $(dir $@)
	sass dist/scss/app.scss:$@

all: dist/css/app.css

.DEFAULT: all

.PHONY: all
