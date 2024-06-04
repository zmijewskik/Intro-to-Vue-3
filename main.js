const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      brand: 'Vue Mastery',
      desc: 'A pair of warm socks',
      image: './assets/images/socks_green.jpg',
      url: 'https://www.youtube.com/',
      onSale: true,
      onSaleText: 'On Sale!',
      inStock: false,
      inventory: 110,
      details: ['50% cotton', '30% wool', '20% polyester'],
      sizes: [ 'small', 'medium', 'large'],
      variants: [
        { id: 1, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2, color: 'blue', image: './assets/images/socks_blue.jpg' },
      ],
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      if (!this.cart <= 0) {
        this.cart -= 1
      }
    },
    updateImage(variantImage) {
      this.image = variantImage
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
  },
})
