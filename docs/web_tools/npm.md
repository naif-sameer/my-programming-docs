# Npm docs

## Basics
```bash
	npm help-search update

	npm -v

	npm help
	npm help list

	npm list
	npm list --global true --depth 0


	# remove unused package from node_modules
	npm prune 
```


```bash
	npm init
	npm init -y
```


Edit default config init
```bash
	npm config set init-author-name "Naif"
	npm set init-license 'MIT' 


	# reset init to default
	npm config delete init-author-name
```



```bash
	# we use --save to add pacakge to package.json
	npm install loadash --save 

	# add to devdependencies
	npm install gulp --save-dev

	# insatll to global
	npm install -g nodemon

	# Does't install devdependencies
	npm install --production 

	# remove packages
	npm uninstall gulp --save-dev
	npm remove gulp --save-dev
	npm rm gulp --svae-dev


	npm install loadash@4.17.3 --save

```


Update packages
```bash
	npm update loadash 
```


## Package.json

working with packages version
```json
	{
		"dependencies": {
			"lodash": "4.17.4",
			"lodash": "^4.17.4",
			"lodash": "~4.17.4",
			"lodash": "*",
		}
	} 
```

- `4.17.4` insatll ecact version
- `^4.17.4` update only to minor 
- `~4.17.4` update only patch
- `*` install last version `not recomand`


add new Script
```json
	{
		"scripts": {
			"start": "node app.js"
		}
	} 
```