import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class PraqIconsService {
  private registry = new Map<string, string>();

  public registerIcons(icons: any[]): void {
    icons.forEach((icon: any) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the Icon with the name ${iconName}, did you add it to the Icon registry?`
      );
    }
    return this.registry.get(iconName);
  }
}
