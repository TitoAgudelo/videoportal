# Crossover Video Portal backend
This is the backend API code that needs to be consumed by front-end applications.

# information
* Tito Agudelo
* Frontend Developer
* titoarturoagudelo@gmail.com

* VIDEO PORTAL APPLICATION
*
* This file contains a general description of the application and configuration
* instructions
*
**
* ---------------------------------------------------------------------------------*/

# REQUIREMENTS
* Node
* Webpack
* Bower

# INSTRUCTIONS
* run yarn or npm --> npm run dep | yarn run dep
* npm run start --> check the localhost port 3000

1. INTRODUCTION

	1.1 Project Description

		The challenge was to develop the frontend of a single page application for a
		video portal. where users an login, see video listings, navigate to a single
		video, rate videos and perform all media related tasks using the default HTML5
		video player controls.

		The code for the backend API was provided and the client side application was
		to consume the REST API provided to fetch and post data.

	1.2 Resources Used

		- Backend:

		The backend API that was provided is made using NodeJS and npm with MongoDB
		used for database persistence.

		These prerequisites were installed in the development environment to support
		the downloaded backend code.

		- Frontend:

		The client side of the application was developed using AngularJS(1.x) - a data
		driven MVV* framework.

		HTML5 was used for rendering content on the browser and CSS3 for styling and
		animating rendered content

		Bootstrap, colorbox and jQuery were used to provide a responsive client side
		application.

		In addition, Karma running on Jasmine was used to write unit test suites for
		the angular controllers and factories defined.

	1.3 Functional Requirements

		- Develop a single page application by using one of the allowed MVV* frameworks
		- Design the UI motivated by provided visuals
		- Implement user authentication; content of the application should be restricted
		  to the public
		- User should be able to see video listings on index page with only first 10
		  videos loaded initially
		- Lazy loading where more videos appear as the user scrolls down the listing
		- Users should not be able to play more that 1 video simultaneously. Playing a
		  video should pause all other videos
		- Users should be able to rate videos and an overall rating for each video should
		  be displayed
		- Users should be able to open the video details page by clicking on video title
		- REST API should be consumed
		- Unit tests with at least 50% code coverage should be provided

	1.4 Non Functional Requirements

		- Code should be well documented by comments
		- Exception handling should be done where necessary
		- Code should be well organized into files and folders
		- UI design should be clean and polished
		- CSS animations should be used to make the application more appealing
		- UI should be cross-browser compatible
		- UI should be cross-device compatible


2. SETTING UP & RUNNING THE APPLICATION

	After downloading and extracting the backend code from the provided link, set it up as
	below:

	1.1 Database & NodeJS Server

		- MongoDb should be installed and running.

		- The config.js file on the root of the code folder contains dabatase configurations
		  which should be updated to reflect those of the local MongoDb environment.

		- The package.json file on the root of the code folder contains dependencies and npm
		  packages. Running 'npm install' downloads those dependencies into a 'node_modules'
		  folder. This requires an internet connection.

		- Running 'npm start' on a terminal or command prompt while at the root of the code
		  folder (change directory to the folder) fires the NodeJS server and starts the backend.
		  If all the configurations are okay, the database schemas defined in the models will be
		  applied on the set dababase.

		- The backend starts a web server listening on the provided port in config.js;
		  'http://localhost/3000'.

	1.2 Client Side App

		- The back end started in 1.1 above is designed to serve the client application.

		- The client application resides in the 'client' folder of the extracted backend code
		  folder and can be accessed at root '/'. Maintaining the configurations set, the URL
		  will be 'http://localhost/3000/'.

		- The presumption here is that all the client dependencies that have been declared in
		  'package.json' are installed. If not, errors requiring the installation of these
		  dependencies will be thrown and the application will not run until they are installed.

		- User authentication has been implemented to restrict access to the videos dashboard.
		  In initial setup, three users are created with the following credentials:

		  		USERNAME		PASSWORD
				--------		--------
			1.	ali 			password
			2.	tom 			password
			3.	harry 		password

		- The user credentials above can be used to log in and access the videos dashboard.

	1.3 Unit Tests - Karma

		- Unit tests were written for the AngularJS client side application developed.

		- These tests are housed in the 'client/tests' folder.

		- At the root of the backend code - the same place where 'config.js' and 'package.json'
		  are located - is a configuration file 'karma.conf.js' that has the dependency
		  configurations and paths needed to run karma.

		- Running 'npm test' or 'karma start' on a terminal or command prompt while at the root
		  of the code folder (change directory to the folder) starts the karma test and generates
		  a report.


3. CLIENT APP SOURCE CODE FOLDER STRUCTURE

	The single page application developed (housed in the 'client' folder) has the its code structured
	as below:

	|client
			|app 	// Contains the AngularJS folder for the application.
        |core // Contains the main core to create the application based in components
        |account // Contains login functionality
        |data-services // Contains the data services to located the request our node js API
        |videos // Contains list of videos
        |videoDetail // Contains video detail

      index.html 		// The index html page on which templates are loaded
      main.bundle.css // Contain the styles compiled by webpack

