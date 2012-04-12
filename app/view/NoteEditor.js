Ext.define('SenchaNotes.view.NoteEditor', {
	extend: 'Ext.form.Panel',
	xtype: 'noteeditor',
	requires: ['Ext.form.FieldSet'],
	
	config: {
		scrollable: 'vertical'
	},
	
	initialize: function() {
		var backButton, saveButton, topToolbar, bottomToolbar, deleteButton,
		    noteEditorTitle, noteEditorNarrative;
		this.callParent(arguments);
		
		backButton = {
			xtype: 'button',
			ui: 'back',
			text: 'Home',
			handler: this.onBackHomeTap, scope: this
		};
		
		saveButton = {
			xtype: 'button',
			ui: 'action',
			text: 'Save',
			handler: this.onSaveNoteTap, scope: this
		};
		
		topToolbar = {
			xtype: 'toolbar',
			docked: 'top',
			title: 'Edit Note',
			items: [
				backButton,
				{xtype: 'spacer'},
				saveButton
			]
		};
		
		deleteButton = {
			xtype: 'button',
			iconCls: 'trash',
			iconMask: true,
			scope: this
		};
			
		bottomToolbar = {
		    xtype: 'toolbar',
		    docked: 'bottom',
		    items: [deleteButton]
		};
		
		noteEditorTitle = {
		    xtype: 'textfield',
		    name: 'title',
		    label: 'Title',
		    required: true
		};
		
		noteEditorNarrative = {
		    xtype: 'textareafield',
		    name: 'narrative',
		    label: 'Narrative'
		};
		
		this.add([
		    topToolbar,
		    {xtype: 'fieldset', items: [noteEditorTitle, noteEditorNarrative]}, 
		    bottomToolbar
		]);
	},
	
	onBackHomeTap: function() {
	    console.log('backHome');
	    this.fireEvent('backHomeCmd', this);
	},
	
	onSaveNoteTap: function() {
	    console.log('saveNote');
	    this.fireEvent('saveNoteCmd', this);
	}
});
