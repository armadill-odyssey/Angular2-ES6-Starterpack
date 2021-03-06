'use strict';

import { Component, OnInit, Inject } from '@angular/core';

import { SocialService } from './social.service';

@Component({
  selector: 'social-blocks',
  providers: [SocialService],
  template: `
    <div *ngFor="let social of socials" class="social-block">
      <div title="{{social.name}}">
        <a href="{{social.link}}" [style.color]="social.color" target="_blank">
          {{social.icon}}
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./social-blocks.component.less'],
})
class SocialBlocksComponent implements OnInit {
  constructor (@Inject(SocialService) SocialService) {
    this.SocialService = SocialService;
  }
  ngOnInit () {
    this.socials = this.SocialService.getSocials();
  }
}

export { SocialBlocksComponent }
