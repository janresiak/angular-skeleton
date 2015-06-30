I joined to project in the middle of development process exactly when I was starting my adventure with AgularJS.
Before this I read some guides and tutorials, but it was just about single html file, without any additional routing directives such as [ng-route](https://docs.angularjs.org/api/ngRoute) or [ui-router](https://github.com/angular-ui/ui-router).
When I wanted to start a new project, it was really hard to create basic files with simple routing.
Of course there are a lot of tools such as [yeoman](http://yeoman.io/), but at the beginning of coding, and for small projects, this tool is too extensive, because it has many you will never use. So this is why I decided to create a small skeleton with simple routing, easy to test and deploy.

##Development
You may download the repository from github - [https://github.com/janresiak/angular-skeleton](https://github.com/janresiak/angular-skeleton)

**The skeleton contains:**

* `bower.json` - provides libraries names to be downloaded to
the project with [bower](http://bower.io/) install task
* `Gruntfile.js` - provides definitions for [grunt](http://gruntjs.com/) tasks (installing libraries with [grunt-bower-task](https://github.com/yatskevich/grunt-bower-task))
* `package.json` - contains information about dev dependencies, server dependencies, and `npm start` task
* `Procfile` - application runner file, it can be used only with [Heroku](https://www.heroku.com/) (if you don't use Heroku, you may delete it)
* `server.js` - server runner script
* `app` - directory containing project sources

Before you run the project and start development, you have to install dependencies and project libraries.
**Just open command line and run commands:**

* `npm install` - dev dependencies installation
* `grunt` - project libraries installation
* `npm start` - local server runner (localhost:5000 by default)

Now application skeleton is ready to preview, just type `localhost:5000` in your favourite browser. I prefer Google Chrome for develop puproses, it has a lot of useful extensions such as [Batarang](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk).

##Project structure
<img src="https://raw.githubusercontent.com/janresiak/angular-skeleton/blog/sceenshots/ProjectStructure.PNG" width="300px">

As you can see, each view has its own files (view, controller, service), they are placed in a separated directory, why? Becauce AngularJS is an [MVC](http://www.tutorialspoint.com/angularjs/angularjs_mvc_architecture.htm) framework, and the bigger your project is, the better you control over it.
Just read the article below, you will find more about AngularJS good practises.
[https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make](https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make)

Other JavaScript files are inside js directory, but if your project is bigger, you should place them in separate directories.

This skeleton has two views: `test` and `test2`.
The views are managed by config located in `app.js` file. For better understanding of views routing, please read [ui-router](https://github.com/angular-ui/ui-router) documentation.

I put some constants in `config.js` file. Currently it contains server name for mocking purposes.

##Views
####View1
<img src="https://raw.githubusercontent.com/janresiak/angular-skeleton/blog/sceenshots/ViewTestUnauthorized.PNG" width="300px">

**The first view - test - it is available for everybody, it contains:**

* link to `test2` view (it redirects only if you are logged in)
* user authorization status
* test variable value
* result of simple http GET method
* [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat) directive
* login button (it performs logging in process - setting token value in `LoggedUser` factory)

Of course logging in process logic (saving session token and others) should be made using communication with your backend server, inside `onLoginSuccess` function, which you should create after login success response is received.

If you click LogIn button, you will be logged in, and you may click TEST2 link, to go to `test2` view.

<img src="https://raw.githubusercontent.com/janresiak/angular-skeleton/blog/sceenshots/ViewTestAuthorized.PNG" width="300px">

I assume you noticed the url has been changed. The value following the **#** char has changed to /test2. It is the result of states definions in `app.js` file.

####View2
<img src="https://raw.githubusercontent.com/janresiak/angular-skeleton/blog/sceenshots/ViewTest2.PNG" width="300px">

**The second view contains:**

* link to test view
* user authorization status
* sample text
* logout button (it performs logging out process - setting token value to undefined, it means that user is logged out)

##Project evolution

The `js` directory also contains `CookiesService.js` and `LoggedUser.js` files.
CookiesService is a manager of cookies, it supplies methods to set, get and delete cookies.
LoggedUser is a factory and it represents user state. Because factories and services are singletons in Angular, the factory state is kept between views change.
This solution and 'resolve' section in routing option(in `app.js` file) allow to route perfectly between states. (you should use it for routing between authorized and unauthorized states).

##Evolution example

Now you may add new views and Controllers. To do it, just create the new subdirectory in `views` directory, and place proper html and js files.
<img src="https://raw.githubusercontent.com/janresiak/angular-skeleton/blog/sceenshots/Newview1.PNG">


Don't forget about new state in `app.js` file, do it with new state section, as you can see at the screenshot below.
You must also load freshly created controller. (in `index.html` - just like the others)
Remember, that service has to be loaded before corresponding controller, because you use it usually as dependency in controller file.
<img src="https://raw.githubusercontent.com/janresiak/angular-skeleton/blog/sceenshots/Newview2.PNG">

Now you may type `http://localhost:5000/#/newview` address in your browser, to see the result of creating new view of your single-page application.
<img src="https://raw.githubusercontent.com/janresiak/angular-skeleton/blog/sceenshots/Newview3.PNG">

The rest of files are very similar to other AngularJS project files, but from my point of view, the most important is project organization and files structure.
I hope this short note will help you to get better start with your first Angular project.