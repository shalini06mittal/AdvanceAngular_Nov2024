import { AnimationBuilder } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class CustomDirective {//implements OnInit{


  @Input() 
  hover: string | null = null;

  @HostBinding('style.backgroundColor') 
  backgroundColor: string ='';

  @HostBinding('style.transition') 
  trans: string ='';

  private tooltipElement: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'tooltip1');
    this.trans = '1s ease-in-out';
  }
  @HostListener('mouseenter') 
  onMouseEnter() {
    this.tooltipElement.textContent = this.hover;
    this.backgroundColor = 'lightgreen';
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
  }
  @HostListener('mouseleave') 
  onMouseLeave() {
    this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
    this.backgroundColor = 'white';
  }

  }
