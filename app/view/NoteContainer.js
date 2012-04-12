Ext.define('SenchaNotes.view.NoteContainer', {
	extend: 'Ext.Container',
	xtype: 'notecontainer',
	
	initialize: function() {
		var newNoteBtn, topToolbar, notesList, noteEditor;
		this.callParent(arguments);
		
		newNoteBtn = {
			xtype: 'button',
			text: 'New',
			ui: 'action',
			action: 'new-note',
			handler: this.onNewNoteBtnTap, scope: this
		};
		
		topToolbar = {
			xtype: 'toolbar',
			title: 'My Notes',
			docked: 'top',
			items: [
				{xtype: 'spacer'},
				newNoteBtn
			]
		};
		
		notesList = {
			xtype: 'noteslist',
			store: Ext.getStore('Notes'),
			listeners: {
				disclose: { fn: this.onNoteListDisclose, scope: this }
			}
		};
		
		this.add([topToolbar, notesList]);
	},
	
	config: {
		layout: {type: 'fit'}
	},
	
	onNewNoteBtnTap: function() {
		console.log('newNoteBtnTap');
		this.fireEvent('newNoteCmd', this);
	},
	
	onNoteListDisclose: function(list, record) {
		console.log('disclosing item to edit');
		this.fireEvent('editNoteCmd', list, record)
	}
});
