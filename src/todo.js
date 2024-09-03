class Task {
	constructor(name, description, dueDate) {
		this.name = name;
		this.description = description;
		this.dueDate = dueDate;
		this.isPriority = false;
	}

	// Returns either true or false
	isInFuture() {
		return isFuture(new Date(this.dueDate));
	}
}