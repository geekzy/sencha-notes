Ext.define('SenchaNotes.view.NotesList', {
	extend: 'Ext.dataview.List',
	xtype: 'noteslist',
	
	config: {
		loadingText: 'Loading Notes...',
		onItemDisclosure: true,
		emptyText: [
			'<pre>',
			'<div class="note-list-empty-text">No notes found.</div>',
			'</pre>'
		].join(''),
		itemTpl: [
			'<pre>',
			'<div class="list-item-title">{title}</div>',
			'<div class="list-item-narrative">{narrative}</div>',
			'</pre>'
		].join('')
	}
});