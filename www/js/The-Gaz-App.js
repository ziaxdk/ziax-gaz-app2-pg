(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function Config($stateProvider, $urlRouterProvider) {
  $stateProvider.state("login", {
    url: "/login",
    templateUrl: "htmls/login-view.html",
    controller: "LoginController"
  }).state("main", {
    url: "/main",
    templateUrl: "htmls/main-view.html",
    controller: "MainController"
  });

  $urlRouterProvider.otherwise("/login");
}
exports.Config = Config;
Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],2:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var LoginController = (function () {
  function LoginController($scope, RestService) {
    _classCallCheck(this, LoginController);

    this.scope = $scope;
    this.scope.f = {};
    this.RestService = RestService;
  }

  _prototypeProperties(LoginController, null, {
    submitForm: {
      value: function submitForm() {
        var _this = this;
        // this.scope.modal.closeModal();
        console.log(this.scope.$parent);
        this.RestService.authorize(this.scope.f.email, this.scope.f.password).then(function (arg) {
          _this.scope.$emit("authenticate_ok", arg.data);
        });
      },
      writable: true,
      configurable: true
    }
  });

  return LoginController;
})();

exports.LoginController = LoginController;
Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],3:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var MainController = function MainController($scope) {
  _classCallCheck(this, MainController);
};

exports.MainController = MainController;
Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],4:[function(require,module,exports){
"use strict";

var _tailCall = (function () { function Tail(func, args, context) { this.func = func; this.args = args; this.context = context; } var isRunning = false; return function (func, args, context) { var result = new Tail(func, args, context); if (!isRunning) { isRunning = true; do { result = result.func.apply(result.context, result.args); } while (result instanceof Tail); isRunning = false; } return result; }; })();

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var RestService = (function () {
  function RestService($http) {
    _classCallCheck(this, RestService);

    this.$http = $http;
    this.host = "https://s.ziax.dk/api/";
  }

  _prototypeProperties(RestService, null, {
    authorize: {
      value: function authorize(uid, lastname) {
        var _temp;
        // console.log('authorize', uid, lastname);
        return _tailCall((_temp = this.$http).post, [this.host + "appauth", { uid: uid, lastname: lastname }], _temp);
      },
      writable: true,
      configurable: true
    },
    search: {
      value: function search() {
        console.log("searching...");
      },
      writable: true,
      configurable: true
    }
  });

  return RestService;
})();

exports.RestService = RestService;
Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],5:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var RootController = function RootController($scope, $state, $ionicModal) {
  var _this = this;
  _classCallCheck(this, RootController);

  this.scope = $scope;
  this.state = $state;

  $ionicModal.fromTemplateUrl("htmls/login.html", {
    scope: $scope,
    animation: "slide-in-up",
    backdropClickToClose: false
  }).then(function (modal) {
    console.log(modal);
    $scope.modal = modal;
    $scope.modal.show();
  });
  $scope.openModal = function () {
    $scope.modal.show();
  };
  $scope.closeModal = function () {
    $scope.modal.hide();
  };
  $scope.$on("$destroy", function () {
    $scope.modal.remove();
  });
  $scope.$on("modal.hidden", function () {});
  $scope.$on("modal.removed", function () {});

  // submitForm () {
  //   console.log('submitForm');
  //   // this.RestService.authorize(this.scope.f.email ,this.scope.f.password)
  //   //   .then(() => {
  //   //     console.log('ok');
  //   //     this.state.go('main');
  //   //   });
  // }
  // this.RestService.authorize(this.scope.f.email ,this.scope.f.password)
  //   .then(() => {
  //     console.log('ok');
  //     this.state.go('main');
  //   });


  this.scope.$on("authenticate_ok", function (evt, arg) {
    console.log("authenticate_ok", arg);
    _this.scope.closeModal();
    _this.state.go("main");
  });
};

exports.RootController = RootController;
Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],6:[function(require,module,exports){
"use strict";

function Run() {


    console.log("Running.....");
    //    constructor() {
    //    }
}
exports.Run = Run;
Object.defineProperty(exports, "__esModule", {
    value: true
});
},{}],7:[function(require,module,exports){
"use strict";

//import { MainController } from './MainController';
var RootController = require("./RootController").RootController;
var LoginController = require("./LoginController").LoginController;
var MainController = require("./MainController").MainController;
var RestService = require("./RestService").RestService;
var Run = require("./Run").Run;
var Config = require("./Config").Config;


angular.module("TheGazApp", ["ionic", "ngCordova"]).controller("RootController", RootController).controller("LoginController", LoginController).controller("MainController", MainController).service("RestService", RestService).config(Config).run(Run);
},{"./Config":1,"./LoginController":2,"./MainController":3,"./RestService":4,"./RootController":5,"./Run":6}]},{},[7])