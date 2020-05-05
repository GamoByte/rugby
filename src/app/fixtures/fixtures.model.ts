export class Fixtures{
    public team: string;
    public time: string;
    public field: string;
    public score: string;

    constructor (team: string,time: string, field: string, score: string){
        this.team = team;
        this.time = time;
        this.field= field;
        this.score= score;
    }
}