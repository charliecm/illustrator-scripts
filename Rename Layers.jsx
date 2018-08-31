/**
 * Rename Layers
 * Renames selected layers with your input.
 * By Charlie Chao (@charliecm)
 */

(function() {
	var doc = app.activeDocument;
	var selected = doc.selection;
	if (selected.length === 0) return;

	// Prompt for name
	var name = prompt('Rename selected layer(s) to...', '');
	if (!name || !name.length) return;

	// Apply name
	// TODO: Port more functions from Rename It Sketch plugin
	for (var i = 0; i < selected.length; i++) {
		selected[i].name = name;
	}

	// Force reselect to update Layers panel
	selected[0].selected = false;
	selected[0].selected = true;
})();
