/**
 * Rename Layers
 * Renames current layer or selected objects.
 * By Charlie Chao (@charliecm)
 */

(function() {
	var doc = app.activeDocument;
	var selections = doc.selection;
	if (selections.length === 0) {
		// Rename current layer
		var layer = doc.activeLayer;
		var name = prompt('Rename "' + layer.name + '" layer to...', '');
		if (!name || !name.length) return;
		layer.name = name;
		return;
	}

	// Rename selected object(s)
	var first = selections[0];
	var name = prompt((selections.length > 1 ?
		'Rename selected objects to...' :
		'Rename "' + first.name + '" object to...'
		), '');
	if (!name || !name.length) return;
	for (var i = 0; i < selections.length; i++) {
		selections[i].name = name;
	}

	// Force reselect to update Layers panel
	first.selected = false;
	first.selected = true;
})();
