import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpRegionService } from '../services/http.regionService'
import {Region} from './region.model'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers: [HttpRegionService]
})
export class RegionComponent implements OnInit {

   regions : Object [];
  region : Region;
  constructor(private httpRegionService: HttpRegionService) { }

 ngOnInit() {
   this.httpRegionService.getRegions().subscribe((res: Response) =>  {this.regions = res.json(); console.log(this.regions)});
  }
  addRegion(newRegion: Region, form: NgForm) : void{
      this.httpRegionService.postRegion(newRegion).subscribe(this.onPost);
      form.reset();
    }  

    deleteRegion(id: number) {
      this.httpRegionService.delete(id).subscribe(() => {this.refresh(); });
    }  

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();
    }

     refresh() {
      this.httpRegionService.getRegions().subscribe((res: Response) =>  {this.regions = res.json(); console.log(this.regions)});
    }

}
