import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChangeLog, UXGChangelogComponent } from '@finastra/angular-components/changelog';

@Component({
  selector: 'ffdc-changelog-demo',
  templateUrl: './changelog-demo.component.html',
  styleUrls: ['./changelog-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [UXGChangelogComponent]
})
export class ChangelogDemoComponent implements OnInit {
  changelog!: ChangeLog;

  constructor() {}

  ngOnInit() {
    this.changelog = [
      {
        version: '2.0.0',
        date: '2020-07-10',
        categories: [
          { label: 'UX', link: 'https://youtube.com' },
          { label: 'Documentation', link: 'https://youtube.com' }
        ],
        changes: [
          {
            category: 'UX',
            description:
              '<span><a href="https://en.wikipedia.org/wiki/Lorem_ipsum" target=”_blank”>Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>',
            type: 'New'
          },
          {
            category: 'UX',
            description:
              '<span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>',
            type: 'Bugfix'
          },
          {
            category: 'Documentation',
            description:
              '<span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>',
            type: 'Deprecated'
          }
        ]
      },
      {
        version: '2.0.0',
        date: '2020-07-10',
        categories: [
          { label: 'UX', link: 'https://youtube.com' },
          { label: 'Documentation', link: 'https://youtube.com' }
        ],
        changes: [
          {
            category: 'UX',
            description: '<span>Excepteur sint occaecat cupidatat non proident</span>',
            type: 'Update'
          },
          {
            category: 'Documentation',
            description: '<span>sunt in culpa qui officia deserunt mollit anim id est laborum. </span>',
            type: 'New'
          }
        ]
      },
      {
        version: '1.9.0',
        date: '2020-06-12',
        categories: [{ label: 'Documentation' }],
        changes: [
          {
            category: 'Documentation',
            description:
              '<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>',
            type: 'Update'
          },
          {
            category: 'Documentation',
            description:
              '<span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>',
            type: 'Bugfix'
          }
        ]
      }
    ];
  }
}
