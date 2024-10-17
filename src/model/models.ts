export interface Item {
    id: number,
    name: string,
    description: string,
    img: string,
    price: number,
    remaining: number,
}

export interface CartItem {
    id: number,
    item: Item,
    quantity: number
}

export interface Cart {
    id: number,
    items: CartItem[]
}

export const items : Item[] = [
    {
        id: Date.now() + 2,
        name: "Green Hoodie",
        description: "Dark colored hoodie that can be a great addition for St. Patty's Day!",
        img: '/green-hoodie.jpg',
        price: 10.99,
        remaining: 14
    },
    {
        id: Date.now() + 4,
        name: "Black Shirt",
        description: "Dark colored neutral shirt that can match any outfit.",
        img: '/black-sweatshirt.jpg',
        price: 6.99,
        remaining: 10
    },
    {
        id: Date.now() + 6,
        name: "Pink Beanie",
        description: "Light pink beanie that can keep you warm on the coldest of days!",
        img: '/pink-beanie.jpg',
        price: 12.99,
        remaining: 6
    },
    {
        id: Date.now() + 8,
        name: "Gray Socks",
        description: "Gray foot covers that are sure to keep your feet warm!",
        img: '/gray-socks.jpg',
        price: 4.99,
        remaining: 24
    },
    {
        id: Date.now() + 10,
        name: "Turquoise Purse",
        description: "Vibrant colored bag that allows you to carry all your belongings in style.",
        img: '/turquoise-purse.jpg',
        price: 64.99,
        remaining: 3
    },
    {
        id: Date.now() + 12,
        name: "Brown Belt",
        description: "Neutral colored belt to go with any suit and any occasion!",
        img: '/brown-belt.jpg',
        price: 20.99,
        remaining: 10
    },
    {
        id: Date.now() + 14,
        name: "Red Hat",
        description: "A bright colored hat that can bring your outfits to the next level!",
        img: '/red-hat.jpg',
        price: 34.99,
        remaining: 11
    },
    {
        id: Date.now() + 16,
        name: "Blue Jacket",
        description: "Dark jacket that you can wear for a casual day out.",
        img: '/blue-jacket.jpg',
        price: 17.00,
        remaining: 16
    },
    {
        id: Date.now() + 18,
        name: "White Sleeveless",
        description: "Breezy shirt that you can do all sorts of cool things in, from working out to chilling at home!",
        img: '/white-sleeveless.jpg',
        price: 6.00,
        remaining: 28
    }
]