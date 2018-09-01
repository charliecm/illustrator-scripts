/**
 * Mask with Rectangle
 * Creates a clipping mask from selected path with a rectangle as base.
 * By Charlie Chao (@charliecm)
 */

(function() {
	var doc = app.activeDocument;
	var selections = doc.selection;
	if (selections.length === 0) {
		alert('Please select one object to make clipping mask out of.');
		return;
	}

	// Get selection bound
	var first = selections[0];
	var bound = first.geometricBounds;
	var left = bound[0];
	var top = bound[1];
	var width = Math.abs(bound[2] - left);
	var height = Math.abs(bound[3] - top);

	// Create rectangle and clipping mask
	var layer = doc.activeLayer;
	var base = layer.pathItems.rectangle(top, left, width, height);
	var group = layer.groupItems.add();
	group.move(first, ElementPlacement.PLACEAFTER);
	base.moveToBeginning(group);
	first.moveToBeginning(group);
	first.clipping = true;
	group.clipped = true;
	first.selected = false;
	base.selected = true;
})();
