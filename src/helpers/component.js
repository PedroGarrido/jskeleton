     'use strict';
     /*globals  Jskeleton, _ */
     /* jshint unused: false */

     Jskeleton.registerHelper('@component', function(params, env) {
         // env.enviroment._app;
         // env.enviroment.channel;
         //env.enviroment._view, view-controller
         //

         params = params || {};

         var componentName = params.name,
             ComponentClass,
             component,
             viewInstance = env.enviroment._view,
             componentData;

         if (!componentName) {
             throw new Error('Tienes que definir un nombre de clase');
         }

         //omit component factory name
         componentData = _.omit(params, 'name');

         //inject component dependencies
         componentData = _.extend(componentData, {
             channel: env.enviroment._channel,
             _app: env.enviroment._app
         });

         component = Jskeleton.factory.new(componentName, componentData);

         if (!component || typeof component !== 'object') {
             throw new Error('No se ha podido crear el componente');
         }

         viewInstance.addComponent(componentName, component);

         return component.render().$el.get(0);
     });