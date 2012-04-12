Ext.define('SenchaNotes.store.Notes', {
	extend: 'Ext.data.Store',
	requires: ['Ext.data.proxy.LocalStorage'],
	
	config: {		
		model: 'SenchaNotes.model.Note',
		proxy: {
		    type: 'localstorage',
		    id: 'notes-app-store'
		},
		sorters: [{ property: 'dataCreated', direction: 'DESC' }]
	}
});
