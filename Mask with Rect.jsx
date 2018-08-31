/**
 * Mask with Rectangle
 * Creates a clipping mask from path with a rectangle as base.
 * By Charlie Chao (@charliecm)
 */

(function() {
	var doc = app.activeDocument;
	var selected = doc.selection;
	if (selected.length === 0) {
		alert('Please select one object to make mask out of.');
		return;
	}

	// Get selection bound
	var selected = selected[0];
	var bound = selected.geometricBounds;
	var left = bound[0];
	var top = bound[1];
	var width = Math.abs(bound[2] - left);
	var height = Math.abs(bound[3] - top);

	// Create rectangle and clipping mask
	var layer = doc.activeLayer;
	var base = layer.pathItems.rectangle(top, left, width, height);
	var group = layer.groupItems.add();
	group.move(selected, ElementPlacement.PLACEAFTER);
	base.moveToBeginning(group);
	selected.moveToBeginning(group);
	selected.clipping = true;
	group.clipped = true;
	selected.selected = false;
	base.selected = true;
})();
