import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenu } from 'src/app/shared/services/menu.interface';
import { MenuService } from 'src/app/shared/services/menu.service';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'adra-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onExpand: EventEmitter<boolean> = new EventEmitter<boolean>();
  listMenu:IMenu[] = [];
  expanded = true;
  constructor(private menuService: MenuService, public authService: AuthService) {
    this.listMenu = this.menuService.getListMenu();
   }

  ngOnInit(): void {
  }
  sentExpand() {
    this.expanded = !this.expanded;
    this.onExpand.emit(this.expanded);
  }

}
