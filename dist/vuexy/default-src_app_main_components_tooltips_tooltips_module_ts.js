"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["default-src_app_main_components_tooltips_tooltips_module_ts"],{

/***/ 94571:
/*!****************************************************************!*\
  !*** ./src/app/main/components/tooltips/tooltips.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipsComponent": () => (/* binding */ TooltipsComponent)
/* harmony export */ });
/* harmony import */ var app_main_components_tooltips_tooltips_snippetcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/components/tooltips/tooltips.snippetcode */ 56234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);
/* harmony import */ var _core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.component */ 3090);







const _c0 = ["OpenEvent"];
const _c1 = ["OpenEventAfter"];
const _c2 = ["CloseEvent"];
const _c3 = ["CloseEventAfter"];
class TooltipsComponent {
    constructor() {
        // snippet code variables
        this._snippetCodeTooltipPositions = app_main_components_tooltips_tooltips_snippetcode__WEBPACK_IMPORTED_MODULE_0__.snippetCodeTooltipPositions;
        this._snippetCodeTooltipTriggers = app_main_components_tooltips_tooltips_snippetcode__WEBPACK_IMPORTED_MODULE_0__.snippetCodeTooltipTriggers;
        this._snippetCodeTooltipOptions = app_main_components_tooltips_tooltips_snippetcode__WEBPACK_IMPORTED_MODULE_0__.snippetCodeTooltipOptions;
        this._snippetCodeTooltipMethods = app_main_components_tooltips_tooltips_snippetcode__WEBPACK_IMPORTED_MODULE_0__.snippetCodeTooltipMethods;
        this._snippetCodeTooltipEvents = app_main_components_tooltips_tooltips_snippetcode__WEBPACK_IMPORTED_MODULE_0__.snippetCodeTooltipEvents;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    openEvent() {
        alert('Open event!');
        this.OpenEvent.open();
    }
    openEventAfter() {
        setTimeout(() => {
            alert('Opened After event!');
        }, 300);
        this.OpenEventAfter.open();
    }
    closeEvent() {
        alert('Close event!');
        this.CloseEvent.close();
    }
    closeEventAfter() {
        setTimeout(() => {
            alert('Closed After event!');
        }, 300);
        this.CloseEventAfter.close();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'tooltips',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Components',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'tooltips',
                        isLink: false
                    }
                ]
            }
        };
    }
}
TooltipsComponent.ɵfac = function TooltipsComponent_Factory(t) { return new (t || TooltipsComponent)(); };
TooltipsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TooltipsComponent, selectors: [["app-tooltips"]], viewQuery: function TooltipsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.OpenEvent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.OpenEventAfter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.CloseEvent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.CloseEventAfter = _t.first);
    } }, decls: 98, vars: 14, consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "tooltip-positions"], [1, "row"], [1, "col-12"], [3, "snippetCode"], [1, "card-title"], [1, "card-body"], [1, "card-text"], ["type", "button", "rippleEffect", "", "placement", "top", "ngbTooltip", "Tooltip on top", 1, "btn", "btn-outline-primary", "mr-2"], ["type", "button", "rippleEffect", "", "placement", "right", "ngbTooltip", "Tooltip on right", "container", "body", 1, "btn", "btn-outline-primary", "mr-2"], ["type", "button", "rippleEffect", "", "placement", "bottom", "ngbTooltip", "Tooltip on bottom", 1, "btn", "btn-outline-primary", "mr-2"], ["type", "button", "rippleEffect", "", "placement", "left", "ngbTooltip", "Tooltip on left", "container", "body", 1, "btn", "btn-outline-primary"], ["id", "tooltip-triggers"], [1, "card-text", "mb-0"], [1, "demo-inline-spacing"], ["type", "button", "rippleEffect", "", "ngbTooltip", "Click Triggered", "triggers", "click:blur", 1, "btn", "btn-outline-primary"], ["type", "button", "rippleEffect", "", "ngbTooltip", "Hover Triggered", 1, "btn", "btn-outline-primary"], ["type", "button", "rippleEffect", "", "ngbTooltip", "Manual Triggered", "triggers", "manual", 1, "btn", "btn-outline-primary", "manual", 3, "autoClose", "click"], ["manualOpen", "ngbTooltip"], ["type", "button", "rippleEffect", "", "ngbTooltip", "Manual Triggered", 1, "btn", "btn-outline-primary", 3, "click"], ["manualClose", "ngbTooltip"], ["id", "tooltip-options"], ["type", "button", "rippleEffect", "", "tooltipClass", "text-uppercase fadeInAnimation", "ngbTooltip", "Text in Uppercase", 1, "btn", "btn-outline-primary"], ["type", "button", "rippleEffect", "", "ngbTooltip", "You see, I show up after 300ms and disappear after 500ms!", 1, "btn", "btn-outline-primary", "delay", 3, "openDelay", "closeDelay"], ["id", "tooltip-methods"], ["type", "button", "rippleEffect", "", "ngbTooltip", "Show Method Tooltip", "triggers", "manual", 1, "btn", "btn-outline-primary", 3, "click"], ["methodOpen", "ngbTooltip"], [1, "'ml-1'", 3, "data-feather"], ["type", "button", "rippleEffect", "", "ngbTooltip", "Hide Method Tooltip", 1, "btn", "btn-outline-primary", 3, "click"], ["methodClose", "ngbTooltip"], ["type", "button", "rippleEffect", "", "triggers", "manual", "ngbTooltip", "Toggle Method Tooltip", 1, "btn", "btn-outline-primary", 3, "click"], ["methodToggle", "ngbTooltip"], [1, "btn-group"], ["type", "button", "rippleEffect", "", "triggers", "click", "ngbTooltip", "Dispose Method Tooltip", 1, "btn", "btn-outline-primary", 3, "click"], ["methodIsOpen", "ngbTooltip"], ["type", "button", "rippleEffect", "", 1, "btn", "btn-outline-primary"], [3, "data-feather"], ["id", "tooltip-events"], ["type", "button", "rippleEffect", "", "ngbTooltip", "Tooltip Open Event", "triggers", "manual", 1, "btn", "btn-outline-primary", 3, "click"], ["OpenEvent", "ngbTooltip"], ["OpenEventAfter", "ngbTooltip"], ["type", "button", "rippleEffect", "", "ngbTooltip", "Tooltip Show Event", 1, "btn", "btn-outline-primary", 3, "click"], ["CloseEvent", "ngbTooltip"], ["CloseEventAfter", "ngbTooltip"]], template: function TooltipsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-content-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "core-card-snippet", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Tooltip Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8)(10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Four options are available: top, right, bottom, and left aligned.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Tooltip on top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Tooltip on right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Tooltip on bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Tooltip on left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "section", 14)(21, "div", 4)(22, "div", 5)(23, "core-card-snippet", 6)(24, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Tooltip Triggers");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 8)(27, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Tooltip is triggered using - click | hover | manual options.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 16)(30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " On Click Trigger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " On Hover Trigger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "button", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TooltipsComponent_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.open()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " On Manual Trigger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TooltipsComponent_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](38); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r1.close()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Click me to close a tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "section", 23)(41, "div", 4)(42, "div", 5)(43, "core-card-snippet", 6)(44, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Tooltip Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 8)(47, "div", 16)(48, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, " Click to toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, " Hover 300ms here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "section", 26)(53, "div", 4)(54, "div", 5)(55, "core-card-snippet", 6)(56, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Tooltip Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 8)(59, "div", 16)(60, "button", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TooltipsComponent_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](61); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r2.open()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, " Show Method ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "button", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TooltipsComponent_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](65); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r3.close()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, " Hide Method ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "button", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TooltipsComponent_Template_button_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](69); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r4.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " Toggle Method ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 34)(73, "button", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TooltipsComponent_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](74); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r5.isOpen()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "section", 39)(79, "div", 4)(80, "div", 5)(81, "core-card-snippet", 6)(82, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Tooltip Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 8)(85, "div", 16)(86, "button", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TooltipsComponent_Template_button_click_86_listener() { return ctx.openEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, " Open Event Tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "button", 40, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TooltipsComponent_Template_button_click_89_listener() { return ctx.openEventAfter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, " Open Event Tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "button", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TooltipsComponent_Template_button_click_92_listener() { return ctx.closeEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, " Close Event Tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "button", 43, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TooltipsComponent_Template_button_click_95_listener() { return ctx.closeEventAfter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, " Closed Event Tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("snippetCode", ctx._snippetCodeTooltipPositions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("snippetCode", ctx._snippetCodeTooltipTriggers);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("autoClose", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("snippetCode", ctx._snippetCodeTooltipOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("openDelay", 300)("closeDelay", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("snippetCode", ctx._snippetCodeTooltipMethods);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "play-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "play-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "play-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Toolip is : ", _r5.isOpen(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "play-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("snippetCode", ctx._snippetCodeTooltipEvents);
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective, app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_3__.ContentHeaderComponent, _core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_4__.CoreCardSnippetComponent], encapsulation: 2 });


/***/ }),

/***/ 6064:
/*!*************************************************************!*\
  !*** ./src/app/main/components/tooltips/tooltips.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipsModule": () => (/* binding */ TooltipsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.module */ 76826);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 50619);
/* harmony import */ var app_main_components_tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/components/tooltips/tooltips.component */ 94571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [
    {
        path: 'tooltips',
        component: app_main_components_tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_3__.TooltipsComponent,
        data: { animation: 'tooltips' }
    }
];
class TooltipsModule {
}
TooltipsModule.ɵfac = function TooltipsModule_Factory(t) { return new (t || TooltipsModule)(); };
TooltipsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TooltipsModule });
TooltipsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule, _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__.CardSnippetModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TooltipsModule, { declarations: [app_main_components_tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_3__.TooltipsComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule, _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__.CardSnippetModule] }); })();


/***/ }),

/***/ 56234:
/*!******************************************************************!*\
  !*** ./src/app/main/components/tooltips/tooltips.snippetcode.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "snippetCodeTooltipEvents": () => (/* binding */ snippetCodeTooltipEvents),
/* harmony export */   "snippetCodeTooltipMethods": () => (/* binding */ snippetCodeTooltipMethods),
/* harmony export */   "snippetCodeTooltipOptions": () => (/* binding */ snippetCodeTooltipOptions),
/* harmony export */   "snippetCodeTooltipPositions": () => (/* binding */ snippetCodeTooltipPositions),
/* harmony export */   "snippetCodeTooltipTriggers": () => (/* binding */ snippetCodeTooltipTriggers)
/* harmony export */ });
const snippetCodeTooltipPositions = {
    html: `
  <button type="button" rippleEffect class="btn btn-outline-primary"  placement="top"
    ngbTooltip="Tooltip on top">
    Tooltip on top
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary"  placement="right" container="body"
    ngbTooltip="Tooltip on right">
    Tooltip on right
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary"  placement="bottom"
    ngbTooltip="Tooltip on bottom">
    Tooltip on bottom
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary"  placement="left" container="body"
    ngbTooltip="Tooltip on left">
    Tooltip on left
  </button>
  `
};
const snippetCodeTooltipTriggers = {
    html: `
  <button type="button" rippleEffect class="btn btn-outline-primary"
    ngbTooltip="Click Triggered" triggers="click:blur" >
    On Click Trigger
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary"
    ngbTooltip="Hover Triggered" >
    On Hover Trigger
  </button>

    ngbTooltip="Manual Triggered" [autoClose]="true" triggers="manual" #manualOpen="ngbTooltip" (click)="manualOpen.open()" >
    On Manual Trigger
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary" ngbTooltip="Manual Triggered" #manualClose="ngbTooltip" (click)="manualClose.close()" >
    Click me to close a tooltip
  </button>
  `
};
const snippetCodeTooltipOptions = {
    html: `
  <button type="button" rippleEffect class="btn btn-outline-primary" tooltipClass="text-uppercase fadeInAnimation" ngbTooltip="Text in Uppercase">
    Click to toggle
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary delay" ngbTooltip="You see, I show up after 300ms and disappear after 500ms!" [openDelay]="300" [closeDelay]="500" >
  Hover 300ms here
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary delay" ngbTooltip="Disabled animation!">
  CLick to toggle
  </button>
  `
};
const snippetCodeTooltipMethods = {
    html: `
    <button type="button" rippleEffect class="btn btn-outline-primary"
      ngbTooltip="Show Method Tooltip" triggers="manual" #methodOpen="ngbTooltip" (click)="methodOpen.open()" >
      Show Method <span [data-feather]="'play-circle'" class="'ml-1'"></span>
    </button>

    <button type="button" rippleEffect class="btn btn-outline-primary" #methodClose="ngbTooltip" (click)="methodClose.close()"
      ngbTooltip="Hide Method Tooltip" >
      Hide Method <span [data-feather]="'play-circle'" class="'ml-1'"></span>
    </button>

    <button type="button" rippleEffect class="btn btn-outline-primary" triggers="manual" #methodToggle="ngbTooltip" (click)="methodToggle.toggle()"
      ngbTooltip="Toggle Method Tooltip" >
      Toggle Method <span [data-feather]="'play-circle'" class="'ml-1'"></span>
    </button>

    <div class="btn-group">
      <button type="button" rippleEffect class="btn btn-outline-primary" triggers="click" #methodIsOpen="ngbTooltip" (click)="methodIsOpen.isOpen()"
        ngbTooltip="Dispose Method Tooltip" >
        Toolip is : {{ methodIsOpen.isOpen() }}
      </button>
      <button type="button" rippleEffect class="btn btn-outline-primary">
        <span [data-feather]="'play-circle'"></span>
      </button>
    </div>
  `
};
const snippetCodeTooltipEvents = {
    html: `
  <button type="button" rippleEffect class="btn btn-outline-primary" ngbTooltip="Tooltip Open Event" triggers="manual" #OpenEvent="ngbTooltip" (click)="openEvent()" >
    Open Event Tooltip
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary" ngbTooltip="Tooltip Open Event" triggers="manual" #OpenEventAfter="ngbTooltip" (click)="openEventAfter()" >
    Open Event Tooltip
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary" ngbTooltip="Tooltip Show Event" #CloseEvent="ngbTooltip" (click)="closeEvent()" >
    Close Event Tooltip
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary"  ngbTooltip="Tooltip Show Event" #CloseEventAfter="ngbTooltip" (click)="closeEventAfter()" >
    Closed Event Tooltip
  </button>
  `,
    ts: `
  @ViewChild('OpenEvent') OpenEvent;
  @ViewChild('OpenEventAfter') OpenEventAfter;
  @ViewChild('CloseEvent') CloseEvent;
  @ViewChild('CloseEventAfter') CloseEventAfter;

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  openEvent() {
    alert('Open event!');
    this.OpenEvent.open();
  }

  openEventAfter() {
    setTimeout(() => {
      alert('Opened After event!');
    }, 300);
    this.OpenEventAfter.open();
  }

  closeEvent() {
    alert('Close event!');
    this.CloseEvent.close();
  }

  closeEventAfter() {
    setTimeout(() => {
      alert('Closed After event!');
    }, 300);
    this.CloseEventAfter.close();
  }
  `
};


/***/ })

}]);
//# sourceMappingURL=default-src_app_main_components_tooltips_tooltips_module_ts.js.map