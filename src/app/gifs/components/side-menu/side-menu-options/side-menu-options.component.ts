import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuOptions{
  icon:string,
  label:string,
  router:string,
  subLabel:string
}
@Component({
  selector: 'app-side-menu-options',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {

  menuOptions:MenuOptions[]=[
    {
      icon:'fa-solid fa-chart-line',
      label:'Trending',
      router:'/dashboard/trending',
      subLabel:'Gif Populares',
    },
    {
      icon:'fa-solid fa-magnifying-glass',
      label:'Buscador',
      router:'/dashboard/search',
      subLabel:'Buscador Gif',
    }
  ]

}
