/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Gujarati language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['gu'] =
{
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir : 'ltr',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle : 'રીચ ટેક્ષ્ત્ એડિટર, %1',
	editorHelp : 'પ્રેસ ALT 0 મદદ માટ',

	// ARIA descriptions.
	toolbars	: 'એડીટર ટૂલ બાર',
	editor		: 'રીચ ટેક્ષ્ત્ એડીટર',

	// Toolbar buttons without dialogs.
	source			: 'મૂળ કે પ્રાથમિક દસ્તાવેજ',
	newPage			: 'નવુ પાનું',
	save			: 'સેવ',
	preview			: 'પૂર્વદર્શન',
	cut				: 'કાપવું',
	copy			: 'નકલ',
	paste			: 'પેસ્ટ',
	print			: 'પ્રિન્ટ',
	underline		: 'અન્ડર્લાઇન, નીચે લીટી',
	bold			: 'બોલ્ડ/સ્પષ્ટ',
	italic			: 'ઇટેલિક, ત્રાંસા',
	selectAll		: 'બઘું પસંદ કરવું',
	removeFormat	: 'ફૉર્મટ કાઢવું',
	strike			: 'છેકી નાખવું',
	subscript		: 'એક ચિહ્નની નીચે કરેલું બીજું ચિહ્ન',
	superscript		: 'એક ચિહ્ન ઉપર કરેલું બીજું ચિહ્ન.',
	horizontalrule	: 'સમસ્તરીય રેખા ઇન્સર્ટ/દાખલ કરવી',
	pagebreak		: 'ઇન્સર્ટ પેજબ્રેક/પાનાને અલગ કરવું/દાખલ કરવું',
	pagebreakAlt		: 'નવું પાનું',
	unlink			: 'લિંક કાઢવી',
	undo			: 'રદ કરવું; પહેલાં હતી એવી સ્થિતિ પાછી લાવવી',
	redo			: 'રિડૂ; પછી હતી એવી સ્થિતિ પાછી લાવવી',

	// Common messages and labels.
	common :
	{
		browseServer	: 'સર્વર બ્રાઉઝ કરો',
		url				: 'URL',
		protocol		: 'પ્રોટોકૉલ',
		upload			: 'અપલોડ',
		uploadSubmit	: 'આ સર્વરને મોકલવું',
		image			: 'ચિત્ર',
		flash			: 'ફ્લૅશ',
		form			: 'ફૉર્મ/પત્રક',
		checkbox		: 'ચેક બોક્સ',
		radio			: 'રેડિઓ બટન',
		textField		: 'ટેક્સ્ટ ફીલ્ડ, શબ્દ ક્ષેત્ર',
		textarea		: 'ટેક્સ્ટ એરિઆ, શબ્દ વિસ્તાર',
		hiddenField		: 'ગુપ્ત ક્ષેત્ર',
		button			: 'બટન',
		select			: 'પસંદગી ક્ષેત્ર',
		imageButton		: 'ચિત્ર બટન',
		notSet			: '<સેટ નથી>',
		id				: 'Id',
		name			: 'નામ',
		langDir			: 'ભાષા લેખવાની પદ્ધતિ',
		langDirLtr		: 'ડાબે થી જમણે (LTR)',
		langDirRtl		: 'જમણે થી ડાબે (RTL)',
		langCode		: 'ભાષા કોડ',
		longDescr		: 'વધારે માહિતી માટે URL',
		cssClass		: 'સ્ટાઇલ-શીટ ક્લાસ',
		advisoryTitle	: 'મુખ્ય મથાળું',
		cssStyle		: 'સ્ટાઇલ',
		ok				: 'ઠીક છે',
		cancel			: 'રદ કરવું',
		close			: 'બંધ કરવું',
		preview			: 'જોવું',
		generalTab		: 'જનરલ',
		advancedTab		: 'અડ્વાન્સડ',
		validateNumberFailed : 'આ રકમ આકડો નથી.',
		confirmNewPage	: 'સવે કાર્ય વગરનું ફકરો ખોવાઈ જશે. તમને ખાતરી છે કે તમને નવું પાનું ખોલવું છે?',
		confirmCancel	: 'ઘણા વિકલ્પો બદલાયા છે. તમારે આ બોક્ષ્ બંધ કરવું છે?',
		options			: 'વિકલ્પો',
		target			: 'લક્ષ્ય',
		targetNew		: 'નવી વિન્ડો (_blank)',
		targetTop		: 'ઉપરની વિન્ડો (_top)',
		targetSelf		: 'એજ વિન્ડો (_self)',
		targetParent	: 'પેરનટ વિન્ડો (_parent)',
		langDirLTR		: 'ડાબે થી જમણે (LTR)',
		langDirRTL		: 'જમણે થી ડાબે (RTL)',
		styles			: 'શૈલી',
		cssClasses		: 'શૈલી કલાસીસ',
		width			: 'પહોળાઈ',
		height			: 'ઊંચાઈ',
		align			: 'લાઇનદોરીમાં ગોઠવવું',
		alignLeft		: 'ડાબી બાજુ ગોઠવવું',
		alignRight		: 'જમણી',
		alignCenter		: 'મધ્ય સેન્ટર',
		alignTop		: 'ઉપર',
		alignMiddle		: 'વચ્ચે',
		alignBottom		: 'નીચે',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'ઉંચાઈ એક આંકડો હોવો જોઈએ.',
		invalidWidth	: 'પોહળ ઈ એક આંકડો હોવો જોઈએ.',
		invalidCssLength	: '"%1" ની વેલ્યુ એક પોસીટીવ આંકડો હોવો જોઈએ અથવા CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc) વગર.',
		invalidHtmlLength	: '"%1" ની વેલ્યુ એક પોસીટીવ આંકડો હોવો જોઈએ અથવા HTML measurement unit (px or %) વગર.',
		invalidInlineStyle	: 'ઈનલાઈન  સ્ટાઈલ ની વેલ્યુ  "name : value" ના ફોર્મેટ માં હોવી જોઈએ, વચ્ચે સેમી-કોલોન જોઈએ.',
		cssLengthTooltip	: 'પિક્ષ્લ્ નો આંકડો CSS unit (px, %, in, cm, mm, em, ex, pt, or pc) માં નાખો.',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, નથી મળતું</span>'
	},

	contextmenu :
	{
		options : 'કોન્તેક્ષ્ત્ મેનુના વિકલ્પો'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'વિશિષ્ટ અક્ષર ઇન્સર્ટ/દાખલ કરવું',
		title		: 'સ્પેશિઅલ વિશિષ્ટ અક્ષર પસંદ કરો',
		options : 'સ્પેશિઅલ કરેક્ટરના વિકલ્પો'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'લિંક ઇન્સર્ટ/દાખલ કરવી',
		other 		: '<other> <અન્ય>',
		menu		: ' લિંક એડિટ/માં ફેરફાર કરવો',
		title		: 'લિંક',
		info		: 'લિંક ઇન્ફૉ ટૅબ',
		target		: 'ટાર્ગેટ/લક્ષ્ય',
		upload		: 'અપલોડ',
		advanced	: 'અડ્વાન્સડ',
		type		: 'લિંક પ્રકાર',
		toUrl		: 'URL',
		toAnchor	: 'આ પેજનો ઍંકર',
		toEmail		: 'ઈ-મેલ',
		targetFrame		: '<ફ્રેમ>',
		targetPopup		: '<પૉપ-અપ વિન્ડો>',
		targetFrameName	: 'ટાર્ગેટ ફ્રેમ નું નામ',
		targetPopupName	: 'પૉપ-અપ વિન્ડો નું નામ',
		popupFeatures	: 'પૉપ-અપ વિન્ડો ફીચરસૅ',
		popupResizable	: 'રીસાઈઝએબલ',
		popupStatusBar	: 'સ્ટૅટસ બાર',
		popupLocationBar: 'લોકેશન બાર',
		popupToolbar	: 'ટૂલ બાર',
		popupMenuBar	: 'મેન્યૂ બાર',
		popupFullScreen	: 'ફુલ સ્ક્રીન (IE)',
		popupScrollBars	: 'સ્ક્રોલ બાર',
		popupDependent	: 'ડિપેન્ડન્ટ (Netscape)',
		popupLeft		: 'ડાબી બાજુ',
		popupTop		: 'જમણી બાજુ',
		id				: 'Id',
		langDir			: 'ભાષા લેખવાની પદ્ધતિ',
		langDirLTR		: 'ડાબે થી જમણે (LTR)',
		langDirRTL		: 'જમણે થી ડાબે (RTL)',
		acccessKey		: 'ઍક્સેસ કી',
		name			: 'નામ',
		langCode			: 'ભાષા લેખવાની પદ્ધતિ',
		tabIndex			: 'ટૅબ ઇન્ડેક્સ',
		advisoryTitle		: 'મુખ્ય મથાળું',
		advisoryContentType	: 'મુખ્ય કન્ટેન્ટ પ્રકાર',
		cssClasses		: 'સ્ટાઇલ-શીટ ક્લાસ',
		charset			: 'લિંક રિસૉર્સ કૅરિક્ટર સેટ',
		styles			: 'સ્ટાઇલ',
		rel			: 'સંબંધની સ્થિતિ',
		selectAnchor		: 'ઍંકર પસંદ કરો',
		anchorName		: 'ઍંકર નામથી પસંદ કરો',
		anchorId			: 'ઍંકર એલિમન્ટ Id થી પસંદ કરો',
		emailAddress		: 'ઈ-મેલ સરનામું',
		emailSubject		: 'ઈ-મેલ વિષય',
		emailBody		: 'સંદેશ',
		noAnchors		: '(ડૉક્યુમન્ટમાં ઍંકરની સંખ્યા)',
		noUrl			: 'લિંક  URL ટાઇપ કરો',
		noEmail			: 'ઈ-મેલ સરનામું ટાઇપ કરો'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'ઍંકર ઇન્સર્ટ/દાખલ કરવી',
		menu		: 'ઍંકરના ગુણ',
		title		: 'ઍંકરના ગુણ',
		name		: 'ઍંકરનું નામ',
		errorName	: 'ઍંકરનું નામ ટાઈપ કરો',
		remove		: 'સ્થિર નકરવું'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'આંકડાના લીસ્ટના ગુણ',
		bulletedTitle		: 'બુલેટેડ લીસ્ટના ગુણ',
		type				: 'પ્રકાર',
		start				: 'શરુ કરવું',
		validateStartNumber				:'લીસ્ટના સરુઆતનો આંકડો પુરો હોવો જોઈએ.',
		circle				: 'વર્તુળ',
		disc				: 'ડિસ્ક',
		square				: 'ચોરસ',
		none				: 'કસુ ',
		notset				: '<સેટ નથી>',
		armenian			: 'અરમેનિયન આંકડા પદ્ધતિ',
		georgian			: 'ગેઓર્ગિયન આંકડા પદ્ધતિ (an, ban, gan, etc.)',
		lowerRoman			: 'રોમન નાના (i, ii, iii, iv, v, etc.)',
		upperRoman			: 'રોમન મોટા (I, II, III, IV, V, etc.)',
		lowerAlpha			: 'આલ્ફા નાના (a, b, c, d, e, etc.)',
		upperAlpha			: 'આલ્ફા મોટા (A, B, C, D, E, etc.)',
		lowerGreek			: 'ગ્રીક નાના (alpha, beta, gamma, etc.)',
		decimal				: 'આંકડા (1, 2, 3, etc.)',
		decimalLeadingZero	: 'સુન્ય આગળ આંકડા (01, 02, 03, etc.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'શોધવું અને બદલવું',
		find				: 'શોધવું',
		replace				: 'રિપ્લેસ/બદલવું',
		findWhat			: 'આ શોધો',
		replaceWith			: 'આનાથી બદલો',
		notFoundMsg			: 'તમે શોધેલી ટેક્સ્ટ નથી મળી',
		findOptions			: 'વીકલ્પ શોધો',
		matchCase			: 'કેસ સરખા રાખો',
		matchWord			: 'બઘા શબ્દ સરખા રાખો',
		matchCyclic			: 'સરખાવવા બધા',
		replaceAll			: 'બઘા બદલી ',
		replaceSuccessMsg	: '%1 ફેરફારો બાદલાયા છે.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'ટેબલ, કોઠો',
		title		: 'ટેબલ, કોઠાનું મથાળું',
		menu		: 'ટેબલ, કોઠાનું મથાળું',
		deleteTable	: 'કોઠો ડિલીટ/કાઢી નાખવું',
		rows		: 'પંક્તિના ખાના',
		columns		: 'કૉલમ/ઊભી કટાર',
		border		: 'કોઠાની બાજુ(બોર્ડર) સાઇઝ',
		widthPx		: 'પિકસલ',
		widthPc		: 'પ્રતિશત',
		widthUnit	: 'પોહાલાઈ એકમ',
		cellSpace	: 'સેલ અંતર',
		cellPad		: 'સેલ પૅડિંગ',
		caption		: 'મથાળું/કૅપ્શન ',
		summary		: 'ટૂંકો એહેવાલ',
		headers		: 'મથાળા',
		headersNone		: 'નથી ',
		headersColumn	: 'પહેલી ઊભી કટાર',
		headersRow		: 'પહેલી  કટાર',
		headersBoth		: 'બેવું',
		invalidRows		: 'આડી કટાર, 0 કરતા વધારે હોવી જોઈએ.',
		invalidCols		: 'ઉભી કટાર, 0 કરતા વધારે હોવી જોઈએ.',
		invalidBorder	: 'બોર્ડર એક આંકડો હોવો જોઈએ',
		invalidWidth	: 'ટેબલની પોહલાઈ આંકડો હોવો જોઈએ.',
		invalidHeight	: 'ટેબલની ઊંચાઈ આંકડો હોવો જોઈએ.',
		invalidCellSpacing	: 'સેલ વચ્ચેની જગ્યા સુન્ય કરતા વધારે હોવી જોઈએ.',
		invalidCellPadding	: 'સેલની અંદરની જગ્યા સુન્ય કરતા વધારે હોવી જોઈએ.',

		cell :
		{
			menu			: 'કોષના ખાના',
			insertBefore	: 'પહેલાં કોષ ઉમેરવો',
			insertAfter		: 'પછી કોષ ઉમેરવો',
			deleteCell		: 'કોષ ડિલીટ/કાઢી નાખવો',
			merge			: 'કોષ ભેગા કરવા',
			mergeRight		: 'જમણી બાજુ ભેગા કરવા',
			mergeDown		: 'નીચે ભેગા કરવા',
			splitHorizontal	: 'કોષને સમસ્તરીય વિભાજન કરવું',
			splitVertical	: 'કોષને સીધું ને ઊભું વિભાજન કરવું',
			title			: 'સેલના ગુણ',
			cellType		: 'સેલનો પ્રકાર',
			rowSpan			: 'આડી કટારની જગ્યા',
			colSpan			: 'ઊભી કતારની જગ્યા',
			wordWrap		: 'વર્ડ રેપ',
			hAlign			: 'સપાટ લાઈનદોરી',
			vAlign			: 'ઊભી લાઈનદોરી',
			alignBaseline	: 'બસે લાઈન',
			bgColor			: 'પાછાળનો રંગ',
			borderColor		: 'બોર્ડેર રંગ',
			data			: 'સ્વીકૃત માહિતી',
			header			: 'મથાળું',
			yes				: 'હા',
			no				: 'ના',
			invalidWidth	: 'સેલની પોહલાઈ આંકડો હોવો જોઈએ.',
			invalidHeight	: 'સેલની ઊંચાઈ આંકડો હોવો જોઈએ.',
			invalidRowSpan	: 'રો સ્પાન આંકડો હોવો જોઈએ.',
			invalidColSpan	: 'કોલમ સ્પાન આંકડો હોવો જોઈએ.',
			chooseColor		: 'પસંદ કરવું'
		},

		row :
		{
			menu			: 'પંક્તિના ખાના',
			insertBefore	: 'પહેલાં પંક્તિ ઉમેરવી',
			insertAfter		: 'પછી પંક્તિ ઉમેરવી',
			deleteRow		: 'પંક્તિઓ ડિલીટ/કાઢી નાખવી'
		},

		column :
		{
			menu			: 'કૉલમ/ઊભી કટાર',
			insertBefore	: 'પહેલાં કૉલમ/ઊભી કટાર ઉમેરવી',
			insertAfter		: 'પછી કૉલમ/ઊભી કટાર ઉમેરવી',
			deleteColumn	: 'કૉલમ/ઊભી કટાર ડિલીટ/કાઢી નાખવી'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'બટનના ગુણ',
		text		: 'ટેક્સ્ટ (વૅલ્યૂ)',
		type		: 'પ્રકાર',
		typeBtn		: 'બટન',
		typeSbm		: 'સબ્મિટ',
		typeRst		: 'રિસેટ'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'ચેક બોક્સ ગુણ',
		radioTitle	: 'રેડિઓ બટનના ગુણ',
		value		: 'વૅલ્યૂ',
		selected	: 'સિલેક્ટેડ'
	},

	// Form Dialog.
	form :
	{
		title		: 'ફૉર્મ/પત્રકના ગુણ',
		menu		: 'ફૉર્મ/પત્રકના ગુણ',
		action		: 'ક્રિયા',
		method		: 'પદ્ધતિ',
		encoding	: 'અન્કોડીન્ગ'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'પસંદગી ક્ષેત્રના ગુણ',
		selectInfo	: 'સૂચના',
		opAvail		: 'ઉપલબ્ધ વિકલ્પ',
		value		: 'વૅલ્યૂ',
		size		: 'સાઇઝ',
		lines		: 'લીટીઓ',
		chkMulti	: 'એકથી વધારે પસંદ કરી શકો',
		opText		: 'ટેક્સ્ટ',
		opValue		: 'વૅલ્યૂ',
		btnAdd		: 'ઉમેરવું',
		btnModify	: 'બદલવું',
		btnUp		: 'ઉપર',
		btnDown		: 'નીચે',
		btnSetValue : 'પસંદ કરલી વૅલ્યૂ સેટ કરો',
		btnDelete	: 'રદ કરવું'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'ટેક્સ્ટ એઅરિઆ, શબ્દ વિસ્તારના ગુણ',
		cols		: 'કૉલમ/ઊભી કટાર',
		rows		: 'પંક્તિઓ'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'ટેક્સ્ટ ફીલ્ડ, શબ્દ ક્ષેત્રના ગુણ',
		name		: 'નામ',
		value		: 'વૅલ્યૂ',
		charWidth	: 'કેરેક્ટરની પહોળાઈ',
		maxChars	: 'અધિકતમ કેરેક્ટર',
		type		: 'ટાઇપ',
		typeText	: 'ટેક્સ્ટ',
		typePass	: 'પાસવર્ડ'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'ગુપ્ત ક્ષેત્રના ગુણ',
		name	: 'નામ',
		value	: 'વૅલ્યૂ'
	},

	// Image Dialog.
	image :
	{
		title		: 'ચિત્રના ગુણ',
		titleButton	: 'ચિત્ર બટનના ગુણ',
		menu		: 'ચિત્રના ગુણ',
		infoTab		: 'ચિત્ર ની જાણકારી',
		btnUpload	: 'આ સર્વરને મોકલવું',
		upload		: 'અપલોડ',
		alt			: 'ઑલ્ટર્નટ ટેક્સ્ટ',
		lockRatio	: 'લૉક ગુણોત્તર',
		resetSize	: 'રીસેટ સાઇઝ',
		border		: 'બોર્ડર',
		hSpace		: 'સમસ્તરીય જગ્યા',
		vSpace		: 'લંબરૂપ જગ્યા',
		alertUrl	: 'ચિત્રની URL ટાઇપ કરો',
		linkTab		: 'લિંક',
		button2Img	: 'તમારે ઈમેજ બટનને સાદી ઈમેજમાં બદલવું છે.',
		img2Button	: 'તમારે સાદી ઈમેજને ઈમેજ બટનમાં બદલવું છે.',
		urlMissing	: 'ઈમેજની મૂળ URL છે નહી.',
		validateBorder	: 'બોર્ડેર આંકડો હોવો જોઈએ.',
		validateHSpace	: 'HSpaceઆંકડો હોવો જોઈએ.',
		validateVSpace	: 'VSpace આંકડો હોવો જોઈએ. '
	},

	// Flash Dialog
	flash :
	{
		properties		: 'ફ્લૅશના ગુણ',
		propertiesTab	: 'ગુણ',