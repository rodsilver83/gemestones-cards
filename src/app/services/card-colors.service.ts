import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root',
})
export class CardColorsService {
	public set1 = '#955336';
	public set2 = '#aae0f9';
	public set3 = '#d73995';
	public set4 = '#f7931e';
	public set5 = '#d32f35';
	public set6 = '#fff06c';
	public set7 = '#30b45b';
	public set8 = '#0072bb';
	public set9 = '#cde7d0';
	public set10 = '#231f20';
	public white = '#fafafa';
	public black = '#333333';

	constructor(private sanitizer: DomSanitizer) {}

	public getColor(set: number): string {
		return this[`set${set}`];
	}

	public getRainbowLinearGradient(direction: string) {
		return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(
      to ${direction},
      ${this.set1} 0%,
      ${this.set1} 10%,
      ${this.set2} 10%,
      ${this.set2} 20%,
      ${this.set3} 20%,
      ${this.set3} 30%,
      ${this.set4} 30%,
      ${this.set4} 40%,
      ${this.set5} 40%,
      ${this.set5} 50%,
      ${this.set6} 50%,
      ${this.set6} 60%,
      ${this.set7} 60%,
      ${this.set7} 70%,
      ${this.set8} 70%,
      ${this.set8} 80%,
      ${this.set9} 80%,
      ${this.set9} 90%,
      ${this.set10} 90%,
      ${this.set10} 100%
    )`);
	}
}
