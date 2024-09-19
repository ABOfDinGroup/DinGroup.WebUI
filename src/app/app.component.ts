import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFooterComponent } from "./main-components/main-footer/main-footer.component";
import { MainHeaderComponent } from "./main-components/main-header/main-header.component";
import { MainSidebarComponent } from "./main-components/main-sidebar/main-sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainFooterComponent, MainHeaderComponent, MainSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DinGroup.WebUI';
}