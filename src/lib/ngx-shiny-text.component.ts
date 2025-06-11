import {CommonModule, isPlatformBrowser} from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  signal,
  ViewChild
} from "@angular/core";

@Component({
  selector: "om-shiny-text",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-shiny-text.component.html",
  styleUrl: "./ngx-shiny-text.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxShinyTextComponent implements AfterViewInit, OnDestroy {
  @ViewChild("OmShinyTextWrapper") shinyTextRef!: ElementRef<HTMLElement>;

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

  isInView = signal(false);
  private intersectionObserver?: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) {
  }

  ngAfterViewInit(): void {
    if (!this.text) {
      throw new Error("om-shiny-text: no text was given to the component!");
    }

    if (isPlatformBrowser(this.platformId)) {
      this.intersectionObserver = new IntersectionObserver(([entry]) => {
        this.isInView.set(entry.isIntersecting);
      });
      this.intersectionObserver.observe(this.shinyTextRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}
