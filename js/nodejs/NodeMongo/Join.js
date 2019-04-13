var settings = require('./Settings');
const { client, url, newUrlParser } = settings.config;

client.connect(url, newUrlParser, (error, db) => {
    if (error) throw error;
    var databaseObject = db.db('nodejs_mongo');

    // Orders
    // var ordersQuery = [
    //     { _id: 1, product_id: 154, status: 1 }
    // ];
    // databaseObject.collection('orders').insertMany(ordersQuery, (error, results) => {
    //     if (error) throw error;
    //     console.log(results);
    //     console.log("Orders Tabulated");
    // })

    // Products
    // var productsQuery = [
    //     { _id: 154, name: 'Chocolate Heaven' },
    //     { _id: 155, name: 'Tasty Lemons' },
    //     { _id: 156, name: 'Vanilla Dreams' }
    // ];
    // databaseObject.collection('products').insertMany(productsQuery, (error, results) => {
    //     if (error) throw error;
    //     console.log(results);
    //     console.log("Products Tabulated");
    // })

    var joinQuery = {
        $lookup: {
            from: "products",
            localField: "product_id",
            foreignField: "_id",
            as: "orderdetails"
        }
    }
    databaseObject.collection('orders').aggregate([joinQuery]).toArray((error, results) => {
        if (error) throw error;
        console.log(JSON.stringify(results));
        db.close();
    })
})