(function ()
{
    'use strict';

    angular
        .module('test')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController()
    {
        var vm = this;

    	console.log("hello");
    }
})();
