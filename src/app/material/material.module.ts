import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatOptionModule,
  MatSelectModule,
} from '@angular/material';
const MaterialComponents = [
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatOptionModule,
  MatSelectModule,
]
@NgModule({
  imports: [
    MaterialComponents,
    BrowserAnimationsModule
  ],
  exports: [
    MaterialComponents,
    BrowserAnimationsModule
  ],
})
export class MaterialModule { }
