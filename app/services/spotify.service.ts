import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class SpotifyService{
    private searchUrl : string;
    private artistUrl : string;
    constructor(private http : Http){

    }
 
    searchMusic (str : string, type = 'artist'){
        this.searchUrl = "https://api.spotify.com/v1/search?query="+str+"&offset=0&limit=20&type="+type+"&market=US";
        return this.http.get(this.searchUrl).map(res=>res.json())
    }

    getArtist(id :number){
        this.artistUrl = "https://api.spotify.com/v1/artists/"+id;
        return this.http.get(this.artistUrl).map(res => res.json());
    }
}