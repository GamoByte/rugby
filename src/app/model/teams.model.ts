export class Teams{
    public organisation:    string;
    public team:            string;
    public group:           string;
    // public score:           string;
    public teamimg:         string;
    public organisationimg: string;

    constructor (
        organisation:    string, 
        team:            string,
        group:           string, 
        // score:           string, 
        teamimg:         string,
        organisationimg: string
        ){
        this.organisation    = organisation;
        this.team            = team;
        this.group           = group;
        // this.score           = score;
        this.teamimg         = teamimg;
        this.organisationimg = organisationimg;
    }
}