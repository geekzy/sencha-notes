Ext.define("SenchaNotes.view.Main", {
	extend: 'Ext.Container',
	
	config: {
		items: [
			{
				xtype: 'toolbar', 
				docked: 'top',
				title: 'My Notes',
				items: [
					{xtype: 'spacer'},
					{
						xtype: 'button',
						text: 'new',
						ui: 'action',
						action: 'new-note'
					}
				]
			}
		]
	}
});