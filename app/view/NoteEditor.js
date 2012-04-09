Ext.define('SenchaNotes.view.NoteEditor', {
	extend: 'Ext.form.Panel',
	xtype: 'noteeditor',
	requires: ['Ext.form.FieldSet'],
	
	config: {
		scrollable: 'vertical'
	},
	
	initialize: function() {
		var backButton, saveButton, topToolbar, buttomToolbar, deleteButton;
		this.callParent(arguments);
		
		backButton = {
			xtype: 'button',
			ui: 'back',
			text: 'Home'
		};
		
		saveButton = {
			xtype: 'button',
			ui: 'action',
			text: 'Save'
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
		
		deleteButton: {
			xtype: 'button',
			iconCls: 'trash',
			iconMask: true,
			scope: this
		};
		
		
	}
});