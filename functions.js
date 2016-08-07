{
  fetchData: function() {
    var params = {
      authorization: options.apiKey
    }

    $.getJSON("https://reveal.clearbit.com/v1/optimizely", params, function(data) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push(["storeThirdPartyData", "clearbit", data]);
    });
  }
}
