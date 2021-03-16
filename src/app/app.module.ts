import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NavbarComponent } from './navbar/navbar.component';
import { NgZorroAntdModule } from './ng-zorro.module';


registerLocaleData(en);
import { from } from 'rxjs';
import { BannerTitleComponent } from './banner-title/banner-title.component';
import { BannerFeatureComponent } from './banner-feature/banner-feature.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { CartStatusComponent } from './cart-status/cart-status.component';
import { NofoundComponent } from './nofound/nofound.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerTitleComponent,
    BannerFeatureComponent,
    FilterComponent,
    PaginationComponent,
    FooterComponent,
    CartStatusComponent,
    NofoundComponent,
    AllProductsComponent,
    SingleProductComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }


