Ext.define('SenchaNotes.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			notesList: 'main'
        },
        control: {
            notesList: {
				newNoteCmd: 'showNewNote',
				editNoteCmd: 'editNote'
				
			}
        }
    },
	
	init: function() {
		this.callParent(arguments);
		console.debug('init');
	},
	launch: function() {
		this.callParent(arguments);
		// Ext.getStore('Notes').load();
		console.debug('launch');
	},
	
	showNewNote: function() {
		console.debug('showing new note form');
	},
	
	editNote: function(list, record) {
		console.debug('editing note');
	}
});