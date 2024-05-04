// Function to toggle dark/light mode
function toggleMode() {
    const body = document.body;
    const modeSwitch = document.getElementById('modeSwitch');
    const logo = document.querySelector('.logo');
    const cartIcon = document.querySelector('.cart-icon');
    const personIcon = document.querySelector('.person-icon');
    const aboutLink = document.getElementById('aboutLink');

    if (modeSwitch.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        logo.src = 'img/logo_name_white.png';
        cartIcon.src = 'img/shopping-bag_white.png';
        personIcon.src = 'img/person_white.png';
        aboutLink.classList.add('dark-mode-link'); // Add dark mode class to link
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        logo.src = 'img/logo_name_black.png';
        cartIcon.src = 'img/shopping-bag_black.png';
        personIcon.src = 'img/person_black.png';
        aboutLink.classList.remove('dark-mode-link'); // Remove dark mode class from link
    }

    personIcon.classList.add('animate-icon'); // Add animation class
    setTimeout(() => {
        personIcon.classList.remove('animate-icon'); // Remove animation class after timeout
    }, 500); // Adjust the timeout duration as needed
}

// Function to handle page transition with animation
function transitionToLoginRegisterPage() {
    const container = document.querySelector(".light-mode");
    container.style.transition = "opacity 0.5s ease-out"; // Apply transition CSS
    container.style.opacity = 0; // Set container opacity to 0
    setTimeout(function() {
        window.location.href = "loginregister.html"; // Redirect to login/register page after transition
    }, 500); // Adjust the duration (in milliseconds) to match the transition duration
}

// Select the white person icon
const whitePersonIcon = document.querySelector('.person-white');
const blackPersonIcon = document.querySelector('.person-black');

// Add click event listener to the white person icon
whitePersonIcon.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior
    transitionToLoginRegisterPage(); // Call the transition function
});

blackPersonIcon.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior
    transitionToLoginRegisterPage(); // Call the transition function
});


function showProducts(category) {
    const productSection = document.querySelector('.product-section');
    productSection.innerHTML = ''; // Clear existing products

    if (category === 'cakes') {
        const cakeProducts = [
            { name: 'Chocolate Mirage Cake', image: 'img/cakes/CHOCOLATE-MIRAGE.png', description: 'The most decadent cake youll ever taste. Layered with salted caramel chocolate, flourless choc sponge, dark choc cremeux and a light chocolate mousse. (GF)', price: 25.99 },
            { name: 'Dragon Cake', image: 'img/cakes/DRAGON-CAKE.png', description: 'Dragon fruit is finely sliced and layered on a delicate sponge, with pineapple vanilla cream and pomegranate jelly ripples, and a biscuit crumb base.', price: 25.99 },
            { name: 'Mango Yuzu Cake', image: 'img/cakes/MANGO-YUZU.png', description: 'Combining seven layers of tropical flavour - refreshing yuzu with creamy coconut, the sweetness of mango and sago (GF)', price: 25.99 },
            { name: 'Orange Cake with Persian Figs', image: 'img/cakes/ORANGE-CAKE.png', description: 'Made from whole boiled oranges and almond meal. This moist and decadent cake is doused with orange blossom syrup as soon as it comes out of the oven. (GF, V)', price: 25.99 },
            { name: 'Origami Lemon Cake', image: 'img/cakes/ORIGAMI-LEMON.png', description: 'Inspired by the citrus scents of spring, topped with a white chocolate paper crane. (GF)', price: 25.99 },
            { name: 'Raspberry Lychee Cake', image: 'img/cakes/RASPBERRY-LYCHEE.png', description: 'Built upon a rich chocolate dacquoise base, topped with raspberry marshmallow and rose scented cream to create a delicious balance of texture and flavour. (GF)', price: 25.99 },
            { name: 'Strawberry Watermelon Cake', image: 'img/cakes/STRAWBERRY-WATERMELON.png', description: 'Fresh watermelon, light rose scented cream, fragrant rose petals, and Insta-famous too. This is Black Star Pastry’s signature and most requested cake. (GF)', price: 25.99 },
            { name: 'Ume Forest Cake', image: 'img/cakes/UME-FOREST.png', description: 'Celebrating the flavour of ume, Japanese plum fruit, our Ume Forest Cake will take you away to a tranquil Japanese forest.', price: 25.99 },
            { name: 'Zen Cheesecake', image: 'img/cakes/ZEN-CHEESECAKE.png', description: 'Inspired by a zen Japanese rock garden, this is Black Star Pastrys most blissful cake. Forget searching for a meditative state, youve found a meditative cake.', price: 25.99 },
        ];

        cakeProducts.forEach(product => {
            const productElement = createProductElement(product);
            productSection.appendChild(productElement);
        });
    } else if (category === 'pastry') {
        const pastryProducts = [
            { name: 'Bushwalk Bite', image: 'img/pastry/Bushwalk-Bite.png', description: 'Experience a burst of refreshing Australian native flavors with every bite of our Lemon Myrtle Chiffon cake.', price: 25.99 },
            { name: 'Chocolate Hazelnut Croissant', image: 'img/pastry/Chocolate-Hazelnut.png', description: 'Indulge in this combination of chocolate and hazelnut praline whipped ganache, wrapped in our flaky dual-toned croissant.', price: 25.99 },
            { name: 'Croissant', image: 'img/pastry/Croissant.png', description: 'Flaky buttery pastry, made from our Australian cultured butter. Our croissants are a must-try.', price: 25.99 },
            { name: 'Rose and Pistachio Croissant', image: 'img/pastry/Rose-Pistachio.png', description: 'Our favorite cake and pastry are combined with this strawberry and rose cream filled croissant.', price: 25.99 },
            { name: 'Cinnamon Scroll', image: 'img/pastry/Cinnamon-Scroll.png', description: 'Cinnamonny Rolly Rolly', price: 25.99 },
        ];

        pastryProducts.forEach(product => {
            const productElement = createProductElement(product);
            productSection.appendChild(productElement);
        });
    } else if (category === 'tiered-cakes') {
        const tieredCakeProducts = [
            { name: 'Chocolate Mirage Celebration', image: 'img/tiered/Chocolate-Mirage.png', description: 'The most decadent cake youll ever taste. Layered with salted caramel chocolate, flourless choc sponge, dark chocolate cremeux and a light chocolate mousse.', price: 25.99 },
            { name: 'Dragon Cake Celebration', image: 'img/tiered/Dragon-Cake.png', description: 'Dragon fruit finely sliced and layered on a delicate sponge, with pineapple vanilla cream and pomegranate jelly ripples, stacked on a biscuit crumb base.', price: 25.99 },
            { name: 'Raspberry Lychee Celebration', image: 'img/tiered/Rapberry-Lychee.png', description: 'Built upon a rich chocolate dacquoise base, topped with raspberry marshmallow and rose scented cream to create a delicious balance of texture and flavour.', price: 25.99 },
            { name: 'Strawberry Watermelon Celebration', image: 'img/tiered/StrawberryWatermelon.png', description: 'Fresh watermelon, light rose scented cream, fragrant rose petals, and Insta-famous too. This is Black Star Pastry’s signature and most requested cake.', price: 25.99 },
            { name: 'Ume Forest Celebration', image: 'img/tiered/Ume-Forest.png', description: 'Hojicha sponge and Choya confit ume fruits in umeshu infused cream. Our take on the traditional European Black Forest Cake with a Japanese twist.', price: 25.99 },
            { name: 'Orange Cake with Persian Figs', image: 'img/tiered/Orange-Cake.png', description: 'A moist and decadent orange cake garnished with dried Persian figs', price: 25.99 },
        ];

        tieredCakeProducts.forEach(product => {
            const productElement = createProductElement(product);
            productSection.appendChild(productElement);
        });
    } else if (category === 'drinks') {
        const drinkProducts = [
            { name: 'Watermelon Mint Soda', image: 'img/drinks/Watermelon-Mint.jpg', description: 'Sweet watermelon with fresh lime juice and a sprig of mint.', price: 25.99 },
            { name: 'SWC Iced Latte', image: 'img/drinks/SWC-Iced.jpg', description: 'A luxurious take on your favourite childhood strawberry milk.', price: 25.99 },
            { name: 'Raspberry Lychee Iced Tea', image: 'img/drinks/Raspberry-Lychee.jpg', description: 'The light touch of rose and the fruitiness of lychee make it a perfect pairing for cake.', price: 25.99 },
            { name: 'Iced Matcha Latte', image: 'img/drinks/Iced-Matcha.jpg', description: 'A refreshing take on our matcha latte - served over ice.', price: 25.99 },
            { name: 'Iced Strawberry Matcha Latte', image: 'img/drinks/Iced-Strawberry-Matcha.jpg', description: 'Indulge in the perfect blend of vibrant strawberries and earthy matcha, creating a delightful harmony of flavors in every sip.', price: 25.99 },
            { name: 'Espresso Yuzu Fizz', image: 'img/drinks/Espresso-Yuzu-Fizz.jpg', description: 'Citrus Yuzu and freshly brewed ST ALi espresso for a sweet and tangy taste.', price: 25.99 },
            { name: 'Iced Chocolate Mirage', image: 'img/drinks/Iced-Chocolate.jpg', description: 'Our Iced Chocolate Mirage will be sure to satisfy your chocolate cravings.', price: 25.99 },
            { name: 'Iced Ginger Ninja Latte', image: 'img/drinks/Iced-Ginger-Ninja.jpg', description: 'A delicious treat combining espresso, house made gingerbread spiced syrup and Gewürzhaus spice.', price: 25.99 },
            { name: 'Ginger Ninja Latte', image: 'img/drinks/Ginger-Ninja.png', description: 'Fresh espresso, housemade spiced gingerbread syrup and Gewürzhaus spice make this a delicious treat for the colder months.', price: 25.99 },
            { name: 'Hot Choc Mirage', image: 'img/drinks/Hot-Choc-Mirage.png', description: 'A decadent hot chocolate inspired by our Chocolate Mirage Cake. Rooibos Tea, caramel and Madagascan Manjari Chocolate combine for a unique butterscotch flavour.', price: 25.99 },
            { name: 'Strawberry Watermelon Latte', image: 'img/drinks/Strawberry-Watermelon.png', description: 'Our most iconic cake, reimagined. A top-secret strawberry and watermelon syrup with Milk Lab Almond Milk combine for a transcendent sip, straight from heaven.', price: 25.99 },                
        ];

        drinkProducts.forEach(product => {
            const productElement = createProductElement(product);
            productSection.appendChild(productElement);
        });
    }

    productSection.scrollIntoView({ behavior: 'smooth' });

    toggleMode();
}

function addToCart(name, description, price, image) {
    const quantity = 1; // Default quantity is 1
    const product = { name, description, price, image, quantity }; // Include image and quantity
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Refresh cart display
    displayCartItems();

    alert('Item added to cart!');
}




function updateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemCount = cartItems.length;
    const cartBadge = document.createElement('span');
    cartBadge.classList.add('cart-badge');
    cartBadge.textContent = cartItemCount;
    cartIcon.appendChild(cartBadge);
}


function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = ''; // Clear existing items

    let totalPrice = 0; // Initialize total price

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p class="cart-empty-message">No items in cart</p>';
    } else {
        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>$${item.price.toFixed(2)}</p>
                    <input type="number" min="1" value="${item.quantity}" class="input-quantity" onchange="updateQuantity(${index}, this.value)">
                    <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
            cartContainer.appendChild(itemElement);

            totalPrice += item.price * item.quantity; // Add item price * quantity to total
        });
    }

    // Update total price container
    const totalPriceContainer = document.getElementById('totalPrice');
    totalPriceContainer.textContent = `Total: $${totalPrice.toFixed(2)}`;
}







function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const productLink = document.createElement('a');
    productLink.href = product.name.toLowerCase().split(' ').join('-') + '.html';
    productLink.target = '_blank';
    productElement.appendChild(productLink);

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('product-image-wrapper');
    imageWrapper.style.width = '450px';
    imageWrapper.style.height = '450px';
    const bgColor = getRandomColor();
    imageWrapper.style.backgroundColor = bgColor;
    imageWrapper.style.borderRadius = '15px';

    const imageElement = document.createElement('img');
    imageElement.src = product.image;
    imageElement.alt = product.name;
    imageElement.classList.add('product-image');
    imageElement.style.maxWidth = '100%';
    imageElement.style.maxHeight = '100%';
	productElement.appendChild(imageElement);
    productLink.appendChild(imageWrapper);
    imageWrapper.appendChild(imageElement);
	

    const titleElement = document.createElement('div');
    const strongElement = document.createElement('strong'); // New strong element
    strongElement.textContent = product.name; // Put the product name inside the strong tag
    titleElement.appendChild(strongElement); // Append strong tag to title element
    titleElement.classList.add('product-title');
    productElement.appendChild(titleElement);

    const descriptionElement = document.createElement('div');
    descriptionElement.textContent = product.description;
    descriptionElement.classList.add('product-description');
    productElement.appendChild(descriptionElement);

    const priceElement = document.createElement('div');
    priceElement.textContent = '$' + product.price; // Add the price of the product
    priceElement.classList.add('product-price');
    productElement.appendChild(priceElement);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add('add-to-cart-button');
    addToCartButton.addEventListener('click', function() {
        addToCart(product.name, product.description, product.price);
    });
    productElement.appendChild(addToCartButton);

    return productElement;
}

document.addEventListener('DOMContentLoaded', function() {
    displayCartItems(); // Display cart items when the page loads
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const bgColor = getRandomColor();
    slider.style.backgroundColor = bgColor;
});

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function openCart() {
    // Redirect to the cart.html page
    window.location.href = 'cart.html';
}

