module.exports = (temp, data) => {
    // Code for replaceTemplate function
    // "id": 0,
    // "productName": "Fresh Avocados",
    // "image": "🥑",
    // "from": "Spain",
    // "nutrients": "Vitamin B, Vitamin K",
    // "quantity": "4 🥑",
    // "price": "6.50",
    // "organic": true,
    // "description": "A ripe avocado yields to gentle pressure when held in the palm of the hand and squeezed. The fruit is not sweet, but distinctly and subtly flavored, with smooth texture. The avocado is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content. Generally, avocado is served raw, though some cultivars, including the common 'Hass', can be cooked for a short time without becoming bitter. It is used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices."
    let output = temp.replace(/{%ID%}/g, data.id);
    output = output.replace(/{%PRODUCTNAME%}/g, data.productName);
    output = output.replace(/{%IMAGE%}/g, data.image);
    output = output.replace(/{%FROM%}/g, data.from);
    output = output.replace(/{%NUTRIENTS%}/g, data.nutrients);
    output = output.replace(/{%QUANTITY%}/g, data.quantity);
    output = output.replace(/{%PRICE%}/g, data.price);
    output = output.replace(/{%DESCRIPTION%}/g, data.description);

    if (!data.organic) output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
    return output;
};