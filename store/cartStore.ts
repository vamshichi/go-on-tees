import { create } from "zustand"

interface CartItem {
 id: string
 name: string
 price: number
 image: string
 quantity: number
}

interface CartState {
 cart: CartItem[]
 isOpen: boolean

 addToCart: (product: CartItem) => void
 removeFromCart: (id: string) => void
 clearCart: () => void

 openCart: () => void
 closeCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
 cart: [],
 isOpen: false,

 addToCart: (product) =>
  set((state) => {
   const existing = state.cart.find((item) => item.id === product.id)

   if (existing) {
    return {
     cart: state.cart.map((item) =>
      item.id === product.id
       ? { ...item, quantity: item.quantity + 1 }
       : item
     ),
     isOpen: true, // automatically open drawer when item added
    }
   }

   return {
    cart: [...state.cart, { ...product, quantity: 1 }],
    isOpen: true,
   }
  }),

 removeFromCart: (id) =>
  set((state) => ({
   cart: state.cart.filter((item) => item.id !== id),
  })),

 clearCart: () => set({ cart: [] }),

 openCart: () => set({ isOpen: true }),

 closeCart: () => set({ isOpen: false }),
}))