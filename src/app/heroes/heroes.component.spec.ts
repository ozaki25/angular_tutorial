import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have hero`, async(() => {
    expect(component.hero).toEqual({ id: 1, name: 'Windstorm' });
  }));

  it('should render hero header in a h2 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('WINDSTORM Details');
  }));

  it('should render hero id in a div tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.hero-id').textContent).toContain('id: 1');
  }));

  it('should render hero name in a div tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.hero-name').textContent).toContain('name: Windstorm');
  }));
});
