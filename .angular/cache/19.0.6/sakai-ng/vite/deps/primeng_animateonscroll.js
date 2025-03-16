import {
  BaseComponent
} from "./chunk-YGR7AJKN.js";
import "./chunk-V2CD6TSX.js";
import "./chunk-E2JFPHBB.js";
import {
  addClass,
  removeClass
} from "./chunk-KAO4CBML.js";
import {
  isPlatformBrowser
} from "./chunk-UMAXZX7C.js";
import {
  Directive,
  Input,
  NgModule,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory
} from "./chunk-SAS3ZIMR.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import "./chunk-CWYBPNCF.js";
import "./chunk-NJ25EVEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-animateonscroll.mjs
var AnimateOnScroll = class _AnimateOnScroll extends BaseComponent {
  /**
   * Selector to define the CSS class for enter animation.
   * @group Props
   */
  enterClass;
  /**
   * Selector to define the CSS class for leave animation.
   * @group Props
   */
  leaveClass;
  /**
   * Specifies the root option of the IntersectionObserver API.
   * @group Props
   */
  root;
  /**
   * Specifies the rootMargin option of the IntersectionObserver API.
   * @group Props
   */
  rootMargin;
  /**
   * Specifies the threshold option of the IntersectionObserver API
   * @group Props
   */
  threshold;
  /**
   * Whether the scroll event listener should be removed after initial run.
   * @group Props
   */
  once = true;
  observer;
  resetObserver;
  isObserverActive = false;
  animationState;
  animationEndListener;
  ngOnInit() {
    super.ngOnInit();
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setStyle(this.el.nativeElement, "opacity", this.enterClass ? "0" : "");
    }
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (isPlatformBrowser(this.platformId)) {
      this.bindIntersectionObserver();
    }
  }
  get options() {
    return {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };
  }
  bindIntersectionObserver() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (this.isObserverActive) {
        if (entry.boundingClientRect.top > 0) {
          entry.isIntersecting ? this.enter() : this.leave();
        }
      } else if (entry.isIntersecting) {
        this.enter();
      }
      this.isObserverActive = true;
    }, this.options);
    setTimeout(() => this.observer.observe(this.el.nativeElement), 0);
    this.resetObserver = new IntersectionObserver(([entry]) => {
      if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
        this.el.nativeElement.style.opacity = this.enterClass ? "0" : "";
        removeClass(this.el.nativeElement, [this.enterClass, this.leaveClass]);
        this.resetObserver.unobserve(this.el.nativeElement);
      }
      this.animationState = void 0;
    }, __spreadProps(__spreadValues({}, this.options), {
      threshold: 0
    }));
  }
  enter() {
    if (this.animationState !== "enter" && this.enterClass) {
      this.el.nativeElement.style.opacity = "";
      removeClass(this.el.nativeElement, this.leaveClass);
      addClass(this.el.nativeElement, this.enterClass);
      this.once && this.unbindIntersectionObserver();
      this.bindAnimationEvents();
      this.animationState = "enter";
    }
  }
  leave() {
    if (this.animationState !== "leave" && this.leaveClass) {
      this.el.nativeElement.style.opacity = this.enterClass ? "0" : "";
      removeClass(this.el.nativeElement, this.enterClass);
      addClass(this.el.nativeElement, this.leaveClass);
      this.bindAnimationEvents();
      this.animationState = "leave";
    }
  }
  bindAnimationEvents() {
    if (!this.animationEndListener) {
      this.animationEndListener = this.renderer.listen(this.el.nativeElement, "animationend", () => {
        removeClass(this.el.nativeElement, [this.enterClass, this.leaveClass]);
        !this.once && this.resetObserver.observe(this.el.nativeElement);
        this.unbindAnimationEvents();
      });
    }
  }
  unbindAnimationEvents() {
    if (this.animationEndListener) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  unbindIntersectionObserver() {
    this.observer?.unobserve(this.el.nativeElement);
    this.resetObserver?.unobserve(this.el.nativeElement);
    this.isObserverActive = false;
  }
  ngOnDestroy() {
    this.unbindAnimationEvents();
    this.unbindIntersectionObserver();
    super.ngOnDestroy();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAnimateOnScroll_BaseFactory;
    return function AnimateOnScroll_Factory(__ngFactoryType__) {
      return (ɵAnimateOnScroll_BaseFactory || (ɵAnimateOnScroll_BaseFactory = ɵɵgetInheritedFactory(_AnimateOnScroll)))(__ngFactoryType__ || _AnimateOnScroll);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _AnimateOnScroll,
    selectors: [["", "pAnimateOnScroll", ""]],
    hostVars: 2,
    hostBindings: function AnimateOnScroll_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-animateonscroll", true);
      }
    },
    inputs: {
      enterClass: "enterClass",
      leaveClass: "leaveClass",
      root: "root",
      rootMargin: "rootMargin",
      threshold: [2, "threshold", "threshold", numberAttribute],
      once: [2, "once", "once", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateOnScroll, [{
    type: Directive,
    args: [{
      selector: "[pAnimateOnScroll]",
      standalone: true,
      host: {
        "[class.p-animateonscroll]": "true"
      }
    }]
  }], null, {
    enterClass: [{
      type: Input
    }],
    leaveClass: [{
      type: Input
    }],
    root: [{
      type: Input
    }],
    rootMargin: [{
      type: Input
    }],
    threshold: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    once: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var AnimateOnScrollModule = class _AnimateOnScrollModule {
  static ɵfac = function AnimateOnScrollModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimateOnScrollModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AnimateOnScrollModule,
    imports: [AnimateOnScroll],
    exports: [AnimateOnScroll]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateOnScrollModule, [{
    type: NgModule,
    args: [{
      imports: [AnimateOnScroll],
      exports: [AnimateOnScroll]
    }]
  }], null, null);
})();
export {
  AnimateOnScroll,
  AnimateOnScrollModule
};
//# sourceMappingURL=primeng_animateonscroll.js.map
