'use strict';

/*globals Marionette, Jskeleton*/

/* jshint unused: false */

Jskeleton.CompositeView = Marionette.CompositeView.extend({
    constructor: function(options) {
        Jskeleton.CollectionView.apply(this,arguments);
    }
});