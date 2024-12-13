import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { GlobalNavComponent, NavigationNode } from '@finastra/angular-components/global-nav';

@Component({
  selector: 'ffdc-global-nav-demo',
  templateUrl: './global-nav-demo.component.html',
  styleUrls: ['./global-nav-demo.component.scss'],
  host: {
    class: 'ffdc-global-nav-demo'
  },
  imports: [GlobalNavComponent, MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule]
})
export class GlobalNavDemoComponent {
  appName = 'Global Nav Demo';
  shortName = 'gnd';
  headerTitle = 'Applications';

  demoAppList: NavigationNode[] = [
    {
      path: 'global-nav',
      title: 'app1',
      tooltip: 'app1',
      icon: 'dashboard'
    },
    {
      path: 'app2.com',
      title: 'app2',
      tooltip: 'app2',
      icon: 'dashboard'
    },
    {
      path: 'app3.com',
      title: 'app3',
      tooltip: 'app3',
      icon: 'dashboard'
    },
    {
      path: 'app4.com',
      title: 'app4',
      tooltip: 'app4',
      icon: 'dashboard'
    }
  ];

  nodeChosen(node: any) {
    console.log(node);
    // this.router.navigate([node.path]);
  }

  brandAction(event: any) {
    console.log(event);
  }

  logout() {
    console.log('logout');
  }
}
