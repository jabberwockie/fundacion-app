import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CarouselComponent} from './home/carousel/carousel.component';
import {CardsComponent} from './home/cards/cards.component';
import {CardComponent} from './home/card/card.component';
import {AccordionComponent} from './home/accordion/accordion.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {SobreNosotrosComponent} from './quienes-somos/sobre-nosotros/sobre-nosotros.component';
import {MisionComponent} from './quienes-somos/mision/mision.component';
import {VisionComponent} from './quienes-somos/vision/vision.component';
import {QuienesSomosComponent} from './quienes-somos/quienes-somos.component';
import {NuestroProyectoComponent} from './nuestro-proyecto/nuestro-proyecto.component';
import {ContactoComponent} from './contacto/contacto.component';
import {NoticiaComponent} from './noticia/noticia.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NoticiaService} from './noticia/noticia.service';
import {PersonalService} from './quienes-somos/sobre-nosotros/personal.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '/', component: HomeComponent},
  {path: 'sobre-nosotros', component: SobreNosotrosComponent},
  {path: 'mision', component: MisionComponent},
  {path: 'vision', component: VisionComponent},
  {path: 'nuestro-proyecto', component: NuestroProyectoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'noticia/:id', component: NoticiaComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CardsComponent,
    CardComponent,
    AccordionComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    SobreNosotrosComponent,
    MisionComponent,
    VisionComponent,
    QuienesSomosComponent,
    NuestroProyectoComponent,
    ContactoComponent,
    NoticiaComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NoticiaService, PersonalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
