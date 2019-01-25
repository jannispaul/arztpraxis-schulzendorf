// jameda Widgets-Script; © jameda GmbH - www.jameda.de
(function() {

	var elements = document.scripts,
		i, j, max, tempMax, el, params, container, div, info, temp,
		jamEventMethod, jamEventListener, jamEventMessage, maxWidth = 650,
		refIDs = [], cookiesDisabled = false;

	// Setze Testcookie
	document.cookie = "jamCookie=true;secure";

	// Prüfe ob der Cookie vorhanden ist, wenn nicht setze Variable auf True.
	if (document.cookie.indexOf("jamCookie") === -1) {
		cookiesDisabled = true;
	}
	
	/**
	 * Ermittelt die Request-Parameter aus der übergebenen URL
	 * @param 	{String}	url		Die URL
	 * @returns {Object}	Parameter Objekt
	 */
	function parseQueryString(url){
		var queryString, queries, params = {}, i, l, temp;

		// Query String auslesen
		queryString = url.substring( url.indexOf('?') + 1);

		// Query String in Key/Value-Paare trennen
		queries = queryString.split('&');

		// String-Array in Objekt umwandeln
		for (i = 0, l = queries.length; i < l; i+= 1) {
			temp = queries[i].split('=');
			params[temp[0]] = temp[1];
		}

		return params;
	}


	// DOM nach Widget-Skript durchsuchen
	for (i = 0, max = elements.length; i < max; i += 1) {
		el = elements[i];
		if (el.src.indexOf('jameda.de/api/otb-widget') < 0) {
			continue;
		}
		params = parseQueryString(el.src);

		if (params.hasOwnProperty('refid') && refIDs.indexOf(params.refid) < 0) {
			info = document.getElementById('jam-ota-info_' + params.refid);

			if (!info) {
				// Info-Box fehlt, Kalender nicht ausgeben
				continue;
			}

			// je Ref_ID nur ein Widget ausgeben
			refIDs.push(params.refid);

			// Container-DIV erzeugen
			div = document.createElement('div');
			div.setAttribute('id', 'jam-otbwidget');
			if (params.refid.substr(params.refid.length - 1, 1) === 2) {
				maxWidth = 940;
			}
			div.setAttribute('style', 'max-width:' + maxWidth + 'px; min-width:300px;');

			// IFrame erzeugen
			container = document.createElement('iframe');
			container.setAttribute('id', 'jam-otbwidget-inner');
			container.setAttribute('src', 'https://www.jameda.de/arztsuche/profil/otb.php?id=' + params.refid + '&mode=widget&cookiesDisabled=' + cookiesDisabled);
			container.setAttribute('scrolling', 'no');
			container.setAttribute('style', 'width:100%; background:transparent; border:0; overflow:hidden;');
			div.appendChild(container);

			// Elemente in DOM direkt nach Widget-Script-Node einfügen
			el.parentNode.insertBefore(div, el);

			info.setAttribute('style', 'overflow:hidden; max-width:' + maxWidth + 'px; margin-top:5px; font-family:Arial,Helvetica,sans-serif; font-size:11px; line-height:15px;');

			if (info.clientWidth < 330) {
				temp = info.getElementsByTagName('div');

				for (j = 0, tempMax = temp.length; j < tempMax; j += 1) {
					temp[j].setAttribute('style', 'clear:both; float:left; margin-bottom:5px;');
				}
			}
		}
	}


	/**
	 * Auf Messages hören und IFrame-Höhe entsprechend anpassen.
	 * http://michilehr.de/resize-iframe-by-its-content-cross-domain/
	 */
	// browser compatibility: get method for event
	// addEventListener(FF, Webkit, Opera, IE9+) and attachEvent(IE5-8)
	jamEventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';

	// create event listener
	jamEventListener = window[jamEventMethod];

	// browser compatibility: attach event uses onmessage
	jamEventMessage = jamEventMethod === 'attachEvent' ? 'onmessage' : 'message';

	// register callback function on incoming message
	jamEventListener(jamEventMessage, function (e) {
		// we will get a string (better browser support) and validate
		// if it is an int - set the height of the iframe #my-iframe-id
		if (e.data === parseInt(e.data)) {
			document.getElementById('jam-otbwidget-inner').height = e.data + 'px';
			document.getElementById('jam-otbwidget-inner').setAttribute('scrolling', 'no');
		}
	}, false);

}());
