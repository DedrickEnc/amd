require(["helper/util", "helper_2/util_2", "helper/helper_dep"], function(util, util_2, helper_dep) {
	console.log("modules are charged");
	console.log('et voici ', util);
	console.log('et voici_2 ', util_2);
	console.log('et voici_2 ', helper_dep);
	window.helper_dep = helper_dep;
});
