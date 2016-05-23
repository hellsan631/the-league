export interface Member {
    id?: string
    type: string
    avatar?: string
    stripeId: string
    credits: number
    realm?: string
    username?: string
    credentials?: Object
    challenges?: Object
    email: string
    emailVerified?: boolean
    status?: string
    created?: any
    lastUpdated?: any
}


