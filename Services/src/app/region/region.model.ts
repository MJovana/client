export class Region {
    Id: number;
    Name: string;
    CountyId : number;
    
     constructor(Id:number, 
                Name: string, 
                CountryId : number
) {
    this.Id = Id;
    this.Name = Name;
    this.CountyId = CountryId;
   }
}