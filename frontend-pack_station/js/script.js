var sample_order = {
	'order_id': '154658974514',
	'products': [
		{
			'ppc': '514569875412354569',
			'name': 'Kalosze',
			'type': 'Buty'
		}
	]
};

$(document).ready(function () {
	console.log('doc ready');
	$(".order-id").html(sample_order.order_id);
	$(".products-total").html(sample_order.products.length);
});