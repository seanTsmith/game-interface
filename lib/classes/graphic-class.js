/**
 * game-interface
 * graphic-class
 */
/*
 * Constructor
 */
function Graphic(args) {
  var i, a;
  if (false === (this instanceof Graphic)) throw new Error('new operator required');
  args = args || {};
  var unusedProperties = T.getInvalidProperties(args, ['viewPort', 'visible', 'x', 'y', 'width', 'height']);
  var badJooJoo = [];
  for (i = 0; i < unusedProperties.length; i++) badJooJoo.push('invalid property: ' + unusedProperties[i]);
  if (badJooJoo.length > 1) throw new Error('error creating Graphic: multiple errors');
  if (badJooJoo.length) throw new Error('error creating Graphic: ' + badJooJoo[0]);
  // Set defaults
  this.visible = true;
  this.viewPort = null
  this.x = 0;
  this.y = 0;
  this.width = I.getViewportWidth();
  this.height = I.getViewportHeight();
  // Copy any arg values
  for (a in args) {
    if (args.hasOwnProperty(a))
      this[a] = args[a];
  }
  // Must have valid viewport
  if (false === (this.viewPort instanceof ViewPort)) throw new Error('error creating Graphic: viewport required');
}
/*
 * Methods
 */
Graphic.prototype.setProperties = function (args) {
  var i,a;
  args = args || {};
  var unusedProperties = T.getInvalidProperties(args, ['visible','x', 'y', 'width', 'height']);
  var badJooJoo = [];
  for (i = 0; i < unusedProperties.length; i++) badJooJoo.push('invalid property: ' + unusedProperties[i]);
  if (badJooJoo.length > 1) throw new Error('error creating Graphic: multiple errors');
  if (badJooJoo.length) throw new Error('error creating Graphic: ' + badJooJoo[0]);
  // Copy any arg values
  for (a in args) {
    if (args.hasOwnProperty(a))
      this[a] = args[a];
  }
  return this;
};