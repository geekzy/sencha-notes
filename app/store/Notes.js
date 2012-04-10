Ext.define('SenchaNotes.store.Notes', {
	extend: 'Ext.data.Store',
	requires: 'Ext.data.proxy.LocalStorage',
	
	config: {
		model: 'SenchaNotes.model.Note',
		data: [
			{ title: 'Note 1', narrative: 'narrative 1'},
			{ title: 'Note 2', narrative: 'narrative 2'},
			{ title: 'Note 3', narrative: 'narrative 3'},
			{ title: 'Note 4', narrative: 'narrative 4'},
			{ title: 'Note 5', narrative: 'narrative 5'},
		],
		sorters: [{ property: 'dataCreated', direction: 'DESC' }]
	}
});