import { Component } from "@angular/core";
import { DataService } from "./services/data.service";
import { ProductsService } from "./services/products.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    public infoPaginaService: DataService,
    public products: ProductsService
  ) {}
}
