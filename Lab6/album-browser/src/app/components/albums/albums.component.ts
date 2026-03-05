import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.isLoading = true;
    this.error = null;
    this.albumService.getAlbums().subscribe({
      next: (data) => { this.albums = data; this.isLoading = false; },
      error: () => { this.error = 'Failed to load albums.'; this.isLoading = false; }
    });
  }

  goTo(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  delete(e: Event, id: number): void {
    e.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe({
      next: () => { this.albums = this.albums.filter(a => a.id !== id); },
      error: () => {}
    });
  }
}
