import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  isLoading = true;
  isSaving = false;
  saved = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => { this.album = data; this.editTitle = data.title; this.isLoading = false; },
      error: () => { this.error = 'Failed to load album.'; this.isLoading = false; }
    });
  }

  save(): void {
    if (!this.album || !this.editTitle.trim()) return;
    this.isSaving = true;
    this.albumService.updateAlbum({ ...this.album, title: this.editTitle.trim() }).subscribe({
      next: () => {
        this.album!.title = this.editTitle.trim();
        this.isSaving = false;
        this.saved = true;
        setTimeout(() => this.saved = false, 3000);
      },
      error: () => { this.isSaving = false; }
    });
  }

  viewPhotos(): void { this.router.navigate(['/albums', this.album!.id, 'photos']); }
  goBack(): void { this.router.navigate(['/albums']); }
}
