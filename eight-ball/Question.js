
Question = (function(){

	/* collection */
	var questions = new Mongo.Collection("questions");

	/* constructor*/
	var constructor = function Question () {

		this.text = "";
		this.timeout;
		this.userId;

	};

	constructor.getQuestion = function(qId) {
		return questions.findOne({ _id: qId});
	};

	constructor.addQuestion = function(text, momentOffset, userId) {

		var q = new Question();
		q.text = text;
		q.timeout = momentOffset;
		q.userId = userId;

		questions.insert(q, function(error, id){

			!!error ? 
				console.log("INSETED FAILED", error) :
				console.log("INSETED QUESTION: ", id);

			Conversation.askQuestion(userId, id);

		});

	};

	return constructor;

})()