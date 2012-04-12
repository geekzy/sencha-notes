Ext.define('SenchaNotes.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			notesList: 'notecontainer',
			noteEditor: 'noteeditor'			
        },
        control: {
            // register listeners for notesList events
            notesList: {
				newNoteCmd: 'showNewNote',
				editNoteCmd: 'editNote'				
			},
			// register listeners for noteEditor events
			noteEditor: {
			    backHomeCmd: 'activateNotesList',
			    saveNoteCmd: 'saveNote'
			}
        }
    },
	
	init: function() {
		this.callParent(arguments);
		console.log('init');
	},
	launch: function() {
		this.callParent(arguments);
		// Load when using dynamic data
		Ext.getStore('Notes').load();
		console.log('launch');
	},
	slideLeft: {type: 'slide', direction: 'left'},
	slideRight: {type: 'slide', direction: 'right'},
	
	showNewNote: function() {
	    console.debug('creating new note');
        var now = new Date(), noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString(),
            blankNote = Ext.create('SenchaNotes.model.Note', {
                id: noteId,
                dateCreated: now,
                title: '', narrative: ''
            });
            
        this.activateNoteEditor(blankNote);
	},
	
	editNote: function(list, record) {
		console.log('editing note');
		this.activateNoteEditor(record);
	},
	
	saveNote: function() {
	    console.log('saving note');
	    var errors, noteEditor = this.getNoteEditor(),
	        note = noteEditor.getRecord(),
	        values = noteEditor.getValues(),
	        store = Ext.getStore('Notes');
	        
	    // update note with values
	    note.set('title', values.title);
	    note.set('narrative', values.narrative);
	    // validate it
	    errors = note.validate();
	    
	    if (!errors.isValid()) {
	        Ext.Msg.alert('Wait!', errors.getByField('title')[0].getMessage(), Ext.emptyFn);
	        note.reject;
	        return;
	    }
	    
	    if (store.findRecord('id', note.data.id) == null) {
	        store.add(note);
	    }
	    
	    store.sync();
	    store.sort([{property: 'dateCreated', direction: 'DESC'}]);
	    
	    this.activateNotesList();
	},
	
	getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    activateNoteEditor: function(record) {
        var noteEditor = this.getNoteEditor();
        noteEditor.setRecord(record);
        Ext.Viewport.animateActiveItem(noteEditor, this.slideLeft);
    },
    
    activateNotesList: function() {
        var notesList = this.getNotesList();
        Ext.Viewport.animateActiveItem(notesList, this.slideRight);
    }
});
