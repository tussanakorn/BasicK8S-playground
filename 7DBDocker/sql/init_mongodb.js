db = db.getSiblingDB('storedb');
db.products.insertMany([
  {
    "productname": "Product 1",
    "price": 100.00,
    "qty": 10,
    "thumbnail": "https://example.com/image1.jpg",
    "created_at": new Date("2021-01-01T00:00:00.000Z"),
    "updated_at": new Date("2021-01-01T00:00:00.000Z"),
    "status": true
  },
  {
    "productname": "Product 2",
    "price": 200.00,
    "qty": 20,
    "thumbnail": "https://example.com/image2.jpg",
    "created_at": new Date("2021-01-01T00:00:00.000Z"),
    "updated_at": new Date("2021-01-01T00:00:00.000Z"),
    "status": true
  },
  {
    "productname": "Product 3",
    "price": 300.00,
    "qty": 30,
    "thumbnail": "https://example.com/image3.jpg",
    "created_at": new Date("2021-01-01T00:00:00.000Z"),
    "updated_at": new Date("2021-01-01T00:00:00.000Z"),
    "status": true
  },
  {
    "productname": "Product 4",
    "price": 400.00,
    "qty": 40,
    "thumbnail": "https://example.com/image4.jpg",
    "created_at": new Date("2021-01-01T00:00:00.000Z"),
    "updated_at": new Date("2021-01-01T00:00:00.000Z"),
    "status": true
  },
  {
    "productname": "Product 5",
    "price": 500.00,
    "qty": 50,
    "thumbnail": "https://example.com/image5.jpg",
    "created_at": new Date("2021-01-01T00:00:00.000Z"),
    "updated_at": new Date("2021-01-01T00:00:00.000Z"),
    "status": true
  }
]);
