(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['note'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "checked";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<article class=\"list-item\">\r\n  <input class=\"tick\" type=\"checkbox\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.checked : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></input>\r\n  <p class=\"list-text\">"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\r\n</article>\r\n";
},"useData":true});
})();