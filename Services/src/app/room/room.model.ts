export class Room {
    Id: number;
    RoomNumber: number;
    BedCount: number;
    Description: string;
    PricePerNight: number;
    AccommodationId : number;
    
     constructor(Id:number, 
                RoomNumber: number,
                BedCount: number,
                Description: string,
                PricePerNight: number,
                 AccommodationId : number
) {
    this.Id = Id;
    this.RoomNumber = RoomNumber;
    this.BedCount = BedCount;
    this.Description = Description;
    this.PricePerNight = PricePerNight;
    this.AccommodationId = AccommodationId;
   }
}