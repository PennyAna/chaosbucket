import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ResourceComponent } from './resource/resource.component';
import { HeaderComponent } from './header/header.component';
import { ResourceListComponent } from './resource/resource-list/resource-list.component';
import { ResourceDetailComponent } from './resource/resource-detail/resource-detail.component';
import { ResourceItemComponent } from './resource/resource-item/resource-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ResourceComponent,
    HeaderComponent,
    ResourceListComponent,
    ResourceDetailComponent,
    ResourceItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
