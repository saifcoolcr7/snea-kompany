const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [{
        id: 1,
        title: "Air Force",
        price: 12990,
        detail: "Elevate your style. This AF1 takes its cues from nature with cork accents and woven canvas on the upper. Peep the embroidered Swoosh logo and flowers embroidered on the toe box for an extra earthy touch.",
        colors: [{
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 16990,
        detail: "Luxe embroidery and a subdued palette bring a vibe of understated cool to the AJ1 Mid. The special edition Swoosh adds a hint of shine to kicks that look good (and feel good) no matter where you wear 'em.",
        colors: [{
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 10990,
        detail: "You're not just in the game, you're leading it. Celebrating women who ball and the off-court lifestyle embedded into everyday life, the Blazer Low returns with nothin'-but-net style. Textured leather breaks in beautifully and adds a premium touch. And let's not forget the removable medallion.",
        colors: [{
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 9990,
        detail: "When it fits this good and looks this great, it doesn’t need a Swoosh. From its Crater rubber outsole to its woven, checkerboard textile detailing to its stretchy, “hug your foot” fabric and Nike Air cushioning, the Huarache is bragging rights for your feet.",
        colors: [{
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 8990,
        detail: "Space Hippie is a story of trash transformed. From the label to the outsole, these visionary running shoes are made from at least 20% recycled materials by weight. Not only is the 04 the most lightweight silhouette in the collection, its colorful â€˜Space Waste Yarnâ€™ upper, made from recycled plastic bottles, t-shirts and yarn scraps, includes approximately 80% recycled content by weight.",
        colors: [{
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDetails = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "₹" + choosenProduct.price;
        currentProductDetails.textContent = choosenProduct.detail;
        currentProductImg.src = choosenProduct.colors[0].img;


        //assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});