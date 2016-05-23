export interface Game {
    id?: string
    week: number
    homeScore: number
    awayScore: number
    overtime: boolean
    playedOn: any    
    seasonId: string
    homeTeamId: string
    awayTeamId: string
    winTeamId: string
    loseTeamId: string
}
