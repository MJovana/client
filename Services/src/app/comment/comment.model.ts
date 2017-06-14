export class Comment {
    Id: number;
    Grade: number;
    Text: string;
    UserId : number;
   

    constructor(Id:number, 
                Grade: number, 
                Text: string,
                UserId: number

    ) {
        this.Id = Id;
        this.Grade = Grade;
        this.Text = Text;
        this.UserId = UserId;
      
    }
}