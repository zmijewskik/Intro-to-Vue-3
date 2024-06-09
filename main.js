const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      brand: 'Vue Mastery',
      desc: 'A pair of warm socks',
      selectedVariant: 0,
      url: 'https://www.youtube.com/',
      onSaleText: 'On Sale!',
      inventory: 110,
      details: ['50% cotton', '30% wool', '20% polyester'],
      sizes: ['small', 'medium', 'large'],
      variants: [
        {
          id: 1,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 50,
          onSale: true,
        },
        {
          id: 2,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 0,
          onSale: false,
        },
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
    updateVariant(index) {
      this.selectedVariant = index
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    sale() {
      if (this.variants[this.selectedVariant].onSale) {
        return 'Product' + ' ' + this.onSaleText
      }
      return ''
    },
  },
})
