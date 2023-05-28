import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagePeliculaPage } from './page-pelicula.page';

describe('PagePeliculaPage', () => {
  let component: PagePeliculaPage;
  let fixture: ComponentFixture<PagePeliculaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagePeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
