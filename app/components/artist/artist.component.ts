import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { SpotifyService } from '../../services/spotify.service'
@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
})
export class ArtistComponent implements OnInit{
    id: number;
    artist : Artist[];
    album : Album[];
    constructor(
       private spotifyService : SpotifyService,
       private route : ActivatedRoute
    ){}

    ngOnInit(){
        console.log(this.route.params)
        this.route.params.map( params => params['id'])
        .subscribe(id => {
            this.spotifyService.getArtist(id).subscribe(res => {
                this.artist = res;
            })
        })
    }
}
