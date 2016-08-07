var expect = require('optimizely-dev-tools-npm/node_modules/expect.js');
var integrationFunctions = require('./functions.under_test');
var devTools = require('optimizely-dev-tools-npm');

describe('Clearbit integration functions', function(){

  describe('#fetchData', function(){

    beforeEach(function() {
      devTools.mockWindowObject();
    });

    it('should coerce the visitor data into the expected format and store it via storeThirdPartyData', function() {

      // this is just an illustrative `fetchData` function
      var exampleFetchData = function() {
        if (var data = window['integration_data_object']) {
          window['optimizely'].push(['storeThirdPartyData', 'clearbit', data]);
        }
      };

      window['integration_data_object'] = {'type': 'private'};

      // when you're writing the real tests, delete `exampleFetchData` above and invoke your real `fetchData` function
      // here as `integrationFunctions.fetchData()`.
      exampleFetchData();

      expect(window['optimizely']).to.eql(
          [['storeThirdPartyData', 'clearbit', {'type': 'private'}]]);
    });

  });

});
