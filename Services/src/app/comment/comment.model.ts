export class Comment {
    Id: number;
    Grade: number;
    Tekst: string;
    UserId : number;
    AccommodationId : number;
   

    constructor(Id:number, 
                Grade: number, 
                Tekst: string,
                UserId: number,
                AccommodationId : number

    ) {
        this.Id = Id;
        this.Grade = Grade;
        this.Tekst = Tekst;
        this.UserId = UserId;
        this.AccommodationId = AccommodationId;
      
    }
}