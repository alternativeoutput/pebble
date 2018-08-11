BASE_ENV=$(HOME)/.virtualenvs
NAME_ENV=yojne

checkvenv:
	@test -z "$(VIRTUAL_ENV)" || ( echo ; \
            echo "Virtualenv '$(shell basename "$(VIRTUAL_ENV)")' is activated, deactivate before proceeding" \
            ; echo ; false )


create: checkvenv
	@test ! -d "$(BASE_ENV)/$(NAME_ENV)" \
|| ( echo "Virtualenv '$(BASE_ENV)/$(NAME_ENV)' already exists" ; false )
	python3 -m virtualenv -p /usr/bin/python3.5 '$(BASE_ENV)/$(NAME_ENV)'
	. '$(BASE_ENV)/$(NAME_ENV)/bin/activate' \
	    && pip install --upgrade pip \
	    && pip install -r requirements.txt \
	    && nodeenv -p

build:
	. '$(BASE_ENV)/$(NAME_ENV)/bin/activate' \
	    && npm install -g npm && npm install -g yarn && yarn install
	@echo
	@echo "Activate the VENV typing on terminal:"
	@echo ". $(BASE_ENV)/$(NAME_ENV)/bin/activate"
	@echo

begin:
	. '$(BASE_ENV)/$(NAME_ENV)/bin/activate' \
	    && yarn global add create-react-app@1.5.2

destroy: checkvenv
#	@read -p "Are you sure [y/n]: " a && test ! "\$a" = "y" -o "\$a" = "Y" || exit 1
	test ! -d "$(BASE_ENV)/$(NAME_ENV)" || rm -rf "$(BASE_ENV)/$(NAME_ENV)"

rebuild: destroy create build

.PHONY: checkvenv create build begin destroy rebuild
