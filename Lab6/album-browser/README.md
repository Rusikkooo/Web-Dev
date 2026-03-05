# Album Browser

Angular 17 SPA — Lab 6: Routing & HTTP

## Run

```bash
cd album-browser
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200)

## Routes

| Path | Component |
|------|-----------|
| `/` | → `/home` |
| `/home` | HomeComponent |
| `/about` | AboutComponent |
| `/albums` | AlbumsComponent |
| `/albums/:id` | AlbumDetailComponent |
| `/albums/:id/photos` | AlbumPhotosComponent |

## Structure

```
src/app/
  components/
    home/           - Welcome page
    about/          - About page
    albums/         - Album list + delete
    album-detail/   - Detail + edit title
    album-photos/   - Photo grid
  models/
    album.model.ts
    photo.model.ts
  services/
    album.service.ts
```

API: [JSONPlaceholder](https://jsonplaceholder.typicode.com)
