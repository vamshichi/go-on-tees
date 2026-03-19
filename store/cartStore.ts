import { create } from "zustand"

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  size?: string
  quantity: number
}

interface CartState {
  cart: CartItem[]
  isOpen: boolean

  addToCart: (product: CartItem) => void
  removeFromCart: (id: string, size?: string) => void
  clearCart: () => void

  openCart: () => void
  closeCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isOpen: false,

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (i) => i.id === item.id && i.size === item.size
      )

      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id && i.size === item.size
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        }
      }

      return {
        cart: [...state.cart, item],
      }
    }),

  removeFromCart: (id, size) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => !(item.id === id && item.size === size)
      ),
    })),

  clearCart: () => set({ cart: [] }),

  openCart: () => set({ isOpen: true }),

  closeCart: () => set({ isOpen: false }),
}))