import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitcherComponent } from "./components/switcher/switcher.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { AboutComponent } from "./components/about/about.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SwitcherComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'themeforest';
}
