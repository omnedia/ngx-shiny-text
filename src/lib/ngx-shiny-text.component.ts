import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "om-shiny-text",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-shiny-text.component.html",
  styleUrl: "./ngx-shiny-text.component.scss",
})
export class NgxShinyTextComponent implements OnInit {
  @Input("styleClass")
  styleClass?: string;

  @Input("shimmerColor")
  set shimmerColor(color: string) {
    this.style["--shimmer-color"] = color;
  }

  @Input("textColor")
  set textColor(color: string) {
    this.style["--text-color"] = color;
  }

  @Input("shimmerWidth")
  set shimmerWidth(width: string) {
    this.style["--shimmer-width"] = width;
  }

  @Input("text")
  text!: string;

  style: any = {};

  ngOnInit(): void {
    if (!this.text) {
      throw new Error("om-shiny-text: no text was given to the component!");
    }
  }
}
