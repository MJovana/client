export class Region {
    Id: number;
    Name: string;
    CountryId : number;
    
     constructor(Id:number, 
                Name: string, 
                CountryId : number
) {
    this.Id = Id;
    this.Name = Name;
    this.CountryId = CountryId;
   }
}