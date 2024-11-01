import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit{


  @HostBinding("src")
  imgSrc:string | null = null;

  @Input()
  name!:string;

  constructor(private el:ElementRef, private renderer:Renderer2) {
    console.log(el);
    renderer.setStyle(el.nativeElement,'color','green');
    renderer.setStyle(el.nativeElement,'border','3px solid black');
    
   }
  ngOnInit(): void {
    this.renderer.setAttribute(this.el.nativeElement,'title', this.name);
    this.imgSrc = `assets/${this.name}.jpg`;
  }


   @HostListener("mouseenter")
   m1(){
    
    this.renderer.setStyle
    (this.el.nativeElement,'backgroundColor','yellow');
    this.imgSrc = 'assets/heart.jpg';
   }

   @HostListener("mouseleave")
   m2(){
    this.renderer.setStyle
    (this.el.nativeElement,'backgroundColor','white');
    this.imgSrc = `assets/${this.name}.jpg`;
   }
}
