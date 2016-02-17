(function(annyang) {
    'use strict';

    function PythonService() {
        var service = {};
        
        var runShell = function(command){

            var sys = require('util'),
            exec = require('child_process').exec;
            
            function puts(error, stdout, stderr) { 
                console.log(stdout); //log this in browser window
            }
            
            exec(command, puts);
        }

        
        service.runScript = function(){
            runShell('ls');
        }

        return service;
    }

    angular.module('SmartMirror')
        .factory('PythonService', PythonService);

}(window.annyang));
