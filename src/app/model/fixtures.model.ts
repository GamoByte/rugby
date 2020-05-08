export class Fixtures{
    public team: string;
    public time: string;
    public field: string;
    public score: string;
    public teamimg1: string;
    public teamimg2: string;

    constructor (
        team: string,
        time: string, 
        field: string, 
        score: string, 
        teamimg1:string,
        teamimg2:string
        ){
        this.team = team;
        this.time = time;
        this.field= field;
        this.score= score;
        this.teamimg1 = teamimg1;
        this.teamimg2 = teamimg2;
    }
}