

export interface Product{
    
    id: number;//unique identifier
    name: string;//product name
    description:string;//short product description (2–3 sentences)
    price: number;//product price in KZT
    rating: number;//rating from 1 to 5 (can be decimal, e.g. 4.7)
    image: string;//URL or local path to the main product image
    images: string[];//array of image URLs for the gallery (minimum 3)
    link: string;//string — direct URL to the product page on kaspi.kz
    }
