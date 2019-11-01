/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview The "showblocks" plugin. Enable it will make all block level
 *               elements being decorated with a border and the element name
 *               displayed on the left-right corner.
 */

(function()
{
	var cssTemplate = '.%2 p,'+
		'.%2 div,'+
		'.%2 pre,'+
		'.%2 address,'+
		'.%2 blockquote,'+
		'.%2 h1,'+
		'.%2 h2,'+
		'.%2 h3,'+
		'.%2 h4,'+
		'.%2 h5,'+
		'.%2 h6'+
		'{'+
			'background-repeat: no-repeat;'+
			'background-position: top %3;'+
			'border: 1px dotted gray;'+
			'padding-top: 8px;'+
			'padding-%3: 8px;'+
		'}'+

		'.%2 p'+
		'{'+
			'%1p.png);'+
		'}'+

		'.%2 div'+
		'{'+
			'%1div.png);'+
		'}'+

		'.%2 pre'+
		'{'+
			'%1pre.png);'+
		'}'+

		'.%2 address'+
		'{'+
			'%1address.png);'+
		'}'+

		'.%2 blockquote'+
		'{'+
			'%1blockquote.png);'+
		'}'+

		'.%2 h1'+
		'{'+
			'%1h1.png);'+
		'}'+

		'.%2 h2'+
		'{'+
			'%1h2.png);'+
		'}'+

		'.%2 h3'+
		'{'+
			'%1h3.png);'+
		'}'+

		'.%2 h4'+
		'{'+
			'%1h4.png);'+
		'}'+

		'.%2 h5'+
		'{'+
			'%1h5.png);'+
		'}'+

		'.%2 h6'+
		'{'+
			'%1h6.png);'+
		'}';

	var cssTemplateRegex = /%1/g, cssClassRegex = /%2/g, backgroundPositionRegex = /%3/g;

	var commandDefinition =
	{
		readOnly : 1,
		prese