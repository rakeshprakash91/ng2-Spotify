import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {Artist} from '../../../Artist';

@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {
    searchStr : string;
    searchResult : Artist[];
    constructor(private spotifyService : SpotifyService){}
    searchArtist(){
        if(this.searchStr){
            this.spotifyService.searchMusic(this.searchStr).subscribe(result => {
                this.searchResult = result.artists.items;
            })
        }
    }
}
