import { NgModule } from '@angular/core';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { MapComponent } from './map.component';

@NgModule({
  imports: [ NativeScriptModule, NativeScriptFormsModule ],
  declarations: [ MapComponent ],
  exports: [ MapComponent ],
})
export class MapModule { }