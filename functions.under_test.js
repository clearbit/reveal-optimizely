module.exports = 
{
  fetchData: function() {
    $.getJSON("https://reveal.clearbit.com/v1/optimizely", function(data) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push(["storeThirdPartyData", "clearbit", data]);
    });
  }
}
