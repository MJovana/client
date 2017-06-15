export class Accommodation {
    Id: number;
    Name: string;
    Description: string;
    Address: string;
    AvrageGrade: number;
    Latitude: number;
    Longitude: number;
    ImageURL: string;
    Approved: boolean;
    //reference:
    AccommodationTypeId : number;
    PlaceId : number;
    UserId : number;

    constructor(Id:number, 
                Name: string, 
                Description: string,
                Address: string,
                AvrageGrade: number,
                Latitude: number,
                Longitude: number,
                ImageURL: string,
                Approved: boolean,
                AccommodationTypeId : number,
                PlaceId : number,
                UserId : number

    ) {
        this.Id = Id;
        this.Name = Name;
        this.Description = Description;
        this.Address = Address;
        this.AvrageGrade = AvrageGrade;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
        this.ImageURL = ImageURL;
        this.Approved = Approved; 
        this.AccommodationTypeId = AccommodationTypeId;
        this.PlaceId = PlaceId;
        this.UserId = UserId;
    }
}