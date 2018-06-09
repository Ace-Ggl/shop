import { Component, Inject, OnInit, Optional, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { LocalStorageService, ConfigOptionsService, GeneratorService, ConstantsToken } from '../../shared';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
    private randomCharacters: string;

    @ViewChild('randomTag')
    randomTag: ElementRef;

    constructor(private renderer: Renderer2,
                private localStorageService: LocalStorageService<string>,
                private configOptionsService: ConfigOptionsService,
                @Inject(ConstantsToken) private constants: any,
                @Optional() private generatorService: GeneratorService) {}

    ngOnInit() {
      this.randomCharacters = this.generatorService ? this.generatorService.getRandomChars() : 'No Random Characters';
    }

    onClick() {
      this.renderer.setStyle(this.randomTag.nativeElement, 'font-weight', 'bold');
    }
}
