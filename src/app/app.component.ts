import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionOneComponent } from "./components/section-one/section-one.component";
import { SectionTwoComponent } from "./components/section-two/section-two.component";
import { SectionThreeComponent } from "./components/section-three/section-three.component";
import { SectionFourComponent } from "./components/section-four/section-four.component";
import { SectionFiveComponent } from "./components/section-five/section-five.component";
import { SectionSixComponent } from "./components/section-six/section-six.component";
import { SectionSevenComponent } from "./components/section-seven/section-seven.component";
import { SideLinksComponent } from "./components/side-links/side-links.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, SectionFiveComponent, SectionSixComponent, SectionSevenComponent, SideLinksComponent]
})
export class AppComponent {
  title = 'resume_website';
}
