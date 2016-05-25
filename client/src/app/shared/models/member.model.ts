export interface Member {
    id?: string

    //required
    email: string
    password?: string
    
    //optional
    type?: string
    username?: string
    avatar?: string
    stripeId?: string
    credits?: number
    created?: any
    lastUpdated?: any
    
    //secretary stuff
    emailVerified?: boolean
    status?: string
    realm?: string
    credentials?: Object
    challenges?: Object
}


