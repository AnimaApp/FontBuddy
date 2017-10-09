// plugin.js
// Copyright (c) 2017 AnimaApp LTD

@import "lib/runtime.js"

function showDashboard(context) {
	if (NSClassFromString("GFSketch") == null) {
		runtime.loadBundle("FontBuddy.bundle");
	}
    [GFSketch setPluginContextDictionary:context];
	[GFSketch showController];
}

var onOpenDocument = function(context) {
    if (NSClassFromString("GFSketch") == null) {
        runtime.loadBundle("FontBuddy.bundle");
    }
    [GFSketch setPluginContextDictionary:context];
    [GFSketch documentOpened];
}
