/**
 * @description
 * A mixin is essentially just a way to bundle data, methods, and computed properties into one
 * js file for export. We could have multiple mixins defined here and export them all
 * while only using them as needed in our files as named imports but we should only do
 * that if the mixins are related to the same functionality, else we should
 * create separate js files for each
 * NOTE that mixins are allocated separately when used in separate components, they are passed
 * by value, not by reference and state is not shared across components that share the same mixin
 */
const fruitMixin = {
	data() {
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
	created() {
		console.log("Inside Fruit Mixin Created Hook");
	},
};

export default fruitMixin;
