const data = require("./products.json");

var items = data.items

    //a.
    for(var i = 0; i < items.length; i++) {
        if(items[0].kind === "shopping#product") {
            console.log(i);
        }
    } 

    //b.
    for(var i = 0; i < items.length; i++) {
        if(items[i].product.inventories[0].availability === "backorder") {
            console.log(data.items[i].product.title);
        }
    }
    
    //c.
    for(var i = 0; i < items.length; i++) {
        if(items[i].product.images.length > 1) {
            console.log(data.items[i].product.title);
        }
    }

    //d.
    for(var i = 0; i < items.length; i++) {
        if(items[i].product.brand === "Canon") {
            console.log(data.items[i].product);
        }
    } 

    //e.
    for(var i = 0; i < items.length; i++) {
        if(items[i].product.author.name === "eBay" && items[i].product.brand === "Canon") {
            console.log(data.items[i].product);
        }
    }

    //f.
    for(var i = 0; i < items.length; i++) {
        console.log(data.items[i].product.brand + " " + data.items[i].product.inventories[0].price + " " + data.items[i].product.images[0].link);
    }