import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  const imgDir = 'assets/img';
  const sidebarDir = `${imgDir}/sidebar/`;
  const dayDir = `${imgDir}/days/`;
  const days = 31;
  const avatarDir = `${imgDir}/avatar/`;
  ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}avatars.svg`));
  ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl('assets/svg/accessibility.svg'));
  ir.addSvgIcon('adb', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}adb.svg`));
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}day.svg`));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}week.svg`));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}month.svg`));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}project.svg`));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}projects.svg`));
  for (let i = 1; i <= days; i++) {
    ir.addSvgIcon(`day${i}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}day${i}.svg`));
  }
}
