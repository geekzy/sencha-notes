Ext.define('SenchaNotes.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            newNoteBtn: 'button[action=new-note]'
        },
        control: {
            newNoteBtn: {tap: 'showNewNote'}
        }
    },
	
	showNewNote: function() {
		console.debug('showing new note form');
	}
});