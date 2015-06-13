
Question = (function(){

	/* collection */
	var questions = new Mongo.Collection("questions");

	/* constructor*/
	var constructor = function Question () {

		this.text = "";
		this.timeout = moment();
		this.conversationId;

	};

	constructor.addQuestion = function(text, momentOffset, callback) {

		var q = new Question();

		questions.insert(q, function(error, id){

			!!error ? 
				console.log("INSETED FAILED", error) :
				console.log("INSETED QUESTION: ", id);

			if (!!id){
				callback(id);
			}

		});

	};

	return constructor;

})()