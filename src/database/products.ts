interface SeedProduct {
    description: string;
    images: string[];
    slug: string;
    title: string;
}

interface SeedData {
    products: SeedProduct[],
}

export const initialData: SeedData = {
    products: [
        {
            description: "Producto 1",
            images: [
                'depositphotos_57388481-stock-photo-metal-pipes-angles-channels-squares.jpg',
                'depositphotos_57388481-stock-photo-metal-pipes-angles-channels-squares.jpg',
            ],
            slug: "Producto 1",
            title: "Producto 1"
        },
        {
            description: "Producto 2",
            images: [
                'depositphotos_96167466-stock-photo-rolled-metal-products',
                'depositphotos_96167466-stock-photo-rolled-metal-products',
            ],
            slug: "Producto 2",
            title: "Producto 2"
        },
        {
            description: "Producto 3",
            images: [
                'descarga.jpg',
                'descarga.jpg'
            ],
            slug: "Producto 3",
            title: "Producto 3"
        },
        {
            description: "Producto 4",
            images: [
                'Importar-productos-metálicos-desde-China.jpg',
                'Importar-productos-metálicos-desde-China.jpg',
            ],
            slug: "Producto 4",
            title: "Producto 4"
        },
        {
            description: "Producto 5",
            images: [
                'productos-metálicos-21856918.jpg',
                'productos-metálicos-21856918.jpg',
            ],
            slug: "Producto 5",
            title: "Producto 5"
        },
    ]
}