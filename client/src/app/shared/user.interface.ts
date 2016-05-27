export interface UserInterface {
    id: string

    //required
    email: string
    username?: string
    token: string
    type: string
    
    //optional
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


