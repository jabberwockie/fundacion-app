"use strict";var __decorate=this&&this.__decorate||function(e,o,r,n){var t,a=arguments.length,p=a<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,o,r,n);else for(var c=e.length-1;0<=c;c--)(t=e[c])&&(p=(a<3?t(p):3<a?t(o,r,p):t(o,r))||p);return 3<a&&p&&Object.defineProperty(o,r,p),p};Object.defineProperty(exports,"__esModule",{value:!0});var platform_browser_1=require("@angular/platform-browser"),core_1=require("@angular/core"),app_component_1=require("./app.component"),navbar_component_1=require("./navbar/navbar.component"),angular_font_awesome_1=require("angular-font-awesome"),carousel_component_1=require("./carousel/carousel.component"),AppModule=function(){function e(){}return e=__decorate([core_1.NgModule({declarations:[app_component_1.AppComponent,navbar_component_1.NavbarComponent,carousel_component_1.CarouselComponent],imports:[platform_browser_1.BrowserModule,angular_font_awesome_1.AngularFontAwesomeModule],providers:[],bootstrap:[app_component_1.AppComponent]})],e)}();exports.AppModule=AppModule;