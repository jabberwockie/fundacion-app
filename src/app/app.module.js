"use strict";var __decorate=this&&this.__decorate||function(o,e,n,r){var t,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,e,n,r);else for(var p=o.length-1;0<=p;p--)(t=o[p])&&(c=(a<3?t(c):3<a?t(e,n,c):t(e,n))||c);return 3<a&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(exports,"__esModule",{value:!0});var platform_browser_1=require("@angular/platform-browser"),core_1=require("@angular/core"),ng_bootstrap_1=require("@ng-bootstrap/ng-bootstrap"),angular_font_awesome_1=require("angular-font-awesome"),app_component_1=require("./app.component"),navbar_component_1=require("./navbar/navbar.component"),carousel_component_1=require("./carousel/carousel.component"),cards_component_1=require("./cards/cards.component"),card_component_1=require("./card/card.component"),accordion_component_1=require("./accordion/accordion.component"),nav_component_1=require("./nav/nav.component"),AppModule=function(){function o(){}return o=__decorate([core_1.NgModule({declarations:[app_component_1.AppComponent,navbar_component_1.NavbarComponent,carousel_component_1.CarouselComponent,cards_component_1.CardsComponent,card_component_1.CardComponent,accordion_component_1.AccordionComponent,nav_component_1.NavComponent],imports:[platform_browser_1.BrowserModule,angular_font_awesome_1.AngularFontAwesomeModule,ng_bootstrap_1.NgbModule.forRoot()],providers:[],bootstrap:[app_component_1.AppComponent]})],o)}();exports.AppModule=AppModule;