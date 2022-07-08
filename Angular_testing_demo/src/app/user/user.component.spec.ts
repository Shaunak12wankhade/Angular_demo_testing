import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // it works with test bed which helps us in debugging test cases fixture is used whenever our test case is running & in middle of that(means in runtime) if we are making some changes those changes are detected by FIXTURES OR COMPONENTFIXTURES
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("testing title",()=>{
    expect(component.componentName).toBe("user");
  });
  it("testing function", ()=>{
    expect(component.sum(40,60)).toBe(100);
  });
  it("testing html element", ()=>{
    const data=fixture.nativeElement;
    expect(data.querySelector(".some").textContent).toContain("user");
  });

});
