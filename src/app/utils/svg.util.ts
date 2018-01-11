import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl('assets/svg/accessibility.svg'));
  ir.addSvgIcon('adb', ds.bypassSecurityTrustResourceUrl('assets/svg/adb.svg'));
}
