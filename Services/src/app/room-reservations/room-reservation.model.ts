export class RoomReservation {
    Id: number;
    StartDate: Date;
    EndDate: Date;
    Timestamp: Date;
    RoomId : number;
    UserId : number;
    
     constructor(Id:number, 
                StartDate: Date,
                EndDate: Date,
                Timestamp: Date,
                RoomId : number,
                UserId : number
                
) {
    this.Id = Id;
    this.StartDate =StartDate;
    this.EndDate = EndDate;
    this.Timestamp = Timestamp;  
    this.RoomId = RoomId;
    this.UserId = UserId; 
   }
}