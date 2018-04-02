const order = require('./order');

it('works', () => {

});

it('should use quantity', () => expect(order.orderTotal({
	items: [
		{ name: 'dragon', price: 2, quantity: 3 }
	]
})).toBe(6)); 
