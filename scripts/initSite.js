#! /usr/bin/env node

// packages
const fs = require('fs'),
	path = require('path'),
	shell = require('shelljs'),
	readline = require('readline'),
	Writable = require('stream').Writable,
	rimraf = require('rimraf'),
	child_process = require('child_process');

// directories
const homeDir = path.join(__dirname, '/..'),
	srcDir = path.join(homeDir, 'src'),
	tempDistName = 'tempDist',
	distDir = path.join(homeDir, tempDistName),
	typesDir = path.join(distDir, 'types'),
	contentDir = path.join(__dirname, 'wchContent');

// make sure this script hasn't already run
if(shell.grep('Sites Kicker', path.join(srcDir, 'index.html')).length < 2) {
	console.log('This site has already been set up.');
} else {
	// user inputs
	let projectName = '',
		repoName = '',
		wchPassword = '';

	// create mutable readline prompt
	var mutableStdout = new Writable({
		write: function(chunk, encoding, callback) {
			if(!this.muted) process.stdout.write(chunk, encoding);
			callback();
		}
	});
	var rl = readline.createInterface({
		input: process.stdin,
		output: mutableStdout,
		terminal: true
	});

	// get the project name
	rl.question('Enter the name of your project as a human readable string (eg: "Sites Kicker"): ', (projectAnswer) => {
		projectName = projectAnswer.trim();
		if(!projectName) {
			console.error('Failed to give a valid project name.');
			rl.close();
			return;
		}

		// get the repository name
		rl.question('Enter the name of your git repository (eg: prod-sites-kicker): ', (repoAnswer) => {
			repoName = repoAnswer.trim();
			if(!repoName) {
				console.error('Failed to give a valid repository name.');
				rl.close();
				return;
			}

			// inform the user this task will upload items to his/her tenant
			rl.question(`\nThis script will publish content from project ${repoName} to your current tenant, do you wish to continue? y/n: `, (answer) => {
				if (answer && answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'yes') {
					rl.close();
					return;
				}

				// get the tenant password for wchtools
				rl.question('Enter your WCH password, for deploying your site via wchtools: ', (pwAnswer) => {
					wchPassword = pwAnswer.trim();
					if(!wchPassword) {
						console.error('\nFailed to give a valid password.');
						rl.close();
						return;
					}
					rl.close();

					console.log(`\n\nSetting up your project with name "${projectName}" and repository "${repoName}"...\n`);

					// create a temp directory for the wchContent items
					if(!fs.existsSync(distDir)) {		
						console.log(`Creating "${distDir}" directory.`);		
						fs.mkdirSync(distDir);		
					}		
				 	
					// move the wchContent items to the temp directory
					let result = shell.cp('-R', path.join(contentDir, '*'), distDir);		
					if(result.stderr) {		
						console.error(`Could not copy files from "${contentDir}" to "${distDir}" for editing.`);
						return;		
					} else {		
						console.log(`Copied files from "${contentDir}" to "${distDir}" for editing.\n`);		
					}

					// replace all the "kicker" references
					let replaceFiles = [
						// Site name
						{ 'old': 'Sites Kicker', 'new': projectName, file: path.join(srcDir, 'index.html') },
						// project repository name in DX git
						{ 'old': 'prod-sites-kicker', 'new': repoName, file: path.join(homeDir, 'test', 'pageobjects', 'package.json') },
						{ 'old': 'prod-sites-kicker', 'new': repoName, file: path.join(homeDir, '.angular-cli.json') },
						{ 'old': 'prod-sites-kicker', 'new': repoName, file: path.join(homeDir, 'package.json') },
						// rename the types to be specific to this project
						{ 'old': 'REPLACE_TITLE', 'new': projectName, file: path.join(typesDir, 'Footer_tmd.json') },
						{ 'old': 'REPLACE_TITLE', 'new': projectName, file: path.join(typesDir, 'Header_tmd.json') }
					];
					for(let i in replaceFiles) {
						let cur = replaceFiles[i];
						result = shell.sed('-i', cur.old, cur.new, cur.file);
						if(result.stderr) {
							console.error(`Could not replace "${cur.old}" with "${cur.new}" in "${cur.file}"`);
						} else {
							console.log(`Replaced "${cur.old}" with "${cur.new}" in "${cur.file}"`);
						}
					}

					// deploy the updated /scripts/wchContent folder
					console.log('\nDeploying content to your tenant...\n');
					child_process.execFileSync(/^win/.test(process.platform) ? 'wchtools.cmd' : 'wchtools', ['push', '-a', '-A', '-f', '-v', '--dir', tempDistName, '--password', wchPassword], {stdio: 'inherit'});

					// build the SPA and deploy the /dist folder (same as the build-deploy task, but user doesn't need to enter his/her password again)
					console.log('\nBuilding and deploying your layouts and SPA code...');
					child_process.execFileSync(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'build'], {stdio: 'inherit'});
					child_process.execFileSync(/^win/.test(process.platform) ? 'wchtools.cmd' : 'wchtools', ['push', '-a', '-A', '-f', '-v', '--dir', 'dist', '--password', wchPassword], {stdio: 'inherit'});

					// delete temp dist directory
					rimraf(distDir, (e) => {
						if(e) {
							console.error(`\nFailed to delete ${distDir}`);
						} else {
							console.log(`\nDeleted temporary directory ${distDir}`);
						}
					});

				});
				mutableStdout.muted = true;	// to read in wchtools password
			});
		});
	});
}
