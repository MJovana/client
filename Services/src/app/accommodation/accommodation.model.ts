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
    AccommodationId : number;

    constructor(Id:number, 
                Name: string, 
                Description: string,
                Address: string,
                AvrageGrade: number,
                Latitude: number,
                Longitude: number,
                ImageURL: string,
                Approved: boolean,
                AccommodationId : number

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
        this.AccommodationId = AccommodationId;
    }
}