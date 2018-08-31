/**
 * Make Bounding Rectangle
 * Creates a rectangle from the selected object's geometric bounding box.
 * By Charlie Chao (@charliecm)
 */

(function() {
	var doc = app.activeDocument;
	var selected = doc.selection;
	if (selected.length === 0) {
		alert('Please select one object to make bounding rectangle out of.');
		return;
	}

	// Get selection bound
	var selected = selected[0];
	var bound = selected.geometricBounds;
	var left = bound[0];
	var top = bound[1];
	var width = Math.abs(bound[2] - left);
	var height = Math.abs(bound[3] - top);

	// Create rectangle, place behind selection, select
	var layer = doc.activeLayer;
	var rect = layer.pathItems.rectangle(top, left, width, height);
	rect.move(selected, ElementPlacement.PLACEAFTER);
	selected.selected = false;
	rect.selected = true;
})();
