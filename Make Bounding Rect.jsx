/**
 * Make Bounding Rectangle
 * Creates a rectangle from selected object's geometric bounding box.
 * By Charlie Chao (@charliecm)
 */

(function() {
	var doc = app.activeDocument;
	var selections = doc.selection;
	if (selections.length === 0) {
		alert('Please select one object to make a bounding rectangle out of.');
		return;
	}

	// Get selection bound
	var first = selections[0];
	var bound = first.geometricBounds;
	var left = bound[0];
	var top = bound[1];
	var width = Math.abs(bound[2] - left);
	var height = Math.abs(bound[3] - top);

	// Create rectangle, place behind selection and select
	var layer = doc.activeLayer;
	var rect = layer.pathItems.rectangle(top, left, width, height);
	rect.move(first, ElementPlacement.PLACEAFTER);
	first.selected = false;
	rect.selected = true;
})();
