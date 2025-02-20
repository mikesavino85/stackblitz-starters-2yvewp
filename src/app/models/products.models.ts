//products
/**  {"id":26,"title":"Green Chili Pepper",
"description":"Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
"category":"groceries","price":0.99,"discountPercentage":18.51,"rating":4.43,"stock":8,
"tags":["vegetables"],"sku":"Y4RM3JCB","weight":2,"dimensions":{"width":18.67,"height":21.17,"depth":25.26},
"warrantyInformation":"No warranty","shippingInformation":"Ships in 1-2 business days","availabilityStatus":"In Stock",
"reviews":[{"rating":2,"comment":"Disappointing product!","date":"2024-05-23T08:56:21.620Z","reviewerName":"Mateo Bennett","reviewerEmail":"mateo.bennett@x.dummyjson.com"},
{"rating":5,"comment":"Very pleased!","date":"2024-05-23T08:56:21.620Z","reviewerName":"Natalie Price","reviewerEmail":"natalie.price@x.dummyjson.com"},
{"rating":4,"comment":"Very satisfied!","date":"2024-05-23T08:56:21.620Z","reviewerName":"Avery Barnes","reviewerEmail":"avery.barnes@x.dummyjson.com"}],
"returnPolicy":"30 days return policy","minimumOrderQuantity":43,"meta":{"createdAt":"2024-05-23T08:56:21.620Z","updatedAt":"2024-05-23T08:56:21.620Z",
"barcode":"8400326844874","qrCode":"https://dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png"],
"thumbnail":"https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png"}
*/

export interface Products {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;  //url
}

// BONUS: categories
// {"slug":"groceries","name":"Groceries","url":"https://dummyjson.com/products/category/groceries"}

export interface Categories {
  
}


