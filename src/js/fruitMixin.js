const fruitMixin = {
	data: function() {
		return {
			fruits: [
				"Apple",
				"Banana",
				"Orange",
				"Mango",
				"Melon",
				"Lemon",
				"Lime",
				"Pineapple",
			],
			fruitFilter: "",
		};
	},
	/**
	 * @description
	 * We use a computed property here to drive our fruits filter input because it only recalculates when
	 * fruitFilter changes or the fruits array changes, which makes it more performant that using a filter as
	 * filters will run every time the DOM is updated (just like methods); the main purpose for a filter is to format text, e.g. format
	 * dates, change case, etc.
	 */
	computed: {
		filteredFruits: function() {
			return this.fruits.filter((element) => {
				return element.match(this.fruitFilter);
			});
		},
	},
};

export default fruitMixin;
