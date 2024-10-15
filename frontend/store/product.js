import { create } from "zustand"

export const useProviderStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),

    createProduct: async(newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return { sucess: false, message: "Please fill all the fields." }
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(newProduct),
        })
        const data = await res.json();
        set((data) => ({ products: [...state.products, data.data] }))
        return { sucess: true, message: "Product created sucessfully" }
    },
    fetchProducts: async() => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({ products: data.data });
    },
    deleteProducts: async(pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (!data.sucess) return { sucess: false, message: data.message }
    },
}))