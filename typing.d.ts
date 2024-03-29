interface Image {
    asset: {
        url: string
    }
}

export interface Creator {
    _id: string
    name: string
    address: string
    slug: {
        current: string
    }
    image: Image
    bio: string
}
export interface Collection {
    _id: string
    description: string
    title: string
    nftCollectionName: string
    address: string
    slug: {
        current: string
    }
    creator: Creator
    mainImage: Image
    previewImage: Image
}