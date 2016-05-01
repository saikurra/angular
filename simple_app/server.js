var express = require('express'),
    app = express();



app.use(express.static(__dirname + '/'));


app.get('/customers/:id', function (req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id == customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
})

app.get('/customers', function (req, res) {
    //res.json(customers);
    res.json(500, {error: 'An Error has Occured'});
})

var customers = [
    {
        id: 1,
        joined: '2000-12-02',
        name: 'John',
        city: 'Chandler',
        orderTotal: 9.9956,
        orders: [{
            id: 2,
            product: 'kindle',
            total: 101.50
                }]
        },
    {
        id: 2,
        joined: '1965-01-25',
        name: 'Zed',
        city: 'Las Vegas',
        orderTotal: 19.99,
        orders: [{
            id: 4,
            product: 'HeadPhone',
            total: 44.99
                }]
        },
    {
        id: 3,
        joined: '1944-06-15',
        name: 'Tina',
        city: 'New York',
        orderTotal: 44.99,
        orders: [{
            id: 5,
            product: 'kindle',
            total: 101.50
                }]
        }, {
        id: 4,
        joined: '1995-03-28',
        name: 'Dave',
        city: 'Seattle',
        orderTotal: 101.50,
        orders: [{
            id: 5,
            product: 'kindle',
            total: 101.50
                }]
            }
            ];

app.listen(8080);

console.log('Express Listening on port 8080');