"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["default-src_app_main_tables_datatables_datatables_module_ts"],{

/***/ 12716:
/*!****************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesComponent": () => (/* binding */ DatatablesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var app_main_tables_datatables_i18n_de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/tables/datatables/i18n/de */ 67084);
/* harmony import */ var app_main_tables_datatables_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/tables/datatables/i18n/en */ 12228);
/* harmony import */ var app_main_tables_datatables_i18n_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/tables/datatables/i18n/fr */ 18383);
/* harmony import */ var app_main_tables_datatables_i18n_pt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/tables/datatables/i18n/pt */ 49767);
/* harmony import */ var app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/tables/datatables/datatables.snippetcode */ 29239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/tables/datatables/datatables.service */ 7502);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/translation.service */ 63305);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);
/* harmony import */ var _core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.component */ 3090);
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ctrl/ngx-csv */ 30839);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/pipes/initials.pipe */ 16516);























const _c0 = ["tableRowDetails"];
function DatatablesComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62)(1, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_36_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35); const allRowsSelected_r32 = restoredCtx.allRowsSelected; const selectFn_r33 = restoredCtx.selectFn; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](selectFn_r33(!allRowsSelected_r32)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allRowsSelected_r32 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", allRowsSelected_r32);
} }
function DatatablesComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62)(1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_37_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const onCheckboxChangeFn_r39 = restoredCtx.onCheckboxChangeFn; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](onCheckboxChangeFn_r39($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowIndex_r36 = ctx.rowIndex;
    const isSelected_r38 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "rowChkbxRef", rowIndex_r36, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", isSelected_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("for", "rowChkbxRef", rowIndex_r36, "");
} }
function DatatablesComponent_ng_template_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r42.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0, a1, a2, a3, a4) { return { "bg-light-primary": a0, "bg-light-success": a1, "bg-light-danger": a2, "bg-light-warning": a3, "bg-light-info": a4 }; };
function DatatablesComponent_ng_template_39_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r42 = ctx_r48.row;
    const name_r43 = ctx_r48.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r42.status == "1", row_r42.status == "2", row_r42.status == "3", row_r42.status == "4", row_r42.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r43));
} }
function DatatablesComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_39_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_39_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r42 = ctx.row;
    const name_r43 = ctx.value;
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r42.avatar.length > 0)("ngIfElse", _r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", name_r43, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r42.post, "");
} }
const _c2 = function (a0, a1, a2, a3, a4) { return { "badge-light-primary": a0, "badge-light-success": a1, "badge-light-danger": a2, "badge-light-warning": a3, "badge-light-info": a4 }; };
function DatatablesComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r49 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r49 == "1", status_r49 == "2", status_r49 == "3", status_r49 == "4", status_r49 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r49 == 1 ? "Current" : status_r49 == 2 ? "Professional" : status_r49 == 3 ? "Rejected" : status_r49 == 4 ? "Resigned" : status_r49 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_53_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r52.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_53_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    const row_r52 = ctx_r59.row;
    const value_r51 = ctx_r59.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r52.status == "1", row_r52.status == "2", row_r52.status == "3", row_r52.status == "4", row_r52.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, value_r51));
} }
function DatatablesComponent_ng_template_53_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_53_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r61); const rowIndex_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r60.editingName[rowIndex_r50 + "-full_name"] = true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_53_div_0_div_2_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, DatatablesComponent_ng_template_53_div_0_ng_template_3_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 69)(6, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r52 = ctx_r63.row;
    const value_r51 = ctx_r63.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r52.avatar.length > 0)("ngIfElse", _r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](value_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r52.post, "");
} }
function DatatablesComponent_ng_template_53_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_53_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r66); const rowIndex_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r64.inlineEditingUpdateName($event, "full_name", rowIndex_r50)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", value_r51);
} }
function DatatablesComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, DatatablesComponent_ng_template_53_div_0_Template, 10, 4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_53_input_1_Template, 1, 1, "input", 86);
} if (rf & 2) {
    const rowIndex_r50 = ctx.rowIndex;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r5.editingName[rowIndex_r50 + "-full_name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.editingName[rowIndex_r50 + "-full_name"]);
} }
function DatatablesComponent_ng_template_55_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_55_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r74); const rowIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r73.editingStatus[rowIndex_r68 + "-status"] = true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const value_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, value_r70 == "1", value_r70 == "2", value_r70 == "3", value_r70 == "4", value_r70 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", value_r70 == 1 ? "Current" : value_r70 == 2 ? "Professional" : value_r70 == 3 ? "Rejected" : value_r70 == 4 ? "Resigned" : value_r70 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_55_select_1_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_55_select_1_Template_select_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r78); const rowIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r77.editingStatus[rowIndex_r68 + "-status"] = false)); })("change", function DatatablesComponent_ng_template_55_select_1_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r78); const rowIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r80.inlineEditingUpdateStatus($event, "status", rowIndex_r68)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Resigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Applied");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const value_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", value_r70);
} }
function DatatablesComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, DatatablesComponent_ng_template_55_div_0_Template, 3, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_55_select_1_Template, 11, 1, "select", 90);
} if (rf & 2) {
    const rowIndex_r68 = ctx.rowIndex;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r6.editingStatus[rowIndex_r68 + "-status"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.editingStatus[rowIndex_r68 + "-status"]);
} }
function DatatablesComponent_ng_template_57_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_57_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r89); const rowIndex_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r88.editingAge[rowIndex_r84 + "-age"] = true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", value_r83, " ");
} }
function DatatablesComponent_ng_template_57_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_57_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r94); const rowIndex_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r92.inlineEditingUpdateAge($event, "age", rowIndex_r84)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", value_r83);
} }
function DatatablesComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, DatatablesComponent_ng_template_57_div_0_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_57_input_1_Template, 1, 1, "input", 97);
} if (rf & 2) {
    const rowIndex_r84 = ctx.rowIndex;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r7.editingAge[rowIndex_r84 + "-age"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.editingAge[rowIndex_r84 + "-age"]);
} }
function DatatablesComponent_ng_template_59_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_59_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r102); const rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r101.editingSalary[rowIndex_r97 + "-salary"] = true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", value_r96, " ");
} }
function DatatablesComponent_ng_template_59_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_59_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r107); const rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r105.inlineEditingUpdateSalary($event, "salary", rowIndex_r97)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", value_r96);
} }
function DatatablesComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, DatatablesComponent_ng_template_59_div_0_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_59_input_1_Template, 1, 1, "input", 86);
} if (rf & 2) {
    const rowIndex_r97 = ctx.rowIndex;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r8.editingSalary[rowIndex_r97 + "-salary"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r8.editingSalary[rowIndex_r97 + "-salary"]);
} }
function DatatablesComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 99)(1, "div")(2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "City : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 100)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Experience : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "span", 100)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Start Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r109 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r109.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r109.experience, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r109.start_date, "");
} }
function DatatablesComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DatatablesComponent_ng_template_71_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r114); const row_r111 = restoredCtx.row; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r113.rowDetailsToggleExpand(row_r111)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expanded_r112 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("datatable-icon-right", !expanded_r112)("datatable-icon-down", expanded_r112);
} }
function DatatablesComponent_ng_template_73_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r115.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_73_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r115 = ctx_r121.row;
    const name_r116 = ctx_r121.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r115.status == "1", row_r115.status == "2", row_r115.status == "3", row_r115.status == "4", row_r115.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r116));
} }
function DatatablesComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_73_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_73_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r115 = ctx.row;
    const name_r116 = ctx.value;
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r115.avatar.length > 0)("ngIfElse", _r118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](name_r116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r115.post, "");
} }
function DatatablesComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r122 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r122 == "1", status_r122 == "2", status_r122 == "3", status_r122 == "4", status_r122 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r122 == 1 ? "Current" : status_r122 == 2 ? "Professional" : status_r122 == 3 ? "Rejected" : status_r122 == 4 ? "Resigned" : status_r122 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_89_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 102)(1, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_89_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r127); const allRowsSelected_r124 = restoredCtx.allRowsSelected; const selectFn_r125 = restoredCtx.selectFn; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](selectFn_r125(!allRowsSelected_r124)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allRowsSelected_r124 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", allRowsSelected_r124);
} }
function DatatablesComponent_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 102)(1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_90_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r133); const onCheckboxChangeFn_r131 = restoredCtx.onCheckboxChangeFn; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](onCheckboxChangeFn_r131($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowIndex_r128 = ctx.rowIndex;
    const isSelected_r130 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "rowCustomChkbxRef", rowIndex_r128, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", isSelected_r130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("for", "rowCustomChkbxRef", rowIndex_r128, "");
} }
function DatatablesComponent_ng_template_92_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r134.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_92_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r134 = ctx_r140.row;
    const name_r135 = ctx_r140.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r134.status == "1", row_r134.status == "2", row_r134.status == "3", row_r134.status == "4", row_r134.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r135));
} }
function DatatablesComponent_ng_template_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_92_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_92_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r134 = ctx.row;
    const name_r135 = ctx.value;
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r134.avatar.length > 0)("ngIfElse", _r137);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](name_r135);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r134.post, "");
} }
function DatatablesComponent_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r141 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r141 == "1", status_r141 == "2", status_r141 == "3", status_r141 == "4", status_r141 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r141 == 1 ? "Current" : status_r141 == 2 ? "Professional" : status_r141 == 3 ? "Rejected" : status_r141 == 4 ? "Resigned" : status_r141 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_li_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sel_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", sel_r142.full_name, " ");
} }
function DatatablesComponent_li_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Selections");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_116_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r143.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_116_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r143 = ctx_r149.row;
    const name_r144 = ctx_r149.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r143.status == "1", row_r143.status == "2", row_r143.status == "3", row_r143.status == "4", row_r143.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r144));
} }
function DatatablesComponent_ng_template_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_116_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_116_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r143 = ctx.row;
    const name_r144 = ctx.value;
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r143.avatar.length > 0)("ngIfElse", _r146);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](name_r144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r143.post, "");
} }
function DatatablesComponent_ng_template_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r150 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r150 == "1", status_r150 == "2", status_r150 == "3", status_r150 == "4", status_r150 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r150 == 1 ? "Current" : status_r150 == 2 ? "Professional" : status_r150 == 3 ? "Rejected" : status_r150 == 4 ? "Resigned" : status_r150 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_134_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r151.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_134_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r151 = ctx_r157.row;
    const name_r152 = ctx_r157.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r151.status == "1", row_r151.status == "2", row_r151.status == "3", row_r151.status == "4", row_r151.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r152));
} }
function DatatablesComponent_ng_template_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_134_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_134_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r151 = ctx.row;
    const name_r152 = ctx.value;
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r151.avatar.length > 0)("ngIfElse", _r154);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](name_r152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r151.post, "");
} }
function DatatablesComponent_ng_template_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r158 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r158 == "1", status_r158 == "2", status_r158 == "3", status_r158 == "4", status_r158 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r158 == 1 ? "Current" : status_r158 == 2 ? "Professional" : status_r158 == 3 ? "Rejected" : status_r158 == 4 ? "Resigned" : status_r158 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
class DatatablesComponent {
    /**
     * Constructor
     *
     * @param {DatatablesService} _datatablesService
     * @param {CoreTranslationService} _coreTranslationService
     */
    constructor(_datatablesService, _coreTranslationService) {
        this._datatablesService = _datatablesService;
        this._coreTranslationService = _coreTranslationService;
        this.tempData = [];
        this.selected = [];
        this.basicSelectedOption = 10;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.ColumnMode;
        this.expanded = {};
        this.editingName = {};
        this.editingStatus = {};
        this.editingAge = {};
        this.editingSalary = {};
        this.chkBoxSelected = [];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.SelectionType;
        // snippet code variables
        this._snippetCodeKitchenSink = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeKitchenSink;
        this._snippetCodeInlineEditing = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeInlineEditing;
        this._snippetCodeRowDetails = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeRowDetails;
        this._snippetCodeCustomCheckbox = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeCustomCheckbox;
        this._snippetCodeResponsive = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeResponsive;
        this._snippetCodeMultilangual = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeMultilangual;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
        this._coreTranslationService.translate(app_main_tables_datatables_i18n_en__WEBPACK_IMPORTED_MODULE_1__.locale, app_main_tables_datatables_i18n_fr__WEBPACK_IMPORTED_MODULE_2__.locale, app_main_tables_datatables_i18n_de__WEBPACK_IMPORTED_MODULE_0__.locale, app_main_tables_datatables_i18n_pt__WEBPACK_IMPORTED_MODULE_3__.locale);
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Inline editing Name
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateName(event, cell, rowIndex) {
        this.editingName[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Age
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateAge(event, cell, rowIndex) {
        this.editingAge[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Salary
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateSalary(event, cell, rowIndex) {
        this.editingSalary[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Status
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateStatus(event, cell, rowIndex) {
        this.editingStatus[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Search (filter)
     *
     * @param event
     */
    filterUpdate(event) {
        const val = event.target.value.toLowerCase();
        // filter our data
        const temp = this.tempData.filter(function (d) {
            return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.kitchenSinkRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    /**
     * Row Details Toggle
     *
     * @param row
     */
    rowDetailsToggleExpand(row) {
        this.tableRowDetails.rowDetail.toggleExpandRow(row);
    }
    /**
     * For ref only, log selected values
     *
     * @param selected
     */
    onSelect({ selected }) {
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }
    /**
     * For ref only, log activate events
     *
     * @param selected
     */
    onActivate(event) {
        // console.log('Activate Event', event);
    }
    /**
     * Custom Chkbox On Select
     *
     * @param { selected }
     */
    customChkboxOnSelect({ selected }) {
        this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
        this.chkBoxSelected.push(...selected);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._datatablesService.onDatatablessChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.tempData = this.rows;
            this.kitchenSinkRows = this.rows;
            this.exportCSVData = this.rows;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Datatables',
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
                        name: 'Forms & Tables',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Datatables',
                        isLink: false
                    }
                ]
            }
        };
    }
}
DatatablesComponent.ɵfac = function DatatablesComponent_Factory(t) { return new (t || DatatablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_5__.DatatablesService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__.CoreTranslationService)); };
DatatablesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: DatatablesComponent, selectors: [["app-datatables"]], viewQuery: function DatatablesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DatatableComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.tableRowDetails = _t.first);
    } }, decls: 145, vars: 129, consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "ngx-datatable-kitchen-sink"], [3, "snippetCode"], [1, "card-title"], [1, "row"], [1, "col-12", "mb-50"], ["rippleEffect", "", 1, "btn", "btn-primary", "ml-1"], ["data-feather", "plus", 1, "mr-0", "mr-sm-1"], [1, "d-none", "d-sm-inline-block"], ["csvLink", "", "rippleEffect", "", 1, "btn", "btn-outline-secondary", "float-right", "mr-1", 3, "data"], [1, "col-md-6", "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "m-1"], [1, "d-flex", "align-items-center"], [1, "form-control", "mx-25", 3, "ngModel", "ngModelChange"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"], [1, "col-md-6", "col-12", "d-flex", "justify-content-md-end"], [1, "d-flex", "align-items-center", "justify-content-end", "pr-1", "pb-1", "pl-1", "pl-md-0", "pb-md-0"], ["type", "search", "placeholder", "Search", 1, "form-control", "ml-25", 3, "keyup", "search"], [1, "bootstrap", "core-bootstrap", 3, "rows", "rowHeight", "limit", "columnMode", "headerHeight", "footerHeight", "scrollbarH", "selectionType", "activate", "select"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Name", "prop", "full_name", 3, "width"], ["name", "Email", "prop", "email", 3, "width"], ["name", "Date", "prop", "start_date", 3, "width"], ["name", "Salary", "prop", "salary", 3, "width"], ["name", "Status", "prop", "status", 3, "width"], ["name", "Actions", 3, "width", "sortable"], ["id", "ngx-datatable-inline-editing"], [1, "bootstrap", "core-bootstrap", 3, "headerHeight", "rowHeight", "limit", "columnMode", "footerHeight", "rows", "scrollbarH"], ["name", "Age", "prop", "age", 3, "width"], ["id", "ngx-datatable-row-details"], [1, "bootstrap", "core-bootstrap", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows", "scrollbarH"], ["tableRowDetails", ""], [3, "rowHeight"], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["id", "ngx-datatable-custom-checkbox"], [1, "col-12"], [1, "bootstrap", "core-bootstrap", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "selected", "selectionType", "scrollbarH", "select", "activate"], [1, "selected-column", "col-12", "mt-1"], [1, "w-100"], [1, "mx-1"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "ngx-datatable-Responsive"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "columnMode", "headerHeight", "rowHeight", "footerHeight", "limit", "rows", "scrollbarH"], ["table", ""], ["name", "Action", 3, "width", "sortable"], ["id", "ngx-datatable-multi-purpose"], [1, "card-body"], [1, "card-text"], ["prop", "full_name", 3, "name", "width"], ["prop", "email", 3, "name", "width"], ["prop", "age", 3, "name", "width"], ["prop", "status", 3, "name", "width"], [3, "name", "width", "sortable"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "headerChkbxRef", 1, "custom-control-input", 3, "checked", "change"], ["for", "headerChkbxRef", 1, "custom-control-label"], ["type", "checkbox", 1, "custom-control-input", 3, "checked", "id", "change"], [1, "custom-control-label", 3, "for"], [4, "ngIf", "ngIfElse"], ["customAvatar", ""], [1, "cell-line-height"], [1, "font-medium-1", "font-weight-bold", "line-height-1", "mb-25"], [1, "text-muted", "font-small-2"], ["height", "32", "width", "32", "alt", "datatable-avatar", 1, "rounded-circle", "mr-1", 3, "src"], [1, "avatar", "mr-1", "ml-0", 3, "ngClass"], [1, "avatar-content"], [1, "badge", "badge-pill", 3, "ngClass"], ["ngbDropdown", "", "container", "body"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "dropdownBrowserState", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "hide-arrow"], ["data-feather", "more-vertical", 1, "text-primary", "cursor-pointer", "mr-50"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBrowserState", 1, "dropdown-menu-right"], ["href", "javascript:void(0)", "ngbDropdownItem", "", 1, "d-flex", "align-items-center"], ["data-feather", "file-text", 1, "mr-50"], ["data-feather", "archive", 1, "mr-50"], ["data-feather", "trash-2", 1, "mr-50"], ["data-feather", "edit", 1, "text-primary", "cursor-pointer"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "class", "form-control form-control-sm", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], [1, "font-medium-1", "line-height-1", "mb-0"], ["autofocus", "", "type", "text", 1, "form-control", "form-control-sm", 3, "value", "blur"], ["class", "form-control form-control-sm", 3, "value", "blur", "change", 4, "ngIf"], [1, "form-control", "form-control-sm", 3, "value", "blur", "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["autofocus", "", "class", "form-control form-control-sm", "type", "number", 3, "value", "blur", 4, "ngIf"], ["autofocus", "", "type", "number", 1, "form-control", "form-control-sm", 3, "value", "blur"], [1, "ml-75", "pl-5", "pt-75"], [1, "ml-1"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 1, "text-body", 3, "click"], [1, "custom-control", "custom-control-primary", "custom-checkbox"], ["type", "checkbox", "id", "headerCustomChkbxRef", 1, "custom-control-input", 3, "checked", "change"], ["for", "headerCustomChkbxRef", 1, "custom-control-label"]], template: function DatatablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "app-content-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "section", 3)(4, "core-card-snippet", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Kitchen Sink");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Add New Record");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Export CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Show ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function DatatablesComponent_Template_select_ngModelChange_19_listener($event) { return ctx.basicSelectedOption = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, " entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 20)(30, "div", 21)(31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function DatatablesComponent_Template_input_keyup_33_listener($event) { return ctx.filterUpdate($event); })("search", function DatatablesComponent_Template_input_search_33_listener($event) { return ctx.filterUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "ngx-datatable", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("activate", function DatatablesComponent_Template_ngx_datatable_activate_34_listener($event) { return ctx.onActivate($event); })("select", function DatatablesComponent_Template_ngx_datatable_select_34_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, DatatablesComponent_ng_template_36_Template, 3, 1, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, DatatablesComponent_ng_template_37_Template, 3, 3, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, DatatablesComponent_ng_template_39_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "ngx-datatable-column", 28)(41, "ngx-datatable-column", 29)(42, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, DatatablesComponent_ng_template_44_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, DatatablesComponent_ng_template_46_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "section", 33)(48, "core-card-snippet", 4)(49, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "Inline Editing");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "ngx-datatable", 34)(52, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, DatatablesComponent_ng_template_53_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, DatatablesComponent_ng_template_55_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "ngx-datatable-column", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](57, DatatablesComponent_ng_template_57_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](59, DatatablesComponent_ng_template_59_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, DatatablesComponent_ng_template_61_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "section", 36)(63, "core-card-snippet", 4)(64, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, "Row Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "ngx-datatable", 37, 38)(68, "ngx-datatable-row-detail", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](69, DatatablesComponent_ng_template_69_Template, 14, 3, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "ngx-datatable-column", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](71, DatatablesComponent_ng_template_71_Template, 1, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](73, DatatablesComponent_ng_template_73_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](74, "ngx-datatable-column", 28)(75, "ngx-datatable-column", 35)(76, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](78, DatatablesComponent_ng_template_78_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](80, DatatablesComponent_ng_template_80_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "section", 42)(82, "core-card-snippet", 4)(83, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, "Custom Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "div", 6)(86, "div", 43)(87, "ngx-datatable", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("select", function DatatablesComponent_Template_ngx_datatable_select_87_listener($event) { return ctx.customChkboxOnSelect($event); })("activate", function DatatablesComponent_Template_ngx_datatable_activate_87_listener($event) { return ctx.onActivate($event); })("select", function DatatablesComponent_Template_ngx_datatable_select_87_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](88, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](89, DatatablesComponent_ng_template_89_Template, 3, 1, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](90, DatatablesComponent_ng_template_90_Template, 3, 3, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](91, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](92, DatatablesComponent_ng_template_92_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](93, "ngx-datatable-column", 28)(94, "ngx-datatable-column", 35)(95, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](96, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](97, DatatablesComponent_ng_template_97_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](99, DatatablesComponent_ng_template_99_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](101, "hr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](102, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](103, " Selections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](104, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](106, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](107, DatatablesComponent_li_107_Template, 2, 1, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](108, DatatablesComponent_li_108_Template, 2, 0, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "section", 50)(110, "core-card-snippet", 4)(111, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](112, "Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](113, "ngx-datatable", 51, 52)(115, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](116, DatatablesComponent_ng_template_116_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](117, "ngx-datatable-column", 28)(118, "ngx-datatable-column", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](119, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](120, DatatablesComponent_ng_template_120_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](121, "ngx-datatable-column", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](122, DatatablesComponent_ng_template_122_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](123, "section", 54)(124, "core-card-snippet", 4)(125, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](126, "Multilangual");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](127, "div", 55)(128, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](129, "Select preffered language from navbar to change the table language.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](130, "ngx-datatable", 51, 52)(132, "ngx-datatable-column", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](134, DatatablesComponent_ng_template_134_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](135, "ngx-datatable-column", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](137, "ngx-datatable-column", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](138, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](139, "ngx-datatable-column", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](141, DatatablesComponent_ng_template_141_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](142, "ngx-datatable-column", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](144, DatatablesComponent_ng_template_144_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeKitchenSink);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("data", ctx.exportCSVData);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.basicSelectedOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rows", ctx.kitchenSinkRows)("rowHeight", 58)("limit", 10)("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("footerHeight", 50)("scrollbarH", true)("selectionType", ctx.SelectionType.checkbox)("limit", ctx.basicSelectedOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeInlineEditing);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("headerHeight", 40)("rowHeight", 58)("limit", 10)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("rows", ctx.rows)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 100)("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeRowDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("footerHeight", 50)("rowHeight", 58)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rowHeight", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeCustomCheckbox);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("footerHeight", 50)("rowHeight", 58)("limit", 10)("selected", ctx.chkBoxSelected)("selectionType", ctx.SelectionType.checkbox)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", ctx.chkBoxSelected == null ? null : ctx.chkBoxSelected.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.chkBoxSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !(ctx.chkBoxSelected == null ? null : ctx.chkBoxSelected.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeResponsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("rowHeight", 58)("footerHeight", 50)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeMultilangual);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("rowHeight", 58)("footerHeight", 50)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](133, 119, "HEADER.NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](136, 121, "HEADER.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](138, 123, "HEADER.AGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](140, 125, "HEADER.STATUS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](143, 127, "HEADER.ACTIONS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownItem, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_7__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_8__.FeatherIconDirective, app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_9__.ContentHeaderComponent, _core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_10__.CoreCardSnippetComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DatatableRowDetailDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DatatableRowDetailTemplateDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DataTableColumnCellDirective, _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_20__.CsvDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_11__.InitialsPipe], styles: ["@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\nbootstrap table theme\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.bootstrap {\n  box-shadow: none;\n  font-size: 13px;\n}.ngx-datatable.bootstrap .datatable-header {\n  height: auto !important;\n  height: initial !important;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n  vertical-align: bottom;\n  padding: 0.75rem;\n  border-bottom: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  vertical-align: top;\n  border-top: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.05);\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #fff;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-body .empty-row {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n}.ngx-datatable.bootstrap .datatable-footer {\n  background: #424242;\n  color: #ededed;\n  margin-top: -1px;\n}.ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #545454;\n  font-weight: bold;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #ededed;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px;\n}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}.bg-white {\n  background-color: #ffffff !important;\n}.bg-white .card-header,\n.bg-white .card-footer {\n  background-color: transparent;\n}.border-white {\n  border: 1px solid #ffffff !important;\n}.border-top-white {\n  border-top: 1px solid #ffffff;\n}.border-bottom-white {\n  border-bottom: 1px solid #ffffff;\n}.border-left-white {\n  border-left: 1px solid #ffffff;\n}.border-right-white {\n  border-right: 1px solid #ffffff;\n}.bg-white.badge-glow,\n.border-white.badge-glow,\n.badge-white.badge-glow {\n  box-shadow: 0px 0px 10px #ffffff;\n}.overlay-white {\n  background: #ffffff; /* The Fallback */\n  background: rgba(255, 255, 255, 0.6);\n}input:focus ~ .bg-white {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ffffff !important;\n}.bg-black {\n  background-color: #000000 !important;\n}.bg-black .card-header,\n.bg-black .card-footer {\n  background-color: transparent;\n}.border-black {\n  border: 1px solid #000000 !important;\n}.border-top-black {\n  border-top: 1px solid #000000;\n}.border-bottom-black {\n  border-bottom: 1px solid #000000;\n}.border-left-black {\n  border-left: 1px solid #000000;\n}.border-right-black {\n  border-right: 1px solid #000000;\n}.bg-black.badge-glow,\n.border-black.badge-glow,\n.badge-black.badge-glow {\n  box-shadow: 0px 0px 10px #000000;\n}.overlay-black {\n  background: #000000; /* The Fallback */\n  background: rgba(0, 0, 0, 0.6);\n}input:focus ~ .bg-black {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #000000 !important;\n}.bg-dark {\n  background-color: #4b4b4b !important;\n}.bg-dark .card-header,\n.bg-dark .card-footer {\n  background-color: transparent;\n}.alert-dark {\n  background: rgba(75, 75, 75, 0.12) !important;\n  color: #4b4b4b !important;\n}.alert-dark .alert-heading {\n  box-shadow: rgba(75, 75, 75, 0.4) 0px 6px 15px -7px;\n}.alert-dark .alert-link {\n  color: #3e3e3e !important;\n}.alert-dark .close {\n  color: #4b4b4b !important;\n}.border-dark {\n  border: 1px solid #4b4b4b !important;\n}.border-top-dark {\n  border-top: 1px solid #4b4b4b;\n}.border-bottom-dark {\n  border-bottom: 1px solid #4b4b4b;\n}.border-left-dark {\n  border-left: 1px solid #4b4b4b;\n}.border-right-dark {\n  border-right: 1px solid #4b4b4b;\n}.bg-dark.badge-glow,\n.border-dark.badge-glow,\n.badge-dark.badge-glow {\n  box-shadow: 0px 0px 10px #4b4b4b;\n}.badge.badge-light-dark {\n  background-color: rgba(75, 75, 75, 0.12);\n  color: #4b4b4b !important;\n}.overlay-dark {\n  background: #4b4b4b; /* The Fallback */\n  background: rgba(75, 75, 75, 0.6);\n}.btn-dark {\n  border-color: #4b4b4b !important;\n  background-color: #4b4b4b !important;\n  color: #fff !important;\n}.btn-dark:focus, .btn-dark:active, .btn-dark.active {\n  color: #fff;\n  background-color: #343434 !important;\n}.btn-dark:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #4b4b4b;\n}.btn-dark:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-dark {\n  background-color: transparent;\n  color: #4b4b4b;\n}.btn-flat-dark:hover {\n  color: #4b4b4b;\n}.btn-flat-dark:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(75, 75, 75, 0.12);\n}.btn-flat-dark:active, .btn-flat-dark.active, .btn-flat-dark:focus {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-flat-dark.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b4b4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-dark {\n  background-color: #4b4b4b;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-dark:hover:not(.disabled):not(:disabled) {\n  background-color: #626262;\n}.btn-relief-dark:active, .btn-relief-dark.active, .btn-relief-dark:focus {\n  background-color: #343434;\n}.btn-relief-dark:hover {\n  color: #fff;\n}.btn-relief-dark:active, .btn-relief-dark.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-dark {\n  border: 1px solid #4b4b4b !important;\n  background-color: transparent;\n  color: #4b4b4b;\n}.btn-outline-dark:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(75, 75, 75, 0.04);\n  color: #4b4b4b;\n}.btn-outline-dark:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .btn-outline-dark:not(:disabled):not(.disabled):focus {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-outline-dark.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b4b4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-dark.dropdown-toggle {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-outline-dark.waves-effect .waves-ripple,\n.btn-flat-dark.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(75, 75, 75, 0.2) 0, rgba(75, 75, 75, 0.3) 40%, rgba(75, 75, 75, 0.4) 50%, rgba(75, 75, 75, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-dark {\n  background-color: #4b4b4b;\n}.modal.modal-dark .modal-header .modal-title {\n  color: #4b4b4b;\n}.modal.modal-dark .modal-header .close {\n  color: #4b4b4b !important;\n}.progress-bar-dark {\n  background-color: rgba(75, 75, 75, 0.12);\n}.progress-bar-dark .progress-bar {\n  background-color: #4b4b4b;\n}.timeline .timeline-point-dark {\n  border-color: #4b4b4b !important;\n}.timeline .timeline-point-dark i,\n.timeline .timeline-point-dark svg {\n  stroke: #4b4b4b !important;\n}.timeline .timeline-point-dark.timeline-point-indicator {\n  background-color: #4b4b4b !important;\n}.timeline .timeline-point-dark.timeline-point-indicator:before {\n  background: rgba(75, 75, 75, 0.12) !important;\n}.divider.divider-dark .divider-text:before, .divider.divider-dark .divider-text:after {\n  border-color: #4b4b4b !important;\n}input:focus ~ .bg-dark {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #4b4b4b !important;\n}.custom-control-dark .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #4b4b4b;\n  background-color: #4b4b4b;\n}.custom-control-dark.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-dark.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-dark.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-dark.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(75, 75, 75, 0.4) !important;\n}.custom-control-dark .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(75, 75, 75, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-dark .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #4b4b4b !important;\n}.custom-switch-dark .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #4b4b4b !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-dark .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #4b4b4b !important;\n  border-color: #4b4b4b !important;\n}.text-dark.text-darken-1 {\n  color: #343434 !important;\n}.bg-dark.bg-darken-1 {\n  background-color: #343434 !important;\n}.border-dark.border-darken-1 {\n  border: 1px solid #343434 !important;\n}.border-top-dark.border-top-darken-1 {\n  border-top: 1px solid #343434 !important;\n}.border-bottom-dark.border-bottom-darken-1 {\n  border-bottom: 1px solid #343434 !important;\n}.border-left-dark.border-left-darken-1 {\n  border-left: 1px solid #343434 !important;\n}.border-right-dark.border-right-darken-1 {\n  border-right: 1px solid #343434 !important;\n}.overlay-dark.overlay-darken-1 {\n  background: #343434; /* The Fallback */\n  background: rgba(52, 52, 52, 0.6);\n}.text-dark.text-darken-2 {\n  color: #1e1e1e !important;\n}.bg-dark.bg-darken-2 {\n  background-color: #1e1e1e !important;\n}.border-dark.border-darken-2 {\n  border: 1px solid #1e1e1e !important;\n}.border-top-dark.border-top-darken-2 {\n  border-top: 1px solid #1e1e1e !important;\n}.border-bottom-dark.border-bottom-darken-2 {\n  border-bottom: 1px solid #1e1e1e !important;\n}.border-left-dark.border-left-darken-2 {\n  border-left: 1px solid #1e1e1e !important;\n}.border-right-dark.border-right-darken-2 {\n  border-right: 1px solid #1e1e1e !important;\n}.overlay-dark.overlay-darken-2 {\n  background: #1e1e1e; /* The Fallback */\n  background: rgba(30, 30, 30, 0.6);\n}.text-dark.text-darken-3 {\n  color: #626262 !important;\n}.bg-dark.bg-darken-3 {\n  background-color: #626262 !important;\n}.border-dark.border-darken-3 {\n  border: 1px solid #626262 !important;\n}.border-top-dark.border-top-darken-3 {\n  border-top: 1px solid #626262 !important;\n}.border-bottom-dark.border-bottom-darken-3 {\n  border-bottom: 1px solid #626262 !important;\n}.border-left-dark.border-left-darken-3 {\n  border-left: 1px solid #626262 !important;\n}.border-right-dark.border-right-darken-3 {\n  border-right: 1px solid #626262 !important;\n}.overlay-dark.overlay-darken-3 {\n  background: #626262; /* The Fallback */\n  background: rgba(98, 98, 98, 0.6);\n}.bg-light {\n  background-color: #f6f6f6 !important;\n}.bg-light .card-header,\n.bg-light .card-footer {\n  background-color: transparent;\n}.border-light {\n  border: 1px solid #f6f6f6 !important;\n}.border-top-light {\n  border-top: 1px solid #f6f6f6;\n}.border-bottom-light {\n  border-bottom: 1px solid #f6f6f6;\n}.border-left-light {\n  border-left: 1px solid #f6f6f6;\n}.border-right-light {\n  border-right: 1px solid #f6f6f6;\n}.bg-light.badge-glow,\n.border-light.badge-glow,\n.badge-light.badge-glow {\n  box-shadow: 0px 0px 10px #f6f6f6;\n}.overlay-light {\n  background: #f6f6f6; /* The Fallback */\n  background: rgba(246, 246, 246, 0.6);\n}input:focus ~ .bg-light {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #f6f6f6 !important;\n}.text-primary.text-lighten-5 {\n  color: #50cdfb !important;\n}.bg-primary.bg-lighten-5 {\n  background-color: #50cdfb !important;\n}.border-primary.border-lighten-5 {\n  border: 1px solid #50cdfb !important;\n}.border-top-primary.border-top-lighten-5 {\n  border-top: 1px solid #50cdfb !important;\n}.border-bottom-primary.border-bottom-lighten-5 {\n  border-bottom: 1px solid #50cdfb !important;\n}.border-left-primary.border-left-lighten-5 {\n  border-left: 1px solid #50cdfb !important;\n}.border-right-primary.border-right-lighten-5 {\n  border-right: 1px solid #50cdfb !important;\n}.overlay-primary.overlay-lighten-5 {\n  background: #50cdfb; /* The Fallback */\n  background: rgba(80, 205, 251, 0.6);\n}.text-primary.text-lighten-4 {\n  color: #37c5fa !important;\n}.bg-primary.bg-lighten-4 {\n  background-color: #37c5fa !important;\n}.border-primary.border-lighten-4 {\n  border: 1px solid #37c5fa !important;\n}.border-top-primary.border-top-lighten-4 {\n  border-top: 1px solid #37c5fa !important;\n}.border-bottom-primary.border-bottom-lighten-4 {\n  border-bottom: 1px solid #37c5fa !important;\n}.border-left-primary.border-left-lighten-4 {\n  border-left: 1px solid #37c5fa !important;\n}.border-right-primary.border-right-lighten-4 {\n  border-right: 1px solid #37c5fa !important;\n}.overlay-primary.overlay-lighten-4 {\n  background: #37c5fa; /* The Fallback */\n  background: rgba(55, 197, 250, 0.6);\n}.text-primary.text-lighten-3 {\n  color: #1ebef9 !important;\n}.bg-primary.bg-lighten-3 {\n  background-color: #1ebef9 !important;\n}.border-primary.border-lighten-3 {\n  border: 1px solid #1ebef9 !important;\n}.border-top-primary.border-top-lighten-3 {\n  border-top: 1px solid #1ebef9 !important;\n}.border-bottom-primary.border-bottom-lighten-3 {\n  border-bottom: 1px solid #1ebef9 !important;\n}.border-left-primary.border-left-lighten-3 {\n  border-left: 1px solid #1ebef9 !important;\n}.border-right-primary.border-right-lighten-3 {\n  border-right: 1px solid #1ebef9 !important;\n}.overlay-primary.overlay-lighten-3 {\n  background: #1ebef9; /* The Fallback */\n  background: rgba(30, 190, 249, 0.6);\n}.text-primary.text-lighten-2 {\n  color: #06b7f8 !important;\n}.bg-primary.bg-lighten-2 {\n  background-color: #06b7f8 !important;\n}.border-primary.border-lighten-2 {\n  border: 1px solid #06b7f8 !important;\n}.border-top-primary.border-top-lighten-2 {\n  border-top: 1px solid #06b7f8 !important;\n}.border-bottom-primary.border-bottom-lighten-2 {\n  border-bottom: 1px solid #06b7f8 !important;\n}.border-left-primary.border-left-lighten-2 {\n  border-left: 1px solid #06b7f8 !important;\n}.border-right-primary.border-right-lighten-2 {\n  border-right: 1px solid #06b7f8 !important;\n}.overlay-primary.overlay-lighten-2 {\n  background: #06b7f8; /* The Fallback */\n  background: rgba(6, 183, 248, 0.6);\n}.text-primary.text-lighten-1 {\n  color: #06a4df !important;\n}.bg-primary.bg-lighten-1 {\n  background-color: #06a4df !important;\n}.border-primary.border-lighten-1 {\n  border: 1px solid #06a4df !important;\n}.border-top-primary.border-top-lighten-1 {\n  border-top: 1px solid #06a4df !important;\n}.border-bottom-primary.border-bottom-lighten-1 {\n  border-bottom: 1px solid #06a4df !important;\n}.border-left-primary.border-left-lighten-1 {\n  border-left: 1px solid #06a4df !important;\n}.border-right-primary.border-right-lighten-1 {\n  border-right: 1px solid #06a4df !important;\n}.overlay-primary.overlay-lighten-1 {\n  background: #06a4df; /* The Fallback */\n  background: rgba(6, 164, 223, 0.6);\n}.bg-primary {\n  background-color: #0592c6 !important;\n}.bg-primary .card-header,\n.bg-primary .card-footer {\n  background-color: transparent;\n}.alert-primary {\n  background: rgba(5, 146, 198, 0.12) !important;\n  color: #0592c6 !important;\n}.alert-primary .alert-heading {\n  box-shadow: rgba(5, 146, 198, 0.4) 0px 6px 15px -7px;\n}.alert-primary .alert-link {\n  color: #0480ad !important;\n}.alert-primary .close {\n  color: #0592c6 !important;\n}.bg-light-primary {\n  background: rgba(5, 146, 198, 0.12) !important;\n  color: #0592c6 !important;\n}.bg-light-primary.fc-h-event, .bg-light-primary.fc-v-event {\n  border-color: rgba(5, 146, 198, 0.1);\n}.bg-light-primary .fc-list-event-dot,\n.bg-light-primary .fc-daygrid-event-dot {\n  border-color: #0592c6 !important;\n}.bg-light-primary.fc-list-event:hover td {\n  background: rgba(5, 146, 198, 0.1) !important;\n}.bg-light-primary.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-primary {\n  color: #0592c6 !important;\n}.border-primary {\n  border: 1px solid #0592c6 !important;\n}.border-top-primary {\n  border-top: 1px solid #0592c6;\n}.border-bottom-primary {\n  border-bottom: 1px solid #0592c6;\n}.border-left-primary {\n  border-left: 1px solid #0592c6;\n}.border-right-primary {\n  border-right: 1px solid #0592c6;\n}.bg-primary.badge-glow,\n.border-primary.badge-glow,\n.badge-primary.badge-glow {\n  box-shadow: 0px 0px 10px #0592c6;\n}.badge.badge-light-primary {\n  background-color: rgba(5, 146, 198, 0.12);\n  color: #0592c6 !important;\n}.overlay-primary {\n  background: #0592c6; /* The Fallback */\n  background: rgba(5, 146, 198, 0.6);\n}.btn-primary {\n  border-color: #0592c6 !important;\n  background-color: #0592c6 !important;\n  color: #fff !important;\n}.btn-primary:focus, .btn-primary:active, .btn-primary.active {\n  color: #fff;\n  background-color: #0480ad !important;\n}.btn-primary:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #0592c6;\n}.btn-primary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-primary {\n  background-color: transparent;\n  color: #0592c6;\n}.btn-flat-primary:hover {\n  color: #0592c6;\n}.btn-flat-primary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(5, 146, 198, 0.12);\n}.btn-flat-primary:active, .btn-flat-primary.active, .btn-flat-primary:focus {\n  background-color: rgba(5, 146, 198, 0.2);\n  color: #0592c6;\n}.btn-flat-primary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230592c6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-primary {\n  background-color: #0592c6;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-primary:hover:not(.disabled):not(:disabled) {\n  background-color: #06a4df;\n}.btn-relief-primary:active, .btn-relief-primary.active, .btn-relief-primary:focus {\n  background-color: #0480ad;\n}.btn-relief-primary:hover {\n  color: #fff;\n}.btn-relief-primary:active, .btn-relief-primary.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-primary {\n  border: 1px solid #0592c6 !important;\n  background-color: transparent;\n  color: #0592c6;\n}.btn-outline-primary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(5, 146, 198, 0.04);\n  color: #0592c6;\n}.btn-outline-primary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .btn-outline-primary:not(:disabled):not(.disabled):focus {\n  background-color: rgba(5, 146, 198, 0.2);\n  color: #0592c6;\n}.btn-outline-primary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230592c6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-primary.dropdown-toggle {\n  background-color: rgba(5, 146, 198, 0.2);\n  color: #0592c6;\n}.btn-outline-primary.waves-effect .waves-ripple,\n.btn-flat-primary.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(5, 146, 198, 0.2) 0, rgba(5, 146, 198, 0.3) 40%, rgba(5, 146, 198, 0.4) 50%, rgba(5, 146, 198, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-primary {\n  background-color: #0592c6;\n}.modal.modal-primary .modal-header .modal-title {\n  color: #0592c6;\n}.modal.modal-primary .modal-header .close {\n  color: #0592c6 !important;\n}.pagination-primary .page-item.active .page-link {\n  background: #0592c6 !important;\n  color: #fff;\n}.pagination-primary .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-primary .page-item .page-link:hover {\n  color: #0592c6;\n}.pagination-primary .page-item.prev-item .page-link:hover, .pagination-primary .page-item.next-item .page-link:hover {\n  background: #0592c6;\n  color: #fff;\n}.pagination-primary .page-item.next-item .page-link:active:after, .pagination-primary .page-item.next-item .page-link:hover:after, .pagination-primary .page-item.next .page-link:active:after, .pagination-primary .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230592c6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-primary .page-item.prev-item .page-link:active:before, .pagination-primary .page-item.prev-item .page-link:hover:before, .pagination-primary .page-item.prev .page-link:active:before, .pagination-primary .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230592c6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-primary .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #0592c6 !important;\n  border-color: #0592c6;\n  box-shadow: 0 4px 18px -4px rgba(5, 146, 198, 0.65);\n}.progress-bar-primary {\n  background-color: rgba(5, 146, 198, 0.12);\n}.progress-bar-primary .progress-bar {\n  background-color: #0592c6;\n}.timeline .timeline-point-primary {\n  border-color: #0592c6 !important;\n}.timeline .timeline-point-primary i,\n.timeline .timeline-point-primary svg {\n  stroke: #0592c6 !important;\n}.timeline .timeline-point-primary.timeline-point-indicator {\n  background-color: #0592c6 !important;\n}.timeline .timeline-point-primary.timeline-point-indicator:before {\n  background: rgba(5, 146, 198, 0.12) !important;\n}.divider.divider-primary .divider-text:before, .divider.divider-primary .divider-text:after {\n  border-color: #0592c6 !important;\n}input:focus ~ .bg-primary {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #0592c6 !important;\n}.custom-control-primary .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #0592c6;\n  background-color: #0592c6;\n}.custom-control-primary.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-primary.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-primary.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-primary.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(5, 146, 198, 0.4) !important;\n}.custom-control-primary .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(5, 146, 198, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-primary .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #0592c6 !important;\n}.custom-switch-primary .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #0592c6 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-primary .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #0592c6 !important;\n  border-color: #0592c6 !important;\n}.text-primary.text-darken-1 {\n  color: #0480ad !important;\n}.bg-primary.bg-darken-1 {\n  background-color: #0480ad !important;\n}.border-primary.border-darken-1 {\n  border: 1px solid #0480ad !important;\n}.border-top-primary.border-top-darken-1 {\n  border-top: 1px solid #0480ad !important;\n}.border-bottom-primary.border-bottom-darken-1 {\n  border-bottom: 1px solid #0480ad !important;\n}.border-left-primary.border-left-darken-1 {\n  border-left: 1px solid #0480ad !important;\n}.border-right-primary.border-right-darken-1 {\n  border-right: 1px solid #0480ad !important;\n}.overlay-primary.overlay-darken-1 {\n  background: #0480ad; /* The Fallback */\n  background: rgba(4, 128, 173, 0.6);\n}.text-primary.text-darken-2 {\n  color: #046d94 !important;\n}.bg-primary.bg-darken-2 {\n  background-color: #046d94 !important;\n}.border-primary.border-darken-2 {\n  border: 1px solid #046d94 !important;\n}.border-top-primary.border-top-darken-2 {\n  border-top: 1px solid #046d94 !important;\n}.border-bottom-primary.border-bottom-darken-2 {\n  border-bottom: 1px solid #046d94 !important;\n}.border-left-primary.border-left-darken-2 {\n  border-left: 1px solid #046d94 !important;\n}.border-right-primary.border-right-darken-2 {\n  border-right: 1px solid #046d94 !important;\n}.overlay-primary.overlay-darken-2 {\n  background: #046d94; /* The Fallback */\n  background: rgba(4, 109, 148, 0.6);\n}.text-primary.text-darken-3 {\n  color: #035b7b !important;\n}.bg-primary.bg-darken-3 {\n  background-color: #035b7b !important;\n}.border-primary.border-darken-3 {\n  border: 1px solid #035b7b !important;\n}.border-top-primary.border-top-darken-3 {\n  border-top: 1px solid #035b7b !important;\n}.border-bottom-primary.border-bottom-darken-3 {\n  border-bottom: 1px solid #035b7b !important;\n}.border-left-primary.border-left-darken-3 {\n  border-left: 1px solid #035b7b !important;\n}.border-right-primary.border-right-darken-3 {\n  border-right: 1px solid #035b7b !important;\n}.overlay-primary.overlay-darken-3 {\n  background: #035b7b; /* The Fallback */\n  background: rgba(3, 91, 123, 0.6);\n}.text-primary.text-darken-4 {\n  color: #024963 !important;\n}.bg-primary.bg-darken-4 {\n  background-color: #024963 !important;\n}.border-primary.border-darken-4 {\n  border: 1px solid #024963 !important;\n}.border-top-primary.border-top-darken-4 {\n  border-top: 1px solid #024963 !important;\n}.border-bottom-primary.border-bottom-darken-4 {\n  border-bottom: 1px solid #024963 !important;\n}.border-left-primary.border-left-darken-4 {\n  border-left: 1px solid #024963 !important;\n}.border-right-primary.border-right-darken-4 {\n  border-right: 1px solid #024963 !important;\n}.overlay-primary.overlay-darken-4 {\n  background: #024963; /* The Fallback */\n  background: rgba(2, 73, 99, 0.6);\n}.text-primary.text-accent-1 {\n  color: #bdfdff !important;\n}.bg-primary.bg-accent-1 {\n  background-color: #bdfdff !important;\n}.border-primary.border-accent-1 {\n  border: 1px solid #bdfdff !important;\n}.border-top-primary.border-top-accent-1 {\n  border-top: 1px solid #bdfdff !important;\n}.border-bottom-primary.border-bottom-accent-1 {\n  border-bottom: 1px solid #bdfdff !important;\n}.border-left-primary.border-left-accent-1 {\n  border-left: 1px solid #bdfdff !important;\n}.border-right-primary.border-right-accent-1 {\n  border-right: 1px solid #bdfdff !important;\n}.overlay-primary.overlay-accent-1 {\n  background: #bdfdff; /* The Fallback */\n  background: rgba(189, 253, 255, 0.6);\n}.text-primary.text-accent-2 {\n  color: #8afbff !important;\n}.bg-primary.bg-accent-2 {\n  background-color: #8afbff !important;\n}.border-primary.border-accent-2 {\n  border: 1px solid #8afbff !important;\n}.border-top-primary.border-top-accent-2 {\n  border-top: 1px solid #8afbff !important;\n}.border-bottom-primary.border-bottom-accent-2 {\n  border-bottom: 1px solid #8afbff !important;\n}.border-left-primary.border-left-accent-2 {\n  border-left: 1px solid #8afbff !important;\n}.border-right-primary.border-right-accent-2 {\n  border-right: 1px solid #8afbff !important;\n}.overlay-primary.overlay-accent-2 {\n  background: #8afbff; /* The Fallback */\n  background: rgba(138, 251, 255, 0.6);\n}.text-primary.text-accent-3 {\n  color: #57faff !important;\n}.bg-primary.bg-accent-3 {\n  background-color: #57faff !important;\n}.border-primary.border-accent-3 {\n  border: 1px solid #57faff !important;\n}.border-top-primary.border-top-accent-3 {\n  border-top: 1px solid #57faff !important;\n}.border-bottom-primary.border-bottom-accent-3 {\n  border-bottom: 1px solid #57faff !important;\n}.border-left-primary.border-left-accent-3 {\n  border-left: 1px solid #57faff !important;\n}.border-right-primary.border-right-accent-3 {\n  border-right: 1px solid #57faff !important;\n}.overlay-primary.overlay-accent-3 {\n  background: #57faff; /* The Fallback */\n  background: rgba(87, 250, 255, 0.6);\n}.text-primary.text-accent-4 {\n  color: #3df9ff !important;\n}.bg-primary.bg-accent-4 {\n  background-color: #3df9ff !important;\n}.border-primary.border-accent-4 {\n  border: 1px solid #3df9ff !important;\n}.border-top-primary.border-top-accent-4 {\n  border-top: 1px solid #3df9ff !important;\n}.border-bottom-primary.border-bottom-accent-4 {\n  border-bottom: 1px solid #3df9ff !important;\n}.border-left-primary.border-left-accent-4 {\n  border-left: 1px solid #3df9ff !important;\n}.border-right-primary.border-right-accent-4 {\n  border-right: 1px solid #3df9ff !important;\n}.overlay-primary.overlay-accent-4 {\n  background: #3df9ff; /* The Fallback */\n  background: rgba(61, 249, 255, 0.6);\n}.text-secondary.text-lighten-5 {\n  color: #c4c6c8 !important;\n}.bg-secondary.bg-lighten-5 {\n  background-color: #c4c6c8 !important;\n}.border-secondary.border-lighten-5 {\n  border: 1px solid #c4c6c8 !important;\n}.border-top-secondary.border-top-lighten-5 {\n  border-top: 1px solid #c4c6c8 !important;\n}.border-bottom-secondary.border-bottom-lighten-5 {\n  border-bottom: 1px solid #c4c6c8 !important;\n}.border-left-secondary.border-left-lighten-5 {\n  border-left: 1px solid #c4c6c8 !important;\n}.border-right-secondary.border-right-lighten-5 {\n  border-right: 1px solid #c4c6c8 !important;\n}.overlay-secondary.overlay-lighten-5 {\n  background: #c4c6c8; /* The Fallback */\n  background: rgba(196, 198, 200, 0.6);\n}.text-secondary.text-lighten-4 {\n  color: #b7b9bc !important;\n}.bg-secondary.bg-lighten-4 {\n  background-color: #b7b9bc !important;\n}.border-secondary.border-lighten-4 {\n  border: 1px solid #b7b9bc !important;\n}.border-top-secondary.border-top-lighten-4 {\n  border-top: 1px solid #b7b9bc !important;\n}.border-bottom-secondary.border-bottom-lighten-4 {\n  border-bottom: 1px solid #b7b9bc !important;\n}.border-left-secondary.border-left-lighten-4 {\n  border-left: 1px solid #b7b9bc !important;\n}.border-right-secondary.border-right-lighten-4 {\n  border-right: 1px solid #b7b9bc !important;\n}.overlay-secondary.overlay-lighten-4 {\n  background: #b7b9bc; /* The Fallback */\n  background: rgba(183, 185, 188, 0.6);\n}.text-secondary.text-lighten-3 {\n  color: #aaacb0 !important;\n}.bg-secondary.bg-lighten-3 {\n  background-color: #aaacb0 !important;\n}.border-secondary.border-lighten-3 {\n  border: 1px solid #aaacb0 !important;\n}.border-top-secondary.border-top-lighten-3 {\n  border-top: 1px solid #aaacb0 !important;\n}.border-bottom-secondary.border-bottom-lighten-3 {\n  border-bottom: 1px solid #aaacb0 !important;\n}.border-left-secondary.border-left-lighten-3 {\n  border-left: 1px solid #aaacb0 !important;\n}.border-right-secondary.border-right-lighten-3 {\n  border-right: 1px solid #aaacb0 !important;\n}.overlay-secondary.overlay-lighten-3 {\n  background: #aaacb0; /* The Fallback */\n  background: rgba(170, 172, 176, 0.6);\n}.text-secondary.text-lighten-2 {\n  color: #9ca0a4 !important;\n}.bg-secondary.bg-lighten-2 {\n  background-color: #9ca0a4 !important;\n}.border-secondary.border-lighten-2 {\n  border: 1px solid #9ca0a4 !important;\n}.border-top-secondary.border-top-lighten-2 {\n  border-top: 1px solid #9ca0a4 !important;\n}.border-bottom-secondary.border-bottom-lighten-2 {\n  border-bottom: 1px solid #9ca0a4 !important;\n}.border-left-secondary.border-left-lighten-2 {\n  border-left: 1px solid #9ca0a4 !important;\n}.border-right-secondary.border-right-lighten-2 {\n  border-right: 1px solid #9ca0a4 !important;\n}.overlay-secondary.overlay-lighten-2 {\n  background: #9ca0a4; /* The Fallback */\n  background: rgba(156, 160, 164, 0.6);\n}.text-secondary.text-lighten-1 {\n  color: #8f9397 !important;\n}.bg-secondary.bg-lighten-1 {\n  background-color: #8f9397 !important;\n}.border-secondary.border-lighten-1 {\n  border: 1px solid #8f9397 !important;\n}.border-top-secondary.border-top-lighten-1 {\n  border-top: 1px solid #8f9397 !important;\n}.border-bottom-secondary.border-bottom-lighten-1 {\n  border-bottom: 1px solid #8f9397 !important;\n}.border-left-secondary.border-left-lighten-1 {\n  border-left: 1px solid #8f9397 !important;\n}.border-right-secondary.border-right-lighten-1 {\n  border-right: 1px solid #8f9397 !important;\n}.overlay-secondary.overlay-lighten-1 {\n  background: #8f9397; /* The Fallback */\n  background: rgba(143, 147, 151, 0.6);\n}.bg-secondary {\n  background-color: #82868b !important;\n}.bg-secondary .card-header,\n.bg-secondary .card-footer {\n  background-color: transparent;\n}.alert-secondary {\n  background: rgba(130, 134, 139, 0.12) !important;\n  color: #82868b !important;\n}.alert-secondary .alert-heading {\n  box-shadow: rgba(130, 134, 139, 0.4) 0px 6px 15px -7px;\n}.alert-secondary .alert-link {\n  color: #75797e !important;\n}.alert-secondary .close {\n  color: #82868b !important;\n}.bg-light-secondary {\n  background: rgba(130, 134, 139, 0.12) !important;\n  color: #82868b !important;\n}.bg-light-secondary.fc-h-event, .bg-light-secondary.fc-v-event {\n  border-color: rgba(130, 134, 139, 0.1);\n}.bg-light-secondary .fc-list-event-dot,\n.bg-light-secondary .fc-daygrid-event-dot {\n  border-color: #82868b !important;\n}.bg-light-secondary.fc-list-event:hover td {\n  background: rgba(130, 134, 139, 0.1) !important;\n}.bg-light-secondary.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-secondary {\n  color: #82868b !important;\n}.border-secondary {\n  border: 1px solid #82868b !important;\n}.border-top-secondary {\n  border-top: 1px solid #82868b;\n}.border-bottom-secondary {\n  border-bottom: 1px solid #82868b;\n}.border-left-secondary {\n  border-left: 1px solid #82868b;\n}.border-right-secondary {\n  border-right: 1px solid #82868b;\n}.bg-secondary.badge-glow,\n.border-secondary.badge-glow,\n.badge-secondary.badge-glow {\n  box-shadow: 0px 0px 10px #82868b;\n}.badge.badge-light-secondary {\n  background-color: rgba(130, 134, 139, 0.12);\n  color: #82868b !important;\n}.overlay-secondary {\n  background: #82868b; /* The Fallback */\n  background: rgba(130, 134, 139, 0.6);\n}.btn-secondary {\n  border-color: #82868b !important;\n  background-color: #82868b !important;\n  color: #fff !important;\n}.btn-secondary:focus, .btn-secondary:active, .btn-secondary.active {\n  color: #fff;\n  background-color: #75797e !important;\n}.btn-secondary:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #82868b;\n}.btn-secondary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-secondary {\n  background-color: transparent;\n  color: #82868b;\n}.btn-flat-secondary:hover {\n  color: #82868b;\n}.btn-flat-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(130, 134, 139, 0.12);\n}.btn-flat-secondary:active, .btn-flat-secondary.active, .btn-flat-secondary:focus {\n  background-color: rgba(130, 134, 139, 0.2);\n  color: #82868b;\n}.btn-flat-secondary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-secondary {\n  background-color: #82868b;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: #8f9397;\n}.btn-relief-secondary:active, .btn-relief-secondary.active, .btn-relief-secondary:focus {\n  background-color: #75797e;\n}.btn-relief-secondary:hover {\n  color: #fff;\n}.btn-relief-secondary:active, .btn-relief-secondary.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-secondary {\n  border: 1px solid #82868b !important;\n  background-color: transparent;\n  color: #82868b;\n}.btn-outline-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(130, 134, 139, 0.04);\n  color: #82868b;\n}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .btn-outline-secondary:not(:disabled):not(.disabled):focus {\n  background-color: rgba(130, 134, 139, 0.2);\n  color: #82868b;\n}.btn-outline-secondary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-secondary.dropdown-toggle {\n  background-color: rgba(130, 134, 139, 0.2);\n  color: #82868b;\n}.btn-outline-secondary.waves-effect .waves-ripple,\n.btn-flat-secondary.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(130, 134, 139, 0.2) 0, rgba(130, 134, 139, 0.3) 40%, rgba(130, 134, 139, 0.4) 50%, rgba(130, 134, 139, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-secondary {\n  background-color: #82868b;\n}.modal.modal-secondary .modal-header .modal-title {\n  color: #82868b;\n}.modal.modal-secondary .modal-header .close {\n  color: #82868b !important;\n}.pagination-secondary .page-item.active .page-link {\n  background: #82868b !important;\n  color: #fff;\n}.pagination-secondary .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-secondary .page-item .page-link:hover {\n  color: #82868b;\n}.pagination-secondary .page-item.prev-item .page-link:hover, .pagination-secondary .page-item.next-item .page-link:hover {\n  background: #82868b;\n  color: #fff;\n}.pagination-secondary .page-item.next-item .page-link:active:after, .pagination-secondary .page-item.next-item .page-link:hover:after, .pagination-secondary .page-item.next .page-link:active:after, .pagination-secondary .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-secondary .page-item.prev-item .page-link:active:before, .pagination-secondary .page-item.prev-item .page-link:hover:before, .pagination-secondary .page-item.prev .page-link:active:before, .pagination-secondary .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-secondary .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #82868b !important;\n  border-color: #82868b;\n  box-shadow: 0 4px 18px -4px rgba(130, 134, 139, 0.65);\n}.progress-bar-secondary {\n  background-color: rgba(130, 134, 139, 0.12);\n}.progress-bar-secondary .progress-bar {\n  background-color: #82868b;\n}.timeline .timeline-point-secondary {\n  border-color: #82868b !important;\n}.timeline .timeline-point-secondary i,\n.timeline .timeline-point-secondary svg {\n  stroke: #82868b !important;\n}.timeline .timeline-point-secondary.timeline-point-indicator {\n  background-color: #82868b !important;\n}.timeline .timeline-point-secondary.timeline-point-indicator:before {\n  background: rgba(130, 134, 139, 0.12) !important;\n}.divider.divider-secondary .divider-text:before, .divider.divider-secondary .divider-text:after {\n  border-color: #82868b !important;\n}input:focus ~ .bg-secondary {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #82868b !important;\n}.custom-control-secondary .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #82868b;\n  background-color: #82868b;\n}.custom-control-secondary.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-secondary.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-secondary.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-secondary.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(130, 134, 139, 0.4) !important;\n}.custom-control-secondary .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(130, 134, 139, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-secondary .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #82868b !important;\n}.custom-switch-secondary .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #82868b !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-secondary .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #82868b !important;\n  border-color: #82868b !important;\n}.text-secondary.text-darken-1 {\n  color: #75797e !important;\n}.bg-secondary.bg-darken-1 {\n  background-color: #75797e !important;\n}.border-secondary.border-darken-1 {\n  border: 1px solid #75797e !important;\n}.border-top-secondary.border-top-darken-1 {\n  border-top: 1px solid #75797e !important;\n}.border-bottom-secondary.border-bottom-darken-1 {\n  border-bottom: 1px solid #75797e !important;\n}.border-left-secondary.border-left-darken-1 {\n  border-left: 1px solid #75797e !important;\n}.border-right-secondary.border-right-darken-1 {\n  border-right: 1px solid #75797e !important;\n}.overlay-secondary.overlay-darken-1 {\n  background: #75797e; /* The Fallback */\n  background: rgba(117, 121, 126, 0.6);\n}.text-secondary.text-darken-2 {\n  color: #696d71 !important;\n}.bg-secondary.bg-darken-2 {\n  background-color: #696d71 !important;\n}.border-secondary.border-darken-2 {\n  border: 1px solid #696d71 !important;\n}.border-top-secondary.border-top-darken-2 {\n  border-top: 1px solid #696d71 !important;\n}.border-bottom-secondary.border-bottom-darken-2 {\n  border-bottom: 1px solid #696d71 !important;\n}.border-left-secondary.border-left-darken-2 {\n  border-left: 1px solid #696d71 !important;\n}.border-right-secondary.border-right-darken-2 {\n  border-right: 1px solid #696d71 !important;\n}.overlay-secondary.overlay-darken-2 {\n  background: #696d71; /* The Fallback */\n  background: rgba(105, 109, 113, 0.6);\n}.text-secondary.text-darken-3 {\n  color: #5d6064 !important;\n}.bg-secondary.bg-darken-3 {\n  background-color: #5d6064 !important;\n}.border-secondary.border-darken-3 {\n  border: 1px solid #5d6064 !important;\n}.border-top-secondary.border-top-darken-3 {\n  border-top: 1px solid #5d6064 !important;\n}.border-bottom-secondary.border-bottom-darken-3 {\n  border-bottom: 1px solid #5d6064 !important;\n}.border-left-secondary.border-left-darken-3 {\n  border-left: 1px solid #5d6064 !important;\n}.border-right-secondary.border-right-darken-3 {\n  border-right: 1px solid #5d6064 !important;\n}.overlay-secondary.overlay-darken-3 {\n  background: #5d6064; /* The Fallback */\n  background: rgba(93, 96, 100, 0.6);\n}.text-secondary.text-darken-4 {\n  color: #505357 !important;\n}.bg-secondary.bg-darken-4 {\n  background-color: #505357 !important;\n}.border-secondary.border-darken-4 {\n  border: 1px solid #505357 !important;\n}.border-top-secondary.border-top-darken-4 {\n  border-top: 1px solid #505357 !important;\n}.border-bottom-secondary.border-bottom-darken-4 {\n  border-bottom: 1px solid #505357 !important;\n}.border-left-secondary.border-left-darken-4 {\n  border-left: 1px solid #505357 !important;\n}.border-right-secondary.border-right-darken-4 {\n  border-right: 1px solid #505357 !important;\n}.overlay-secondary.overlay-darken-4 {\n  background: #505357; /* The Fallback */\n  background: rgba(80, 83, 87, 0.6);\n}.text-success.text-lighten-5 {\n  color: #88e7b2 !important;\n}.bg-success.bg-lighten-5 {\n  background-color: #88e7b2 !important;\n}.border-success.border-lighten-5 {\n  border: 1px solid #88e7b2 !important;\n}.border-top-success.border-top-lighten-5 {\n  border-top: 1px solid #88e7b2 !important;\n}.border-bottom-success.border-bottom-lighten-5 {\n  border-bottom: 1px solid #88e7b2 !important;\n}.border-left-success.border-left-lighten-5 {\n  border-left: 1px solid #88e7b2 !important;\n}.border-right-success.border-right-lighten-5 {\n  border-right: 1px solid #88e7b2 !important;\n}.overlay-success.overlay-lighten-5 {\n  background: #88e7b2; /* The Fallback */\n  background: rgba(136, 231, 178, 0.6);\n}.text-success.text-lighten-4 {\n  color: #72e3a4 !important;\n}.bg-success.bg-lighten-4 {\n  background-color: #72e3a4 !important;\n}.border-success.border-lighten-4 {\n  border: 1px solid #72e3a4 !important;\n}.border-top-success.border-top-lighten-4 {\n  border-top: 1px solid #72e3a4 !important;\n}.border-bottom-success.border-bottom-lighten-4 {\n  border-bottom: 1px solid #72e3a4 !important;\n}.border-left-success.border-left-lighten-4 {\n  border-left: 1px solid #72e3a4 !important;\n}.border-right-success.border-right-lighten-4 {\n  border-right: 1px solid #72e3a4 !important;\n}.overlay-success.overlay-lighten-4 {\n  background: #72e3a4; /* The Fallback */\n  background: rgba(114, 227, 164, 0.6);\n}.text-success.text-lighten-3 {\n  color: #5dde97 !important;\n}.bg-success.bg-lighten-3 {\n  background-color: #5dde97 !important;\n}.border-success.border-lighten-3 {\n  border: 1px solid #5dde97 !important;\n}.border-top-success.border-top-lighten-3 {\n  border-top: 1px solid #5dde97 !important;\n}.border-bottom-success.border-bottom-lighten-3 {\n  border-bottom: 1px solid #5dde97 !important;\n}.border-left-success.border-left-lighten-3 {\n  border-left: 1px solid #5dde97 !important;\n}.border-right-success.border-right-lighten-3 {\n  border-right: 1px solid #5dde97 !important;\n}.overlay-success.overlay-lighten-3 {\n  background: #5dde97; /* The Fallback */\n  background: rgba(93, 222, 151, 0.6);\n}.text-success.text-lighten-2 {\n  color: #48da89 !important;\n}.bg-success.bg-lighten-2 {\n  background-color: #48da89 !important;\n}.border-success.border-lighten-2 {\n  border: 1px solid #48da89 !important;\n}.border-top-success.border-top-lighten-2 {\n  border-top: 1px solid #48da89 !important;\n}.border-bottom-success.border-bottom-lighten-2 {\n  border-bottom: 1px solid #48da89 !important;\n}.border-left-success.border-left-lighten-2 {\n  border-left: 1px solid #48da89 !important;\n}.border-right-success.border-right-lighten-2 {\n  border-right: 1px solid #48da89 !important;\n}.overlay-success.overlay-lighten-2 {\n  background: #48da89; /* The Fallback */\n  background: rgba(72, 218, 137, 0.6);\n}.text-success.text-lighten-1 {\n  color: #33d67c !important;\n}.bg-success.bg-lighten-1 {\n  background-color: #33d67c !important;\n}.border-success.border-lighten-1 {\n  border: 1px solid #33d67c !important;\n}.border-top-success.border-top-lighten-1 {\n  border-top: 1px solid #33d67c !important;\n}.border-bottom-success.border-bottom-lighten-1 {\n  border-bottom: 1px solid #33d67c !important;\n}.border-left-success.border-left-lighten-1 {\n  border-left: 1px solid #33d67c !important;\n}.border-right-success.border-right-lighten-1 {\n  border-right: 1px solid #33d67c !important;\n}.overlay-success.overlay-lighten-1 {\n  background: #33d67c; /* The Fallback */\n  background: rgba(51, 214, 124, 0.6);\n}.bg-success {\n  background-color: #28c76f !important;\n}.bg-success .card-header,\n.bg-success .card-footer {\n  background-color: transparent;\n}.alert-success {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28c76f !important;\n}.alert-success .alert-heading {\n  box-shadow: rgba(40, 199, 111, 0.4) 0px 6px 15px -7px;\n}.alert-success .alert-link {\n  color: #24b263 !important;\n}.alert-success .close {\n  color: #28c76f !important;\n}.bg-light-success {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28c76f !important;\n}.bg-light-success.fc-h-event, .bg-light-success.fc-v-event {\n  border-color: rgba(40, 199, 111, 0.1);\n}.bg-light-success .fc-list-event-dot,\n.bg-light-success .fc-daygrid-event-dot {\n  border-color: #28c76f !important;\n}.bg-light-success.fc-list-event:hover td {\n  background: rgba(40, 199, 111, 0.1) !important;\n}.bg-light-success.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-success {\n  color: #28c76f !important;\n}.border-success {\n  border: 1px solid #28c76f !important;\n}.border-top-success {\n  border-top: 1px solid #28c76f;\n}.border-bottom-success {\n  border-bottom: 1px solid #28c76f;\n}.border-left-success {\n  border-left: 1px solid #28c76f;\n}.border-right-success {\n  border-right: 1px solid #28c76f;\n}.bg-success.badge-glow,\n.border-success.badge-glow,\n.badge-success.badge-glow {\n  box-shadow: 0px 0px 10px #28c76f;\n}.badge.badge-light-success {\n  background-color: rgba(40, 199, 111, 0.12);\n  color: #28c76f !important;\n}.overlay-success {\n  background: #28c76f; /* The Fallback */\n  background: rgba(40, 199, 111, 0.6);\n}.btn-success {\n  border-color: #28c76f !important;\n  background-color: #28c76f !important;\n  color: #fff !important;\n}.btn-success:focus, .btn-success:active, .btn-success.active {\n  color: #fff;\n  background-color: #24b263 !important;\n}.btn-success:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #28c76f;\n}.btn-success:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-success {\n  background-color: transparent;\n  color: #28c76f;\n}.btn-flat-success:hover {\n  color: #28c76f;\n}.btn-flat-success:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(40, 199, 111, 0.12);\n}.btn-flat-success:active, .btn-flat-success.active, .btn-flat-success:focus {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-flat-success.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-success {\n  background-color: #28c76f;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-success:hover:not(.disabled):not(:disabled) {\n  background-color: #33d67c;\n}.btn-relief-success:active, .btn-relief-success.active, .btn-relief-success:focus {\n  background-color: #24b263;\n}.btn-relief-success:hover {\n  color: #fff;\n}.btn-relief-success:active, .btn-relief-success.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-success {\n  border: 1px solid #28c76f !important;\n  background-color: transparent;\n  color: #28c76f;\n}.btn-outline-success:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(40, 199, 111, 0.04);\n  color: #28c76f;\n}.btn-outline-success:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .btn-outline-success:not(:disabled):not(.disabled):focus {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-outline-success.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-success.dropdown-toggle {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-outline-success.waves-effect .waves-ripple,\n.btn-flat-success.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(40, 199, 111, 0.2) 0, rgba(40, 199, 111, 0.3) 40%, rgba(40, 199, 111, 0.4) 50%, rgba(40, 199, 111, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-success {\n  background-color: #28c76f;\n}.modal.modal-success .modal-header .modal-title {\n  color: #28c76f;\n}.modal.modal-success .modal-header .close {\n  color: #28c76f !important;\n}.pagination-success .page-item.active .page-link {\n  background: #28c76f !important;\n  color: #fff;\n}.pagination-success .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-success .page-item .page-link:hover {\n  color: #28c76f;\n}.pagination-success .page-item.prev-item .page-link:hover, .pagination-success .page-item.next-item .page-link:hover {\n  background: #28c76f;\n  color: #fff;\n}.pagination-success .page-item.next-item .page-link:active:after, .pagination-success .page-item.next-item .page-link:hover:after, .pagination-success .page-item.next .page-link:active:after, .pagination-success .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-success .page-item.prev-item .page-link:active:before, .pagination-success .page-item.prev-item .page-link:hover:before, .pagination-success .page-item.prev .page-link:active:before, .pagination-success .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-success .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #28c76f !important;\n  border-color: #28c76f;\n  box-shadow: 0 4px 18px -4px rgba(40, 199, 111, 0.65);\n}.progress-bar-success {\n  background-color: rgba(40, 199, 111, 0.12);\n}.progress-bar-success .progress-bar {\n  background-color: #28c76f;\n}.timeline .timeline-point-success {\n  border-color: #28c76f !important;\n}.timeline .timeline-point-success i,\n.timeline .timeline-point-success svg {\n  stroke: #28c76f !important;\n}.timeline .timeline-point-success.timeline-point-indicator {\n  background-color: #28c76f !important;\n}.timeline .timeline-point-success.timeline-point-indicator:before {\n  background: rgba(40, 199, 111, 0.12) !important;\n}.divider.divider-success .divider-text:before, .divider.divider-success .divider-text:after {\n  border-color: #28c76f !important;\n}input:focus ~ .bg-success {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #28c76f !important;\n}.custom-control-success .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #28c76f;\n  background-color: #28c76f;\n}.custom-control-success.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-success.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-success.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-success.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(40, 199, 111, 0.4) !important;\n}.custom-control-success .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(40, 199, 111, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-success .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #28c76f !important;\n}.custom-switch-success .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #28c76f !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-success .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #28c76f !important;\n  border-color: #28c76f !important;\n}.text-success.text-darken-1 {\n  color: #24b263 !important;\n}.bg-success.bg-darken-1 {\n  background-color: #24b263 !important;\n}.border-success.border-darken-1 {\n  border: 1px solid #24b263 !important;\n}.border-top-success.border-top-darken-1 {\n  border-top: 1px solid #24b263 !important;\n}.border-bottom-success.border-bottom-darken-1 {\n  border-bottom: 1px solid #24b263 !important;\n}.border-left-success.border-left-darken-1 {\n  border-left: 1px solid #24b263 !important;\n}.border-right-success.border-right-darken-1 {\n  border-right: 1px solid #24b263 !important;\n}.overlay-success.overlay-darken-1 {\n  background: #24b263; /* The Fallback */\n  background: rgba(36, 178, 99, 0.6);\n}.text-success.text-darken-2 {\n  color: #1f9d57 !important;\n}.bg-success.bg-darken-2 {\n  background-color: #1f9d57 !important;\n}.border-success.border-darken-2 {\n  border: 1px solid #1f9d57 !important;\n}.border-top-success.border-top-darken-2 {\n  border-top: 1px solid #1f9d57 !important;\n}.border-bottom-success.border-bottom-darken-2 {\n  border-bottom: 1px solid #1f9d57 !important;\n}.border-left-success.border-left-darken-2 {\n  border-left: 1px solid #1f9d57 !important;\n}.border-right-success.border-right-darken-2 {\n  border-right: 1px solid #1f9d57 !important;\n}.overlay-success.overlay-darken-2 {\n  background: #1f9d57; /* The Fallback */\n  background: rgba(31, 157, 87, 0.6);\n}.text-success.text-darken-3 {\n  color: #1b874b !important;\n}.bg-success.bg-darken-3 {\n  background-color: #1b874b !important;\n}.border-success.border-darken-3 {\n  border: 1px solid #1b874b !important;\n}.border-top-success.border-top-darken-3 {\n  border-top: 1px solid #1b874b !important;\n}.border-bottom-success.border-bottom-darken-3 {\n  border-bottom: 1px solid #1b874b !important;\n}.border-left-success.border-left-darken-3 {\n  border-left: 1px solid #1b874b !important;\n}.border-right-success.border-right-darken-3 {\n  border-right: 1px solid #1b874b !important;\n}.overlay-success.overlay-darken-3 {\n  background: #1b874b; /* The Fallback */\n  background: rgba(27, 135, 75, 0.6);\n}.text-success.text-darken-4 {\n  color: #177240 !important;\n}.bg-success.bg-darken-4 {\n  background-color: #177240 !important;\n}.border-success.border-darken-4 {\n  border: 1px solid #177240 !important;\n}.border-top-success.border-top-darken-4 {\n  border-top: 1px solid #177240 !important;\n}.border-bottom-success.border-bottom-darken-4 {\n  border-bottom: 1px solid #177240 !important;\n}.border-left-success.border-left-darken-4 {\n  border-left: 1px solid #177240 !important;\n}.border-right-success.border-right-darken-4 {\n  border-right: 1px solid #177240 !important;\n}.overlay-success.overlay-darken-4 {\n  background: #177240; /* The Fallback */\n  background: rgba(23, 114, 64, 0.6);\n}.text-success.text-accent-1 {\n  color: #e1fff1 !important;\n}.bg-success.bg-accent-1 {\n  background-color: #e1fff1 !important;\n}.border-success.border-accent-1 {\n  border: 1px solid #e1fff1 !important;\n}.border-top-success.border-top-accent-1 {\n  border-top: 1px solid #e1fff1 !important;\n}.border-bottom-success.border-bottom-accent-1 {\n  border-bottom: 1px solid #e1fff1 !important;\n}.border-left-success.border-left-accent-1 {\n  border-left: 1px solid #e1fff1 !important;\n}.border-right-success.border-right-accent-1 {\n  border-right: 1px solid #e1fff1 !important;\n}.overlay-success.overlay-accent-1 {\n  background: #e1fff1; /* The Fallback */\n  background: rgba(225, 255, 241, 0.6);\n}.text-success.text-accent-2 {\n  color: #aeffd9 !important;\n}.bg-success.bg-accent-2 {\n  background-color: #aeffd9 !important;\n}.border-success.border-accent-2 {\n  border: 1px solid #aeffd9 !important;\n}.border-top-success.border-top-accent-2 {\n  border-top: 1px solid #aeffd9 !important;\n}.border-bottom-success.border-bottom-accent-2 {\n  border-bottom: 1px solid #aeffd9 !important;\n}.border-left-success.border-left-accent-2 {\n  border-left: 1px solid #aeffd9 !important;\n}.border-right-success.border-right-accent-2 {\n  border-right: 1px solid #aeffd9 !important;\n}.overlay-success.overlay-accent-2 {\n  background: #aeffd9; /* The Fallback */\n  background: rgba(174, 255, 217, 0.6);\n}.text-success.text-accent-3 {\n  color: #7bffc1 !important;\n}.bg-success.bg-accent-3 {\n  background-color: #7bffc1 !important;\n}.border-success.border-accent-3 {\n  border: 1px solid #7bffc1 !important;\n}.border-top-success.border-top-accent-3 {\n  border-top: 1px solid #7bffc1 !important;\n}.border-bottom-success.border-bottom-accent-3 {\n  border-bottom: 1px solid #7bffc1 !important;\n}.border-left-success.border-left-accent-3 {\n  border-left: 1px solid #7bffc1 !important;\n}.border-right-success.border-right-accent-3 {\n  border-right: 1px solid #7bffc1 !important;\n}.overlay-success.overlay-accent-3 {\n  background: #7bffc1; /* The Fallback */\n  background: rgba(123, 255, 193, 0.6);\n}.text-success.text-accent-4 {\n  color: #62ffb5 !important;\n}.bg-success.bg-accent-4 {\n  background-color: #62ffb5 !important;\n}.border-success.border-accent-4 {\n  border: 1px solid #62ffb5 !important;\n}.border-top-success.border-top-accent-4 {\n  border-top: 1px solid #62ffb5 !important;\n}.border-bottom-success.border-bottom-accent-4 {\n  border-bottom: 1px solid #62ffb5 !important;\n}.border-left-success.border-left-accent-4 {\n  border-left: 1px solid #62ffb5 !important;\n}.border-right-success.border-right-accent-4 {\n  border-right: 1px solid #62ffb5 !important;\n}.overlay-success.overlay-accent-4 {\n  background: #62ffb5; /* The Fallback */\n  background: rgba(98, 255, 181, 0.6);\n}.text-info.text-lighten-5 {\n  color: #69efff !important;\n}.bg-info.bg-lighten-5 {\n  background-color: #69efff !important;\n}.border-info.border-lighten-5 {\n  border: 1px solid #69efff !important;\n}.border-top-info.border-top-lighten-5 {\n  border-top: 1px solid #69efff !important;\n}.border-bottom-info.border-bottom-lighten-5 {\n  border-bottom: 1px solid #69efff !important;\n}.border-left-info.border-left-lighten-5 {\n  border-left: 1px solid #69efff !important;\n}.border-right-info.border-right-lighten-5 {\n  border-right: 1px solid #69efff !important;\n}.overlay-info.overlay-lighten-5 {\n  background: #69efff; /* The Fallback */\n  background: rgba(105, 239, 255, 0.6);\n}.text-info.text-lighten-4 {\n  color: #4fecff !important;\n}.bg-info.bg-lighten-4 {\n  background-color: #4fecff !important;\n}.border-info.border-lighten-4 {\n  border: 1px solid #4fecff !important;\n}.border-top-info.border-top-lighten-4 {\n  border-top: 1px solid #4fecff !important;\n}.border-bottom-info.border-bottom-lighten-4 {\n  border-bottom: 1px solid #4fecff !important;\n}.border-left-info.border-left-lighten-4 {\n  border-left: 1px solid #4fecff !important;\n}.border-right-info.border-right-lighten-4 {\n  border-right: 1px solid #4fecff !important;\n}.overlay-info.overlay-lighten-4 {\n  background: #4fecff; /* The Fallback */\n  background: rgba(79, 236, 255, 0.6);\n}.text-info.text-lighten-3 {\n  color: #36e9ff !important;\n}.bg-info.bg-lighten-3 {\n  background-color: #36e9ff !important;\n}.border-info.border-lighten-3 {\n  border: 1px solid #36e9ff !important;\n}.border-top-info.border-top-lighten-3 {\n  border-top: 1px solid #36e9ff !important;\n}.border-bottom-info.border-bottom-lighten-3 {\n  border-bottom: 1px solid #36e9ff !important;\n}.border-left-info.border-left-lighten-3 {\n  border-left: 1px solid #36e9ff !important;\n}.border-right-info.border-right-lighten-3 {\n  border-right: 1px solid #36e9ff !important;\n}.overlay-info.overlay-lighten-3 {\n  background: #36e9ff; /* The Fallback */\n  background: rgba(54, 233, 255, 0.6);\n}.text-info.text-lighten-2 {\n  color: #1ce7ff !important;\n}.bg-info.bg-lighten-2 {\n  background-color: #1ce7ff !important;\n}.border-info.border-lighten-2 {\n  border: 1px solid #1ce7ff !important;\n}.border-top-info.border-top-lighten-2 {\n  border-top: 1px solid #1ce7ff !important;\n}.border-bottom-info.border-bottom-lighten-2 {\n  border-bottom: 1px solid #1ce7ff !important;\n}.border-left-info.border-left-lighten-2 {\n  border-left: 1px solid #1ce7ff !important;\n}.border-right-info.border-right-lighten-2 {\n  border-right: 1px solid #1ce7ff !important;\n}.overlay-info.overlay-lighten-2 {\n  background: #1ce7ff; /* The Fallback */\n  background: rgba(28, 231, 255, 0.6);\n}.text-info.text-lighten-1 {\n  color: #03e4ff !important;\n}.bg-info.bg-lighten-1 {\n  background-color: #03e4ff !important;\n}.border-info.border-lighten-1 {\n  border: 1px solid #03e4ff !important;\n}.border-top-info.border-top-lighten-1 {\n  border-top: 1px solid #03e4ff !important;\n}.border-bottom-info.border-bottom-lighten-1 {\n  border-bottom: 1px solid #03e4ff !important;\n}.border-left-info.border-left-lighten-1 {\n  border-left: 1px solid #03e4ff !important;\n}.border-right-info.border-right-lighten-1 {\n  border-right: 1px solid #03e4ff !important;\n}.overlay-info.overlay-lighten-1 {\n  background: #03e4ff; /* The Fallback */\n  background: rgba(3, 228, 255, 0.6);\n}.bg-info {\n  background-color: #00cfe8 !important;\n}.bg-info .card-header,\n.bg-info .card-footer {\n  background-color: transparent;\n}.alert-info {\n  background: rgba(0, 207, 232, 0.12) !important;\n  color: #00cfe8 !important;\n}.alert-info .alert-heading {\n  box-shadow: rgba(0, 207, 232, 0.4) 0px 6px 15px -7px;\n}.alert-info .alert-link {\n  color: #00b8cf !important;\n}.alert-info .close {\n  color: #00cfe8 !important;\n}.bg-light-info {\n  background: rgba(0, 207, 232, 0.12) !important;\n  color: #00cfe8 !important;\n}.bg-light-info.fc-h-event, .bg-light-info.fc-v-event {\n  border-color: rgba(0, 207, 232, 0.1);\n}.bg-light-info .fc-list-event-dot,\n.bg-light-info .fc-daygrid-event-dot {\n  border-color: #00cfe8 !important;\n}.bg-light-info.fc-list-event:hover td {\n  background: rgba(0, 207, 232, 0.1) !important;\n}.bg-light-info.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-info {\n  color: #00cfe8 !important;\n}.border-info {\n  border: 1px solid #00cfe8 !important;\n}.border-top-info {\n  border-top: 1px solid #00cfe8;\n}.border-bottom-info {\n  border-bottom: 1px solid #00cfe8;\n}.border-left-info {\n  border-left: 1px solid #00cfe8;\n}.border-right-info {\n  border-right: 1px solid #00cfe8;\n}.bg-info.badge-glow,\n.border-info.badge-glow,\n.badge-info.badge-glow {\n  box-shadow: 0px 0px 10px #00cfe8;\n}.badge.badge-light-info {\n  background-color: rgba(0, 207, 232, 0.12);\n  color: #00cfe8 !important;\n}.overlay-info {\n  background: #00cfe8; /* The Fallback */\n  background: rgba(0, 207, 232, 0.6);\n}.btn-info {\n  border-color: #00cfe8 !important;\n  background-color: #00cfe8 !important;\n  color: #fff !important;\n}.btn-info:focus, .btn-info:active, .btn-info.active {\n  color: #fff;\n  background-color: #00b8cf !important;\n}.btn-info:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #00cfe8;\n}.btn-info:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-info {\n  background-color: transparent;\n  color: #00cfe8;\n}.btn-flat-info:hover {\n  color: #00cfe8;\n}.btn-flat-info:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(0, 207, 232, 0.12);\n}.btn-flat-info:active, .btn-flat-info.active, .btn-flat-info:focus {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-flat-info.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-info {\n  background-color: #00cfe8;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-info:hover:not(.disabled):not(:disabled) {\n  background-color: #03e4ff;\n}.btn-relief-info:active, .btn-relief-info.active, .btn-relief-info:focus {\n  background-color: #00b8cf;\n}.btn-relief-info:hover {\n  color: #fff;\n}.btn-relief-info:active, .btn-relief-info.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-info {\n  border: 1px solid #00cfe8 !important;\n  background-color: transparent;\n  color: #00cfe8;\n}.btn-outline-info:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(0, 207, 232, 0.04);\n  color: #00cfe8;\n}.btn-outline-info:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .btn-outline-info:not(:disabled):not(.disabled):focus {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-outline-info.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-info.dropdown-toggle {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-outline-info.waves-effect .waves-ripple,\n.btn-flat-info.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(0, 207, 232, 0.2) 0, rgba(0, 207, 232, 0.3) 40%, rgba(0, 207, 232, 0.4) 50%, rgba(0, 207, 232, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-info {\n  background-color: #00cfe8;\n}.modal.modal-info .modal-header .modal-title {\n  color: #00cfe8;\n}.modal.modal-info .modal-header .close {\n  color: #00cfe8 !important;\n}.pagination-info .page-item.active .page-link {\n  background: #00cfe8 !important;\n  color: #fff;\n}.pagination-info .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-info .page-item .page-link:hover {\n  color: #00cfe8;\n}.pagination-info .page-item.prev-item .page-link:hover, .pagination-info .page-item.next-item .page-link:hover {\n  background: #00cfe8;\n  color: #fff;\n}.pagination-info .page-item.next-item .page-link:active:after, .pagination-info .page-item.next-item .page-link:hover:after, .pagination-info .page-item.next .page-link:active:after, .pagination-info .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-info .page-item.prev-item .page-link:active:before, .pagination-info .page-item.prev-item .page-link:hover:before, .pagination-info .page-item.prev .page-link:active:before, .pagination-info .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-info .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #00cfe8 !important;\n  border-color: #00cfe8;\n  box-shadow: 0 4px 18px -4px rgba(0, 207, 232, 0.65);\n}.progress-bar-info {\n  background-color: rgba(0, 207, 232, 0.12);\n}.progress-bar-info .progress-bar {\n  background-color: #00cfe8;\n}.timeline .timeline-point-info {\n  border-color: #00cfe8 !important;\n}.timeline .timeline-point-info i,\n.timeline .timeline-point-info svg {\n  stroke: #00cfe8 !important;\n}.timeline .timeline-point-info.timeline-point-indicator {\n  background-color: #00cfe8 !important;\n}.timeline .timeline-point-info.timeline-point-indicator:before {\n  background: rgba(0, 207, 232, 0.12) !important;\n}.divider.divider-info .divider-text:before, .divider.divider-info .divider-text:after {\n  border-color: #00cfe8 !important;\n}input:focus ~ .bg-info {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #00cfe8 !important;\n}.custom-control-info .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #00cfe8;\n  background-color: #00cfe8;\n}.custom-control-info.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-info.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-info.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-info.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(0, 207, 232, 0.4) !important;\n}.custom-control-info .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 207, 232, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-info .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #00cfe8 !important;\n}.custom-switch-info .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #00cfe8 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-info .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #00cfe8 !important;\n  border-color: #00cfe8 !important;\n}.text-info.text-darken-1 {\n  color: #00b8cf !important;\n}.bg-info.bg-darken-1 {\n  background-color: #00b8cf !important;\n}.border-info.border-darken-1 {\n  border: 1px solid #00b8cf !important;\n}.border-top-info.border-top-darken-1 {\n  border-top: 1px solid #00b8cf !important;\n}.border-bottom-info.border-bottom-darken-1 {\n  border-bottom: 1px solid #00b8cf !important;\n}.border-left-info.border-left-darken-1 {\n  border-left: 1px solid #00b8cf !important;\n}.border-right-info.border-right-darken-1 {\n  border-right: 1px solid #00b8cf !important;\n}.overlay-info.overlay-darken-1 {\n  background: #00b8cf; /* The Fallback */\n  background: rgba(0, 184, 207, 0.6);\n}.text-info.text-darken-2 {\n  color: #00a1b5 !important;\n}.bg-info.bg-darken-2 {\n  background-color: #00a1b5 !important;\n}.border-info.border-darken-2 {\n  border: 1px solid #00a1b5 !important;\n}.border-top-info.border-top-darken-2 {\n  border-top: 1px solid #00a1b5 !important;\n}.border-bottom-info.border-bottom-darken-2 {\n  border-bottom: 1px solid #00a1b5 !important;\n}.border-left-info.border-left-darken-2 {\n  border-left: 1px solid #00a1b5 !important;\n}.border-right-info.border-right-darken-2 {\n  border-right: 1px solid #00a1b5 !important;\n}.overlay-info.overlay-darken-2 {\n  background: #00a1b5; /* The Fallback */\n  background: rgba(0, 161, 181, 0.6);\n}.text-info.text-darken-3 {\n  color: #008b9c !important;\n}.bg-info.bg-darken-3 {\n  background-color: #008b9c !important;\n}.border-info.border-darken-3 {\n  border: 1px solid #008b9c !important;\n}.border-top-info.border-top-darken-3 {\n  border-top: 1px solid #008b9c !important;\n}.border-bottom-info.border-bottom-darken-3 {\n  border-bottom: 1px solid #008b9c !important;\n}.border-left-info.border-left-darken-3 {\n  border-left: 1px solid #008b9c !important;\n}.border-right-info.border-right-darken-3 {\n  border-right: 1px solid #008b9c !important;\n}.overlay-info.overlay-darken-3 {\n  background: #008b9c; /* The Fallback */\n  background: rgba(0, 139, 156, 0.6);\n}.text-info.text-darken-4 {\n  color: #007482 !important;\n}.bg-info.bg-darken-4 {\n  background-color: #007482 !important;\n}.border-info.border-darken-4 {\n  border: 1px solid #007482 !important;\n}.border-top-info.border-top-darken-4 {\n  border-top: 1px solid #007482 !important;\n}.border-bottom-info.border-bottom-darken-4 {\n  border-bottom: 1px solid #007482 !important;\n}.border-left-info.border-left-darken-4 {\n  border-left: 1px solid #007482 !important;\n}.border-right-info.border-right-darken-4 {\n  border-right: 1px solid #007482 !important;\n}.overlay-info.overlay-darken-4 {\n  background: #007482; /* The Fallback */\n  background: rgba(0, 116, 130, 0.6);\n}.text-info.text-accent-1 {\n  color: #feffff !important;\n}.bg-info.bg-accent-1 {\n  background-color: #feffff !important;\n}.border-info.border-accent-1 {\n  border: 1px solid #feffff !important;\n}.border-top-info.border-top-accent-1 {\n  border-top: 1px solid #feffff !important;\n}.border-bottom-info.border-bottom-accent-1 {\n  border-bottom: 1px solid #feffff !important;\n}.border-left-info.border-left-accent-1 {\n  border-left: 1px solid #feffff !important;\n}.border-right-info.border-right-accent-1 {\n  border-right: 1px solid #feffff !important;\n}.overlay-info.overlay-accent-1 {\n  background: #feffff; /* The Fallback */\n  background: rgba(254, 255, 255, 0.6);\n}.text-info.text-accent-2 {\n  color: #cbf5ff !important;\n}.bg-info.bg-accent-2 {\n  background-color: #cbf5ff !important;\n}.border-info.border-accent-2 {\n  border: 1px solid #cbf5ff !important;\n}.border-top-info.border-top-accent-2 {\n  border-top: 1px solid #cbf5ff !important;\n}.border-bottom-info.border-bottom-accent-2 {\n  border-bottom: 1px solid #cbf5ff !important;\n}.border-left-info.border-left-accent-2 {\n  border-left: 1px solid #cbf5ff !important;\n}.border-right-info.border-right-accent-2 {\n  border-right: 1px solid #cbf5ff !important;\n}.overlay-info.overlay-accent-2 {\n  background: #cbf5ff; /* The Fallback */\n  background: rgba(203, 245, 255, 0.6);\n}.text-info.text-accent-3 {\n  color: #98ecff !important;\n}.bg-info.bg-accent-3 {\n  background-color: #98ecff !important;\n}.border-info.border-accent-3 {\n  border: 1px solid #98ecff !important;\n}.border-top-info.border-top-accent-3 {\n  border-top: 1px solid #98ecff !important;\n}.border-bottom-info.border-bottom-accent-3 {\n  border-bottom: 1px solid #98ecff !important;\n}.border-left-info.border-left-accent-3 {\n  border-left: 1px solid #98ecff !important;\n}.border-right-info.border-right-accent-3 {\n  border-right: 1px solid #98ecff !important;\n}.overlay-info.overlay-accent-3 {\n  background: #98ecff; /* The Fallback */\n  background: rgba(152, 236, 255, 0.6);\n}.text-info.text-accent-4 {\n  color: #7fe7ff !important;\n}.bg-info.bg-accent-4 {\n  background-color: #7fe7ff !important;\n}.border-info.border-accent-4 {\n  border: 1px solid #7fe7ff !important;\n}.border-top-info.border-top-accent-4 {\n  border-top: 1px solid #7fe7ff !important;\n}.border-bottom-info.border-bottom-accent-4 {\n  border-bottom: 1px solid #7fe7ff !important;\n}.border-left-info.border-left-accent-4 {\n  border-left: 1px solid #7fe7ff !important;\n}.border-right-info.border-right-accent-4 {\n  border-right: 1px solid #7fe7ff !important;\n}.overlay-info.overlay-accent-4 {\n  background: #7fe7ff; /* The Fallback */\n  background: rgba(127, 231, 255, 0.6);\n}.text-warning.text-lighten-5 {\n  color: #ffe0c3 !important;\n}.bg-warning.bg-lighten-5 {\n  background-color: #ffe0c3 !important;\n}.border-warning.border-lighten-5 {\n  border: 1px solid #ffe0c3 !important;\n}.border-top-warning.border-top-lighten-5 {\n  border-top: 1px solid #ffe0c3 !important;\n}.border-bottom-warning.border-bottom-lighten-5 {\n  border-bottom: 1px solid #ffe0c3 !important;\n}.border-left-warning.border-left-lighten-5 {\n  border-left: 1px solid #ffe0c3 !important;\n}.border-right-warning.border-right-lighten-5 {\n  border-right: 1px solid #ffe0c3 !important;\n}.overlay-warning.overlay-lighten-5 {\n  background: #ffe0c3; /* The Fallback */\n  background: rgba(255, 224, 195, 0.6);\n}.text-warning.text-lighten-4 {\n  color: #ffd3a9 !important;\n}.bg-warning.bg-lighten-4 {\n  background-color: #ffd3a9 !important;\n}.border-warning.border-lighten-4 {\n  border: 1px solid #ffd3a9 !important;\n}.border-top-warning.border-top-lighten-4 {\n  border-top: 1px solid #ffd3a9 !important;\n}.border-bottom-warning.border-bottom-lighten-4 {\n  border-bottom: 1px solid #ffd3a9 !important;\n}.border-left-warning.border-left-lighten-4 {\n  border-left: 1px solid #ffd3a9 !important;\n}.border-right-warning.border-right-lighten-4 {\n  border-right: 1px solid #ffd3a9 !important;\n}.overlay-warning.overlay-lighten-4 {\n  background: #ffd3a9; /* The Fallback */\n  background: rgba(255, 211, 169, 0.6);\n}.text-warning.text-lighten-3 {\n  color: #ffc690 !important;\n}.bg-warning.bg-lighten-3 {\n  background-color: #ffc690 !important;\n}.border-warning.border-lighten-3 {\n  border: 1px solid #ffc690 !important;\n}.border-top-warning.border-top-lighten-3 {\n  border-top: 1px solid #ffc690 !important;\n}.border-bottom-warning.border-bottom-lighten-3 {\n  border-bottom: 1px solid #ffc690 !important;\n}.border-left-warning.border-left-lighten-3 {\n  border-left: 1px solid #ffc690 !important;\n}.border-right-warning.border-right-lighten-3 {\n  border-right: 1px solid #ffc690 !important;\n}.overlay-warning.overlay-lighten-3 {\n  background: #ffc690; /* The Fallback */\n  background: rgba(255, 198, 144, 0.6);\n}.text-warning.text-lighten-2 {\n  color: #ffb976 !important;\n}.bg-warning.bg-lighten-2 {\n  background-color: #ffb976 !important;\n}.border-warning.border-lighten-2 {\n  border: 1px solid #ffb976 !important;\n}.border-top-warning.border-top-lighten-2 {\n  border-top: 1px solid #ffb976 !important;\n}.border-bottom-warning.border-bottom-lighten-2 {\n  border-bottom: 1px solid #ffb976 !important;\n}.border-left-warning.border-left-lighten-2 {\n  border-left: 1px solid #ffb976 !important;\n}.border-right-warning.border-right-lighten-2 {\n  border-right: 1px solid #ffb976 !important;\n}.overlay-warning.overlay-lighten-2 {\n  background: #ffb976; /* The Fallback */\n  background: rgba(255, 185, 118, 0.6);\n}.text-warning.text-lighten-1 {\n  color: #ffac5d !important;\n}.bg-warning.bg-lighten-1 {\n  background-color: #ffac5d !important;\n}.border-warning.border-lighten-1 {\n  border: 1px solid #ffac5d !important;\n}.border-top-warning.border-top-lighten-1 {\n  border-top: 1px solid #ffac5d !important;\n}.border-bottom-warning.border-bottom-lighten-1 {\n  border-bottom: 1px solid #ffac5d !important;\n}.border-left-warning.border-left-lighten-1 {\n  border-left: 1px solid #ffac5d !important;\n}.border-right-warning.border-right-lighten-1 {\n  border-right: 1px solid #ffac5d !important;\n}.overlay-warning.overlay-lighten-1 {\n  background: #ffac5d; /* The Fallback */\n  background: rgba(255, 172, 93, 0.6);\n}.bg-warning {\n  background-color: #ff9f43 !important;\n}.bg-warning .card-header,\n.bg-warning .card-footer {\n  background-color: transparent;\n}.alert-warning {\n  background: rgba(255, 159, 67, 0.12) !important;\n  color: #ff9f43 !important;\n}.alert-warning .alert-heading {\n  box-shadow: rgba(255, 159, 67, 0.4) 0px 6px 15px -7px;\n}.alert-warning .alert-link {\n  color: #ff922a !important;\n}.alert-warning .close {\n  color: #ff9f43 !important;\n}.bg-light-warning {\n  background: rgba(255, 159, 67, 0.12) !important;\n  color: #ff9f43 !important;\n}.bg-light-warning.fc-h-event, .bg-light-warning.fc-v-event {\n  border-color: rgba(255, 159, 67, 0.1);\n}.bg-light-warning .fc-list-event-dot,\n.bg-light-warning .fc-daygrid-event-dot {\n  border-color: #ff9f43 !important;\n}.bg-light-warning.fc-list-event:hover td {\n  background: rgba(255, 159, 67, 0.1) !important;\n}.bg-light-warning.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-warning {\n  color: #ff9f43 !important;\n}.border-warning {\n  border: 1px solid #ff9f43 !important;\n}.border-top-warning {\n  border-top: 1px solid #ff9f43;\n}.border-bottom-warning {\n  border-bottom: 1px solid #ff9f43;\n}.border-left-warning {\n  border-left: 1px solid #ff9f43;\n}.border-right-warning {\n  border-right: 1px solid #ff9f43;\n}.bg-warning.badge-glow,\n.border-warning.badge-glow,\n.badge-warning.badge-glow {\n  box-shadow: 0px 0px 10px #ff9f43;\n}.badge.badge-light-warning {\n  background-color: rgba(255, 159, 67, 0.12);\n  color: #ff9f43 !important;\n}.overlay-warning {\n  background: #ff9f43; /* The Fallback */\n  background: rgba(255, 159, 67, 0.6);\n}.btn-warning {\n  border-color: #ff9f43 !important;\n  background-color: #ff9f43 !important;\n  color: #fff !important;\n}.btn-warning:focus, .btn-warning:active, .btn-warning.active {\n  color: #fff;\n  background-color: #ff922a !important;\n}.btn-warning:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #ff9f43;\n}.btn-warning:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-warning {\n  background-color: transparent;\n  color: #ff9f43;\n}.btn-flat-warning:hover {\n  color: #ff9f43;\n}.btn-flat-warning:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(255, 159, 67, 0.12);\n}.btn-flat-warning:active, .btn-flat-warning.active, .btn-flat-warning:focus {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-flat-warning.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-warning {\n  background-color: #ff9f43;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-warning:hover:not(.disabled):not(:disabled) {\n  background-color: #ffac5d;\n}.btn-relief-warning:active, .btn-relief-warning.active, .btn-relief-warning:focus {\n  background-color: #ff922a;\n}.btn-relief-warning:hover {\n  color: #fff;\n}.btn-relief-warning:active, .btn-relief-warning.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-warning {\n  border: 1px solid #ff9f43 !important;\n  background-color: transparent;\n  color: #ff9f43;\n}.btn-outline-warning:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(255, 159, 67, 0.04);\n  color: #ff9f43;\n}.btn-outline-warning:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .btn-outline-warning:not(:disabled):not(.disabled):focus {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-outline-warning.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-warning.dropdown-toggle {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-outline-warning.waves-effect .waves-ripple,\n.btn-flat-warning.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(255, 159, 67, 0.2) 0, rgba(255, 159, 67, 0.3) 40%, rgba(255, 159, 67, 0.4) 50%, rgba(255, 159, 67, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-warning {\n  background-color: #ff9f43;\n}.modal.modal-warning .modal-header .modal-title {\n  color: #ff9f43;\n}.modal.modal-warning .modal-header .close {\n  color: #ff9f43 !important;\n}.pagination-warning .page-item.active .page-link {\n  background: #ff9f43 !important;\n  color: #fff;\n}.pagination-warning .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-warning .page-item .page-link:hover {\n  color: #ff9f43;\n}.pagination-warning .page-item.prev-item .page-link:hover, .pagination-warning .page-item.next-item .page-link:hover {\n  background: #ff9f43;\n  color: #fff;\n}.pagination-warning .page-item.next-item .page-link:active:after, .pagination-warning .page-item.next-item .page-link:hover:after, .pagination-warning .page-item.next .page-link:active:after, .pagination-warning .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-warning .page-item.prev-item .page-link:active:before, .pagination-warning .page-item.prev-item .page-link:hover:before, .pagination-warning .page-item.prev .page-link:active:before, .pagination-warning .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-warning .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #ff9f43 !important;\n  border-color: #ff9f43;\n  box-shadow: 0 4px 18px -4px rgba(255, 159, 67, 0.65);\n}.progress-bar-warning {\n  background-color: rgba(255, 159, 67, 0.12);\n}.progress-bar-warning .progress-bar {\n  background-color: #ff9f43;\n}.timeline .timeline-point-warning {\n  border-color: #ff9f43 !important;\n}.timeline .timeline-point-warning i,\n.timeline .timeline-point-warning svg {\n  stroke: #ff9f43 !important;\n}.timeline .timeline-point-warning.timeline-point-indicator {\n  background-color: #ff9f43 !important;\n}.timeline .timeline-point-warning.timeline-point-indicator:before {\n  background: rgba(255, 159, 67, 0.12) !important;\n}.divider.divider-warning .divider-text:before, .divider.divider-warning .divider-text:after {\n  border-color: #ff9f43 !important;\n}input:focus ~ .bg-warning {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ff9f43 !important;\n}.custom-control-warning .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #ff9f43;\n  background-color: #ff9f43;\n}.custom-control-warning.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-warning.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-warning.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-warning.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(255, 159, 67, 0.4) !important;\n}.custom-control-warning .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(255, 159, 67, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-warning .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #ff9f43 !important;\n}.custom-switch-warning .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ff9f43 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-warning .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #ff9f43 !important;\n  border-color: #ff9f43 !important;\n}.text-warning.text-darken-1 {\n  color: #ff922a !important;\n}.bg-warning.bg-darken-1 {\n  background-color: #ff922a !important;\n}.border-warning.border-darken-1 {\n  border: 1px solid #ff922a !important;\n}.border-top-warning.border-top-darken-1 {\n  border-top: 1px solid #ff922a !important;\n}.border-bottom-warning.border-bottom-darken-1 {\n  border-bottom: 1px solid #ff922a !important;\n}.border-left-warning.border-left-darken-1 {\n  border-left: 1px solid #ff922a !important;\n}.border-right-warning.border-right-darken-1 {\n  border-right: 1px solid #ff922a !important;\n}.overlay-warning.overlay-darken-1 {\n  background: #ff922a; /* The Fallback */\n  background: rgba(255, 146, 42, 0.6);\n}.text-warning.text-darken-2 {\n  color: #ff8510 !important;\n}.bg-warning.bg-darken-2 {\n  background-color: #ff8510 !important;\n}.border-warning.border-darken-2 {\n  border: 1px solid #ff8510 !important;\n}.border-top-warning.border-top-darken-2 {\n  border-top: 1px solid #ff8510 !important;\n}.border-bottom-warning.border-bottom-darken-2 {\n  border-bottom: 1px solid #ff8510 !important;\n}.border-left-warning.border-left-darken-2 {\n  border-left: 1px solid #ff8510 !important;\n}.border-right-warning.border-right-darken-2 {\n  border-right: 1px solid #ff8510 !important;\n}.overlay-warning.overlay-darken-2 {\n  background: #ff8510; /* The Fallback */\n  background: rgba(255, 133, 16, 0.6);\n}.text-warning.text-darken-3 {\n  color: #f67800 !important;\n}.bg-warning.bg-darken-3 {\n  background-color: #f67800 !important;\n}.border-warning.border-darken-3 {\n  border: 1px solid #f67800 !important;\n}.border-top-warning.border-top-darken-3 {\n  border-top: 1px solid #f67800 !important;\n}.border-bottom-warning.border-bottom-darken-3 {\n  border-bottom: 1px solid #f67800 !important;\n}.border-left-warning.border-left-darken-3 {\n  border-left: 1px solid #f67800 !important;\n}.border-right-warning.border-right-darken-3 {\n  border-right: 1px solid #f67800 !important;\n}.overlay-warning.overlay-darken-3 {\n  background: #f67800; /* The Fallback */\n  background: rgba(246, 120, 0, 0.6);\n}.text-warning.text-darken-4 {\n  color: #dc6c00 !important;\n}.bg-warning.bg-darken-4 {\n  background-color: #dc6c00 !important;\n}.border-warning.border-darken-4 {\n  border: 1px solid #dc6c00 !important;\n}.border-top-warning.border-top-darken-4 {\n  border-top: 1px solid #dc6c00 !important;\n}.border-bottom-warning.border-bottom-darken-4 {\n  border-bottom: 1px solid #dc6c00 !important;\n}.border-left-warning.border-left-darken-4 {\n  border-left: 1px solid #dc6c00 !important;\n}.border-right-warning.border-right-darken-4 {\n  border-right: 1px solid #dc6c00 !important;\n}.overlay-warning.overlay-darken-4 {\n  background: #dc6c00; /* The Fallback */\n  background: rgba(220, 108, 0, 0.6);\n}.text-warning.text-accent-1 {\n  color: #fff5ef !important;\n}.bg-warning.bg-accent-1 {\n  background-color: #fff5ef !important;\n}.border-warning.border-accent-1 {\n  border: 1px solid #fff5ef !important;\n}.border-top-warning.border-top-accent-1 {\n  border-top: 1px solid #fff5ef !important;\n}.border-bottom-warning.border-bottom-accent-1 {\n  border-bottom: 1px solid #fff5ef !important;\n}.border-left-warning.border-left-accent-1 {\n  border-left: 1px solid #fff5ef !important;\n}.border-right-warning.border-right-accent-1 {\n  border-right: 1px solid #fff5ef !important;\n}.overlay-warning.overlay-accent-1 {\n  background: #fff5ef; /* The Fallback */\n  background: rgba(255, 245, 239, 0.6);\n}.text-warning.text-accent-2 {\n  color: #ffe5d8 !important;\n}.bg-warning.bg-accent-2 {\n  background-color: #ffe5d8 !important;\n}.border-warning.border-accent-2 {\n  border: 1px solid #ffe5d8 !important;\n}.border-top-warning.border-top-accent-2 {\n  border-top: 1px solid #ffe5d8 !important;\n}.border-bottom-warning.border-bottom-accent-2 {\n  border-bottom: 1px solid #ffe5d8 !important;\n}.border-left-warning.border-left-accent-2 {\n  border-left: 1px solid #ffe5d8 !important;\n}.border-right-warning.border-right-accent-2 {\n  border-right: 1px solid #ffe5d8 !important;\n}.overlay-warning.overlay-accent-2 {\n  background: #ffe5d8; /* The Fallback */\n  background: rgba(255, 229, 216, 0.6);\n}.text-warning.text-accent-3 {\n  color: #fff6f3 !important;\n}.bg-warning.bg-accent-3 {\n  background-color: #fff6f3 !important;\n}.border-warning.border-accent-3 {\n  border: 1px solid #fff6f3 !important;\n}.border-top-warning.border-top-accent-3 {\n  border-top: 1px solid #fff6f3 !important;\n}.border-bottom-warning.border-bottom-accent-3 {\n  border-bottom: 1px solid #fff6f3 !important;\n}.border-left-warning.border-left-accent-3 {\n  border-left: 1px solid #fff6f3 !important;\n}.border-right-warning.border-right-accent-3 {\n  border-right: 1px solid #fff6f3 !important;\n}.overlay-warning.overlay-accent-3 {\n  background: #fff6f3; /* The Fallback */\n  background: rgba(255, 246, 243, 0.6);\n}.text-warning.text-accent-4 {\n  color: #ffe3da !important;\n}.bg-warning.bg-accent-4 {\n  background-color: #ffe3da !important;\n}.border-warning.border-accent-4 {\n  border: 1px solid #ffe3da !important;\n}.border-top-warning.border-top-accent-4 {\n  border-top: 1px solid #ffe3da !important;\n}.border-bottom-warning.border-bottom-accent-4 {\n  border-bottom: 1px solid #ffe3da !important;\n}.border-left-warning.border-left-accent-4 {\n  border-left: 1px solid #ffe3da !important;\n}.border-right-warning.border-right-accent-4 {\n  border-right: 1px solid #ffe3da !important;\n}.overlay-warning.overlay-accent-4 {\n  background: #ffe3da; /* The Fallback */\n  background: rgba(255, 227, 218, 0.6);\n}.text-danger.text-lighten-5 {\n  color: #f8c6c6 !important;\n}.bg-danger.bg-lighten-5 {\n  background-color: #f8c6c6 !important;\n}.border-danger.border-lighten-5 {\n  border: 1px solid #f8c6c6 !important;\n}.border-top-danger.border-top-lighten-5 {\n  border-top: 1px solid #f8c6c6 !important;\n}.border-bottom-danger.border-bottom-lighten-5 {\n  border-bottom: 1px solid #f8c6c6 !important;\n}.border-left-danger.border-left-lighten-5 {\n  border-left: 1px solid #f8c6c6 !important;\n}.border-right-danger.border-right-lighten-5 {\n  border-right: 1px solid #f8c6c6 !important;\n}.overlay-danger.overlay-lighten-5 {\n  background: #f8c6c6; /* The Fallback */\n  background: rgba(248, 198, 198, 0.6);\n}.text-danger.text-lighten-4 {\n  color: #f5afaf !important;\n}.bg-danger.bg-lighten-4 {\n  background-color: #f5afaf !important;\n}.border-danger.border-lighten-4 {\n  border: 1px solid #f5afaf !important;\n}.border-top-danger.border-top-lighten-4 {\n  border-top: 1px solid #f5afaf !important;\n}.border-bottom-danger.border-bottom-lighten-4 {\n  border-bottom: 1px solid #f5afaf !important;\n}.border-left-danger.border-left-lighten-4 {\n  border-left: 1px solid #f5afaf !important;\n}.border-right-danger.border-right-lighten-4 {\n  border-right: 1px solid #f5afaf !important;\n}.overlay-danger.overlay-lighten-4 {\n  background: #f5afaf; /* The Fallback */\n  background: rgba(245, 175, 175, 0.6);\n}.text-danger.text-lighten-3 {\n  color: #f29899 !important;\n}.bg-danger.bg-lighten-3 {\n  background-color: #f29899 !important;\n}.border-danger.border-lighten-3 {\n  border: 1px solid #f29899 !important;\n}.border-top-danger.border-top-lighten-3 {\n  border-top: 1px solid #f29899 !important;\n}.border-bottom-danger.border-bottom-lighten-3 {\n  border-bottom: 1px solid #f29899 !important;\n}.border-left-danger.border-left-lighten-3 {\n  border-left: 1px solid #f29899 !important;\n}.border-right-danger.border-right-lighten-3 {\n  border-right: 1px solid #f29899 !important;\n}.overlay-danger.overlay-lighten-3 {\n  background: #f29899; /* The Fallback */\n  background: rgba(242, 152, 153, 0.6);\n}.text-danger.text-lighten-2 {\n  color: #f08182 !important;\n}.bg-danger.bg-lighten-2 {\n  background-color: #f08182 !important;\n}.border-danger.border-lighten-2 {\n  border: 1px solid #f08182 !important;\n}.border-top-danger.border-top-lighten-2 {\n  border-top: 1px solid #f08182 !important;\n}.border-bottom-danger.border-bottom-lighten-2 {\n  border-bottom: 1px solid #f08182 !important;\n}.border-left-danger.border-left-lighten-2 {\n  border-left: 1px solid #f08182 !important;\n}.border-right-danger.border-right-lighten-2 {\n  border-right: 1px solid #f08182 !important;\n}.overlay-danger.overlay-lighten-2 {\n  background: #f08182; /* The Fallback */\n  background: rgba(240, 129, 130, 0.6);\n}.text-danger.text-lighten-1 {\n  color: #ed6b6c !important;\n}.bg-danger.bg-lighten-1 {\n  background-color: #ed6b6c !important;\n}.border-danger.border-lighten-1 {\n  border: 1px solid #ed6b6c !important;\n}.border-top-danger.border-top-lighten-1 {\n  border-top: 1px solid #ed6b6c !important;\n}.border-bottom-danger.border-bottom-lighten-1 {\n  border-bottom: 1px solid #ed6b6c !important;\n}.border-left-danger.border-left-lighten-1 {\n  border-left: 1px solid #ed6b6c !important;\n}.border-right-danger.border-right-lighten-1 {\n  border-right: 1px solid #ed6b6c !important;\n}.overlay-danger.overlay-lighten-1 {\n  background: #ed6b6c; /* The Fallback */\n  background: rgba(237, 107, 108, 0.6);\n}.bg-danger {\n  background-color: #ea5455 !important;\n}.bg-danger .card-header,\n.bg-danger .card-footer {\n  background-color: transparent;\n}.alert-danger {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #ea5455 !important;\n}.alert-danger .alert-heading {\n  box-shadow: rgba(234, 84, 85, 0.4) 0px 6px 15px -7px;\n}.alert-danger .alert-link {\n  color: #e73d3e !important;\n}.alert-danger .close {\n  color: #ea5455 !important;\n}.bg-light-danger {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #ea5455 !important;\n}.bg-light-danger.fc-h-event, .bg-light-danger.fc-v-event {\n  border-color: rgba(234, 84, 85, 0.1);\n}.bg-light-danger .fc-list-event-dot,\n.bg-light-danger .fc-daygrid-event-dot {\n  border-color: #ea5455 !important;\n}.bg-light-danger.fc-list-event:hover td {\n  background: rgba(234, 84, 85, 0.1) !important;\n}.bg-light-danger.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-danger {\n  color: #ea5455 !important;\n}.border-danger {\n  border: 1px solid #ea5455 !important;\n}.border-top-danger {\n  border-top: 1px solid #ea5455;\n}.border-bottom-danger {\n  border-bottom: 1px solid #ea5455;\n}.border-left-danger {\n  border-left: 1px solid #ea5455;\n}.border-right-danger {\n  border-right: 1px solid #ea5455;\n}.bg-danger.badge-glow,\n.border-danger.badge-glow,\n.badge-danger.badge-glow {\n  box-shadow: 0px 0px 10px #ea5455;\n}.badge.badge-light-danger {\n  background-color: rgba(234, 84, 85, 0.12);\n  color: #ea5455 !important;\n}.overlay-danger {\n  background: #ea5455; /* The Fallback */\n  background: rgba(234, 84, 85, 0.6);\n}.btn-danger {\n  border-color: #ea5455 !important;\n  background-color: #ea5455 !important;\n  color: #fff !important;\n}.btn-danger:focus, .btn-danger:active, .btn-danger.active {\n  color: #fff;\n  background-color: #e73d3e !important;\n}.btn-danger:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #ea5455;\n}.btn-danger:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-danger {\n  background-color: transparent;\n  color: #ea5455;\n}.btn-flat-danger:hover {\n  color: #ea5455;\n}.btn-flat-danger:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(234, 84, 85, 0.12);\n}.btn-flat-danger:active, .btn-flat-danger.active, .btn-flat-danger:focus {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-flat-danger.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-danger {\n  background-color: #ea5455;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-danger:hover:not(.disabled):not(:disabled) {\n  background-color: #ed6b6c;\n}.btn-relief-danger:active, .btn-relief-danger.active, .btn-relief-danger:focus {\n  background-color: #e73d3e;\n}.btn-relief-danger:hover {\n  color: #fff;\n}.btn-relief-danger:active, .btn-relief-danger.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-danger {\n  border: 1px solid #ea5455 !important;\n  background-color: transparent;\n  color: #ea5455;\n}.btn-outline-danger:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(234, 84, 85, 0.04);\n  color: #ea5455;\n}.btn-outline-danger:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .btn-outline-danger:not(:disabled):not(.disabled):focus {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-outline-danger.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-danger.dropdown-toggle {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-outline-danger.waves-effect .waves-ripple,\n.btn-flat-danger.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(234, 84, 85, 0.2) 0, rgba(234, 84, 85, 0.3) 40%, rgba(234, 84, 85, 0.4) 50%, rgba(234, 84, 85, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-danger {\n  background-color: #ea5455;\n}.modal.modal-danger .modal-header .modal-title {\n  color: #ea5455;\n}.modal.modal-danger .modal-header .close {\n  color: #ea5455 !important;\n}.pagination-danger .page-item.active .page-link {\n  background: #ea5455 !important;\n  color: #fff;\n}.pagination-danger .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-danger .page-item .page-link:hover {\n  color: #ea5455;\n}.pagination-danger .page-item.prev-item .page-link:hover, .pagination-danger .page-item.next-item .page-link:hover {\n  background: #ea5455;\n  color: #fff;\n}.pagination-danger .page-item.next-item .page-link:active:after, .pagination-danger .page-item.next-item .page-link:hover:after, .pagination-danger .page-item.next .page-link:active:after, .pagination-danger .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-danger .page-item.prev-item .page-link:active:before, .pagination-danger .page-item.prev-item .page-link:hover:before, .pagination-danger .page-item.prev .page-link:active:before, .pagination-danger .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-danger .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #ea5455 !important;\n  border-color: #ea5455;\n  box-shadow: 0 4px 18px -4px rgba(234, 84, 85, 0.65);\n}.progress-bar-danger {\n  background-color: rgba(234, 84, 85, 0.12);\n}.progress-bar-danger .progress-bar {\n  background-color: #ea5455;\n}.timeline .timeline-point-danger {\n  border-color: #ea5455 !important;\n}.timeline .timeline-point-danger i,\n.timeline .timeline-point-danger svg {\n  stroke: #ea5455 !important;\n}.timeline .timeline-point-danger.timeline-point-indicator {\n  background-color: #ea5455 !important;\n}.timeline .timeline-point-danger.timeline-point-indicator:before {\n  background: rgba(234, 84, 85, 0.12) !important;\n}.divider.divider-danger .divider-text:before, .divider.divider-danger .divider-text:after {\n  border-color: #ea5455 !important;\n}input:focus ~ .bg-danger {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ea5455 !important;\n}.custom-control-danger .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #ea5455;\n  background-color: #ea5455;\n}.custom-control-danger.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-danger.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-danger.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-danger.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(234, 84, 85, 0.4) !important;\n}.custom-control-danger .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(234, 84, 85, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-danger .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #ea5455 !important;\n}.custom-switch-danger .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ea5455 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-danger .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #ea5455 !important;\n  border-color: #ea5455 !important;\n}.text-danger.text-darken-1 {\n  color: #e73d3e !important;\n}.bg-danger.bg-darken-1 {\n  background-color: #e73d3e !important;\n}.border-danger.border-darken-1 {\n  border: 1px solid #e73d3e !important;\n}.border-top-danger.border-top-darken-1 {\n  border-top: 1px solid #e73d3e !important;\n}.border-bottom-danger.border-bottom-darken-1 {\n  border-bottom: 1px solid #e73d3e !important;\n}.border-left-danger.border-left-darken-1 {\n  border-left: 1px solid #e73d3e !important;\n}.border-right-danger.border-right-darken-1 {\n  border-right: 1px solid #e73d3e !important;\n}.overlay-danger.overlay-darken-1 {\n  background: #e73d3e; /* The Fallback */\n  background: rgba(231, 61, 62, 0.6);\n}.text-danger.text-darken-2 {\n  color: #e42728 !important;\n}.bg-danger.bg-darken-2 {\n  background-color: #e42728 !important;\n}.border-danger.border-darken-2 {\n  border: 1px solid #e42728 !important;\n}.border-top-danger.border-top-darken-2 {\n  border-top: 1px solid #e42728 !important;\n}.border-bottom-danger.border-bottom-darken-2 {\n  border-bottom: 1px solid #e42728 !important;\n}.border-left-danger.border-left-darken-2 {\n  border-left: 1px solid #e42728 !important;\n}.border-right-danger.border-right-darken-2 {\n  border-right: 1px solid #e42728 !important;\n}.overlay-danger.overlay-darken-2 {\n  background: #e42728; /* The Fallback */\n  background: rgba(228, 39, 40, 0.6);\n}.text-danger.text-darken-3 {\n  color: #d71a1c !important;\n}.bg-danger.bg-darken-3 {\n  background-color: #d71a1c !important;\n}.border-danger.border-darken-3 {\n  border: 1px solid #d71a1c !important;\n}.border-top-danger.border-top-darken-3 {\n  border-top: 1px solid #d71a1c !important;\n}.border-bottom-danger.border-bottom-darken-3 {\n  border-bottom: 1px solid #d71a1c !important;\n}.border-left-danger.border-left-darken-3 {\n  border-left: 1px solid #d71a1c !important;\n}.border-right-danger.border-right-darken-3 {\n  border-right: 1px solid #d71a1c !important;\n}.overlay-danger.overlay-darken-3 {\n  background: #d71a1c; /* The Fallback */\n  background: rgba(215, 26, 28, 0.6);\n}.text-danger.text-darken-4 {\n  color: #c01819 !important;\n}.bg-danger.bg-darken-4 {\n  background-color: #c01819 !important;\n}.border-danger.border-darken-4 {\n  border: 1px solid #c01819 !important;\n}.border-top-danger.border-top-darken-4 {\n  border-top: 1px solid #c01819 !important;\n}.border-bottom-danger.border-bottom-darken-4 {\n  border-bottom: 1px solid #c01819 !important;\n}.border-left-danger.border-left-darken-4 {\n  border-left: 1px solid #c01819 !important;\n}.border-right-danger.border-right-darken-4 {\n  border-right: 1px solid #c01819 !important;\n}.overlay-danger.overlay-darken-4 {\n  background: #c01819; /* The Fallback */\n  background: rgba(192, 24, 25, 0.6);\n}.text-danger.text-accent-1 {\n  color: #ffeef1 !important;\n}.bg-danger.bg-accent-1 {\n  background-color: #ffeef1 !important;\n}.border-danger.border-accent-1 {\n  border: 1px solid #ffeef1 !important;\n}.border-top-danger.border-top-accent-1 {\n  border-top: 1px solid #ffeef1 !important;\n}.border-bottom-danger.border-bottom-accent-1 {\n  border-bottom: 1px solid #ffeef1 !important;\n}.border-left-danger.border-left-accent-1 {\n  border-left: 1px solid #ffeef1 !important;\n}.border-right-danger.border-right-accent-1 {\n  border-right: 1px solid #ffeef1 !important;\n}.overlay-danger.overlay-accent-1 {\n  background: #ffeef1; /* The Fallback */\n  background: rgba(255, 238, 241, 0.6);\n}.text-danger.text-accent-2 {\n  color: #ffd6db !important;\n}.bg-danger.bg-accent-2 {\n  background-color: #ffd6db !important;\n}.border-danger.border-accent-2 {\n  border: 1px solid #ffd6db !important;\n}.border-top-danger.border-top-accent-2 {\n  border-top: 1px solid #ffd6db !important;\n}.border-bottom-danger.border-bottom-accent-2 {\n  border-bottom: 1px solid #ffd6db !important;\n}.border-left-danger.border-left-accent-2 {\n  border-left: 1px solid #ffd6db !important;\n}.border-right-danger.border-right-accent-2 {\n  border-right: 1px solid #ffd6db !important;\n}.overlay-danger.overlay-accent-2 {\n  background: #ffd6db; /* The Fallback */\n  background: rgba(255, 214, 219, 0.6);\n}.text-danger.text-accent-3 {\n  color: #ffecee !important;\n}.bg-danger.bg-accent-3 {\n  background-color: #ffecee !important;\n}.border-danger.border-accent-3 {\n  border: 1px solid #ffecee !important;\n}.border-top-danger.border-top-accent-3 {\n  border-top: 1px solid #ffecee !important;\n}.border-bottom-danger.border-bottom-accent-3 {\n  border-bottom: 1px solid #ffecee !important;\n}.border-left-danger.border-left-accent-3 {\n  border-left: 1px solid #ffecee !important;\n}.border-right-danger.border-right-accent-3 {\n  border-right: 1px solid #ffecee !important;\n}.overlay-danger.overlay-accent-3 {\n  background: #ffecee; /* The Fallback */\n  background: rgba(255, 236, 238, 0.6);\n}.text-danger.text-accent-4 {\n  color: #ffd3d7 !important;\n}.bg-danger.bg-accent-4 {\n  background-color: #ffd3d7 !important;\n}.border-danger.border-accent-4 {\n  border: 1px solid #ffd3d7 !important;\n}.border-top-danger.border-top-accent-4 {\n  border-top: 1px solid #ffd3d7 !important;\n}.border-bottom-danger.border-bottom-accent-4 {\n  border-bottom: 1px solid #ffd3d7 !important;\n}.border-left-danger.border-left-accent-4 {\n  border-left: 1px solid #ffd3d7 !important;\n}.border-right-danger.border-right-accent-4 {\n  border-right: 1px solid #ffd3d7 !important;\n}.overlay-danger.overlay-accent-4 {\n  background: #ffd3d7; /* The Fallback */\n  background: rgba(255, 211, 215, 0.6);\n}.bg-gradient-dark,\n.btn-gradient-dark {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #4b4b4b, #1e1e1e);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.dark-layout .bg-gradient-dark,\n.dark-layout .btn-gradient-dark {\n  background-image: linear-gradient(47deg, #1e1e1e, #4b4b4b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-dark:hover, .bg-gradient-dark:active,\n.btn-gradient-dark:hover,\n.btn-gradient-dark:active {\n  color: #fff;\n}.bg-gradient-dark:hover:not(.disabled):not(:disabled),\n.btn-gradient-dark:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-dark:active,\n.btn-gradient-dark:active {\n  transform: translateY(0);\n}.bg-gradient-dark:active, .bg-gradient-dark:focus,\n.btn-gradient-dark:active,\n.btn-gradient-dark:focus {\n  background-image: linear-gradient(47deg, #1e1e1e, #4b4b4b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-primary,\n.btn-gradient-primary {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #0592c6, #06b7f8);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-primary:hover, .bg-gradient-primary:active,\n.btn-gradient-primary:hover,\n.btn-gradient-primary:active {\n  color: #fff;\n}.bg-gradient-primary:hover:not(.disabled):not(:disabled),\n.btn-gradient-primary:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-primary:active,\n.btn-gradient-primary:active {\n  transform: translateY(0);\n}.bg-gradient-primary:active, .bg-gradient-primary:focus,\n.btn-gradient-primary:active,\n.btn-gradient-primary:focus {\n  background-image: linear-gradient(47deg, #046d94, #0592c6);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-secondary,\n.btn-gradient-secondary {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #82868b, #9ca0a4);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-secondary:hover, .bg-gradient-secondary:active,\n.btn-gradient-secondary:hover,\n.btn-gradient-secondary:active {\n  color: #fff;\n}.bg-gradient-secondary:hover:not(.disabled):not(:disabled),\n.btn-gradient-secondary:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-secondary:active,\n.btn-gradient-secondary:active {\n  transform: translateY(0);\n}.bg-gradient-secondary:active, .bg-gradient-secondary:focus,\n.btn-gradient-secondary:active,\n.btn-gradient-secondary:focus {\n  background-image: linear-gradient(47deg, #696d71, #82868b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-success,\n.btn-gradient-success {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #28c76f, #48da89);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-success:hover, .bg-gradient-success:active,\n.btn-gradient-success:hover,\n.btn-gradient-success:active {\n  color: #fff;\n}.bg-gradient-success:hover:not(.disabled):not(:disabled),\n.btn-gradient-success:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-success:active,\n.btn-gradient-success:active {\n  transform: translateY(0);\n}.bg-gradient-success:active, .bg-gradient-success:focus,\n.btn-gradient-success:active,\n.btn-gradient-success:focus {\n  background-image: linear-gradient(47deg, #1f9d57, #28c76f);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-info,\n.btn-gradient-info {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #00cfe8, #1ce7ff);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-info:hover, .bg-gradient-info:active,\n.btn-gradient-info:hover,\n.btn-gradient-info:active {\n  color: #fff;\n}.bg-gradient-info:hover:not(.disabled):not(:disabled),\n.btn-gradient-info:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-info:active,\n.btn-gradient-info:active {\n  transform: translateY(0);\n}.bg-gradient-info:active, .bg-gradient-info:focus,\n.btn-gradient-info:active,\n.btn-gradient-info:focus {\n  background-image: linear-gradient(47deg, #00a1b5, #00cfe8);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-warning,\n.btn-gradient-warning {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #ff9f43, #ffb976);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-warning:hover, .bg-gradient-warning:active,\n.btn-gradient-warning:hover,\n.btn-gradient-warning:active {\n  color: #fff;\n}.bg-gradient-warning:hover:not(.disabled):not(:disabled),\n.btn-gradient-warning:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-warning:active,\n.btn-gradient-warning:active {\n  transform: translateY(0);\n}.bg-gradient-warning:active, .bg-gradient-warning:focus,\n.btn-gradient-warning:active,\n.btn-gradient-warning:focus {\n  background-image: linear-gradient(47deg, #ff8510, #ff9f43);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-danger,\n.btn-gradient-danger {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #ea5455, #f08182);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-danger:hover, .bg-gradient-danger:active,\n.btn-gradient-danger:hover,\n.btn-gradient-danger:active {\n  color: #fff;\n}.bg-gradient-danger:hover:not(.disabled):not(:disabled),\n.btn-gradient-danger:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-danger:active,\n.btn-gradient-danger:active {\n  transform: translateY(0);\n}.bg-gradient-danger:active, .bg-gradient-danger:focus,\n.btn-gradient-danger:active,\n.btn-gradient-danger:focus {\n  background-image: linear-gradient(47deg, #e42728, #ea5455);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.ngx-datatable.bootstrap.core-bootstrap.height-70-vh {\n  height: 70vh !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header {\n  background-color: #f3f2f7;\n  text-transform: uppercase;\n  height: 40px !important;\n  border-top: 1px solid #ebe9f1;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell {\n  border-bottom: 0;\n  padding: 0.75rem 1rem;\n  font-weight: bold;\n  font-size: 0.8rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell-template-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  letter-spacing: 1px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .sort-btn:before {\n  font-size: 1.3rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row {\n  border-color: #ebe9f1;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.datatable-row-even {\n  background-color: transparent;\n  background-color: initial;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active {\n  background-color: #f6f6f6;\n  color: #6e6b7b;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell-label .cell-line-height {\n  line-height: 1.25;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem 1rem;\n  display: flex;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: #fff;\n  color: #636363;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  margin-top: 0.5rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager a {\n  color: #636363;\n  line-height: 20px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active:hover {\n  vertical-align: sub;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active:hover a {\n  background-color: #0592c6 !important;\n  color: #fff !important;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  padding: 5px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: transparent !important;\n  color: #0592c6 !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 2px 0px 11px 0px !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #fff;\n  color: #636363;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li.disabled a {\n  color: #b9b9c3;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager {\n  background-color: #f3f2f7;\n  border-top-left-radius: 28px;\n  border-bottom-left-radius: 28px;\n  border-top-right-radius: 28px;\n  border-bottom-right-radius: 28px;\n  height: 36px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .page-count {\n  color: #b9b9c3;\n}.ngx-datatable.bootstrap.core-bootstrap.header-height-50 .datatable-header {\n  height: 50px !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-cell {\n  overflow: visible !important;\n}@media (max-width: 768px) {\n  .page-count {\n    display: none;\n  }\n  .datatable-pager {\n    text-align: center !important;\n    margin: 0 !important;\n  }\n}@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: inline;\n    display: initial;\n  }\n  .mobile-hidden {\n    display: none;\n  }\n}@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n  .mobile-hidden {\n    display: inline;\n    display: initial;\n  }\n}.dark-layout .datatable-header-inner,\n.dark-layout .datatable-header {\n  background-color: #343d55 !important;\n  border-top: 1px solid #3b4253 !important;\n}.dark-layout .ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: #283046 !important;\n}.dark-layout .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li.disabled a {\n  color: #636363;\n}.dark-layout .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager a {\n  color: #b4b7bd;\n}.dark-layout .datatable-body-row {\n  border-color: #3b4253 !important;\n}.dark-layout .datatable-body-row.active {\n  background-color: #283046 !important;\n  color: inherit !important;\n}.dark-layout .datatable-body {\n  background-color: #283046 !important;\n}.dark-layout .pager {\n  background-color: #242b3d !important;\n}.datatable-scroll {\n  width: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uL0Bjb3JlL3Njc3MvYW5ndWxhci9saWJzL2RhdGF0YWJsZXMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL2Jvb3RzdHJhcC5zY3NzIiwiZGF0YXRhYmxlcy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb3JlL2NvbG9ycy9fcGFsZXR0ZS5zY3NzIiwiLi4vLi4vLi4vLi4vQGNvcmUvc2Nzcy9iYXNlL2NvcmUvbWl4aW5zL2hleDJyZ2Iuc2NzcyIsIi4uLy4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb3JlL2NvbG9ycy9wYWxldHRlLXZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vQGNvcmUvc2Nzcy9iYXNlL2NvcmUvbWl4aW5zL2FsZXJ0LnNjc3MiLCIuLi8uLi8uLi8uLi9AY29yZS9zY3NzL2Jhc2UvYm9vdHN0cmFwLWV4dGVuZGVkL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb3JlL2NvbG9ycy9wYWxldHRlLWdyYWRpZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmFkaWVudHMuc2NzcyIsIi4uLy4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9jb21wb25lbnRzL192YXJpYWJsZXMtZGFyay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixDQ0FoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0I7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRSxFQUFFLENBQ0o7SUFDRSx3QkFBd0IsRUFBRSxDQUM1Qjs7O0lBS0Usc0JBQXNCLEVBQUUsQ0FDMUI7SUFDRSxnQkFBZ0IsRUFBRSxDQUNwQjtJQUNFLGtCQUFrQixFQUFFLENBQ3RCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlDQUFpQyxFQUFFLENBQ3JDO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFFLENBQzdCO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDM0I7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFLENBQy9COzs7SUFPRSxhQUFhO0lBQ2IsbUJBQW1CO0lBSW5CLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsQ0FDbEI7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUUsQ0FDcEI7O01BRUUsYUFBYSxFQUFFLENBQ25COztJQUVFLFVBQVUsRUFBRSxDQUNkOzs7O0lBSUUsa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUUsQ0FDbEI7TUFDRSxvQkFBb0I7TUFDcEIsNEJBQTRCLEVBQUUsQ0FDaEM7TUFDRSxrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUUsQ0FDdkI7UUFDRSxlQUFlLEVBQUUsQ0FDbkI7UUFDRSxZQUFZLEVBQUUsQ0FDaEI7UUFDRSxpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixlQUFlLEVBQUUsQ0FDbkI7O1FBRUUscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsY0FBYztRQUNkLGtCQUFrQixFQUFFLENBQ3RCO1FBQ0UsaUJBQWlCLEVBQUUsQ0FDckI7UUFDRSxtQkFBbUIsRUFBRSxDQUN2QjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0Usa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixTQUFTLEVBQUUsQ0FDWDtVQUNFLFFBQVEsRUFBRSxDQUNaO1VBQ0UsT0FBTyxFQUFFLENBQ2I7UUFDRSxlQUFlLEVBQUUsQ0FDdkI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWMsRUFBRSxDQUNoQjtNQUNFLHFCQUFxQixFQUFFLENBQ3pCO01BQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7TUFLRSxhQUFhO01BT2Isc0JBQXNCLEVBQUUsQ0FDMUI7TUFDRSxhQUFhLEVBQUUsQ0FDZjtRQUtFLGFBQWEsRUFBRSxDQUNyQjtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixXQUFXLEVBQUUsQ0FDZjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWE7TUFDYixpQkFBaUIsRUFBRSxDQUNuQjs7UUFFRSxVQUFVO1FBQ1YsU0FBUztRQUNULHFCQUFxQjtRQUNyQixnQkFBZ0IsRUFBRSxDQUNwQjs7UUFFRSxhQUFhLEVBQUUsQ0FDakI7UUFDRSxlQUFlO1FBQ2YscUJBQXFCLEVBQUUsQ0FDekI7UUFDRSxtQkFBbUIsRUFBRSxDQ3JNckI7O0NBQUEsQ0ZFUjtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBZ0M7RUFDaEM7NEZBQ3NHO0VBQ3RHLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIsQ0FFQTtFQUNFLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qix3Q0FBK0I7RUFBL0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEMsQ0FFQTs7RUFFRSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qix3Q0FBK0I7RUFBL0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEMsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2QsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0dwR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNDRixDREFFO0VBQ0UsdUJBQUE7RUFBQSwwQkFBQTtBQ0VKLENEREk7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNHTixDREZNO0VBQ0UsaUJBQUE7QUNJUixDRENJO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0NOLENEQU07RUFDRSxxQ0FBQTtBQ0VSLENEQU07RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNFUixDREFNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRVIsQ0RDSTtFQUdFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0ROLENESUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKLENER0k7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ROLENER0k7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNETixDREdRO0VBQ0UsZ0JBQUE7QUNEVixDREtjO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0hoQixDRFNNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNQUixDRFNNOzs7O0VBSUUsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1BSLENEY007RUFDRSxpQkFBQTtBQ1pSLENDckNNO0VBQ0Usb0NBQUE7QUR3Q1IsQ0N0Q1E7O0VBRUUsNkJBQUE7QUR3Q1YsQ0NzQk07RUFDRSxvQ0FBQTtBRG5CUixDQ3NCTTtFQUNFLDZCQUFBO0FEbkJSLENDc0JNO0VBQ0UsZ0NBQUE7QURuQlIsQ0NzQk07RUFDRSw4QkFBQTtBRG5CUixDQ3NCTTtFQUNFLCtCQUFBO0FEbkJSLENDMEJROzs7RUFDRSxnQ0FBQTtBRHJCVixDQ3FDTTtFQzFKSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZ5SEYsQ0NrVU07RUFDRSxpRUFBQTtBRC9UUixDQ2hGTTtFQUNFLG9DQUFBO0FEbUZSLENDakZROztFQUVFLDZCQUFBO0FEbUZWLENDckJNO0VBQ0Usb0NBQUE7QUR3QlIsQ0NyQk07RUFDRSw2QkFBQTtBRHdCUixDQ3JCTTtFQUNFLGdDQUFBO0FEd0JSLENDckJNO0VBQ0UsOEJBQUE7QUR3QlIsQ0NyQk07RUFDRSwrQkFBQTtBRHdCUixDQ2pCUTs7O0VBQ0UsZ0NBQUE7QURzQlYsQ0NOTTtFQzFKSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsOEJBQUE7QUZvS0YsQ0N1Uk07RUFDRSxpRUFBQTtBRHBSUixDQzNITTtFQUNFLG9DQUFBO0FEOEhSLENDNUhROztFQUVFLDZCQUFBO0FEOEhWLENDeEhRO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBRDJIVixDQ3pIVTtFRzNEUixtREFBQTtBSnVMRixDQ3hIVTtFQUNFLHlCQUFBO0FEMEhaLENDdEhVO0VBQ0UseUJBQUE7QUR3SFosQ0M5RU07RUFDRSxvQ0FBQTtBRGlGUixDQzlFTTtFQUNFLDZCQUFBO0FEaUZSLENDOUVNO0VBQ0UsZ0NBQUE7QURpRlIsQ0M5RU07RUFDRSw4QkFBQTtBRGlGUixDQzlFTTtFQUNFLCtCQUFBO0FEaUZSLENDMUVROzs7RUFDRSxnQ0FBQTtBRCtFVixDQ3ZFVTtFQUNFLHdDQUFBO0VBQ0EseUJBQUE7QUQwRVosQ0NwRU07RUMxSkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGlDQUFBO0FGa09GLENDbkVRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FEc0VWLENDcEVVO0VBR0UsV0k5Sko7RUorSkksb0NBQUE7QURvRVosQ0NqRVU7RUFDRSxtQ0FBQTtBRG1FWixDQ2hFVTtFQUNFLGdCQUFBO0FEa0VaLENDM0RRO0VBQ0UsNkJBQUE7RUFDQSxjRXpFRDtBSHVJVCxDQzVEVTtFQUNFLGNFNUVIO0FIMElULENDM0RVO0VBQ0Usd0NBQUE7QUQ2RFosQ0MxRFU7RUFHRSx1Q0FBQTtFQUNBLGNFdkZIO0FIaUpULENDdkRVO0VBQ0UsK1NBQUE7QUR5RFosQ0NsRFE7RUFDRSx5QkVuR0Q7RUZvR0Msa0RBQUE7RUFDQSxXSTVNRjtFSjZNRSx5QkFBQTtBRHFEVixDQ25EWTtFQUNFLHlCQUFBO0FEcURkLENDOUNVO0VBR0UseUJBQUE7QUQ4Q1osQ0MzQ1U7RUFDRSxXSTlOSjtBTDJRUixDQzNDVTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FENENaLENDckNRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNFdklEO0FIK0tULENDdENVO0VBQ0Usd0NBQUE7RUFDQSxjRTNJSDtBSG1MVCxDQ3RDVTtFQUNFLGdCQUFBO0FEd0NaLENDdENVO0VBR0UsdUNBQUE7RUFDQSxjRXBKSDtBSDBMVCxDQ25DVTtFQUNFLCtTQUFBO0FEcUNaLENDbENVO0VBQ0UsdUNBQUE7RUFDQSxjRTdKSDtBSGlNVCxDQzFCWTs7RUFDRSxpS0FBQTtBRDhCZCxDQ2ZVO0VBQ0UseUJFeExIO0FIME1ULENDUmM7RUFDRSxjRW5NUDtBSDhNVCxDQ1RjO0VBQ0UseUJBQUE7QURXaEIsQ0M0RVE7RUFDRSx3Q0FBQTtBRHpFVixDQzJFVTtFQUNFLHlCRWpTSDtBSHdOVCxDQ2lGVTtFQUNFLGdDQUFBO0FEOUVaLENDZ0ZZOztFQUVFLDBCQUFBO0FEOUVkLENDaUZZO0VBQ0Usb0NBQUE7QUQvRWQsQ0NnRmM7RUFDRSw2Q0FBQTtBRDlFaEIsQ0N5Rlk7RUFFRSxnQ0FBQTtBRHZGZCxDQ2lHTTtFQUNFLGlFQUFBO0FEOUZSLENDb0dVOztFQUVFLHFCRXBWSDtFRnFWRyx5QkVyVkg7QUhvUFQsQ0NxR1k7Ozs7O0VBR0Usd0RBQUE7QURqR2QsQ0NvR1U7RUFDRSxtREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRGxHWixDQ29HVTtFQUNFLGdDQUFBO0FEbEdaLENDMEdVO0VBQ0Usb0NBQUE7RUFDQSxXSXRkSjtFSnVkSSw2QkFBQTtBRHZHWixDQ2lIYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUQ5R2hCLENDcUhNO0VBQ0UseUJBQUE7QURsSFIsQ0NxSE07RUFDRSxvQ0FBQTtBRGxIUixDQ3FITTtFQUNFLG9DQUFBO0FEbEhSLENDcUhNO0VBQ0Usd0NBQUE7QURsSFIsQ0NxSE07RUFDRSwyQ0FBQTtBRGxIUixDQ3FITTtFQUNFLHlDQUFBO0FEbEhSLENDcUhNO0VBQ0UsMENBQUE7QURsSFIsQ0NxSE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixpQ0FBQTtBRitaRixDQ29GTTtFQUNFLHlCQUFBO0FEakZSLENDb0ZNO0VBQ0Usb0NBQUE7QURqRlIsQ0NvRk07RUFDRSxvQ0FBQTtBRGpGUixDQ29GTTtFQUNFLHdDQUFBO0FEakZSLENDb0ZNO0VBQ0UsMkNBQUE7QURqRlIsQ0NvRk07RUFDRSx5Q0FBQTtBRGpGUixDQ29GTTtFQUNFLDBDQUFBO0FEakZSLENDb0ZNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsaUNBQUE7QUZnY0YsQ0NtRE07RUFDRSx5QkFBQTtBRGhEUixDQ21ETTtFQUNFLG9DQUFBO0FEaERSLENDbURNO0VBQ0Usb0NBQUE7QURoRFIsQ0NtRE07RUFDRSx3Q0FBQTtBRGhEUixDQ21ETTtFQUNFLDJDQUFBO0FEaERSLENDbURNO0VBQ0UseUNBQUE7QURoRFIsQ0NtRE07RUFDRSwwQ0FBQTtBRGhEUixDQ21ETTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGlDQUFBO0FGaWVGLENDcGJNO0VBQ0Usb0NBQUE7QUR1YlIsQ0NyYlE7O0VBRUUsNkJBQUE7QUR1YlYsQ0N6WE07RUFDRSxvQ0FBQTtBRDRYUixDQ3pYTTtFQUNFLDZCQUFBO0FENFhSLENDelhNO0VBQ0UsZ0NBQUE7QUQ0WFIsQ0N6WE07RUFDRSw4QkFBQTtBRDRYUixDQ3pYTTtFQUNFLCtCQUFBO0FENFhSLENDclhROzs7RUFDRSxnQ0FBQTtBRDBYVixDQzFXTTtFQzFKSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZ3Z0JGLENDN0VNO0VBQ0UsaUVBQUE7QURnRlIsQ0N6Qk07RUFDRSx5QkFBQTtBRDRCUixDQ3pCTTtFQUNFLG9DQUFBO0FENEJSLENDekJNO0VBQ0Usb0NBQUE7QUQ0QlIsQ0N6Qk07RUFDRSx3Q0FBQTtBRDRCUixDQ3pCTTtFQUNFLDJDQUFBO0FENEJSLENDekJNO0VBQ0UseUNBQUE7QUQ0QlIsQ0N6Qk07RUFDRSwwQ0FBQTtBRDRCUixDQ3pCTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGNmlCRixDQzFETTtFQUNFLHlCQUFBO0FENkRSLENDMURNO0VBQ0Usb0NBQUE7QUQ2RFIsQ0MxRE07RUFDRSxvQ0FBQTtBRDZEUixDQzFETTtFQUNFLHdDQUFBO0FENkRSLENDMURNO0VBQ0UsMkNBQUE7QUQ2RFIsQ0MxRE07RUFDRSx5Q0FBQTtBRDZEUixDQzFETTtFQUNFLDBDQUFBO0FENkRSLENDMURNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUY4a0JGLENDM0ZNO0VBQ0UseUJBQUE7QUQ4RlIsQ0MzRk07RUFDRSxvQ0FBQTtBRDhGUixDQzNGTTtFQUNFLG9DQUFBO0FEOEZSLENDM0ZNO0VBQ0Usd0NBQUE7QUQ4RlIsQ0MzRk07RUFDRSwyQ0FBQTtBRDhGUixDQzNGTTtFQUNFLHlDQUFBO0FEOEZSLENDM0ZNO0VBQ0UsMENBQUE7QUQ4RlIsQ0MzRk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRittQkYsQ0M1SE07RUFDRSx5QkFBQTtBRCtIUixDQzVITTtFQUNFLG9DQUFBO0FEK0hSLENDNUhNO0VBQ0Usb0NBQUE7QUQrSFIsQ0M1SE07RUFDRSx3Q0FBQTtBRCtIUixDQzVITTtFQUNFLDJDQUFBO0FEK0hSLENDNUhNO0VBQ0UseUNBQUE7QUQrSFIsQ0M1SE07RUFDRSwwQ0FBQTtBRCtIUixDQzVITTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGZ3BCRixDQzdKTTtFQUNFLHlCQUFBO0FEZ0tSLENDN0pNO0VBQ0Usb0NBQUE7QURnS1IsQ0M3Sk07RUFDRSxvQ0FBQTtBRGdLUixDQzdKTTtFQUNFLHdDQUFBO0FEZ0tSLENDN0pNO0VBQ0UsMkNBQUE7QURnS1IsQ0M3Sk07RUFDRSx5Q0FBQTtBRGdLUixDQzdKTTtFQUNFLDBDQUFBO0FEZ0tSLENDN0pNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZpckJGLENDcG9CTTtFQUNFLG9DQUFBO0FEdW9CUixDQ3JvQlE7O0VBRUUsNkJBQUE7QUR1b0JWLENDam9CUTtFQUNFLDhDQUFBO0VBQ0EseUJBQUE7QURvb0JWLENDbG9CVTtFRzNEUixvREFBQTtBSmdzQkYsQ0Nqb0JVO0VBQ0UseUJBQUE7QURtb0JaLENDL25CVTtFQUNFLHlCQUFBO0FEaW9CWixDQzFuQlE7RUFDRSw4Q0FBQTtFQUNBLHlCQUFBO0FENm5CVixDQzFuQlU7RUFFRSxvQ0FBQTtBRDJuQlosQ0N4bkJVOztFQUVFLGdDQUFBO0FEMG5CWixDQ3RuQlk7RUFDRSw2Q0FBQTtBRHduQmQsQ0NybkJZO0VBQ0UsY0lNRDtBTGluQmIsQ0MvbUJRO0VBQ0UseUJBQUE7QURrbkJWLENDN21CTTtFQUNFLG9DQUFBO0FEZ25CUixDQzdtQk07RUFDRSw2QkFBQTtBRGduQlIsQ0M3bUJNO0VBQ0UsZ0NBQUE7QURnbkJSLENDN21CTTtFQUNFLDhCQUFBO0FEZ25CUixDQzdtQk07RUFDRSwrQkFBQTtBRGduQlIsQ0N6bUJROzs7RUFDRSxnQ0FBQTtBRDhtQlYsQ0N0bUJVO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtBRHltQlosQ0NubUJNO0VDMUpKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRml3QkYsQ0NsbUJRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FEcW1CVixDQ25tQlU7RUFHRSxXSTlKSjtFSitKSSxvQ0FBQTtBRG1tQlosQ0NobUJVO0VBQ0UsbUNBQUE7QURrbUJaLENDL2xCVTtFQUNFLGdCQUFBO0FEaW1CWixDQzFsQlE7RUFDRSw2QkFBQTtFQUNBLGNFekVEO0FIc3FCVCxDQzNsQlU7RUFDRSxjRTVFSDtBSHlxQlQsQ0MxbEJVO0VBQ0UseUNBQUE7QUQ0bEJaLENDemxCVTtFQUdFLHdDQUFBO0VBQ0EsY0V2Rkg7QUhnckJULENDdGxCVTtFQUNFLCtTQUFBO0FEd2xCWixDQ2psQlE7RUFDRSx5QkVuR0Q7RUZvR0Msa0RBQUE7RUFDQSxXSTVNRjtFSjZNRSx5QkFBQTtBRG9sQlYsQ0M5a0JZO0VBQ0UseUJBQUE7QURnbEJkLENDN2tCVTtFQUdFLHlCQUFBO0FENmtCWixDQzFrQlU7RUFDRSxXSTlOSjtBTDB5QlIsQ0Mxa0JVO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUQya0JaLENDcGtCUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRXZJRDtBSDhzQlQsQ0Nya0JVO0VBQ0UseUNBQUE7RUFDQSxjRTNJSDtBSGt0QlQsQ0Nya0JVO0VBQ0UsZ0JBQUE7QUR1a0JaLENDcmtCVTtFQUdFLHdDQUFBO0VBQ0EsY0VwSkg7QUh5dEJULENDbGtCVTtFQUNFLCtTQUFBO0FEb2tCWixDQ2prQlU7RUFDRSx3Q0FBQTtFQUNBLGNFN0pIO0FIZ3VCVCxDQ3pqQlk7O0VBQ0UscUtBQUE7QUQ2akJkLENDOWlCVTtFQUNFLHlCRXhMSDtBSHl1QlQsQ0N2aUJjO0VBQ0UsY0VuTVA7QUg2dUJULENDeGlCYztFQUNFLHlCQUFBO0FEMGlCaEIsQ0M5aEJjO0VBQ0UsOEJBQUE7RUFDQSxXSTNUUjtBTDQxQlIsQ0MvaEJnQjtFQUNFLFdJOVRWO0FMKzFCUixDQzNoQmM7RUFDRSxjRTlOUDtBSDJ2QlQsQ0N2aEJjO0VBQ0UsbUJFck9QO0VGc09PLFdJN1VSO0FMczJCUixDQ2poQmtCO0VBQ0UsMlRBQUE7QURtaEJwQixDQ3JnQmtCO0VBQ0UsMlRBQUE7QUR1Z0JwQixDQ3JmYztFQUNFLFdJeFhSO0VKeVhRLG9DQUFBO0VBQ0EscUJFblJQO0VGb1JPLG1EQUFBO0FEd2ZoQixDQy9lUTtFQUNFLHlDQUFBO0FEa2ZWLENDaGZVO0VBQ0UseUJFalNIO0FIbXhCVCxDQzFlVTtFQUNFLGdDQUFBO0FENmVaLENDM2VZOztFQUVFLDBCQUFBO0FENmVkLENDMWVZO0VBQ0Usb0NBQUE7QUQ0ZWQsQ0MzZWM7RUFDRSw4Q0FBQTtBRDZlaEIsQ0NsZVk7RUFFRSxnQ0FBQTtBRG9lZCxDQzFkTTtFQUNFLGlFQUFBO0FENmRSLENDdmRVOztFQUVFLHFCRXBWSDtFRnFWRyx5QkVyVkg7QUgreUJULENDdGRZOzs7OztFQUdFLHlEQUFBO0FEMGRkLENDdmRVO0VBQ0Usb0RBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUR5ZFosQ0N2ZFU7RUFDRSxnQ0FBQTtBRHlkWixDQ2pkVTtFQUNFLG9DQUFBO0VBQ0EsV0l0ZEo7RUp1ZEksNkJBQUE7QURvZFosQ0MxY2M7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FENmNoQixDQ3RjTTtFQUNFLHlCQUFBO0FEeWNSLENDdGNNO0VBQ0Usb0NBQUE7QUR5Y1IsQ0N0Y007RUFDRSxvQ0FBQTtBRHljUixDQ3RjTTtFQUNFLHdDQUFBO0FEeWNSLENDdGNNO0VBQ0UsMkNBQUE7QUR5Y1IsQ0N0Y007RUFDRSx5Q0FBQTtBRHljUixDQ3RjTTtFQUNFLDBDQUFBO0FEeWNSLENDdGNNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUYwOUJGLENDdmVNO0VBQ0UseUJBQUE7QUQwZVIsQ0N2ZU07RUFDRSxvQ0FBQTtBRDBlUixDQ3ZlTTtFQUNFLG9DQUFBO0FEMGVSLENDdmVNO0VBQ0Usd0NBQUE7QUQwZVIsQ0N2ZU07RUFDRSwyQ0FBQTtBRDBlUixDQ3ZlTTtFQUNFLHlDQUFBO0FEMGVSLENDdmVNO0VBQ0UsMENBQUE7QUQwZVIsQ0N2ZU07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRjIvQkYsQ0N4Z0JNO0VBQ0UseUJBQUE7QUQyZ0JSLENDeGdCTTtFQUNFLG9DQUFBO0FEMmdCUixDQ3hnQk07RUFDRSxvQ0FBQTtBRDJnQlIsQ0N4Z0JNO0VBQ0Usd0NBQUE7QUQyZ0JSLENDeGdCTTtFQUNFLDJDQUFBO0FEMmdCUixDQ3hnQk07RUFDRSx5Q0FBQTtBRDJnQlIsQ0N4Z0JNO0VBQ0UsMENBQUE7QUQyZ0JSLENDeGdCTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGlDQUFBO0FGNGhDRixDQ3ppQk07RUFDRSx5QkFBQTtBRDRpQlIsQ0N6aUJNO0VBQ0Usb0NBQUE7QUQ0aUJSLENDemlCTTtFQUNFLG9DQUFBO0FENGlCUixDQ3ppQk07RUFDRSx3Q0FBQTtBRDRpQlIsQ0N6aUJNO0VBQ0UsMkNBQUE7QUQ0aUJSLENDemlCTTtFQUNFLHlDQUFBO0FENGlCUixDQ3ppQk07RUFDRSwwQ0FBQTtBRDRpQlIsQ0N6aUJNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsZ0NBQUE7QUY2akNGLENDMWtCTTtFQUNFLHlCQUFBO0FENmtCUixDQzFrQk07RUFDRSxvQ0FBQTtBRDZrQlIsQ0Mxa0JNO0VBQ0Usb0NBQUE7QUQ2a0JSLENDMWtCTTtFQUNFLHdDQUFBO0FENmtCUixDQzFrQk07RUFDRSwyQ0FBQTtBRDZrQlIsQ0Mxa0JNO0VBQ0UseUNBQUE7QUQ2a0JSLENDMWtCTTtFQUNFLDBDQUFBO0FENmtCUixDQzFrQk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjhsQ0YsQ0MzbUJNO0VBQ0UseUJBQUE7QUQ4bUJSLENDM21CTTtFQUNFLG9DQUFBO0FEOG1CUixDQzNtQk07RUFDRSxvQ0FBQTtBRDhtQlIsQ0MzbUJNO0VBQ0Usd0NBQUE7QUQ4bUJSLENDM21CTTtFQUNFLDJDQUFBO0FEOG1CUixDQzNtQk07RUFDRSx5Q0FBQTtBRDhtQlIsQ0MzbUJNO0VBQ0UsMENBQUE7QUQ4bUJSLENDM21CTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGK25DRixDQzVvQk07RUFDRSx5QkFBQTtBRCtvQlIsQ0M1b0JNO0VBQ0Usb0NBQUE7QUQrb0JSLENDNW9CTTtFQUNFLG9DQUFBO0FEK29CUixDQzVvQk07RUFDRSx3Q0FBQTtBRCtvQlIsQ0M1b0JNO0VBQ0UsMkNBQUE7QUQrb0JSLENDNW9CTTtFQUNFLHlDQUFBO0FEK29CUixDQzVvQk07RUFDRSwwQ0FBQTtBRCtvQlIsQ0M1b0JNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZncUNGLENDN3FCTTtFQUNFLHlCQUFBO0FEZ3JCUixDQzdxQk07RUFDRSxvQ0FBQTtBRGdyQlIsQ0M3cUJNO0VBQ0Usb0NBQUE7QURnckJSLENDN3FCTTtFQUNFLHdDQUFBO0FEZ3JCUixDQzdxQk07RUFDRSwyQ0FBQTtBRGdyQlIsQ0M3cUJNO0VBQ0UseUNBQUE7QURnckJSLENDN3FCTTtFQUNFLDBDQUFBO0FEZ3JCUixDQzdxQk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRmlzQ0YsQ0M5c0JNO0VBQ0UseUJBQUE7QURpdEJSLENDOXNCTTtFQUNFLG9DQUFBO0FEaXRCUixDQzlzQk07RUFDRSxvQ0FBQTtBRGl0QlIsQ0M5c0JNO0VBQ0Usd0NBQUE7QURpdEJSLENDOXNCTTtFQUNFLDJDQUFBO0FEaXRCUixDQzlzQk07RUFDRSx5Q0FBQTtBRGl0QlIsQ0M5c0JNO0VBQ0UsMENBQUE7QURpdEJSLENDOXNCTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGa3VDRixDQy91Qk07RUFDRSx5QkFBQTtBRGt2QlIsQ0MvdUJNO0VBQ0Usb0NBQUE7QURrdkJSLENDL3VCTTtFQUNFLG9DQUFBO0FEa3ZCUixDQy91Qk07RUFDRSx3Q0FBQTtBRGt2QlIsQ0MvdUJNO0VBQ0UsMkNBQUE7QURrdkJSLENDL3VCTTtFQUNFLHlDQUFBO0FEa3ZCUixDQy91Qk07RUFDRSwwQ0FBQTtBRGt2QlIsQ0MvdUJNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZtd0NGLENDaHhCTTtFQUNFLHlCQUFBO0FEbXhCUixDQ2h4Qk07RUFDRSxvQ0FBQTtBRG14QlIsQ0NoeEJNO0VBQ0Usb0NBQUE7QURteEJSLENDaHhCTTtFQUNFLHdDQUFBO0FEbXhCUixDQ2h4Qk07RUFDRSwyQ0FBQTtBRG14QlIsQ0NoeEJNO0VBQ0UseUNBQUE7QURteEJSLENDaHhCTTtFQUNFLDBDQUFBO0FEbXhCUixDQ2h4Qk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm95Q0YsQ0NqekJNO0VBQ0UseUJBQUE7QURvekJSLENDanpCTTtFQUNFLG9DQUFBO0FEb3pCUixDQ2p6Qk07RUFDRSxvQ0FBQTtBRG96QlIsQ0NqekJNO0VBQ0Usd0NBQUE7QURvekJSLENDanpCTTtFQUNFLDJDQUFBO0FEb3pCUixDQ2p6Qk07RUFDRSx5Q0FBQTtBRG96QlIsQ0NqekJNO0VBQ0UsMENBQUE7QURvekJSLENDanpCTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGcTBDRixDQ2wxQk07RUFDRSx5QkFBQTtBRHExQlIsQ0NsMUJNO0VBQ0Usb0NBQUE7QURxMUJSLENDbDFCTTtFQUNFLG9DQUFBO0FEcTFCUixDQ2wxQk07RUFDRSx3Q0FBQTtBRHExQlIsQ0NsMUJNO0VBQ0UsMkNBQUE7QURxMUJSLENDbDFCTTtFQUNFLHlDQUFBO0FEcTFCUixDQ2wxQk07RUFDRSwwQ0FBQTtBRHExQlIsQ0NsMUJNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZzMkNGLENDenpDTTtFQUNFLG9DQUFBO0FENHpDUixDQzF6Q1E7O0VBRUUsNkJBQUE7QUQ0ekNWLENDdHpDUTtFQUNFLGdEQUFBO0VBQ0EseUJBQUE7QUR5ekNWLENDdnpDVTtFRzNEUixzREFBQTtBSnEzQ0YsQ0N0ekNVO0VBQ0UseUJBQUE7QUR3ekNaLENDcHpDVTtFQUNFLHlCQUFBO0FEc3pDWixDQy95Q1E7RUFDRSxnREFBQTtFQUNBLHlCQUFBO0FEa3pDVixDQy95Q1U7RUFFRSxzQ0FBQTtBRGd6Q1osQ0M3eUNVOztFQUVFLGdDQUFBO0FEK3lDWixDQzN5Q1k7RUFDRSwrQ0FBQTtBRDZ5Q2QsQ0MxeUNZO0VBQ0UsY0lNRDtBTHN5Q2IsQ0NweUNRO0VBQ0UseUJBQUE7QUR1eUNWLENDbHlDTTtFQUNFLG9DQUFBO0FEcXlDUixDQ2x5Q007RUFDRSw2QkFBQTtBRHF5Q1IsQ0NseUNNO0VBQ0UsZ0NBQUE7QURxeUNSLENDbHlDTTtFQUNFLDhCQUFBO0FEcXlDUixDQ2x5Q007RUFDRSwrQkFBQTtBRHF5Q1IsQ0M5eENROzs7RUFDRSxnQ0FBQTtBRG15Q1YsQ0MzeENVO0VBQ0UsMkNBQUE7RUFDQSx5QkFBQTtBRDh4Q1osQ0N4eENNO0VDMUpKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnM3Q0YsQ0N2eENRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FEMHhDVixDQ3h4Q1U7RUFHRSxXSTlKSjtFSitKSSxvQ0FBQTtBRHd4Q1osQ0NyeENVO0VBQ0UsbUNBQUE7QUR1eENaLENDcHhDVTtFQUNFLGdCQUFBO0FEc3hDWixDQy93Q1E7RUFDRSw2QkFBQTtFQUNBLGNFekVEO0FIMjFDVCxDQ2h4Q1U7RUFDRSxjRTVFSDtBSDgxQ1QsQ0Mvd0NVO0VBQ0UsMkNBQUE7QURpeENaLENDOXdDVTtFQUdFLDBDQUFBO0VBQ0EsY0V2Rkg7QUhxMkNULENDM3dDVTtFQUNFLCtTQUFBO0FENndDWixDQ3R3Q1E7RUFDRSx5QkVuR0Q7RUZvR0Msa0RBQUE7RUFDQSxXSTVNRjtFSjZNRSx5QkFBQTtBRHl3Q1YsQ0Nud0NZO0VBQ0UseUJBQUE7QURxd0NkLENDbHdDVTtFQUdFLHlCQUFBO0FEa3dDWixDQy92Q1U7RUFDRSxXSTlOSjtBTCs5Q1IsQ0MvdkNVO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QURnd0NaLENDenZDUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRXZJRDtBSG00Q1QsQ0MxdkNVO0VBQ0UsMkNBQUE7RUFDQSxjRTNJSDtBSHU0Q1QsQ0MxdkNVO0VBQ0UsZ0JBQUE7QUQ0dkNaLENDMXZDVTtFQUdFLDBDQUFBO0VBQ0EsY0VwSkg7QUg4NENULENDdnZDVTtFQUNFLCtTQUFBO0FEeXZDWixDQ3R2Q1U7RUFDRSwwQ0FBQTtFQUNBLGNFN0pIO0FIcTVDVCxDQzl1Q1k7O0VBQ0UsNktBQUE7QURrdkNkLENDbnVDVTtFQUNFLHlCRXhMSDtBSDg1Q1QsQ0M1dENjO0VBQ0UsY0VuTVA7QUhrNkNULENDN3RDYztFQUNFLHlCQUFBO0FEK3RDaEIsQ0NudENjO0VBQ0UsOEJBQUE7RUFDQSxXSTNUUjtBTGloRFIsQ0NwdENnQjtFQUNFLFdJOVRWO0FMb2hEUixDQ2h0Q2M7RUFDRSxjRTlOUDtBSGc3Q1QsQ0M1c0NjO0VBQ0UsbUJFck9QO0VGc09PLFdJN1VSO0FMMmhEUixDQ3RzQ2tCO0VBQ0UsMlRBQUE7QUR3c0NwQixDQzFyQ2tCO0VBQ0UsMlRBQUE7QUQ0ckNwQixDQzFxQ2M7RUFDRSxXSXhYUjtFSnlYUSxvQ0FBQTtFQUNBLHFCRW5SUDtFRm9STyxxREFBQTtBRDZxQ2hCLENDcHFDUTtFQUNFLDJDQUFBO0FEdXFDVixDQ3JxQ1U7RUFDRSx5QkVqU0g7QUh3OENULENDL3BDVTtFQUNFLGdDQUFBO0FEa3FDWixDQ2hxQ1k7O0VBRUUsMEJBQUE7QURrcUNkLENDL3BDWTtFQUNFLG9DQUFBO0FEaXFDZCxDQ2hxQ2M7RUFDRSxnREFBQTtBRGtxQ2hCLENDdnBDWTtFQUVFLGdDQUFBO0FEeXBDZCxDQy9vQ007RUFDRSxpRUFBQTtBRGtwQ1IsQ0M1b0NVOztFQUVFLHFCRXBWSDtFRnFWRyx5QkVyVkg7QUhvK0NULENDM29DWTs7Ozs7RUFHRSwyREFBQTtBRCtvQ2QsQ0M1b0NVO0VBQ0Usc0RBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUQ4b0NaLENDNW9DVTtFQUNFLGdDQUFBO0FEOG9DWixDQ3RvQ1U7RUFDRSxvQ0FBQTtFQUNBLFdJdGRKO0VKdWRJLDZCQUFBO0FEeW9DWixDQy9uQ2M7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FEa29DaEIsQ0MzbkNNO0VBQ0UseUJBQUE7QUQ4bkNSLENDM25DTTtFQUNFLG9DQUFBO0FEOG5DUixDQzNuQ007RUFDRSxvQ0FBQTtBRDhuQ1IsQ0MzbkNNO0VBQ0Usd0NBQUE7QUQ4bkNSLENDM25DTTtFQUNFLDJDQUFBO0FEOG5DUixDQzNuQ007RUFDRSx5Q0FBQTtBRDhuQ1IsQ0MzbkNNO0VBQ0UsMENBQUE7QUQ4bkNSLENDM25DTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGK29ERixDQzVwQ007RUFDRSx5QkFBQTtBRCtwQ1IsQ0M1cENNO0VBQ0Usb0NBQUE7QUQrcENSLENDNXBDTTtFQUNFLG9DQUFBO0FEK3BDUixDQzVwQ007RUFDRSx3Q0FBQTtBRCtwQ1IsQ0M1cENNO0VBQ0UsMkNBQUE7QUQrcENSLENDNXBDTTtFQUNFLHlDQUFBO0FEK3BDUixDQzVwQ007RUFDRSwwQ0FBQTtBRCtwQ1IsQ0M1cENNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZnckRGLENDN3JDTTtFQUNFLHlCQUFBO0FEZ3NDUixDQzdyQ007RUFDRSxvQ0FBQTtBRGdzQ1IsQ0M3ckNNO0VBQ0Usb0NBQUE7QURnc0NSLENDN3JDTTtFQUNFLHdDQUFBO0FEZ3NDUixDQzdyQ007RUFDRSwyQ0FBQTtBRGdzQ1IsQ0M3ckNNO0VBQ0UseUNBQUE7QURnc0NSLENDN3JDTTtFQUNFLDBDQUFBO0FEZ3NDUixDQzdyQ007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRml0REYsQ0M5dENNO0VBQ0UseUJBQUE7QURpdUNSLENDOXRDTTtFQUNFLG9DQUFBO0FEaXVDUixDQzl0Q007RUFDRSxvQ0FBQTtBRGl1Q1IsQ0M5dENNO0VBQ0Usd0NBQUE7QURpdUNSLENDOXRDTTtFQUNFLDJDQUFBO0FEaXVDUixDQzl0Q007RUFDRSx5Q0FBQTtBRGl1Q1IsQ0M5dENNO0VBQ0UsMENBQUE7QURpdUNSLENDOXRDTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGlDQUFBO0FGa3ZERixDQy92Q007RUFDRSx5QkFBQTtBRGt3Q1IsQ0MvdkNNO0VBQ0Usb0NBQUE7QURrd0NSLENDL3ZDTTtFQUNFLG9DQUFBO0FEa3dDUixDQy92Q007RUFDRSx3Q0FBQTtBRGt3Q1IsQ0MvdkNNO0VBQ0UsMkNBQUE7QURrd0NSLENDL3ZDTTtFQUNFLHlDQUFBO0FEa3dDUixDQy92Q007RUFDRSwwQ0FBQTtBRGt3Q1IsQ0MvdkNNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZteERGLENDaHlDTTtFQUNFLHlCQUFBO0FEbXlDUixDQ2h5Q007RUFDRSxvQ0FBQTtBRG15Q1IsQ0NoeUNNO0VBQ0Usb0NBQUE7QURteUNSLENDaHlDTTtFQUNFLHdDQUFBO0FEbXlDUixDQ2h5Q007RUFDRSwyQ0FBQTtBRG15Q1IsQ0NoeUNNO0VBQ0UseUNBQUE7QURteUNSLENDaHlDTTtFQUNFLDBDQUFBO0FEbXlDUixDQ2h5Q007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm96REYsQ0NqMENNO0VBQ0UseUJBQUE7QURvMENSLENDajBDTTtFQUNFLG9DQUFBO0FEbzBDUixDQ2owQ007RUFDRSxvQ0FBQTtBRG8wQ1IsQ0NqMENNO0VBQ0Usd0NBQUE7QURvMENSLENDajBDTTtFQUNFLDJDQUFBO0FEbzBDUixDQ2owQ007RUFDRSx5Q0FBQTtBRG8wQ1IsQ0NqMENNO0VBQ0UsMENBQUE7QURvMENSLENDajBDTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGcTFERixDQ2wyQ007RUFDRSx5QkFBQTtBRHEyQ1IsQ0NsMkNNO0VBQ0Usb0NBQUE7QURxMkNSLENDbDJDTTtFQUNFLG9DQUFBO0FEcTJDUixDQ2wyQ007RUFDRSx3Q0FBQTtBRHEyQ1IsQ0NsMkNNO0VBQ0UsMkNBQUE7QURxMkNSLENDbDJDTTtFQUNFLHlDQUFBO0FEcTJDUixDQ2wyQ007RUFDRSwwQ0FBQTtBRHEyQ1IsQ0NsMkNNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZzM0RGLENDbjRDTTtFQUNFLHlCQUFBO0FEczRDUixDQ240Q007RUFDRSxvQ0FBQTtBRHM0Q1IsQ0NuNENNO0VBQ0Usb0NBQUE7QURzNENSLENDbjRDTTtFQUNFLHdDQUFBO0FEczRDUixDQ240Q007RUFDRSwyQ0FBQTtBRHM0Q1IsQ0NuNENNO0VBQ0UseUNBQUE7QURzNENSLENDbjRDTTtFQUNFLDBDQUFBO0FEczRDUixDQ240Q007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRnU1REYsQ0MxMkRNO0VBQ0Usb0NBQUE7QUQ2MkRSLENDMzJEUTs7RUFFRSw2QkFBQTtBRDYyRFYsQ0N2MkRRO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtBRDAyRFYsQ0N4MkRVO0VHM0RSLHFEQUFBO0FKczZERixDQ3YyRFU7RUFDRSx5QkFBQTtBRHkyRFosQ0NyMkRVO0VBQ0UseUJBQUE7QUR1MkRaLENDaDJEUTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7QURtMkRWLENDaDJEVTtFQUVFLHFDQUFBO0FEaTJEWixDQzkxRFU7O0VBRUUsZ0NBQUE7QURnMkRaLENDNTFEWTtFQUNFLDhDQUFBO0FEODFEZCxDQzMxRFk7RUFDRSxjSU1EO0FMdTFEYixDQ3IxRFE7RUFDRSx5QkFBQTtBRHcxRFYsQ0NuMURNO0VBQ0Usb0NBQUE7QURzMURSLENDbjFETTtFQUNFLDZCQUFBO0FEczFEUixDQ24xRE07RUFDRSxnQ0FBQTtBRHMxRFIsQ0NuMURNO0VBQ0UsOEJBQUE7QURzMURSLENDbjFETTtFQUNFLCtCQUFBO0FEczFEUixDQy8wRFE7OztFQUNFLGdDQUFBO0FEbzFEVixDQzUwRFU7RUFDRSwwQ0FBQTtFQUNBLHlCQUFBO0FEKzBEWixDQ3owRE07RUMxSkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGdStERixDQ3gwRFE7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUQyMERWLENDejBEVTtFQUdFLFdJOUpKO0VKK0pJLG9DQUFBO0FEeTBEWixDQ3QwRFU7RUFDRSxtQ0FBQTtBRHcwRFosQ0NyMERVO0VBQ0UsZ0JBQUE7QUR1MERaLENDaDBEUTtFQUNFLDZCQUFBO0VBQ0EsY0V6RUQ7QUg0NERULENDajBEVTtFQUNFLGNFNUVIO0FIKzREVCxDQ2gwRFU7RUFDRSwwQ0FBQTtBRGswRFosQ0MvekRVO0VBR0UseUNBQUE7RUFDQSxjRXZGSDtBSHM1RFQsQ0M1ekRVO0VBQ0UsK1NBQUE7QUQ4ekRaLENDdnpEUTtFQUNFLHlCRW5HRDtFRm9HQyxrREFBQTtFQUNBLFdJNU1GO0VKNk1FLHlCQUFBO0FEMHpEVixDQ3B6RFk7RUFDRSx5QkFBQTtBRHN6RGQsQ0NuekRVO0VBR0UseUJBQUE7QURtekRaLENDaHpEVTtFQUNFLFdJOU5KO0FMZ2hFUixDQ2h6RFU7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBRGl6RFosQ0MxeURRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNFdklEO0FIbzdEVCxDQzN5RFU7RUFDRSwwQ0FBQTtFQUNBLGNFM0lIO0FIdzdEVCxDQzN5RFU7RUFDRSxnQkFBQTtBRDZ5RFosQ0MzeURVO0VBR0UseUNBQUE7RUFDQSxjRXBKSDtBSCs3RFQsQ0N4eURVO0VBQ0UsK1NBQUE7QUQweURaLENDdnlEVTtFQUNFLHlDQUFBO0VBQ0EsY0U3Skg7QUhzOERULENDL3hEWTs7RUFDRSx5S0FBQTtBRG15RGQsQ0NweERVO0VBQ0UseUJFeExIO0FIKzhEVCxDQzd3RGM7RUFDRSxjRW5NUDtBSG05RFQsQ0M5d0RjO0VBQ0UseUJBQUE7QURneERoQixDQ3B3RGM7RUFDRSw4QkFBQTtFQUNBLFdJM1RSO0FMa2tFUixDQ3J3RGdCO0VBQ0UsV0k5VFY7QUxxa0VSLENDandEYztFQUNFLGNFOU5QO0FIaStEVCxDQzd2RGM7RUFDRSxtQkVyT1A7RUZzT08sV0k3VVI7QUw0a0VSLENDdnZEa0I7RUFDRSwyVEFBQTtBRHl2RHBCLENDM3VEa0I7RUFDRSwyVEFBQTtBRDZ1RHBCLENDM3REYztFQUNFLFdJeFhSO0VKeVhRLG9DQUFBO0VBQ0EscUJFblJQO0VGb1JPLG9EQUFBO0FEOHREaEIsQ0NydERRO0VBQ0UsMENBQUE7QUR3dERWLENDdHREVTtFQUNFLHlCRWpTSDtBSHkvRFQsQ0NodERVO0VBQ0UsZ0NBQUE7QURtdERaLENDanREWTs7RUFFRSwwQkFBQTtBRG10RGQsQ0NodERZO0VBQ0Usb0NBQUE7QURrdERkLENDanREYztFQUNFLCtDQUFBO0FEbXREaEIsQ0N4c0RZO0VBRUUsZ0NBQUE7QUQwc0RkLENDaHNETTtFQUNFLGlFQUFBO0FEbXNEUixDQzdyRFU7O0VBRUUscUJFcFZIO0VGcVZHLHlCRXJWSDtBSHFoRVQsQ0M1ckRZOzs7OztFQUdFLDBEQUFBO0FEZ3NEZCxDQzdyRFU7RUFDRSxxREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRCtyRFosQ0M3ckRVO0VBQ0UsZ0NBQUE7QUQrckRaLENDdnJEVTtFQUNFLG9DQUFBO0VBQ0EsV0l0ZEo7RUp1ZEksNkJBQUE7QUQwckRaLENDaHJEYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QURtckRoQixDQzVxRE07RUFDRSx5QkFBQTtBRCtxRFIsQ0M1cURNO0VBQ0Usb0NBQUE7QUQrcURSLENDNXFETTtFQUNFLG9DQUFBO0FEK3FEUixDQzVxRE07RUFDRSx3Q0FBQTtBRCtxRFIsQ0M1cURNO0VBQ0UsMkNBQUE7QUQrcURSLENDNXFETTtFQUNFLHlDQUFBO0FEK3FEUixDQzVxRE07RUFDRSwwQ0FBQTtBRCtxRFIsQ0M1cURNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZnc0VGLENDN3NETTtFQUNFLHlCQUFBO0FEZ3REUixDQzdzRE07RUFDRSxvQ0FBQTtBRGd0RFIsQ0M3c0RNO0VBQ0Usb0NBQUE7QURndERSLENDN3NETTtFQUNFLHdDQUFBO0FEZ3REUixDQzdzRE07RUFDRSwyQ0FBQTtBRGd0RFIsQ0M3c0RNO0VBQ0UseUNBQUE7QURndERSLENDN3NETTtFQUNFLDBDQUFBO0FEZ3REUixDQzdzRE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRml1RUYsQ0M5dURNO0VBQ0UseUJBQUE7QURpdkRSLENDOXVETTtFQUNFLG9DQUFBO0FEaXZEUixDQzl1RE07RUFDRSxvQ0FBQTtBRGl2RFIsQ0M5dURNO0VBQ0Usd0NBQUE7QURpdkRSLENDOXVETTtFQUNFLDJDQUFBO0FEaXZEUixDQzl1RE07RUFDRSx5Q0FBQTtBRGl2RFIsQ0M5dURNO0VBQ0UsMENBQUE7QURpdkRSLENDOXVETTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGa3dFRixDQy93RE07RUFDRSx5QkFBQTtBRGt4RFIsQ0Mvd0RNO0VBQ0Usb0NBQUE7QURreERSLENDL3dETTtFQUNFLG9DQUFBO0FEa3hEUixDQy93RE07RUFDRSx3Q0FBQTtBRGt4RFIsQ0Mvd0RNO0VBQ0UsMkNBQUE7QURreERSLENDL3dETTtFQUNFLHlDQUFBO0FEa3hEUixDQy93RE07RUFDRSwwQ0FBQTtBRGt4RFIsQ0Mvd0RNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZteUVGLENDaHpETTtFQUNFLHlCQUFBO0FEbXpEUixDQ2h6RE07RUFDRSxvQ0FBQTtBRG16RFIsQ0NoekRNO0VBQ0Usb0NBQUE7QURtekRSLENDaHpETTtFQUNFLHdDQUFBO0FEbXpEUixDQ2h6RE07RUFDRSwyQ0FBQTtBRG16RFIsQ0NoekRNO0VBQ0UseUNBQUE7QURtekRSLENDaHpETTtFQUNFLDBDQUFBO0FEbXpEUixDQ2h6RE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm8wRUYsQ0NqMURNO0VBQ0UseUJBQUE7QURvMURSLENDajFETTtFQUNFLG9DQUFBO0FEbzFEUixDQ2oxRE07RUFDRSxvQ0FBQTtBRG8xRFIsQ0NqMURNO0VBQ0Usd0NBQUE7QURvMURSLENDajFETTtFQUNFLDJDQUFBO0FEbzFEUixDQ2oxRE07RUFDRSx5Q0FBQTtBRG8xRFIsQ0NqMURNO0VBQ0UsMENBQUE7QURvMURSLENDajFETTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGcTJFRixDQ2wzRE07RUFDRSx5QkFBQTtBRHEzRFIsQ0NsM0RNO0VBQ0Usb0NBQUE7QURxM0RSLENDbDNETTtFQUNFLG9DQUFBO0FEcTNEUixDQ2wzRE07RUFDRSx3Q0FBQTtBRHEzRFIsQ0NsM0RNO0VBQ0UsMkNBQUE7QURxM0RSLENDbDNETTtFQUNFLHlDQUFBO0FEcTNEUixDQ2wzRE07RUFDRSwwQ0FBQTtBRHEzRFIsQ0NsM0RNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZzNEVGLENDbjVETTtFQUNFLHlCQUFBO0FEczVEUixDQ241RE07RUFDRSxvQ0FBQTtBRHM1RFIsQ0NuNURNO0VBQ0Usb0NBQUE7QURzNURSLENDbjVETTtFQUNFLHdDQUFBO0FEczVEUixDQ241RE07RUFDRSwyQ0FBQTtBRHM1RFIsQ0NuNURNO0VBQ0UseUNBQUE7QURzNURSLENDbjVETTtFQUNFLDBDQUFBO0FEczVEUixDQ241RE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRnU2RUYsQ0NwN0RNO0VBQ0UseUJBQUE7QUR1N0RSLENDcDdETTtFQUNFLG9DQUFBO0FEdTdEUixDQ3A3RE07RUFDRSxvQ0FBQTtBRHU3RFIsQ0NwN0RNO0VBQ0Usd0NBQUE7QUR1N0RSLENDcDdETTtFQUNFLDJDQUFBO0FEdTdEUixDQ3A3RE07RUFDRSx5Q0FBQTtBRHU3RFIsQ0NwN0RNO0VBQ0UsMENBQUE7QUR1N0RSLENDcDdETTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGdzhFRixDQ3I5RE07RUFDRSx5QkFBQTtBRHc5RFIsQ0NyOURNO0VBQ0Usb0NBQUE7QUR3OURSLENDcjlETTtFQUNFLG9DQUFBO0FEdzlEUixDQ3I5RE07RUFDRSx3Q0FBQTtBRHc5RFIsQ0NyOURNO0VBQ0UsMkNBQUE7QUR3OURSLENDcjlETTtFQUNFLHlDQUFBO0FEdzlEUixDQ3I5RE07RUFDRSwwQ0FBQTtBRHc5RFIsQ0NyOURNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZ5K0VGLENDdC9ETTtFQUNFLHlCQUFBO0FEeS9EUixDQ3QvRE07RUFDRSxvQ0FBQTtBRHkvRFIsQ0N0L0RNO0VBQ0Usb0NBQUE7QUR5L0RSLENDdC9ETTtFQUNFLHdDQUFBO0FEeS9EUixDQ3QvRE07RUFDRSwyQ0FBQTtBRHkvRFIsQ0N0L0RNO0VBQ0UseUNBQUE7QUR5L0RSLENDdC9ETTtFQUNFLDBDQUFBO0FEeS9EUixDQ3QvRE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRjBnRkYsQ0N2aEVNO0VBQ0UseUJBQUE7QUQwaEVSLENDdmhFTTtFQUNFLG9DQUFBO0FEMGhFUixDQ3ZoRU07RUFDRSxvQ0FBQTtBRDBoRVIsQ0N2aEVNO0VBQ0Usd0NBQUE7QUQwaEVSLENDdmhFTTtFQUNFLDJDQUFBO0FEMGhFUixDQ3ZoRU07RUFDRSx5Q0FBQTtBRDBoRVIsQ0N2aEVNO0VBQ0UsMENBQUE7QUQwaEVSLENDdmhFTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGMmlGRixDQ3hqRU07RUFDRSx5QkFBQTtBRDJqRVIsQ0N4akVNO0VBQ0Usb0NBQUE7QUQyakVSLENDeGpFTTtFQUNFLG9DQUFBO0FEMmpFUixDQ3hqRU07RUFDRSx3Q0FBQTtBRDJqRVIsQ0N4akVNO0VBQ0UsMkNBQUE7QUQyakVSLENDeGpFTTtFQUNFLHlDQUFBO0FEMmpFUixDQ3hqRU07RUFDRSwwQ0FBQTtBRDJqRVIsQ0N4akVNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUY0a0ZGLENDL2hGTTtFQUNFLG9DQUFBO0FEa2lGUixDQ2hpRlE7O0VBRUUsNkJBQUE7QURraUZWLENDNWhGUTtFQUNFLDhDQUFBO0VBQ0EseUJBQUE7QUQraEZWLENDN2hGVTtFRzNEUixvREFBQTtBSjJsRkYsQ0M1aEZVO0VBQ0UseUJBQUE7QUQ4aEZaLENDMWhGVTtFQUNFLHlCQUFBO0FENGhGWixDQ3JoRlE7RUFDRSw4Q0FBQTtFQUNBLHlCQUFBO0FEd2hGVixDQ3JoRlU7RUFFRSxvQ0FBQTtBRHNoRlosQ0NuaEZVOztFQUVFLGdDQUFBO0FEcWhGWixDQ2poRlk7RUFDRSw2Q0FBQTtBRG1oRmQsQ0NoaEZZO0VBQ0UsY0lNRDtBTDRnRmIsQ0MxZ0ZRO0VBQ0UseUJBQUE7QUQ2Z0ZWLENDeGdGTTtFQUNFLG9DQUFBO0FEMmdGUixDQ3hnRk07RUFDRSw2QkFBQTtBRDJnRlIsQ0N4Z0ZNO0VBQ0UsZ0NBQUE7QUQyZ0ZSLENDeGdGTTtFQUNFLDhCQUFBO0FEMmdGUixDQ3hnRk07RUFDRSwrQkFBQTtBRDJnRlIsQ0NwZ0ZROzs7RUFDRSxnQ0FBQTtBRHlnRlYsQ0NqZ0ZVO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtBRG9nRlosQ0M5L0VNO0VDMUpKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRjRwRkYsQ0M3L0VRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FEZ2dGVixDQzkvRVU7RUFHRSxXSTlKSjtFSitKSSxvQ0FBQTtBRDgvRVosQ0MzL0VVO0VBQ0UsbUNBQUE7QUQ2L0VaLENDMS9FVTtFQUNFLGdCQUFBO0FENC9FWixDQ3IvRVE7RUFDRSw2QkFBQTtFQUNBLGNFekVEO0FIaWtGVCxDQ3QvRVU7RUFDRSxjRTVFSDtBSG9rRlQsQ0NyL0VVO0VBQ0UseUNBQUE7QUR1L0VaLENDcC9FVTtFQUdFLHdDQUFBO0VBQ0EsY0V2Rkg7QUgya0ZULENDai9FVTtFQUNFLCtTQUFBO0FEbS9FWixDQzUrRVE7RUFDRSx5QkVuR0Q7RUZvR0Msa0RBQUE7RUFDQSxXSTVNRjtFSjZNRSx5QkFBQTtBRCsrRVYsQ0N6K0VZO0VBQ0UseUJBQUE7QUQyK0VkLENDeCtFVTtFQUdFLHlCQUFBO0FEdytFWixDQ3IrRVU7RUFDRSxXSTlOSjtBTHFzRlIsQ0NyK0VVO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QURzK0VaLENDLzlFUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRXZJRDtBSHltRlQsQ0NoK0VVO0VBQ0UseUNBQUE7RUFDQSxjRTNJSDtBSDZtRlQsQ0NoK0VVO0VBQ0UsZ0JBQUE7QURrK0VaLENDaCtFVTtFQUdFLHdDQUFBO0VBQ0EsY0VwSkg7QUhvbkZULENDNzlFVTtFQUNFLCtTQUFBO0FEKzlFWixDQzU5RVU7RUFDRSx3Q0FBQTtFQUNBLGNFN0pIO0FIMm5GVCxDQ3A5RVk7O0VBQ0UscUtBQUE7QUR3OUVkLENDejhFVTtFQUNFLHlCRXhMSDtBSG9vRlQsQ0NsOEVjO0VBQ0UsY0VuTVA7QUh3b0ZULENDbjhFYztFQUNFLHlCQUFBO0FEcThFaEIsQ0N6N0VjO0VBQ0UsOEJBQUE7RUFDQSxXSTNUUjtBTHV2RlIsQ0MxN0VnQjtFQUNFLFdJOVRWO0FMMHZGUixDQ3Q3RWM7RUFDRSxjRTlOUDtBSHNwRlQsQ0NsN0VjO0VBQ0UsbUJFck9QO0VGc09PLFdJN1VSO0FMaXdGUixDQzU2RWtCO0VBQ0UsMlRBQUE7QUQ4NkVwQixDQ2g2RWtCO0VBQ0UsMlRBQUE7QURrNkVwQixDQ2g1RWM7RUFDRSxXSXhYUjtFSnlYUSxvQ0FBQTtFQUNBLHFCRW5SUDtFRm9STyxtREFBQTtBRG01RWhCLENDMTRFUTtFQUNFLHlDQUFBO0FENjRFVixDQzM0RVU7RUFDRSx5QkVqU0g7QUg4cUZULENDcjRFVTtFQUNFLGdDQUFBO0FEdzRFWixDQ3Q0RVk7O0VBRUUsMEJBQUE7QUR3NEVkLENDcjRFWTtFQUNFLG9DQUFBO0FEdTRFZCxDQ3Q0RWM7RUFDRSw4Q0FBQTtBRHc0RWhCLENDNzNFWTtFQUVFLGdDQUFBO0FEKzNFZCxDQ3IzRU07RUFDRSxpRUFBQTtBRHczRVIsQ0NsM0VVOztFQUVFLHFCRXBWSDtFRnFWRyx5QkVyVkg7QUgwc0ZULENDajNFWTs7Ozs7RUFHRSx5REFBQTtBRHEzRWQsQ0NsM0VVO0VBQ0Usb0RBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QURvM0VaLENDbDNFVTtFQUNFLGdDQUFBO0FEbzNFWixDQzUyRVU7RUFDRSxvQ0FBQTtFQUNBLFdJdGRKO0VKdWRJLDZCQUFBO0FEKzJFWixDQ3IyRWM7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FEdzJFaEIsQ0NqMkVNO0VBQ0UseUJBQUE7QURvMkVSLENDajJFTTtFQUNFLG9DQUFBO0FEbzJFUixDQ2oyRU07RUFDRSxvQ0FBQTtBRG8yRVIsQ0NqMkVNO0VBQ0Usd0NBQUE7QURvMkVSLENDajJFTTtFQUNFLDJDQUFBO0FEbzJFUixDQ2oyRU07RUFDRSx5Q0FBQTtBRG8yRVIsQ0NqMkVNO0VBQ0UsMENBQUE7QURvMkVSLENDajJFTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGcTNGRixDQ2w0RU07RUFDRSx5QkFBQTtBRHE0RVIsQ0NsNEVNO0VBQ0Usb0NBQUE7QURxNEVSLENDbDRFTTtFQUNFLG9DQUFBO0FEcTRFUixDQ2w0RU07RUFDRSx3Q0FBQTtBRHE0RVIsQ0NsNEVNO0VBQ0UsMkNBQUE7QURxNEVSLENDbDRFTTtFQUNFLHlDQUFBO0FEcTRFUixDQ2w0RU07RUFDRSwwQ0FBQTtBRHE0RVIsQ0NsNEVNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZzNUZGLENDbjZFTTtFQUNFLHlCQUFBO0FEczZFUixDQ242RU07RUFDRSxvQ0FBQTtBRHM2RVIsQ0NuNkVNO0VBQ0Usb0NBQUE7QURzNkVSLENDbjZFTTtFQUNFLHdDQUFBO0FEczZFUixDQ242RU07RUFDRSwyQ0FBQTtBRHM2RVIsQ0NuNkVNO0VBQ0UseUNBQUE7QURzNkVSLENDbjZFTTtFQUNFLDBDQUFBO0FEczZFUixDQ242RU07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRnU3RkYsQ0NwOEVNO0VBQ0UseUJBQUE7QUR1OEVSLENDcDhFTTtFQUNFLG9DQUFBO0FEdThFUixDQ3A4RU07RUFDRSxvQ0FBQTtBRHU4RVIsQ0NwOEVNO0VBQ0Usd0NBQUE7QUR1OEVSLENDcDhFTTtFQUNFLDJDQUFBO0FEdThFUixDQ3A4RU07RUFDRSx5Q0FBQTtBRHU4RVIsQ0NwOEVNO0VBQ0UsMENBQUE7QUR1OEVSLENDcDhFTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGdzlGRixDQ3IrRU07RUFDRSx5QkFBQTtBRHcrRVIsQ0NyK0VNO0VBQ0Usb0NBQUE7QUR3K0VSLENDcitFTTtFQUNFLG9DQUFBO0FEdytFUixDQ3IrRU07RUFDRSx3Q0FBQTtBRHcrRVIsQ0NyK0VNO0VBQ0UsMkNBQUE7QUR3K0VSLENDcitFTTtFQUNFLHlDQUFBO0FEdytFUixDQ3IrRU07RUFDRSwwQ0FBQTtBRHcrRVIsQ0NyK0VNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZ5L0ZGLENDdGdGTTtFQUNFLHlCQUFBO0FEeWdGUixDQ3RnRk07RUFDRSxvQ0FBQTtBRHlnRlIsQ0N0Z0ZNO0VBQ0Usb0NBQUE7QUR5Z0ZSLENDdGdGTTtFQUNFLHdDQUFBO0FEeWdGUixDQ3RnRk07RUFDRSwyQ0FBQTtBRHlnRlIsQ0N0Z0ZNO0VBQ0UseUNBQUE7QUR5Z0ZSLENDdGdGTTtFQUNFLDBDQUFBO0FEeWdGUixDQ3RnRk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjBoR0YsQ0N2aUZNO0VBQ0UseUJBQUE7QUQwaUZSLENDdmlGTTtFQUNFLG9DQUFBO0FEMGlGUixDQ3ZpRk07RUFDRSxvQ0FBQTtBRDBpRlIsQ0N2aUZNO0VBQ0Usd0NBQUE7QUQwaUZSLENDdmlGTTtFQUNFLDJDQUFBO0FEMGlGUixDQ3ZpRk07RUFDRSx5Q0FBQTtBRDBpRlIsQ0N2aUZNO0VBQ0UsMENBQUE7QUQwaUZSLENDdmlGTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGMmpHRixDQ3hrRk07RUFDRSx5QkFBQTtBRDJrRlIsQ0N4a0ZNO0VBQ0Usb0NBQUE7QUQya0ZSLENDeGtGTTtFQUNFLG9DQUFBO0FEMmtGUixDQ3hrRk07RUFDRSx3Q0FBQTtBRDJrRlIsQ0N4a0ZNO0VBQ0UsMkNBQUE7QUQya0ZSLENDeGtGTTtFQUNFLHlDQUFBO0FEMmtGUixDQ3hrRk07RUFDRSwwQ0FBQTtBRDJrRlIsQ0N4a0ZNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUY0bEdGLENDem1GTTtFQUNFLHlCQUFBO0FENG1GUixDQ3ptRk07RUFDRSxvQ0FBQTtBRDRtRlIsQ0N6bUZNO0VBQ0Usb0NBQUE7QUQ0bUZSLENDem1GTTtFQUNFLHdDQUFBO0FENG1GUixDQ3ptRk07RUFDRSwyQ0FBQTtBRDRtRlIsQ0N6bUZNO0VBQ0UseUNBQUE7QUQ0bUZSLENDem1GTTtFQUNFLDBDQUFBO0FENG1GUixDQ3ptRk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjZuR0YsQ0Mxb0ZNO0VBQ0UseUJBQUE7QUQ2b0ZSLENDMW9GTTtFQUNFLG9DQUFBO0FENm9GUixDQzFvRk07RUFDRSxvQ0FBQTtBRDZvRlIsQ0Mxb0ZNO0VBQ0Usd0NBQUE7QUQ2b0ZSLENDMW9GTTtFQUNFLDJDQUFBO0FENm9GUixDQzFvRk07RUFDRSx5Q0FBQTtBRDZvRlIsQ0Mxb0ZNO0VBQ0UsMENBQUE7QUQ2b0ZSLENDMW9GTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGOHBHRixDQzNxRk07RUFDRSx5QkFBQTtBRDhxRlIsQ0MzcUZNO0VBQ0Usb0NBQUE7QUQ4cUZSLENDM3FGTTtFQUNFLG9DQUFBO0FEOHFGUixDQzNxRk07RUFDRSx3Q0FBQTtBRDhxRlIsQ0MzcUZNO0VBQ0UsMkNBQUE7QUQ4cUZSLENDM3FGTTtFQUNFLHlDQUFBO0FEOHFGUixDQzNxRk07RUFDRSwwQ0FBQTtBRDhxRlIsQ0MzcUZNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUYrckdGLENDNXNGTTtFQUNFLHlCQUFBO0FEK3NGUixDQzVzRk07RUFDRSxvQ0FBQTtBRCtzRlIsQ0M1c0ZNO0VBQ0Usb0NBQUE7QUQrc0ZSLENDNXNGTTtFQUNFLHdDQUFBO0FEK3NGUixDQzVzRk07RUFDRSwyQ0FBQTtBRCtzRlIsQ0M1c0ZNO0VBQ0UseUNBQUE7QUQrc0ZSLENDNXNGTTtFQUNFLDBDQUFBO0FEK3NGUixDQzVzRk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRmd1R0YsQ0M3dUZNO0VBQ0UseUJBQUE7QURndkZSLENDN3VGTTtFQUNFLG9DQUFBO0FEZ3ZGUixDQzd1Rk07RUFDRSxvQ0FBQTtBRGd2RlIsQ0M3dUZNO0VBQ0Usd0NBQUE7QURndkZSLENDN3VGTTtFQUNFLDJDQUFBO0FEZ3ZGUixDQzd1Rk07RUFDRSx5Q0FBQTtBRGd2RlIsQ0M3dUZNO0VBQ0UsMENBQUE7QURndkZSLENDN3VGTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGaXdHRixDQ3B0R007RUFDRSxvQ0FBQTtBRHV0R1IsQ0NydEdROztFQUVFLDZCQUFBO0FEdXRHVixDQ2p0R1E7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0FEb3RHVixDQ2x0R1U7RUczRFIscURBQUE7QUpneEdGLENDanRHVTtFQUNFLHlCQUFBO0FEbXRHWixDQy9zR1U7RUFDRSx5QkFBQTtBRGl0R1osQ0Mxc0dRO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtBRDZzR1YsQ0Mxc0dVO0VBRUUscUNBQUE7QUQyc0daLENDeHNHVTs7RUFFRSxnQ0FBQTtBRDBzR1osQ0N0c0dZO0VBQ0UsOENBQUE7QUR3c0dkLENDcnNHWTtFQUNFLGNJTUQ7QUxpc0diLENDL3JHUTtFQUNFLHlCQUFBO0FEa3NHVixDQzdyR007RUFDRSxvQ0FBQTtBRGdzR1IsQ0M3ckdNO0VBQ0UsNkJBQUE7QURnc0dSLENDN3JHTTtFQUNFLGdDQUFBO0FEZ3NHUixDQzdyR007RUFDRSw4QkFBQTtBRGdzR1IsQ0M3ckdNO0VBQ0UsK0JBQUE7QURnc0dSLENDenJHUTs7O0VBQ0UsZ0NBQUE7QUQ4ckdWLENDdHJHVTtFQUNFLDBDQUFBO0VBQ0EseUJBQUE7QUR5ckdaLENDbnJHTTtFQzFKSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZpMUdGLENDbHJHUTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBRHFyR1YsQ0NuckdVO0VBR0UsV0k5Sko7RUorSkksb0NBQUE7QURtckdaLENDaHJHVTtFQUNFLG1DQUFBO0FEa3JHWixDQy9xR1U7RUFDRSxnQkFBQTtBRGlyR1osQ0MxcUdRO0VBQ0UsNkJBQUE7RUFDQSxjRXpFRDtBSHN2R1QsQ0MzcUdVO0VBQ0UsY0U1RUg7QUh5dkdULENDMXFHVTtFQUNFLDBDQUFBO0FENHFHWixDQ3pxR1U7RUFHRSx5Q0FBQTtFQUNBLGNFdkZIO0FIZ3dHVCxDQ3RxR1U7RUFDRSwrU0FBQTtBRHdxR1osQ0NqcUdRO0VBQ0UseUJFbkdEO0VGb0dDLGtEQUFBO0VBQ0EsV0k1TUY7RUo2TUUseUJBQUE7QURvcUdWLENDOXBHWTtFQUNFLHlCQUFBO0FEZ3FHZCxDQzdwR1U7RUFHRSx5QkFBQTtBRDZwR1osQ0MxcEdVO0VBQ0UsV0k5Tko7QUwwM0dSLENDMXBHVTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FEMnBHWixDQ3BwR1E7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0V2SUQ7QUg4eEdULENDcnBHVTtFQUNFLDBDQUFBO0VBQ0EsY0UzSUg7QUhreUdULENDcnBHVTtFQUNFLGdCQUFBO0FEdXBHWixDQ3JwR1U7RUFHRSx5Q0FBQTtFQUNBLGNFcEpIO0FIeXlHVCxDQ2xwR1U7RUFDRSwrU0FBQTtBRG9wR1osQ0NqcEdVO0VBQ0UseUNBQUE7RUFDQSxjRTdKSDtBSGd6R1QsQ0N6b0dZOztFQUNFLHlLQUFBO0FENm9HZCxDQzluR1U7RUFDRSx5QkV4TEg7QUh5ekdULENDdm5HYztFQUNFLGNFbk1QO0FINnpHVCxDQ3huR2M7RUFDRSx5QkFBQTtBRDBuR2hCLENDOW1HYztFQUNFLDhCQUFBO0VBQ0EsV0kzVFI7QUw0NkdSLENDL21HZ0I7RUFDRSxXSTlUVjtBTCs2R1IsQ0MzbUdjO0VBQ0UsY0U5TlA7QUgyMEdULENDdm1HYztFQUNFLG1CRXJPUDtFRnNPTyxXSTdVUjtBTHM3R1IsQ0NqbUdrQjtFQUNFLDJUQUFBO0FEbW1HcEIsQ0NybEdrQjtFQUNFLDJUQUFBO0FEdWxHcEIsQ0Nya0djO0VBQ0UsV0l4WFI7RUp5WFEsb0NBQUE7RUFDQSxxQkVuUlA7RUZvUk8sb0RBQUE7QUR3a0doQixDQy9qR1E7RUFDRSwwQ0FBQTtBRGtrR1YsQ0Noa0dVO0VBQ0UseUJFalNIO0FIbTJHVCxDQzFqR1U7RUFDRSxnQ0FBQTtBRDZqR1osQ0MzakdZOztFQUVFLDBCQUFBO0FENmpHZCxDQzFqR1k7RUFDRSxvQ0FBQTtBRDRqR2QsQ0MzakdjO0VBQ0UsK0NBQUE7QUQ2akdoQixDQ2xqR1k7RUFFRSxnQ0FBQTtBRG9qR2QsQ0MxaUdNO0VBQ0UsaUVBQUE7QUQ2aUdSLENDdmlHVTs7RUFFRSxxQkVwVkg7RUZxVkcseUJFclZIO0FIKzNHVCxDQ3RpR1k7Ozs7O0VBR0UsMERBQUE7QUQwaUdkLENDdmlHVTtFQUNFLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FEeWlHWixDQ3ZpR1U7RUFDRSxnQ0FBQTtBRHlpR1osQ0NqaUdVO0VBQ0Usb0NBQUE7RUFDQSxXSXRkSjtFSnVkSSw2QkFBQTtBRG9pR1osQ0MxaEdjO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtBRDZoR2hCLENDdGhHTTtFQUNFLHlCQUFBO0FEeWhHUixDQ3RoR007RUFDRSxvQ0FBQTtBRHloR1IsQ0N0aEdNO0VBQ0Usb0NBQUE7QUR5aEdSLENDdGhHTTtFQUNFLHdDQUFBO0FEeWhHUixDQ3RoR007RUFDRSwyQ0FBQTtBRHloR1IsQ0N0aEdNO0VBQ0UseUNBQUE7QUR5aEdSLENDdGhHTTtFQUNFLDBDQUFBO0FEeWhHUixDQ3RoR007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRjBpSEYsQ0N2akdNO0VBQ0UseUJBQUE7QUQwakdSLENDdmpHTTtFQUNFLG9DQUFBO0FEMGpHUixDQ3ZqR007RUFDRSxvQ0FBQTtBRDBqR1IsQ0N2akdNO0VBQ0Usd0NBQUE7QUQwakdSLENDdmpHTTtFQUNFLDJDQUFBO0FEMGpHUixDQ3ZqR007RUFDRSx5Q0FBQTtBRDBqR1IsQ0N2akdNO0VBQ0UsMENBQUE7QUQwakdSLENDdmpHTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGMmtIRixDQ3hsR007RUFDRSx5QkFBQTtBRDJsR1IsQ0N4bEdNO0VBQ0Usb0NBQUE7QUQybEdSLENDeGxHTTtFQUNFLG9DQUFBO0FEMmxHUixDQ3hsR007RUFDRSx3Q0FBQTtBRDJsR1IsQ0N4bEdNO0VBQ0UsMkNBQUE7QUQybEdSLENDeGxHTTtFQUNFLHlDQUFBO0FEMmxHUixDQ3hsR007RUFDRSwwQ0FBQTtBRDJsR1IsQ0N4bEdNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUY0bUhGLENDem5HTTtFQUNFLHlCQUFBO0FENG5HUixDQ3puR007RUFDRSxvQ0FBQTtBRDRuR1IsQ0N6bkdNO0VBQ0Usb0NBQUE7QUQ0bkdSLENDem5HTTtFQUNFLHdDQUFBO0FENG5HUixDQ3puR007RUFDRSwyQ0FBQTtBRDRuR1IsQ0N6bkdNO0VBQ0UseUNBQUE7QUQ0bkdSLENDem5HTTtFQUNFLDBDQUFBO0FENG5HUixDQ3puR007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRjZvSEYsQ0MxcEdNO0VBQ0UseUJBQUE7QUQ2cEdSLENDMXBHTTtFQUNFLG9DQUFBO0FENnBHUixDQzFwR007RUFDRSxvQ0FBQTtBRDZwR1IsQ0MxcEdNO0VBQ0Usd0NBQUE7QUQ2cEdSLENDMXBHTTtFQUNFLDJDQUFBO0FENnBHUixDQzFwR007RUFDRSx5Q0FBQTtBRDZwR1IsQ0MxcEdNO0VBQ0UsMENBQUE7QUQ2cEdSLENDMXBHTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGOHFIRixDQzNyR007RUFDRSx5QkFBQTtBRDhyR1IsQ0MzckdNO0VBQ0Usb0NBQUE7QUQ4ckdSLENDM3JHTTtFQUNFLG9DQUFBO0FEOHJHUixDQzNyR007RUFDRSx3Q0FBQTtBRDhyR1IsQ0MzckdNO0VBQ0UsMkNBQUE7QUQ4ckdSLENDM3JHTTtFQUNFLHlDQUFBO0FEOHJHUixDQzNyR007RUFDRSwwQ0FBQTtBRDhyR1IsQ0MzckdNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUYrc0hGLENDNXRHTTtFQUNFLHlCQUFBO0FEK3RHUixDQzV0R007RUFDRSxvQ0FBQTtBRCt0R1IsQ0M1dEdNO0VBQ0Usb0NBQUE7QUQrdEdSLENDNXRHTTtFQUNFLHdDQUFBO0FEK3RHUixDQzV0R007RUFDRSwyQ0FBQTtBRCt0R1IsQ0M1dEdNO0VBQ0UseUNBQUE7QUQrdEdSLENDNXRHTTtFQUNFLDBDQUFBO0FEK3RHUixDQzV0R007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRmd2SEYsQ0M3dkdNO0VBQ0UseUJBQUE7QURnd0dSLENDN3ZHTTtFQUNFLG9DQUFBO0FEZ3dHUixDQzd2R007RUFDRSxvQ0FBQTtBRGd3R1IsQ0M3dkdNO0VBQ0Usd0NBQUE7QURnd0dSLENDN3ZHTTtFQUNFLDJDQUFBO0FEZ3dHUixDQzd2R007RUFDRSx5Q0FBQTtBRGd3R1IsQ0M3dkdNO0VBQ0UsMENBQUE7QURnd0dSLENDN3ZHTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGaXhIRixDQzl4R007RUFDRSx5QkFBQTtBRGl5R1IsQ0M5eEdNO0VBQ0Usb0NBQUE7QURpeUdSLENDOXhHTTtFQUNFLG9DQUFBO0FEaXlHUixDQzl4R007RUFDRSx3Q0FBQTtBRGl5R1IsQ0M5eEdNO0VBQ0UsMkNBQUE7QURpeUdSLENDOXhHTTtFQUNFLHlDQUFBO0FEaXlHUixDQzl4R007RUFDRSwwQ0FBQTtBRGl5R1IsQ0M5eEdNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZrekhGLENDL3pHTTtFQUNFLHlCQUFBO0FEazBHUixDQy96R007RUFDRSxvQ0FBQTtBRGswR1IsQ0MvekdNO0VBQ0Usb0NBQUE7QURrMEdSLENDL3pHTTtFQUNFLHdDQUFBO0FEazBHUixDQy96R007RUFDRSwyQ0FBQTtBRGswR1IsQ0MvekdNO0VBQ0UseUNBQUE7QURrMEdSLENDL3pHTTtFQUNFLDBDQUFBO0FEazBHUixDQy96R007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm0xSEYsQ0NoMkdNO0VBQ0UseUJBQUE7QURtMkdSLENDaDJHTTtFQUNFLG9DQUFBO0FEbTJHUixDQ2gyR007RUFDRSxvQ0FBQTtBRG0yR1IsQ0NoMkdNO0VBQ0Usd0NBQUE7QURtMkdSLENDaDJHTTtFQUNFLDJDQUFBO0FEbTJHUixDQ2gyR007RUFDRSx5Q0FBQTtBRG0yR1IsQ0NoMkdNO0VBQ0UsMENBQUE7QURtMkdSLENDaDJHTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGbzNIRixDQ2o0R007RUFDRSx5QkFBQTtBRG80R1IsQ0NqNEdNO0VBQ0Usb0NBQUE7QURvNEdSLENDajRHTTtFQUNFLG9DQUFBO0FEbzRHUixDQ2o0R007RUFDRSx3Q0FBQTtBRG80R1IsQ0NqNEdNO0VBQ0UsMkNBQUE7QURvNEdSLENDajRHTTtFQUNFLHlDQUFBO0FEbzRHUixDQ2o0R007RUFDRSwwQ0FBQTtBRG80R1IsQ0NqNEdNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZxNUhGLENDbDZHTTtFQUNFLHlCQUFBO0FEcTZHUixDQ2w2R007RUFDRSxvQ0FBQTtBRHE2R1IsQ0NsNkdNO0VBQ0Usb0NBQUE7QURxNkdSLENDbDZHTTtFQUNFLHdDQUFBO0FEcTZHUixDQ2w2R007RUFDRSwyQ0FBQTtBRHE2R1IsQ0NsNkdNO0VBQ0UseUNBQUE7QURxNkdSLENDbDZHTTtFQUNFLDBDQUFBO0FEcTZHUixDQ2w2R007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnM3SEYsQ0N6NEhNO0VBQ0Usb0NBQUE7QUQ0NEhSLENDMTRIUTs7RUFFRSw2QkFBQTtBRDQ0SFYsQ0N0NEhRO0VBQ0UsOENBQUE7RUFDQSx5QkFBQTtBRHk0SFYsQ0N2NEhVO0VHM0RSLG9EQUFBO0FKcThIRixDQ3Q0SFU7RUFDRSx5QkFBQTtBRHc0SFosQ0NwNEhVO0VBQ0UseUJBQUE7QURzNEhaLENDLzNIUTtFQUNFLDhDQUFBO0VBQ0EseUJBQUE7QURrNEhWLENDLzNIVTtFQUVFLG9DQUFBO0FEZzRIWixDQzczSFU7O0VBRUUsZ0NBQUE7QUQrM0haLENDMzNIWTtFQUNFLDZDQUFBO0FENjNIZCxDQzEzSFk7RUFDRSxjSU1EO0FMczNIYixDQ3AzSFE7RUFDRSx5QkFBQTtBRHUzSFYsQ0NsM0hNO0VBQ0Usb0NBQUE7QURxM0hSLENDbDNITTtFQUNFLDZCQUFBO0FEcTNIUixDQ2wzSE07RUFDRSxnQ0FBQTtBRHEzSFIsQ0NsM0hNO0VBQ0UsOEJBQUE7QURxM0hSLENDbDNITTtFQUNFLCtCQUFBO0FEcTNIUixDQzkySFE7OztFQUNFLGdDQUFBO0FEbTNIVixDQzMySFU7RUFDRSx5Q0FBQTtFQUNBLHlCQUFBO0FEODJIWixDQ3gySE07RUMxSkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGc2dJRixDQ3YySFE7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUQwMkhWLENDeDJIVTtFQUdFLFdJOUpKO0VKK0pJLG9DQUFBO0FEdzJIWixDQ3IySFU7RUFDRSxtQ0FBQTtBRHUySFosQ0NwMkhVO0VBQ0UsZ0JBQUE7QURzMkhaLENDLzFIUTtFQUNFLDZCQUFBO0VBQ0EsY0V6RUQ7QUgyNkhULENDaDJIVTtFQUNFLGNFNUVIO0FIODZIVCxDQy8xSFU7RUFDRSx5Q0FBQTtBRGkySFosQ0M5MUhVO0VBR0Usd0NBQUE7RUFDQSxjRXZGSDtBSHE3SFQsQ0MzMUhVO0VBQ0UsK1NBQUE7QUQ2MUhaLENDdDFIUTtFQUNFLHlCRW5HRDtFRm9HQyxrREFBQTtFQUNBLFdJNU1GO0VKNk1FLHlCQUFBO0FEeTFIVixDQ24xSFk7RUFDRSx5QkFBQTtBRHExSGQsQ0NsMUhVO0VBR0UseUJBQUE7QURrMUhaLENDLzBIVTtFQUNFLFdJOU5KO0FMK2lJUixDQy8wSFU7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBRGcxSFosQ0N6MEhRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNFdklEO0FIbTlIVCxDQzEwSFU7RUFDRSx5Q0FBQTtFQUNBLGNFM0lIO0FIdTlIVCxDQzEwSFU7RUFDRSxnQkFBQTtBRDQwSFosQ0MxMEhVO0VBR0Usd0NBQUE7RUFDQSxjRXBKSDtBSDg5SFQsQ0N2MEhVO0VBQ0UsK1NBQUE7QUR5MEhaLENDdDBIVTtFQUNFLHdDQUFBO0VBQ0EsY0U3Skg7QUhxK0hULENDOXpIWTs7RUFDRSxxS0FBQTtBRGswSGQsQ0NuekhVO0VBQ0UseUJFeExIO0FIOCtIVCxDQzV5SGM7RUFDRSxjRW5NUDtBSGsvSFQsQ0M3eUhjO0VBQ0UseUJBQUE7QUQreUhoQixDQ255SGM7RUFDRSw4QkFBQTtFQUNBLFdJM1RSO0FMaW1JUixDQ3B5SGdCO0VBQ0UsV0k5VFY7QUxvbUlSLENDaHlIYztFQUNFLGNFOU5QO0FIZ2dJVCxDQzV4SGM7RUFDRSxtQkVyT1A7RUZzT08sV0k3VVI7QUwybUlSLENDdHhIa0I7RUFDRSwyVEFBQTtBRHd4SHBCLENDMXdIa0I7RUFDRSwyVEFBQTtBRDR3SHBCLENDMXZIYztFQUNFLFdJeFhSO0VKeVhRLG9DQUFBO0VBQ0EscUJFblJQO0VGb1JPLG1EQUFBO0FENnZIaEIsQ0NwdkhRO0VBQ0UseUNBQUE7QUR1dkhWLENDcnZIVTtFQUNFLHlCRWpTSDtBSHdoSVQsQ0MvdUhVO0VBQ0UsZ0NBQUE7QURrdkhaLENDaHZIWTs7RUFFRSwwQkFBQTtBRGt2SGQsQ0MvdUhZO0VBQ0Usb0NBQUE7QURpdkhkLENDaHZIYztFQUNFLDhDQUFBO0FEa3ZIaEIsQ0N2dUhZO0VBRUUsZ0NBQUE7QUR5dUhkLENDL3RITTtFQUNFLGlFQUFBO0FEa3VIUixDQzV0SFU7O0VBRUUscUJFcFZIO0VGcVZHLHlCRXJWSDtBSG9qSVQsQ0MzdEhZOzs7OztFQUdFLHlEQUFBO0FEK3RIZCxDQzV0SFU7RUFDRSxvREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRDh0SFosQ0M1dEhVO0VBQ0UsZ0NBQUE7QUQ4dEhaLENDdHRIVTtFQUNFLG9DQUFBO0VBQ0EsV0l0ZEo7RUp1ZEksNkJBQUE7QUR5dEhaLENDL3NIYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QURrdEhoQixDQzNzSE07RUFDRSx5QkFBQTtBRDhzSFIsQ0Mzc0hNO0VBQ0Usb0NBQUE7QUQ4c0hSLENDM3NITTtFQUNFLG9DQUFBO0FEOHNIUixDQzNzSE07RUFDRSx3Q0FBQTtBRDhzSFIsQ0Mzc0hNO0VBQ0UsMkNBQUE7QUQ4c0hSLENDM3NITTtFQUNFLHlDQUFBO0FEOHNIUixDQzNzSE07RUFDRSwwQ0FBQTtBRDhzSFIsQ0Mzc0hNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUYrdElGLENDNXVITTtFQUNFLHlCQUFBO0FEK3VIUixDQzV1SE07RUFDRSxvQ0FBQTtBRCt1SFIsQ0M1dUhNO0VBQ0Usb0NBQUE7QUQrdUhSLENDNXVITTtFQUNFLHdDQUFBO0FEK3VIUixDQzV1SE07RUFDRSwyQ0FBQTtBRCt1SFIsQ0M1dUhNO0VBQ0UseUNBQUE7QUQrdUhSLENDNXVITTtFQUNFLDBDQUFBO0FEK3VIUixDQzV1SE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRmd3SUYsQ0M3d0hNO0VBQ0UseUJBQUE7QURneEhSLENDN3dITTtFQUNFLG9DQUFBO0FEZ3hIUixDQzd3SE07RUFDRSxvQ0FBQTtBRGd4SFIsQ0M3d0hNO0VBQ0Usd0NBQUE7QURneEhSLENDN3dITTtFQUNFLDJDQUFBO0FEZ3hIUixDQzd3SE07RUFDRSx5Q0FBQTtBRGd4SFIsQ0M3d0hNO0VBQ0UsMENBQUE7QURneEhSLENDN3dITTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGaXlJRixDQzl5SE07RUFDRSx5QkFBQTtBRGl6SFIsQ0M5eUhNO0VBQ0Usb0NBQUE7QURpekhSLENDOXlITTtFQUNFLG9DQUFBO0FEaXpIUixDQzl5SE07RUFDRSx3Q0FBQTtBRGl6SFIsQ0M5eUhNO0VBQ0UsMkNBQUE7QURpekhSLENDOXlITTtFQUNFLHlDQUFBO0FEaXpIUixDQzl5SE07RUFDRSwwQ0FBQTtBRGl6SFIsQ0M5eUhNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZrMElGLENDLzBITTtFQUNFLHlCQUFBO0FEazFIUixDQy8wSE07RUFDRSxvQ0FBQTtBRGsxSFIsQ0MvMEhNO0VBQ0Usb0NBQUE7QURrMUhSLENDLzBITTtFQUNFLHdDQUFBO0FEazFIUixDQy8wSE07RUFDRSwyQ0FBQTtBRGsxSFIsQ0MvMEhNO0VBQ0UseUNBQUE7QURrMUhSLENDLzBITTtFQUNFLDBDQUFBO0FEazFIUixDQy8wSE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm0ySUYsQ0NoM0hNO0VBQ0UseUJBQUE7QURtM0hSLENDaDNITTtFQUNFLG9DQUFBO0FEbTNIUixDQ2gzSE07RUFDRSxvQ0FBQTtBRG0zSFIsQ0NoM0hNO0VBQ0Usd0NBQUE7QURtM0hSLENDaDNITTtFQUNFLDJDQUFBO0FEbTNIUixDQ2gzSE07RUFDRSx5Q0FBQTtBRG0zSFIsQ0NoM0hNO0VBQ0UsMENBQUE7QURtM0hSLENDaDNITTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGbzRJRixDQ2o1SE07RUFDRSx5QkFBQTtBRG81SFIsQ0NqNUhNO0VBQ0Usb0NBQUE7QURvNUhSLENDajVITTtFQUNFLG9DQUFBO0FEbzVIUixDQ2o1SE07RUFDRSx3Q0FBQTtBRG81SFIsQ0NqNUhNO0VBQ0UsMkNBQUE7QURvNUhSLENDajVITTtFQUNFLHlDQUFBO0FEbzVIUixDQ2o1SE07RUFDRSwwQ0FBQTtBRG81SFIsQ0NqNUhNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZxNklGLENDbDdITTtFQUNFLHlCQUFBO0FEcTdIUixDQ2w3SE07RUFDRSxvQ0FBQTtBRHE3SFIsQ0NsN0hNO0VBQ0Usb0NBQUE7QURxN0hSLENDbDdITTtFQUNFLHdDQUFBO0FEcTdIUixDQ2w3SE07RUFDRSwyQ0FBQTtBRHE3SFIsQ0NsN0hNO0VBQ0UseUNBQUE7QURxN0hSLENDbDdITTtFQUNFLDBDQUFBO0FEcTdIUixDQ2w3SE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnM4SUYsQ00xNklROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRGVVLHlCQUFBO0FOczZJWixDTTE2SVk7O0VDWlYsMERBQUE7RUFDQSwyQkFBQTtFRGFZLHlCQUFBO0FOODZJZCxDTXI2SVU7OztFQUVFLFdEekNKO0FMaTlJUixDTXQ2SVU7O0VBQ0UsMkJBQUE7QU55NklaLENNdjZJVTs7RUFDRSx3QkFBQTtBTjA2SVosQ014NklVOzs7RUNqQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHFDVSx5QkFBQTtBTjA2SVosQ003OElROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRG9CVSx5QkFBQTtBTm84SVosQ01sOElVOzs7RUFFRSxXRHpDSjtBTDgrSVIsQ01uOElVOztFQUNFLDJCQUFBO0FOczhJWixDTXA4SVU7O0VBQ0Usd0JBQUE7QU51OElaLENNcjhJVTs7O0VDakNSLDBEQUFBO0VBQ0EsMkJBQUE7RURxQ1UseUJBQUE7QU51OElaLENNMStJUTs7RUFFRSxXRHJCRjtFQ3NCRSx5QkFBQTtFQ05SLDBEQUFBO0VBQ0EsMkJBQUE7RURvQlUseUJBQUE7QU5pK0laLENNLzlJVTs7O0VBRUUsV0R6Q0o7QUwyZ0pSLENNaCtJVTs7RUFDRSwyQkFBQTtBTm0rSVosQ01qK0lVOztFQUNFLHdCQUFBO0FObytJWixDTWwrSVU7OztFQ2pDUiwwREFBQTtFQUNBLDJCQUFBO0VEcUNVLHlCQUFBO0FObytJWixDTXZnSlE7O0VBRUUsV0RyQkY7RUNzQkUseUJBQUE7RUNOUiwwREFBQTtFQUNBLDJCQUFBO0VEb0JVLHlCQUFBO0FOOC9JWixDTTUvSVU7OztFQUVFLFdEekNKO0FMd2lKUixDTTcvSVU7O0VBQ0UsMkJBQUE7QU5nZ0paLENNOS9JVTs7RUFDRSx3QkFBQTtBTmlnSlosQ00vL0lVOzs7RUNqQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHFDVSx5QkFBQTtBTmlnSlosQ01waUpROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRG9CVSx5QkFBQTtBTjJoSlosQ016aEpVOzs7RUFFRSxXRHpDSjtBTHFrSlIsQ00xaEpVOztFQUNFLDJCQUFBO0FONmhKWixDTTNoSlU7O0VBQ0Usd0JBQUE7QU44aEpaLENNNWhKVTs7O0VDakNSLDBEQUFBO0VBQ0EsMkJBQUE7RURxQ1UseUJBQUE7QU44aEpaLENNamtKUTs7RUFFRSxXRHJCRjtFQ3NCRSx5QkFBQTtFQ05SLDBEQUFBO0VBQ0EsMkJBQUE7RURvQlUseUJBQUE7QU53akpaLENNdGpKVTs7O0VBRUUsV0R6Q0o7QUxrbUpSLENNdmpKVTs7RUFDRSwyQkFBQTtBTjBqSlosQ014akpVOztFQUNFLHdCQUFBO0FOMmpKWixDTXpqSlU7OztFQ2pDUiwwREFBQTtFQUNBLDJCQUFBO0VEcUNVLHlCQUFBO0FOMmpKWixDTTlsSlE7O0VBRUUsV0RyQkY7RUNzQkUseUJBQUE7RUNOUiwwREFBQTtFQUNBLDJCQUFBO0VEb0JVLHlCQUFBO0FOcWxKWixDTW5sSlU7OztFQUVFLFdEekNKO0FMK25KUixDTXBsSlU7O0VBQ0UsMkJBQUE7QU51bEpaLENNcmxKVTs7RUFDRSx3QkFBQTtBTndsSlosQ010bEpVOzs7RUNqQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHFDVSx5QkFBQTtBTndsSlosQ0Zwb0pNO0VBQ0UsdUJBQUE7QUV1b0pSLENGcG9KTTtFQUNFLHlCT29LUTtFUG5LUix5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUVzb0pSLENGcG9KUTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFc29KVixDRm5vSlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FFcW9KVixDRmxvSlU7RUFDRSxpQkFBQTtBRW9vSlosQ0YvbkpNO0VBQ0UscUJPOEVPO0FMbWpKZixDRi9uSlE7RUFDRSw2QkFBQTtFQUFBLHlCQUFBO0FFaW9KVixDRjluSlE7RUFDRSx5Qk8vQ0E7RVBnREEsY084Q0c7QUxrbEpiLENGNW5KVTtFQUNFLGlCQUFBO0FFOG5KWixDRjFuSlE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRTRuSlYsQ0Z4bkpNO0VBQ0Usc0JPbEVBO0VQbUVBLGNPOURHO0VQK0RILGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRTBuSlIsQ0Z2bkpVO0VBQ0UsY09yRUQ7RVBzRUMsaUJBQUE7QUV5bkpaLENGcG5KYztFQUVFLG1CQUFBO0FFcW5KaEIsQ0ZwbkpnQjtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRXNuSmxCLENGbG5KZ0I7RUFDRSx3Q0FBQTtFQUNBLHlCQUFBO0FFb25KbEIsQ0YvbUpZO0VBQ0UsbUNBQUE7QUVpbkpkLENGL21KZ0I7RUFDRSxzQk94R1Y7RVB5R1UsY09wR1A7QUxxdEpYLENGNW1KZ0I7RUFDRSxjT3NETDtBTHdqSmIsQ0Z6bUpVO0VBQ0UseUJPaU5JO0VQaE5KLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBRTJtSlosQ0Z4bUpRO0VBQ0UsY091Q0c7QUxta0piLENGcm1KUTtFQUNFLHVCQUFBO0FFdW1KVixDRnBtSk07RUFDRSw0QkFBQTtBRXNtSlIsQ0YvbEpBO0VBQ0U7SUFDRSxhQUFBO0VFa21KRjtFRi9sSkE7SUFDRSw2QkFBQTtJQUNBLG9CQUFBO0VFaW1KRjtBQUNGLENGOWxKQTtFQUNFO0lBQ0UsZUFBQTtJQUFBLGdCQUFBO0VFZ21KRjtFRjdsSkE7SUFDRSxhQUFBO0VFK2xKRjtBQUNGLENGNWxKQTtFQUNFO0lBQ0UsYUFBQTtFRThsSkY7RUYzbEpBO0lBQ0UsZUFBQTtJQUFBLGdCQUFBO0VFNmxKRjtBQUNGLENGeGxKRTs7RUFFRSxvQ0FBQTtFQUNBLHdDQUFBO0FFMGxKSixDRnRsSkk7RUFDRSxvQ0FBQTtBRXdsSk4sQ0Z2bEpNO0VBQ0UsY09yTEc7QUw4d0pYLENGdmxKTTtFQUNFLGNVdExnQjtBUit3SnhCLENGcGxKRTtFQUNFLGdDQUFBO0FFc2xKSixDRnJsSkk7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FFdWxKTixDRm5sSkU7RUFDRSxvQ0FBQTtBRXFsSkosQ0ZsbEpFO0VBQ0Usb0NBQUE7QUVvbEpKLENBNXlKQTtFQUNFLHNCQUFBO0FBK3lKRiIsImZpbGUiOiJkYXRhdGFibGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJztcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90Jyk7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgdXJsKCdmb250cy9kYXRhLXRhYmxlLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLnN2ZyNkYXRhLXRhYmxlJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5bZGF0YS1pY29uXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBjb250ZW50OiBhdHRyKGRhdGEtaWNvbik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149J2RhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUsXG5bY2xhc3MqPScgZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLWZpbHRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY29sbGFwc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWV4cGFuZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY2xvc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY0Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXVwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb3duOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0LXVuc2V0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY3Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY4Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmUtYWxsOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zZWFyY2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZhJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXBpbjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tYWRkOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2ZCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1sZWZ0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Zic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1yaWdodDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzAnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2tpcDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcHJldjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzInO1xufVxuIiwiLm5neC1kYXRhdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLyoqXG4gICAqIFZlcnRpY2FsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEhvcml6b250YWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgSGVhZGVyIEhlaWdodCBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIHJvdyBoZWlnaHQgYWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBTaGFyZWQgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogSGVhZGVyIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEJvZHkgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogRm9vdGVyIFN0eWxlc1xuICAgKi8gfVxuICAubmd4LWRhdGF0YWJsZSBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC5uZ3gtZGF0YXRhYmxlICosXG4gIC5uZ3gtZGF0YXRhYmxlICo6YmVmb3JlLFxuICAubmd4LWRhdGF0YWJsZSAqOmFmdGVyIHtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsIC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwudmlydHVhbGl6ZWQgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtaG9yeiAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktcm93LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC13ZWJraXQtZmxleC1mbG93OiByb3c7XG4gICAgLW1vei1mbGV4LWZsb3c6IHJvdztcbiAgICAtbXMtZmxleC1mbG93OiByb3c7XG4gICAgLW8tZmxleC1mbG93OiByb3c7XG4gICAgZmxleC1mbG93OiByb3c7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGwsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMS42MjU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbDpmb2N1cyxcbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHotaW5kZXg6IDk7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1ncm91cCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnNvcnRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5sb25ncHJlc3MgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5zb3J0LWJ0biB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwucmVzaXplYWJsZTpob3ZlciAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6aG92ZXIgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbUxlZnQge1xuICAgICAgICAgIHJpZ2h0OiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbVJpZ2h0IHtcbiAgICAgICAgICBsZWZ0OiAwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtdGVtcGxhdGUtd3JhcCB7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLWZvb3Rlci1pbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSA0MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgNjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDIwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDgwJTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlcixcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbiIsIkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9ib290c3RyYXAuc2Nzcyc7XG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5AaW1wb3J0ICdAY29yZS9zY3NzL2Jhc2UvY29sb3JzJztcbkBpbXBvcnQgJ0Bjb3JlL3Njc3MvYmFzZS9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXG5cbi8vIHZhcmlhYmxlIGRlY2xhcmF0aW9uXG4kZGF0YXRhYmxlcy1iZy1oZWFkZXItY29sb3I6ICR0YWJsZS1oZWFkLWJnO1xuJGRhdGF0YWJsZXMtdGV4dC1jb2xvcjogJGdyYXktNDAwO1xuJGRhdGF0YWJsZXMtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGRhdGF0YWJsZXMtZm9vdGVyLXRleHQtY29sb3I6ICR0ZXh0LW11dGVkO1xuJGRhdGF0YWJsZXMtZGFyay10ZXh0LWNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWNvbG9yO1xuJGRhdGF0YWJsZXMtZGFyay1mb290ZXItYmctY29sb3I6ICR0aGVtZS1kYXJrLWNhcmQtYmc7XG4kZGF0YXRhYmxlcy1kYXJrLWJvcmRlci1jb2xvcjogJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yO1xuJGRhdGF0YWJsZXMtZGFyay1oZWFkZXItYmctY29sb3I6ICR0aGVtZS1kYXJrLXRhYmxlLWhlYWRlci1iZztcbiRkYXRhdGFibGVzLWRhcmstYm9keS1iZy1jb2xvcjogJHRoZW1lLWRhcmstdGFibGUtYmc7XG4kZGF0YXRhYmxlcy1kYXJrLWFjdGl2ZS1iZy1jb2xvcjogJHRoZW1lLWRhcmstY2FyZC1iZztcblxuLm5neC1kYXRhdGFibGUge1xuICAmLmJvb3RzdHJhcCB7XG4gICAgJi5jb3JlLWJvb3RzdHJhcCB7XG4gICAgICAmLmhlaWdodC03MC12aCB7XG4gICAgICAgIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGVzLWJnLWhlYWRlci1jb2xvcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZGF0YXRhYmxlcy1ib3JkZXItY29sb3I7XG5cbiAgICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLy8gc29ydC1pY29uIHBvc2l0aW9uaW5nXG4gICAgICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtdGVtcGxhdGUtd3JhcCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zb3J0LWJ0biB7XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgICBib3JkZXItY29sb3I6ICRkYXRhdGFibGVzLWJvcmRlci1jb2xvcjtcblxuICAgICAgICAmLmRhdGF0YWJsZS1yb3ctZXZlbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS01MDtcbiAgICAgICAgICBjb2xvcjogJGJvZHktY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbC1sYWJlbCB7XG4gICAgICAgICAgLmNlbGwtbGluZS1oZWlnaHQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlcy10ZXh0LWNvbG9yO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG5cbiAgICAgICAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJGRhdGF0YWJsZXMtdGV4dC1jb2xvcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAgICYuYWN0aXZlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBtYXJnaW46IDJweCAwcHggMTFweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgJjpub3QoLmRpc2FibGVkKTpob3ZlciB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJGRhdGF0YWJsZXMtdGV4dC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dC1tdXRlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2VyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWJnO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjhweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI4cHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjhweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucGFnZS1jb3VudCB7XG4gICAgICAgICAgY29sb3I6ICRkYXRhdGFibGVzLWZvb3Rlci10ZXh0LWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuaGVhZGVyLWhlaWdodC01MCB7XG4gICAgICAgIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBtZWRpYSBxdWVyeSBmb3IgU21hbGwgJiBNZWRpdW0gZGV2aWNlc1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYWdlLWNvdW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmRlc2t0b3AtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICB9XG5cbiAgLm1vYmlsZS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmRlc2t0b3AtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbn1cblxuLy8gZGFyayBsYXlvdXQgc3R5bGVcbi5kYXJrLWxheW91dCB7XG4gIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyLFxuICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZXMtZGFyay1oZWFkZXItYmctY29sb3IgIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGRhdGF0YWJsZXMtZGFyay1ib3JkZXItY29sb3IgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5jb3JlLWJvb3RzdHJhcCB7XG4gICAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZXMtZGFyay1mb290ZXItYmctY29sb3IgIWltcG9ydGFudDtcbiAgICAgIC5kYXRhdGFibGUtcGFnZXIgdWwgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlcy10ZXh0LWNvbG9yO1xuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgICAgICAgY29sb3I6ICRkYXRhdGFibGVzLWRhcmstdGV4dC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICBib3JkZXItY29sb3I6ICRkYXRhdGFibGVzLWRhcmstYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZXMtZGFyay1hY3RpdmUtYmctY29sb3IgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlcy1kYXJrLWJvZHktYmctY29sb3IgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYWdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcmstcGFnaW5hdGlvbi1iZyAhaW1wb3J0YW50O1xuICB9XG59XG4iLCIvKlxuYm9vdHN0cmFwIHRhYmxlIHRoZW1lXG4qL1xuXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkNGQ3O1xuICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC1sYWJlbCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZGF0YXRhYmxlLWJvZHkge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDFkNGQ3O1xuICAgICAgJi5kYXRhdGFibGUtcm93LWV2ZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgfVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ4M2ZmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmVtcHR5LXJvdyB7XG4gICAgICAkYWxlcnQtcGFkZGluZy15OiAwLjc1cmVtICFkZWZhdWx0O1xuICAgICAgJGFsZXJ0LXBhZGRpbmcteDogMS4yNXJlbSAhZGVmYXVsdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6ICRhbGVydC1wYWRkaW5nLXkgJGFsZXJ0LXBhZGRpbmcteDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG4gIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICAgIGNvbG9yOiAjZWRlZGVkO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTtcbiAgICB9XG4gICAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICY6bm90KC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDAgM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgY29sb3I6ICNlZGVkZWQ7XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gU3VtbWFyeSByb3cgc3R5bGVzXG4gIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ34vc3JjL0Bjb3JlL3Njc3MvYW5ndWxhci9saWJzL2RhdGF0YWJsZXMuY29tcG9uZW50LnNjc3MnO1xuXG4uZGF0YXRhYmxlLXNjcm9sbCB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICAgRmlsZSBOYW1lOiBwYWxsZXR0ZS5zY3NzXG4vLyAgIERlc2NyaXB0aW9uOiBDdXN0b20gY29sb3Igc3lzdGVtIHN0eWxlcywgaW5jbHVkZXMgYmFja2dyb3VuZCwgYm9yZGVyIGFuZCB0ZXh0IGNvbG9yc1xuLy8gICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuLy8gICBBdXRob3I6IFBJWElOVkVOVFxuLy8gICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBXQVJOSU5HOiBQTEVBU0UgRE8gTk9UIENIQU5HRSBUSElTIFZBUklBQkxFIEZJTEUuXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWdWV4eSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXG4vLyAgVElQOlxuLy8gIFdlIHN1Z2dlc3QgeW91IHRvIHVzZSB0aGlzIChhc3NldHMvc2Nzcy9jb2xvcnMvcGFsZXR0ZS5zY3NzKSBmaWxlIGZvciBvdmVycmlkaW5nIGNvbG9yIHZhcmlhYmxlcy5cbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gdXNhZ2U6IHRoZW1lLWNvbG9yKFwibmFtZV9vZl9jb2xvclwiLCBcInR5cGVfb2ZfY29sb3JcIilcbi8vIHRvIGF2b2lkIHRvIHJlcGVhdGluZyBtYXAtZ2V0KCRjb2xvcnMsIC4uLilcblxuQGZ1bmN0aW9uIGNvbG9yLWZ1bmN0aW9uKCRjb2xvciwgJHR5cGUpIHtcbiAgQGlmIG1hcC1oYXMta2V5KCRjb2xvcnMsICRjb2xvcikge1xuICAgICRjdXJyX2NvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvcik7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRjdXJyX2NvbG9yLCAkdHlwZSkge1xuICAgICAgQHJldHVybiBtYXAtZ2V0KCRjdXJyX2NvbG9yLCAkdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQHdhcm4gXCJVbmtub3duIGAje25hbWV9YCBpbiAkY29sb3JzLlwiO1xuICBAcmV0dXJuIG51bGw7XG59XG5cbi8vIENvbG9yIHBhbGV0dGVzXG5AaW1wb3J0ICdwYWxldHRlLXZhcmlhYmxlcyc7XG5cbi8vIENvbG9yIENsYXNzZXNcbi8vICAgVGV4dCBjb2xvcjogLmNvbG9yIC5saWdodGVuLSogLyAuZGFya2VuLSogLyAuYWNjZW50LSpcbi8vICAgQmFja2dyb3VuZDogLmJnLWNvbG9yIC5iZy1saWdodGVuLSogLyAuYmctZGFya2VuLSogLyAuYmctYWNjZW50LSpcbi8vICAgYm9yZGVyOiAuYm9yZGVyLWNvbG9yIC5ib3JkZXItbGlnaHRlbi0qIC8gLmJvcmRlci1kYXJrZW4tKiAvIC5ib3JkZXItYWNjZW50LSpcbi8vICAgYm9yZGVyLXRvcDogLmJvcmRlci10b3AtY29sb3IgLmJvcmRlci10b3AtbGlnaHRlbi0qIC8gLmJvcmRlci10b3AtZGFya2VuLSogLyAuYm9yZGVyLXRvcC1hY2NlbnQtKlxuLy8gICBib3JkZXItYm90dG9tOiAuYm9yZGVyLWJvdHRvbS1jb2xvciAuYm9yZGVyLWJvdHRvbS1saWdodGVuLSogLyAuYm9yZGVyLWJvdHRvbS1kYXJrZW4tKiAvIC5ib3JkZXItYm90dG9tLWFjY2VudC0qXG4vLyAgIGJvcmRlci1sZWZ0OiAuYm9yZGVyLWxlZnQtY29sb3IgLmJvcmRlci1sZWZ0LWxpZ2h0ZW4tKiAvIC5ib3JkZXItbGVmdC1kYXJrZW4tKiAvIC5ib3JkZXItbGVmdC1hY2NlbnQtKlxuLy8gICBib3JkZXItcmlnaHQ6IC5ib3JkZXItcmlnaHQtY29sb3IgLmJvcmRlci1yaWdodC1saWdodGVuLSogLyAuYm9yZGVyLXJpZ2h0LWRhcmtlbi0qIC8gLmJvcmRlci1yaWdodC1hY2NlbnQtKlxuXG5AZWFjaCAkY29sb3JfbmFtZSwgJGNvbG9yIGluICRjb2xvcnMge1xuICBAZWFjaCAkY29sb3JfdHlwZSwgJGNvbG9yX3ZhbHVlIGluICRjb2xvciB7XG4gICAgQGlmICRjb2xvcl90eXBlPT0gJ2Jhc2UnIHtcbiAgICAgIC8vIGJhY2tncm91bmQgY29sb3JcbiAgICAgIC5iZy0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5jYXJkLWhlYWRlcixcbiAgICAgICAgLmNhcmQtZm9vdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBbGVydFxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5hbGVydC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3JfdmFsdWUsIDAuMTIpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgLmFsZXJ0LWhlYWRpbmcge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWxlcnQtaGVhZGluZy1icygkY29sb3JfdmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hbGVydC1saW5rIHtcbiAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yX3ZhbHVlLCA1JSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjbG9zYWJsZSBhbGVydFxuICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGJnIGNvbG9yIGxpZ2h0ZW4gZm9yIHJnYmEgLSBvcGFjaXR5IHNldFxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnIGFuZCAkY29sb3JfbmFtZSAhPSAnZGFyaycpIHtcbiAgICAgICAgLmJnLWxpZ2h0LSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcl92YWx1ZSwgMC4xMikgIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAvLyBDYWxlbmRhciBiYWNrZ3JvdW5kLCBjb2xvciBhbmQgYm9yZGVyIGNvbG9yXG4gICAgICAgICAgJi5mYy1oLWV2ZW50LFxuICAgICAgICAgICYuZmMtdi1ldmVudCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYy1saXN0LWV2ZW50LWRvdCxcbiAgICAgICAgICAuZmMtZGF5Z3JpZC1ldmVudC1kb3Qge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmZjLWxpc3QtZXZlbnQge1xuICAgICAgICAgICAgJjpob3ZlciB0ZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mYy1saXN0LWV2ZW50LXRpdGxlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICRib2R5LWNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBhdmF0YXIgd2l0aCBsaWdodCBiZ1xuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnIGFuZCAkY29sb3JfbmFtZSAhPSAnZGFyaycpIHtcbiAgICAgICAgLmF2YXRhci5iZy1saWdodC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJvcmRlciBjb2xvcnNcbiAgICAgIC5ib3JkZXItI3skY29sb3JfbmFtZX0ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci10b3AtI3skY29sb3JfbmFtZX0ge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlO1xuICAgICAgfVxuXG4gICAgICAuYm9yZGVyLWJvdHRvbS0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3JfdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC5ib3JkZXItbGVmdC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGNvbG9yX3ZhbHVlO1xuICAgICAgfVxuXG4gICAgICAuYm9yZGVyLXJpZ2h0LSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNvbG9yX3ZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvLyBiYWRnZSBnbG93IGNvbG9yc1xuICAgICAgLmJnLSN7JGNvbG9yX25hbWV9LFxuICAgICAgLmJvcmRlci0jeyRjb2xvcl9uYW1lfSxcbiAgICAgIC5iYWRnZS0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICYuYmFkZ2UtZ2xvdyB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICRjb2xvcl92YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCYWRnZSBCYWNrZ3JvdW5kIENvbG9yXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcbiAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICAvLyBCYWRnZSBMaWdodCBCYWNrZ3JvdW5kXG4gICAgICAgICAgJi5iYWRnZS1saWdodC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJGNvbG9yX3ZhbHVlLCAkYWxwaGE6IDAuMTIpO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPdmVybGF5IGNvbG9yc1xuICAgICAgLm92ZXJsYXktI3skY29sb3JfbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBiZy1vcGFjaXR5KCRjb2xvcl92YWx1ZSwgMC42KTtcbiAgICAgIH1cblxuICAgICAgLy8gQmFzaWMgYnV0dG9uc1xuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5idG4tI3skY29sb3JfbmFtZX0ge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdkYXJrZW4tMScpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IC04cHggcmdiYSgkY29sb3ItdmFsdWUsIDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZvciBCdG4gRmxhdFxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5idG4tZmxhdC0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci12YWx1ZTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci12YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXZhbHVlLCAwLjEyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAmLmFjdGl2ZSxcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkY29sb3JfdmFsdWUsICRhbHBoYTogMC4yKTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkY2hldnJvbi1kb3duLCAnY3VycmVudENvbG9yJywgJGNvbG9yX3ZhbHVlKSwgJyMnLCAnJTIzJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGb3IgQnRuIFJlbGllZlxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5idG4tcmVsaWVmLSN7JGNvbG9yLW5hbWV9IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdmFsdWU7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDAgMCByZ2JhKCRibGFjaywgMC4yKTtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgQGlmICRjb2xvcl9uYW1lID09ICdkYXJrJyB7XG4gICAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdkYXJrZW4tMycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLWZ1bmN0aW9uKCRjb2xvcl9uYW1lLCAnbGlnaHRlbi0xJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICYuYWN0aXZlLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdkYXJrZW4tMScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3V0bGluZSBidXR0b25zXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcbiAgICAgICAgLmJ0bi1vdXRsaW5lLSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlO1xuXG4gICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJGNvbG9yX3ZhbHVlLCAkYWxwaGE6IDAuMDQpO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXG4gICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4gICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJGNvbG9yX3ZhbHVlLCAkYWxwaGE6IDAuMik7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tZG93biwgJ2N1cnJlbnRDb2xvcicsICRjb2xvcl92YWx1ZSksICcjJywgJyUyMycpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc3BsaXQgdG9nZ2xlIGhhdmUgc2hvdyBjbGFzc1xuICAgICAgICAgIC5zaG93ID4gJi5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICRjb2xvcl92YWx1ZSwgJGFscGhhOiAwLjIpO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2F2ZSBlZmZlY3RcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAuYnRuLW91dGxpbmUtI3skY29sb3JfbmFtZX0sXG4gICAgICAgIC5idG4tZmxhdC0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgJi53YXZlcy1lZmZlY3Qge1xuICAgICAgICAgICAgLndhdmVzLXJpcHBsZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgICAgICAgICByZ2JhKCRjb2xvcl92YWx1ZSwgMC4yKSAwLFxuICAgICAgICAgICAgICAgIHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjMpIDQwJSxcbiAgICAgICAgICAgICAgICByZ2JhKCRjb2xvcl92YWx1ZSwgMC40KSA1MCUsXG4gICAgICAgICAgICAgICAgcmdiYSgkY29sb3JfdmFsdWUsIDAuNSkgNjAlLFxuICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAwKSA3MCVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQnVsbGV0IGNvbG9ycyBmb3IgZW1haWwgYXBwXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcbiAgICAgICAgLmJ1bGxldCB7XG4gICAgICAgICAgJi5idWxsZXQtI3skY29sb3JfbmFtZX0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNb2RhbFxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgJi5tb2RhbC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgICAgICAgICAgLm1vZGFsLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZvciBQYWdpbmF0aW9uXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScgYW5kICRjb2xvcl9uYW1lICE9ICdkYXJrJykge1xuICAgICAgICAucGFnaW5hdGlvbi0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgLnBhZ2UtaXRlbSB7XG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgIC5wYWdlLWxpbmsge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci12YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wYWdlLWxpbmsge1xuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYucHJldi1pdGVtLFxuICAgICAgICAgICAgJi5uZXh0LWl0ZW0ge1xuICAgICAgICAgICAgICAucGFnZS1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3JfdmFsdWU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5uZXh0LWl0ZW0sXG4gICAgICAgICAgICAmLm5leHQge1xuICAgICAgICAgICAgICAucGFnZS1saW5rIHtcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgc3RyLXJlcGxhY2UoJGNoZXZyb24tcmlnaHQsICdjdXJyZW50Q29sb3InLCAkY29sb3JfdmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICcjJyxcbiAgICAgICAgICAgICAgICAgICAgICAnJTIzJ1xuICAgICAgICAgICAgICAgICAgICApKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5wcmV2LWl0ZW0sXG4gICAgICAgICAgICAmLnByZXYge1xuICAgICAgICAgICAgICAucGFnZS1saW5rIHtcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKCRjaGV2cm9uLWxlZnQsICdjdXJyZW50Q29sb3InLCAkY29sb3JfdmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICcjJyxcbiAgICAgICAgICAgICAgICAgICAgICAnJTIzJ1xuICAgICAgICAgICAgICAgICAgICApKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGb3IgTmF2IFBpbGxzXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScgYW5kICRjb2xvcl9uYW1lICE9ICdkYXJrJykge1xuICAgICAgICAubmF2LXBpbGwtI3skY29sb3ItbmFtZX0ge1xuICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl92YWx1ZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxOHB4IC00cHggcmdiYSgkY29sb3JfdmFsdWUsIDAuNjUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFByb2dyZXNzIEJhcnNcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAucHJvZ3Jlc3MtYmFyLSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcl92YWx1ZSwgMC4xMik7XG5cbiAgICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci12YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGltZWxpbmVcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAudGltZWxpbmUge1xuICAgICAgICAgIC50aW1lbGluZS1wb2ludC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgc3Ryb2tlOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aW1lbGluZS1wb2ludC1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAkY29sb3JfdmFsdWUsICRhbHBoYTogMC4xMikgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBEaXZpZGVyXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcbiAgICAgICAgLmRpdmlkZXIuZGl2aWRlci0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgLmRpdmlkZXItdGV4dCB7XG4gICAgICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci12YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGb3JtIElucHV0IEVsZW1lbnRzXG4gICAgICAvLyBDaGVja2JveCAmIFJhZGlvXG5cbiAgICAgIC8vIHRvZG86IHJlbW92ZSBpdCBvbmNlIGNvbmZpcm1cbiAgICAgIGlucHV0OmZvY3VzIH4gLmJnLSN7JGNvbG9yX25hbWV9IHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gJHdoaXRlLCAwIDAgMCAwLjIxcmVtICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAvLyBDdXN0b20gQ2hlY2tib3ggJiBSYWRpb1xuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5jdXN0b20tY29udHJvbC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbiAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuY3VzdG9tLWNoZWNrYm94LFxuICAgICAgICAgICYuY3VzdG9tLXJhZGlvIHtcbiAgICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4gICAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4gICAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3JfdmFsdWUsIDAuNjUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJvb3RzdHJhcCBDdXN0b20gU3dpdGNoZXNcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xuICAgICAgICAuY3VzdG9tLXN3aXRjaC0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2VsZWN0MlxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5zZWxlY3QyLSN7JGNvbG9yLW5hbWV9IHtcbiAgICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQge1xuICAgICAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XG4gICAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAudGV4dC0jeyRjb2xvcl9uYW1lfS50ZXh0LSN7JGNvbG9yX3R5cGV9IHtcbiAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuYmctI3skY29sb3JfbmFtZX0uYmctI3skY29sb3JfdHlwZX0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci0jeyRjb2xvcl9uYW1lfS5ib3JkZXItI3skY29sb3JfdHlwZX0ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci10b3AtI3skY29sb3JfbmFtZX0uYm9yZGVyLXRvcC0jeyRjb2xvcl90eXBlfSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci1ib3R0b20tI3skY29sb3JfbmFtZX0uYm9yZGVyLWJvdHRvbS0jeyRjb2xvcl90eXBlfSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci1sZWZ0LSN7JGNvbG9yX25hbWV9LmJvcmRlci1sZWZ0LSN7JGNvbG9yX3R5cGV9IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJvcmRlci1yaWdodC0jeyRjb2xvcl9uYW1lfS5ib3JkZXItcmlnaHQtI3skY29sb3JfdHlwZX0ge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLm92ZXJsYXktI3skY29sb3JfbmFtZX0ub3ZlcmxheS0jeyRjb2xvcl90eXBlfSB7XG4gICAgICAgIEBpbmNsdWRlIGJnLW9wYWNpdHkoJGNvbG9yX3ZhbHVlLCAwLjYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGJnLW9wYWNpdHkoJGNvbG9yLCAkb3BhY2l0eTogMSkge1xuICBiYWNrZ3JvdW5kOiAkY29sb3I7IC8qIFRoZSBGYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xufVxuIiwiLy8gT3ZlcnJpZGVzIHVzZXIgX3ZhcmlhYmxlcy1jb21wb25lbnRzXG5AaW1wb3J0ICcuLi8uLi9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7XG5cbi8vIEdvb2dsZSBDb2xvciBQYWxldHRlIGRlZmluZWQ6IGh0dHA6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9zdHlsZS9jb2xvci5odG1sXG5cbiR3aGl0ZS1jb2xvcjogKFxuICAnYmFzZSc6ICNmZmZmZmZcbik7XG4kYmxhY2stY29sb3I6IChcbiAgJ2Jhc2UnOiAjMDAwMDAwXG4pO1xuJGRhcmstY29sb3I6IChcbiAgJ2Jhc2UnOiB0aGVtZS1jb2xvcignZGFyaycpLFxuICAnZGFya2VuLTEnOiAjMzQzNDM0LFxuICAnZGFya2VuLTInOiAjMWUxZTFlLFxuICAnZGFya2VuLTMnOiAjNjI2MjYyXG4pO1xuJGxpZ2h0LWNvbG9yOiAoXG4gICdiYXNlJzogdGhlbWUtY29sb3IoJ2xpZ2h0Jylcbik7XG5cbiRwcmltYXJ5LWNvbG9yOiAoXG4gICdsaWdodGVuLTUnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDI1JSksXG4gICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDIwJSksXG4gICdsaWdodGVuLTMnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDE1JSksXG4gICdsaWdodGVuLTInOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDEwJSksXG4gICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDUlKSxcbiAgJ2Jhc2UnOiB0aGVtZS1jb2xvcigncHJpbWFyeScpLFxuICAnZGFya2VuLTEnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3ByaW1hcnknKSwgNSUpLFxuICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ3ByaW1hcnknKSwgMTAlKSxcbiAgJ2Rhcmtlbi0zJzogZGFya2VuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDE1JSksXG4gICdkYXJrZW4tNCc6IGRhcmtlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCAyMCUpLFxuICAnYWNjZW50LTEnOiAjYmRmZGZmLFxuICAnYWNjZW50LTInOiAjOGFmYmZmLFxuICAnYWNjZW50LTMnOiAjNTdmYWZmLFxuICAnYWNjZW50LTQnOiAjM2RmOWZmXG4pO1xuJHNlY29uZGFyeS1jb2xvcjogKFxuICAnbGlnaHRlbi01JzogbGlnaHRlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDI1JSksXG4gICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgMjAlKSxcbiAgJ2xpZ2h0ZW4tMyc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAxNSUpLFxuICAnbGlnaHRlbi0yJzogbGlnaHRlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDEwJSksXG4gICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgNSUpLFxuICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSxcbiAgJ2Rhcmtlbi0xJzogZGFya2VuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgNSUpLFxuICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAxMCUpLFxuICAnZGFya2VuLTMnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAxNSUpLFxuICAnZGFya2VuLTQnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAyMCUpXG4pO1xuJHN1Y2Nlc3MtY29sb3I6IChcbiAgJ2xpZ2h0ZW4tNSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMjUlKSxcbiAgJ2xpZ2h0ZW4tNCc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMjAlKSxcbiAgJ2xpZ2h0ZW4tMyc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMTUlKSxcbiAgJ2xpZ2h0ZW4tMic6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMTAlKSxcbiAgJ2xpZ2h0ZW4tMSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgNSUpLFxuICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksXG4gICdkYXJrZW4tMSc6IGRhcmtlbih0aGVtZS1jb2xvcignc3VjY2VzcycpLCA1JSksXG4gICdkYXJrZW4tMic6IGRhcmtlbih0aGVtZS1jb2xvcignc3VjY2VzcycpLCAxMCUpLFxuICAnZGFya2VuLTMnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMTUlKSxcbiAgJ2Rhcmtlbi00JzogZGFya2VuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDIwJSksXG4gICdhY2NlbnQtMSc6ICNlMWZmZjEsXG4gICdhY2NlbnQtMic6ICNhZWZmZDksXG4gICdhY2NlbnQtMyc6ICM3YmZmYzEsXG4gICdhY2NlbnQtNCc6ICM2MmZmYjVcbik7XG4kaW5mby1jb2xvcjogKFxuICAnbGlnaHRlbi01JzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCAyNSUpLFxuICAnbGlnaHRlbi00JzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCAyMCUpLFxuICAnbGlnaHRlbi0zJzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCAxNSUpLFxuICAnbGlnaHRlbi0yJzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCAxMCUpLFxuICAnbGlnaHRlbi0xJzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCA1JSksXG4gICdiYXNlJzogdGhlbWUtY29sb3IoJ2luZm8nKSxcbiAgJ2Rhcmtlbi0xJzogZGFya2VuKHRoZW1lLWNvbG9yKCdpbmZvJyksIDUlKSxcbiAgJ2Rhcmtlbi0yJzogZGFya2VuKHRoZW1lLWNvbG9yKCdpbmZvJyksIDEwJSksXG4gICdkYXJrZW4tMyc6IGRhcmtlbih0aGVtZS1jb2xvcignaW5mbycpLCAxNSUpLFxuICAnZGFya2VuLTQnOiBkYXJrZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMjAlKSxcbiAgJ2FjY2VudC0xJzogI2ZlZmZmZixcbiAgJ2FjY2VudC0yJzogI2NiZjVmZixcbiAgJ2FjY2VudC0zJzogIzk4ZWNmZixcbiAgJ2FjY2VudC00JzogIzdmZTdmZlxuKTtcbiR3YXJuaW5nLWNvbG9yOiAoXG4gICdsaWdodGVuLTUnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDI1JSksXG4gICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDIwJSksXG4gICdsaWdodGVuLTMnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDE1JSksXG4gICdsaWdodGVuLTInOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDEwJSksXG4gICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDUlKSxcbiAgJ2Jhc2UnOiB0aGVtZS1jb2xvcignd2FybmluZycpLFxuICAnZGFya2VuLTEnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3dhcm5pbmcnKSwgNSUpLFxuICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ3dhcm5pbmcnKSwgMTAlKSxcbiAgJ2Rhcmtlbi0zJzogZGFya2VuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDE1JSksXG4gICdkYXJrZW4tNCc6IGRhcmtlbih0aGVtZS1jb2xvcignd2FybmluZycpLCAyMCUpLFxuICAnYWNjZW50LTEnOiAjZmZmNWVmLFxuICAnYWNjZW50LTInOiAjZmZlNWQ4LFxuICAnYWNjZW50LTMnOiAjZmZmNmYzLFxuICAnYWNjZW50LTQnOiAjZmZlM2RhXG4pO1xuJGRhbmdlci1jb2xvcjogKFxuICAnbGlnaHRlbi01JzogbGlnaHRlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDI1JSksXG4gICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgMjAlKSxcbiAgJ2xpZ2h0ZW4tMyc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAxNSUpLFxuICAnbGlnaHRlbi0yJzogbGlnaHRlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDEwJSksXG4gICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgNSUpLFxuICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdkYW5nZXInKSxcbiAgJ2Rhcmtlbi0xJzogZGFya2VuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgNSUpLFxuICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAxMCUpLFxuICAnZGFya2VuLTMnOiBkYXJrZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAxNSUpLFxuICAnZGFya2VuLTQnOiBkYXJrZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAyMCUpLFxuICAnYWNjZW50LTEnOiAjZmZlZWYxLFxuICAnYWNjZW50LTInOiAjZmZkNmRiLFxuICAnYWNjZW50LTMnOiAjZmZlY2VlLFxuICAnYWNjZW50LTQnOiAjZmZkM2Q3XG4pO1xuXG4kY29sb3JzOiAoXG4gICd3aGl0ZSc6ICR3aGl0ZS1jb2xvcixcbiAgJ2JsYWNrJzogJGJsYWNrLWNvbG9yLFxuICAnZGFyayc6ICRkYXJrLWNvbG9yLFxuICAnbGlnaHQnOiAkbGlnaHQtY29sb3IsXG4gICdwcmltYXJ5JzogJHByaW1hcnktY29sb3IsXG4gICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LWNvbG9yLFxuICAnc3VjY2Vzcyc6ICRzdWNjZXNzLWNvbG9yLFxuICAnaW5mbyc6ICRpbmZvLWNvbG9yLFxuICAnd2FybmluZyc6ICR3YXJuaW5nLWNvbG9yLFxuICAnZGFuZ2VyJzogJGRhbmdlci1jb2xvclxuKTtcbiIsIi8vIEZvciBhbGVydCdzIGhlYWRpbmcgYm94LXNoYWRvd1xuXG5AbWl4aW4gYWxlcnQtaGVhZGluZy1icygkY29sb3IpIHtcbiAgYm94LXNoYWRvdzogcmdiYSgkY29sb3IsIDAuNCkgMHB4IDZweCAxNXB4IC03cHg7XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMuc2Nzc1xuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gb3ZlcnJpZGVzIG9mIEJvb3RzdHJhcCB2YXJpYWJsZXNcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcbi8vICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBDb2xvciBzeXN0ZW1cblxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGdyYXktNTA6ICNmNmY2ZjYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNiYWJmYzcgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXN0XG4kZ3JheS0yMDA6ICNlZGVkZWQgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXJcbiRncmF5LTMwMDogI2RhZTFlNyAhZGVmYXVsdDsgLy8gJGdyYXktbGlnaHRcbiRncmF5LTQwMDogIzYzNjM2MyAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogI2I4YzJjYyAhZGVmYXVsdDsgLy8gJGdyYXlcbiRncmF5LTcwMDogIzRlNTE1NCAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzFlMWUxZSAhZGVmYXVsdDsgLy8gJGdyYXktZGFya1xuJGdyYXktOTAwOiAjMmEyZTMwICFkZWZhdWx0O1xuJGJsYWNrOiAjMjIyOTJmICFkZWZhdWx0OyAvLyAyMzFmNDggMjIyOTJmXG5cbiRwdXJwbGU6ICM3MzY3ZjAgIWRlZmF1bHQ7IC8vJHByaW1hcnlcbiRncmVlbjogIzI4Yzc2ZiAhZGVmYXVsdDsgLy8kc3VjY2Vzc1xuJGJsdWU6ICMwMGNmZTggIWRlZmF1bHQ7IC8vJGluZm9cbiRvcmFuZ2U6ICNmZjlmNDMgIWRlZmF1bHQ7IC8vJHdhcm5pbmdcbiRyZWQ6ICNlYTU0NTUgIWRlZmF1bHQ7IC8vJGRhbmdlclxuJHRtczogIzA1OTJjNiAhZGVmYXVsdDsgLy9UTVMgUFJJTUFSWVxuJHRtcy1zZWNvbmRhcnk6I0VFRjRGOCAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICR0bXMgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjODI4NjhiICFkZWZhdWx0O1xuJGluZm86ICRibHVlICFkZWZhdWx0O1xuJHdhcm5pbmc6ICRvcmFuZ2UgIWRlZmF1bHQ7XG4kbGlnaHQ6ICRncmF5LTUwICFkZWZhdWx0O1xuJGRhcms6ICM0YjRiNGIgIWRlZmF1bHQ7XG5cbiRsaWdodC1ib3JkZXItY29sb3IgOiAjRTZFNkU2O1xuJGRhcmstYmRyLWZvbnQtY29sb3IgOiAjNkU2RDdBO1xuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjb250YWluZXItbWF4LXdpZHRoc1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHgsXG4gIHh4bDogMTQ0MHB4IC8vIEN1c3RvbSB4eGwgc2l6ZVxuKSAhZGVmYXVsdDtcblxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0NDBweCAvLyBDdXN0b20geHhsIHNpemVcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbnRhaW5lci1tYXgtd2lkdGhzXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAwOiAwLFxuICAgIDI1OiAoXG4gICAgICAkc3BhY2VyICogMC4yNVxuICAgICksXG4gICAgNTA6IChcbiAgICAgICRzcGFjZXIgKiAwLjVcbiAgICApLFxuICAgIDc1OiAoXG4gICAgICAkc3BhY2VyICogMC43NVxuICAgICksXG4gICAgMTogKFxuICAgICAgJHNwYWNlclxuICAgICksXG4gICAgMjogKFxuICAgICAgJHNwYWNlciAqIDEuNVxuICAgICksXG4gICAgMzogKFxuICAgICAgJHNwYWNlciAqIDNcbiAgICApLFxuICAgIDQ6IChcbiAgICAgICRzcGFjZXIgKiAzLjVcbiAgICApLFxuICAgIDU6IChcbiAgICAgICRzcGFjZXIgKiA0XG4gICAgKVxuICApLFxuICAkc3BhY2Vyc1xuKTtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cbiRib2R5LWJnOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICM2ZTZiN2IgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRsaW5rLWNvbG9yLCA1JSkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lICFkZWZhdWx0O1xuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAycmVtICFkZWZhdWx0O1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6IDEuMjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206IDEgIWRlZmF1bHQ7XG5cbiRib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICNlYmU5ZjEgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1czogMC4zNTdyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogMC42cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XG5cbi8vIHNoYWRvd1xuJGJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcbi8vIFR5cG9ncmFwaHlcblxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogJ01vbnRzZXJyYXQnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZiAhZGVmYXVsdDtcblxuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LXNpemUtYmFzZTogMXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtbGc6IGNlaWwoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDAuODUpICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogNTAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGRlcjogNjAwICFkZWZhdWx0O1xuXG4kbGluZS1oZWlnaHQtYmFzZTogMS40NSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNzE0ICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4yODYgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjA3ICFkZWZhdWx0O1xuXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IGluaGVyaXQgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICM1ZTU4NzMgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kZGlzcGxheTItd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGRpc3BsYXkzLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRkaXNwbGF5NC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG5cbiRsZWFkLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4xNCAhZGVmYXVsdDtcbiRsZWFkLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICNiOWI5YzMgIWRlZmF1bHQ7XG4kaHItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAwLjcycmVtICFkZWZhdWx0O1xuXG4kdGFibGUtYWNjZW50LWJnOiAjZmFmYWZjICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAjZjZmNmY5ICFkZWZhdWx0O1xuXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1iZzogI2YzZjJmNyAhZGVmYXVsdDtcbiR0YWJsZS1oZWFkLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1kYXJrLWJnOiAkZGFyayAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogIzQwNDA0MCAhZGVmYXVsdDtcblxuJHRhYmxlLXRoLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuXG4vLyBCdXR0b25zICsgRm9ybXNcbiRidG4tcGFkZGluZy15OiAwLjc4NnJlbSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAxLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAycmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogMC40ODZyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAwLjhyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodDogMSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAwLjM1OHJlbSAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDBzLCBib3JkZXIgMHMgIWRlZmF1bHQ7XG5cbi8vIEZvcm1zXG4kY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjZDhkNmRlO1xuJGxhYmVsLW1hcmdpbi1ib3R0b206IDAuMjg1N3JlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteTogMC40MzhyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206IDAuMTg4cmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1zbTogMC44NTdyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogMC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtbGc6IDEuMTQzcmVtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogMS4xNDNyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1kaXNhYmxlZC1iZzogI2VmZWZlZiAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6IDIuNzE0cmVtICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogMi4xNDJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAzLjI4NTdyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogd2hpdGUgIWRlZmF1bHQ7XG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwcywgYm9yZGVyLWNvbG9yIDBzICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogM3B4ICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOS41IDcuNSclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzAuNzUgNC4zNSA0LjE4IDYuNzUgOC43NSAwLjc1JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTolMjNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoxLjVweCcvJTNFJTNDL3N2ZyUzRVwiKTtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLW1pbnVzJyUzRSUzQ2xpbmUgeDE9JzUnIHkxPScxMicgeDI9JzE5JyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6IHJnYmEoJHByaW1hcnksIDAuNjUpO1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6IG5vbmU7XG5cbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAxMHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc1JyB2aWV3Qm94PScwIDAgNCA1Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246IGNlbnRlciByaWdodCAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuLy8gJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4wNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCA1cHggMjVweCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6IHJnYmEoJHByaW1hcnksIDAuMTIpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tZGl2aWRlci1iZzogcmdiYSgkYmxhY2ssIDAuMDgpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1zcGFjZXI6IDAgIWRlZmF1bHQ7XG4kemluZGV4LWRyb3Bkb3duOiAxMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuNjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuMjhyZW0gIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuJGRyb3Bkb3duX3NwYWNpbmc6IDAuNXJlbTsgLy8gY3VzdG9tXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAwLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuODVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6IDAuNTU3NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogMXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogMC40NDNyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNzQ1cmVtICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI2YzZjJmNyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvbnQtc2l6ZS1sZzogMS4xNHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG4kcGFnaW5hdGlvbi1mb250LXNpemUtc206IDAuODU3cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cblxuLy8gQ2FyZHNcbiRjYXJkLXNwYWNlci15OiAxLjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogMS41cmVtICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogMC40MjhyZW0gIWRlZmF1bHQ7XG5cbi8vQWxlcnRzXG5cbiRhbGVydC1wYWRkaW5nLXk6IDAuNzFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6IDcwMCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdiB0YWJzXG5cbiRuYXYtbGluay1wYWRkaW5nLXk6IDAuMzU4cmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAwLjI1ICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbi8vIG5hdmJhclxuXG4kZmxvYXRpbmctbmF2LW1hcmdpbjogMS4zcmVtO1xuXG4vLyBUb29sdGlwc1xuXG4kdG9vbHRpcC1iZzogIzMyMzIzMiAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy14OiAwLjc3NXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXgtd2lkdGg6IDIyMHB4ICFkZWZhdWx0O1xuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxLjIxcmVtICFkZWZhdWx0O1xuXG4vLyBUb2FzdHNcblxuJHRvYXN0LW1heC13aWR0aDogMzgwcHggIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy14OiAxLjE0cmVtICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteTogMC4xNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogMC4yODZyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogMCAycHggMjBweCAwIHJnYmEoJGJsYWNrLCAwLjA4KSAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3NcblxuJHByb2dyZXNzLWhlaWdodDogMC44NTdyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogNXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDAuODU3ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcblxuLy8gQnJlYWRjcnVtYnNcblxuJGJyZWFkY3J1bWItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6IDAuM3JlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogMC42cmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAwICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6IDAgIWRlZmF1bHQ7XG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdFwiPjxwb2x5bGluZSBwb2ludHM9XCIxNSAxOCA5IDEyIDE1IDZcIj48L3BvbHlsaW5lPjwvc3ZnPicpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0XCI+PHBvbHlsaW5lIHBvaW50cz1cIjkgMTggMTUgMTIgOSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6IDg1JSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXk6IDAuM3JlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogNjAwICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcblxuLy8gTW9kYWxcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAwLjhyZW0gMS40cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xuXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMC44cmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNHJlbSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwteGw6IDk0JSAhZGVmYXVsdDtcbiRtb2RhbC1zbTogNDAwcHggIWRlZmF1bHQ7XG5cbi8vICAgIFNsaWRlIEluIE1vZGFsXG4kbW9kYWwtc2xpZGUtaW4td2lkdGgtc206IDI1cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cbiRtb2RhbC1zbGlkZS1pbi13aWR0aDogMjhyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxuJG1vZGFsLXNsaWRlLWluLXdpZHRoLWxnOiAzMHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXG5cbi8vIENsb3NlXG5cbiRjbG9zZS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kY2xvc2UtZm9udC13ZWlnaHQ6IDQwMCAhZGVmYXVsdDtcbiRjbG9zZS1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xuJGtiZC1iZzogI2VlZSAhZGVmYXVsdDtcblxuLy8gU3dpdGNoXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogM3JlbSAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vc3ZnIGNvbG9yXG4kc3ZnLWNvbG9yLWxpZ2h0OiAjNjI2MjYyICFkZWZhdWx0O1xuXG4vLyBTVkcgaWNvbnNcbi8vIEZvciBCcmVhZGNydW1iXG4kZG91YmxlLWNoZXZyb24tcmlnaHQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb25zLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTMgMTcgMTggMTIgMTMgNyclM0UlM0MvcG9seWxpbmUlM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgMTcgMTEgMTIgNiA3JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbi8vIENoZXZyb24gSWNvbnNcbiRjaGV2cm9uLWxlZnQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kY2hldnJvbi1yaWdodDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaGV2cm9uLXVwOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXVwJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTggMTUgMTIgOSA2IDE1JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaGV2cm9uLWRvd246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcblxuJGRvd25sb2FkOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1kb3dubG9hZCclM0UlM0NwYXRoIGQ9J00yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00JyUzRSUzQy9wYXRoJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc3IDEwIDEyIDE1IDE3IDEwJyUzRSUzQy9wb2x5bGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTUnIHgyPScxMicgeTI9JzMnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XG4kcmVtb3ZlOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci14JyUzRSUzQ2xpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaGVjazogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGVjayclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzIwIDYgOSAxNyA0IDEyJyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcbiRjaXJjbGU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2lyY2xlJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQy9zdmclM0VcIjtcbiRpbmZvSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1pbmZvJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTYnIHgyPScxMicgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPSc4JyB4Mj0nMTIuMDEnIHkyPSc4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xuJHdhcm5pbmdJY29uOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWFsZXJ0LXRyaWFuZ2xlJyUzRSUzQ3BhdGggZD0nTTEwLjI5IDMuODZMMS44MiAxOGEyIDIgMCAwIDAgMS43MSAzaDE2Ljk0YTIgMiAwIDAgMCAxLjcxLTNMMTMuNzEgMy44NmEyIDIgMCAwIDAtMy40MiAweiclM0UlM0MvcGF0aCUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nOScgeDI9JzEyJyB5Mj0nMTMnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE3JyB4Mj0nMTIuMDEnIHkyPScxNyclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcbiRtZW51OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgZmlsbD0nbm9uZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nY3NzLWk2ZHpxMSclM0UlM0NsaW5lIHgxPSczJyB5MT0nMTInIHgyPScyMScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzYnIHgyPScyMScgeTI9JzYnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSczJyB5MT0nMTgnIHgyPScyMScgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xuXG4kY2hhdC1iZy1saWdodDogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJekxqQXVNU3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29KSUhacFpYZENiM2c5SWpBZ01DQXlOakFnTWpZd0lpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5qQWdNall3T3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStDanh6ZEhsc1pTQjBlWEJsUFNKMFpYaDBMMk56Y3lJK0Nna3VjM1F3ZTJacGJHd3RjblZzWlRwbGRtVnViMlJrTzJOc2FYQXRjblZzWlRwbGRtVnViMlJrTzJacGJHdzZJMFV4UlRCRk9UdDlDand2YzNSNWJHVStDanhuUGdvSlBHY2dhV1E5SW1rdGJHbHJaUzFtYjI5a0lqNEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qUXVOQ3d4Tm1Nd0xqSXNNQzQyTERBdU5Dd3hMak1zTUM0MUxESm9MVE11TjJ3eExqSXNNaTR6YkRBdU5Td3dMamxzTFRBdU1pd3dMakZXTWpoak1pNHlMREV1Tnl3eUxqY3NOQzQ0TERFc053b0pDUWxqTFRBdU9Dd3hMVEV1T1N3eExqY3RNeTR5TERFdU9WWXpOMk10TUM0NUxETXVOUzAwTGpFc05pMDNMamdzTm1ndE1qQmpMVE11Tml3d0xUWXVPQzB5TGpVdE55NDNMVFoyTFRBdU1XTXRNaTQzTFRBdU5DMDBMall0TXkwMExqSXROUzQzWXpBdU1pMHhMak1zTUM0NUxUSXVOU3d4TGprdE15NHlDZ2tKQ1hZdE5pNDRiQzB3TGpndE1TNDJiQzB3TGpRdE1DNDViREF1T1Mwd0xqUk1MVEUzTERFNGFDMHpReTB4Tnk0eUxEVXVOaTAwTGprdE1pNHlMRGN1TlN3d0xqWkRNVFV1TkN3eUxqTXNNakV1T1N3NExqSXNNalF1TkN3eE5ub2dUUzB4TWk0MExERTRZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4Q2drSkNXd3RNeTR4TERFdU5td3dMamtzTVM0NGJERXVNeTB3TGpkak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRJdU1pMHhMakZqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpFS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4WXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFF6Y3VOQ3d5TWl3M0xqY3NNaklzT0N3eU1TNDViREl1T1MweExqTmpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak1LQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d6TGpFdE1TNDFiQzB3TGprdE1TNDRiQzB4TGpRc01DNDNZeTB3TGpnc01DNDBMVEV1Tnl3d0xqUXRNaTQyTERBdU1Xd3RNaTQ0TFRFdU1rTXhNaTR6TERFNExERXlMaklzTVRnc01USXVNU3d4T0d3d0xEQUtDUWtKWXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVV3MExERTRMakZETXk0NUxERTRMRE11Tnl3eE9Dd3pMallzTVRoc01Dd3dZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4VERFc01Ua3VNZ29KQ1FsakxUQXVPQ3d3TGpRdE1TNDRMREF1TkMweUxqY3NNRXd0TkN3eE9DNHhReTAwTGpFc01UZ3ROQzR6TERFNExUUXVOQ3d4T0d3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZNTFRjc01Ua3VNbU10TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eENna0pDVU10TVRJdU1Td3hPQzB4TWk0ekxERTRMVEV5TGpRc01UaE1MVEV5TGpRc01UaE1MVEV5TGpRc01UaDZJRTB0TVRJdU5Dd3hObWd0TkM0NVF5MHhNeTQxTERVdU1TMHhMalV0TUM0M0xEa3VOU3d6TGpKak5pd3lMakVzTVRBdU55dzJMamdzTVRJdU9Dd3hNaTQ0YUMweUxqRnNMVEF1TVMwd0xqRUtDUWtKVERFNUxqa3NNVFpJTFRFeUxqUk1MVEV5TGpRc01UWjZJRTB4Tnk0NUxESXpMamRzTVM0MExUQXVOMmd4TGpOMk1tZ3RNeloyTFRFdU1Xd3dMak10TUM0eWJERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRJTFRNS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3VERJdU15d3lNMmd5TGpac01TNDBMREF1TjJNd0xqY3NNQzQwTERFdU55d3dMalFzTWk0MUxEQnNNUzQzTFRBdU4yZ3pMakpzTVM0M0xEQXVOME14Tmk0eUxESTBMakVzTVRjdU1Td3lOQzR4TERFM0xqa3NNak11TjNvS0NRa0pJRTB0TVRNdU9Dd3lOMnd4Tmk0MExEUXVPVXd4T0M0NUxESTNTQzB4TXk0NGVpQk5MVEUwTGpRc01qbG9NQzR6YkRFMkxqY3NOV3d4Tmk0M0xUVm9NQzR6WXpFdU55d3dMRE1zTVM0ekxETXNNM010TVM0ekxETXRNeXd6YUMwek5HTXRNUzQzTERBdE15MHhMak10TXkwekNna0pDVU10TVRjdU5Dd3pNQzR6TFRFMkxqRXNNamt0TVRRdU5Dd3lPWG9nVFMweE15NHhMRE0zWXpBdU9Dd3lMalFzTXk0eExEUXNOUzQzTERSb01qQmpNaTQxTERBc05DNDRMVEV1Tml3MUxqY3RORU14T0M0eUxETTNMVEV6TGpFc016Y3RNVE11TVN3ek4zb2lMejRLQ1FrOGNHRjBhQ0JwWkQwaWNHRjBhRFpmWm1sc2JDMWpiM0I1SWlCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpnMExqUXNNVFpqTUM0eUxEQXVOaXd3TGpRc01TNHpMREF1TlN3eWFDMHpMamRzTVM0eUxESXVNMnd3TGpVc01DNDViQzB3TGpJc01DNHhWakk0WXpJdU1pd3hMamNzTWk0M0xEUXVPQ3d4TERjS0NRa0pZeTB3TGpnc01TMHhMamtzTVM0M0xUTXVNaXd4TGpsV016ZGpMVEF1T1N3ekxqVXROQzR4TERZdE55NDRMRFpvTFRJd1l5MHpMallzTUMwMkxqZ3RNaTQxTFRjdU55MDJkaTB3TGpGakxUSXVOeTB3TGpRdE5DNDJMVE10TkM0eUxUVXVOMk13TGpJdE1TNHpMREF1T1MweUxqVXNNUzQ1TFRNdU1nb0pDUWwyTFRZdU9Hd3RNQzQ0TFRFdU5td3RNQzQwTFRBdU9Xd3dMamt0TUM0MFRESTBNeXd4T0dndE0yTXlMamd0TVRJdU5Dd3hOUzR4TFRJd0xqSXNNamN1TlMweE55NDBRekkzTlM0MExESXVNeXd5T0RFdU9TdzRMaklzTWpnMExqUXNNVFo2SUUweU5EY3VOU3d4T0FvSkNRbGpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRNdU1Td3hMalpzTUM0NUxERXVPR3d4TGpNdE1DNDNZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4WXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eENna0pDV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTR5TFRFdU1XTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNDVMVEV1TXdvSkNRbGpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak5qTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JETXVNUzB4TGpWc0xUQXVPUzB4TGpoc0xURXVOQ3d3TGpkakxUQXVPQ3d3TGpRdE1TNDNMREF1TkMweUxqWXNNQzR4YkMweUxqZ3RNUzR5Q2drSkNXTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOQzB3TGpGc01Dd3dZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNV3d0TWk0ekxURXVNV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TlMwd0xqRnNNQ3d3Q2drSkNXTXRNQzR5TERBdE1DNHpMREF0TUM0MExEQXVNV3d0TWk0eUxERXVNV010TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eFl5MHdMakV0TUM0eExUQXVNeTB3TGpFdE1DNDBMVEF1TVd3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRJdU1pd3hMakVLQ1FrSll5MHdMamdzTUM0MExURXVPQ3d3TGpRdE1pNDNMREJzTFRJdU1pMHhMakZETWpRM0xqa3NNVGdzTWpRM0xqY3NNVGdzTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGg2SUUweU5EY3VOU3d4Tm1ndE5DNDVZek11T1MweE1DNDVMREUxTGprdE1UWXVOeXd5Tmk0NExURXlMamdLQ1FrSll6WXNNaTR4TERFd0xqY3NOaTQ0TERFeUxqZ3NNVEl1T0dndE1pNHhiQzB3TGpFdE1DNHhiQzB3TGpNc01DNHhTREkwTnk0MVRESTBOeTQxTERFMmVpQk5NamMzTGprc01qTXVOMnd4TGpRdE1DNDNhREV1TTNZeWFDMHpObll0TVM0eGJEQXVNeTB3TGpKc01TNDBMVEF1TjJneUxqWUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqY3NNQzQwTERJdU5pd3dMakZzTVM0M0xUQXVOd29KQ1Fsb015NHliREV1Tnl3d0xqZERNamMyTGpJc01qUXVNU3d5TnpjdU1Td3lOQzR4TERJM055NDVMREl6TGpkTU1qYzNMamtzTWpNdU4zb2dUVEkwTmk0eUxESTNiREUyTGpRc05DNDVUREkzT1N3eU4wZ3lORFl1TW5vZ1RUSTBOUzQxTERJNWFEQXVNMnd4Tmk0M0xEVnNNVFl1TnkwMWFEQXVNd29KQ1Fsak1TNDNMREFzTXl3eExqTXNNeXd6Y3kweExqTXNNeTB6TEROb0xUTTBZeTB4TGpjc01DMHpMVEV1TXkwekxUTlRNalF6TGprc01qa3NNalExTGpVc01qbDZJRTB5TkRZdU9Td3pOMk13TGpnc01pNDBMRE11TVN3MExEVXVOaXcwYURJd1l6SXVOU3d3TERRdU9DMHhMallzTlM0M0xUUUtDUWtKU0RJME5pNDVlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TlRrdU5Td3lNV010TVM0ekxUTXVOaTAwTGpjdE5pMDRMalV0Tm1ndE5ESmpMVE11T0N3d0xUY3VNaXd5TGpRdE9DNDFMRFpqTFRNdU15d3dMak10TlM0NExETXVNaTAxTGpVc05pNDFZekF1TWl3eUxqa3NNaTQyTERVdU1pdzFMalVzTlM0MUNna0pDV010TVM0M0xEUXVOeXd3TGpnc09TNDRMRFV1TkN3eE1TNDFZekVzTUM0ekxESXNNQzQxTERNc01DNDFhRFF5WXpVc01DdzVMVFFzT1MwNVl6QXRNUzB3TGpJdE1pNHhMVEF1TlMwell6TXVNeTB3TGpNc05TNDRMVE11TWl3MUxqVXROaTQxQ2drSkNVTXhOalF1Tnl3eU15NDJMREUyTWk0MExESXhMak1zTVRVNUxqVXNNakY2SUUweE5URXNNVGRvTFRReVl5MHlMamNzTUMwMUxqSXNNUzQyTFRZdU15dzBhRFUwTGpkRE1UVTJMaklzTVRndU5pd3hOVE11Tnl3eE55d3hOVEVzTVRkNklFMHhOREV1Tnl3ME13b0pDUWxqTWk0eExURXVOeXd6TGpNdE5DNHpMRE11TXkwM2FDMHlZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROQzR6WXpJdU1TMHhMamNzTXk0ekxUUXVNeXd6TGpNdE4yZ3RNbU13TERNdU9TMHpMakVzTnkwM0xEZG9MVFF1TTJNeUxqRXRNUzQzTERNdU15MDBMak1zTXk0ekxUZG9MVElLQ1FrSll6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE4yTXRNeTQ1TERBdE55MHpMakV0TnkwM2N6TXVNUzAzTERjdE4yZzBNbU16TGprc01DdzNMRE11TVN3M0xEZHpMVE11TVN3M0xUY3NOMGd4TkRFdU4zb2dUVEV3T1N3eU4yTXRNeXd3TFRVdU9Dd3hMalV0Tnk0MUxEUklNVEF4Q2drSkNXTXRNaTR5TERBdE5DMHhMamd0TkMwMGN6RXVPQzAwTERRdE5HZzFPR015TGpJc01DdzBMREV1T0N3MExEUnpMVEV1T0N3MExUUXNOR2d0TUM0MVl5MHhMamN0TWk0MUxUUXVOUzAwTFRjdU5TMDBTREV3T1hvaUx6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk16a3NNVEUxWXpRdU5Dd3dMRGd0TXk0MkxEZ3RPSE10TXk0MkxUZ3RPQzA0Y3kwNExETXVOaTA0TERoVE16UXVOaXd4TVRVc016a3NNVEUxZWlCTk5EVXNNVEEzWXpBc015NHpMVEl1Tnl3MkxUWXNObk10TmkweUxqY3ROaTAyQ2drSkNYTXlMamN0Tml3MkxUWlRORFVzTVRBekxqY3NORFVzTVRBM2VpQk5ORElzTnpoMkxUSm9PSFl0TmtnME1HTXRNaTR5TERBdE5Dd3hMamd0TkN3MGRqRXdTREl5YkMweExqTXNORXd5TUN3NU1HZ3lMakpzTXk0NExEUXdhREkyYkRNdU9DMDBNRWcxT0d3dE1DNDNMVEpNTlRZc09EUklOREpXTnpoNkNna0pDU0JOTXpnc056UjJNVEJvTWxZM05HZzRkaTB5YUMwNFF6TTRMamtzTnpJc016Z3NOekl1T1N3ek9DdzNOSG9nVFRRd0xEZzJhREUwTGpac01DNDNMREpJTWpJdU9Hd3dMamN0TWtnME1Ib2dUVFV6TGpnc09UQklNalF1TW13ekxqWXNNemhvTWpJdU5FdzFNeTQ0TERrd2VpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhNamtzT1RKb0xUWjJOR2d0Tm5ZMGFDMDJkakUwYUMwemJEQXVNaXd5YkRNdU9Dd3pNbWd6Tm13ekxqZ3RNekpzTUM0eUxUSm9MVE4yTFRFMGFDMDJkaTAwYUMwMmRpMDBTREV5T1hvZ1RURTBOeXd4TVRSMkxURXlhQzAwZGpSb00zWTRTREUwTndvSkNRbDZJRTB4TkRRc01URTBkaTAyYUMwMGRqWklNVFEwZWlCTk1UTTRMREV5TUhZdE1UWm9MVFIyTVRrdU1rTXhNelV1Tml3eE1qSXVOU3d4TXpjc01USXhMalFzTVRNNExERXlNSG9nVFRFek1pd3hNak11T0ZZeE1EQm9MVFIyTWpNdU9Bb0pDUWxETVRJNUxqTXNNVEkwTGpFc01UTXdMamNzTVRJMExqRXNNVE15TERFeU15NDRlaUJOTVRJMkxERXlNeTR5VmpFd05HZ3ROSFl4TmtNeE1qTXNNVEl4TGpRc01USTBMalFzTVRJeUxqVXNNVEkyTERFeU15NHllaUJOTVRJd0xERXhOSFl0Tm1ndE5IWTJTREV5TUhvZ1RURXhOQ3d4TVRSMkxUaG9Nd29KQ1FsMkxUUm9MVFIyTVRKSU1URTBlaUJOTVRReExERXdNbll0TkdndE5IWTBhRE4yTkdneFZqRXdNbm9nVFRFek5Td3hNREoyTFRob0xUUjJOR2d6ZGpSSU1UTTFlaUJOTVRJNUxEazRkaTAwYUMwMGRqaG9NWFl0TkVneE1qbDZJRTB4TWpNc01UQXlkaTAwYUMwMGRqaG9NWFl0TkVneE1qTjZDZ2tKQ1NCTk1UTXdMREV5Tm1NMUxqa3NNQ3d4TUM0NUxUUXVNaXd4TVM0NExURXdhRGN1T1d3dE15NDFMRE13YUMwek1pNDBiQzB6TGpVdE16Qm9OeTQ1UXpFeE9TNHhMREV5TVM0NExERXlOQzR4TERFeU5pd3hNekFzTVRJMmVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHlNVElzT0RaMk1tZ3ROSFl0TWtneU1USjZJRTB5TVRZc09EWm9MVEoyTW1neVZqZzJlaUJOTVRrMkxEZzJUREU1Tml3NE5tTXRNaTQzTERBdU55MDBMalVzTXk0ekxUTXVPU3cyWXpBdU5Dd3hMamdzTVM0MkxETXVNaXd6TGpNc015NDRDZ2tKQ1d3d0xqRXNNQzR5YkRFdU1TdzBMalZqTUM0eUxEQXVPU3d4TERFdU5Td3hMamtzTVM0MWJEQXNNR3czTERJMExqWmpNQzR5TERBdU9Td3hMREV1TkN3eExqa3NNUzQwYURWak1DNDVMREFzTVM0M0xUQXVOaXd4TGprdE1TNDBiRGN0TWpRdU5tTXdMamtzTUN3eExqY3RNQzQyTERFdU9TMHhMalVLQ1FrSmJERXVNUzAwTGpWc01DNHhMVEF1TW1NeUxqWXRNQzQ1TERRdU1TMHpMamNzTXk0eUxUWXVNMk10TUM0MkxURXVOeTB5TFRNdE15NDRMVE11TTFZNE5tTXdMVGN1TnkwMkxqTXRNVFF0TVRRdE1UUlRNVGsyTERjNExqTXNNVGsyTERnMmVpQk5NakF3TERnMmFEWjJNbWd0T1FvSkNRbGpMVEV1Tnl3d0xUTXNNUzR6TFRNc00zTXhMak1zTXl3ekxETm9NalpqTVM0M0xEQXNNeTB4TGpNc015MHpjeTB4TGpNdE15MHpMVE5vTFROMkxUSm9NbU13TFRZdU5pMDFMalF0TVRJdE1USXRNVEp6TFRFeUxEVXVOQzB4TWl3eE1rZ3lNREI2SUUweE9UZ3VOaXd4TURCc0xURXROR2d5TkM0NUNna0pDV3d0TVN3MFNERTVPQzQyZWlCTk1qQTNMalVzTVRJMmJDMDJMamt0TWpSb01UZ3VOMnd0Tmk0NUxESTBTREl3Tnk0MWVpQk5NVFV3TERJME1tTXhNaTR5TERBc01qSXRPUzQ0TERJeUxUSXljeTA1TGpndE1qSXRNakl0TWpKekxUSXlMRGt1T0MweU1pd3lNZ29KQ1FsVE1UTTNMamdzTWpReUxERTFNQ3d5TkRKNklFMHhOelFzTWpJd1l6QXNNVE11TXkweE1DNDNMREkwTFRJMExESTBjeTB5TkMweE1DNDNMVEkwTFRJMGJEQXNNR013TFRFekxqTXNNVEF1TnkweU5Dd3lOQzB5TkZNeE56UXNNakEyTGpjc01UYzBMREl5TUhvZ1RURTBOUzQyTERJek55NDNDZ2tKQ1d3eUxUQXVPV014TGpVdE1DNDJMRE11TWkwd0xqWXNOQzQzTERCc01pd3dMamxqTUM0NUxEQXVOQ3d5TERBc01pNDFMVEF1T0d3eExqRXRNUzQ1WXpBdU9DMHhMalFzTWk0eUxUSXVOQ3d6TGpndE1pNDRiREl1TVMwd0xqVmpNUzB3TGpJc01TNDJMVEV1TVN3eExqVXRNaTR4YkMwd0xqSXRNaTR5Q2drSkNXTXRNQzR4TFRFdU5pd3dMalF0TXk0eUxERXVOQzAwTGpWc01TNDBMVEV1TjJNd0xqY3RNQzQ0TERBdU55MHhMamtzTUMweUxqWnNMVEV1TkMweExqZGpMVEV1TVMweExqSXRNUzQyTFRJdU9DMHhMalF0TkM0MWJEQXVNaTB5TGpKak1DNHhMVEV0TUM0MkxURXVPUzB4TGpZdE1pNHhDZ2tKQ1d3dE1pNHhMVEF1TldNdE1TNDJMVEF1TkMwekxURXVOQzB6TGpndE1pNDRiQzB4TGpFdE1TNDVZeTB3TGpVdE1DNDVMVEV1TmkweExqSXRNaTQxTFRBdU9Hd3RNaXd3TGpsakxURXVOU3d3TGpZdE15NHlMREF1TmkwMExqY3NNR3d0TWkwd0xqbGpMVEF1T1Mwd0xqUXRNaXd3TFRJdU5Td3dMamdLQ1FrSmJDMHhMREl1TVdNdE1DNDRMREV1TkMweUxqSXNNaTQwTFRNdU9Dd3lMamhzTFRJdU1Td3dMalZqTFRFc01DNHlMVEV1Tml3eExqRXRNUzQxTERJdU1Xd3dMaklzTWk0eVl6QXVNU3d4TGpZdE1DNDBMRE11TWkweExqUXNOQzQxYkMweExqUXNNUzQzQ2drSkNXTXRNQzQzTERBdU9DMHdMamNzTVM0NUxEQXNNaTQyYkRFdU5Dd3hMamRqTVM0eExERXVNaXd4TGpZc01pNDRMREV1TkN3MExqVnNMVEF1TWl3eUxqSmpMVEF1TVN3eExEQXVOaXd4TGprc01TNDJMREl1TVd3eUxqRXNNQzQxWXpFdU5pd3dMalFzTXl3eExqUXNNeTQ0TERJdU9Hd3hMakVzTVM0NUNna0pDVU14TkRNdU5pd3lNemN1T0N3eE5EUXVOeXd5TXpndU1Td3hORFV1Tml3eU16Y3VOMHd4TkRVdU5pd3lNemN1TjNvZ1RURTBPQzQwTERJek9DNDNZekV0TUM0MExESXVNUzB3TGpRc015NHhMREJzTWl3d0xqbGpNUzQ0TERBdU9DdzBMREF1TVN3MUxURXVObXd4TGpFdE1TNDVDZ2tKQ1dNd0xqWXRNQzQ1TERFdU5TMHhMallzTWk0MUxURXVPR3d5TGpFdE1DNDFZekV1T1Mwd0xqUXNNeTR6TFRJdU15d3pMakV0TkM0eWJDMHdMakl0TWk0eVl5MHdMakV0TVM0eExEQXVNeTB5TGpJc01TMHpiREV1TkMweExqZGpNUzR6TFRFdU5Td3hMak10TXk0M0xEQXROUzR5YkMweExqUXRNUzQzQ2drSkNXTXRNQzQzTFRBdU9DMHhMakV0TVM0NUxURXRNMnd3TGpJdE1pNHlZekF1TWkweUxURXVNUzB6TGpndE15NHhMVFF1TW13dE1pNHhMVEF1TldNdE1TNHhMVEF1TWkweUxUQXVPUzB5TGpVdE1TNDRiQzB4TGpFdE1TNDVZeTB4TFRFdU55MHpMakl0TWk0MExUVXRNUzQyYkMweUxEQXVPUW9KQ1FsakxURXNNQzQwTFRJdU1Td3dMalF0TXk0eExEQnNMVEl0TUM0NVl5MHhMamd0TUM0NExUUXRNQzR4TFRVc01TNDJiQzB4TGpFc01TNDVZeTB3TGpZc01DNDVMVEV1TlN3eExqWXRNaTQxTERFdU9Hd3RNaTR4TERBdU5XTXRNUzQ1TERBdU5DMHpMak1zTWk0ekxUTXVNU3cwTGpKc01DNHlMREl1TWdvSkNRbGpNQzR4TERFdU1TMHdMak1zTWk0eUxURXNNMnd0TVM0MExERXVOMk10TVM0ekxERXVOUzB4TGpNc015NDNMREFzTlM0eWJERXVOQ3d4TGpkak1DNDNMREF1T0N3eExqRXNNUzQ1TERFc00yd3RNQzR5TERJdU1tTXRNQzR5TERJc01TNHhMRE11T0N3ekxqRXNOQzR5YkRJdU1Td3dMalVLQ1FrSll6RXVNU3d3TGpJc01pd3dMamtzTWk0MUxERXVPR3d4TGpFc01TNDVZekVzTVM0M0xETXVNaXd5TGpRc05Td3hMalpNTVRRNExqUXNNak00TGpkNklFMHhOVElzTWpBM1l6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxUTVRVeUxESXdOeTQyTERFMU1pd3lNRGQ2SUUweE5UZ3NNakE1WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakE1TGpZc01UVTRMREl3T1hvZ1RURTBOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVFvSkNRbHpMVEF1TkN3eExURXNNVk14TkRjc01qRXdMallzTVRRM0xESXhNSG9nVFRFME1Td3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME1Td3lNVEF1Tml3eE5ERXNNakV3ZWlCTk1UUTBMREl3TldNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTkN3eU1EVXVOaXd4TkRRc01qQTFlaUJOTVRNMkxESXhNMk13TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNMkxESXhNeTQyTERFek5pd3lNVE42SUUweE16a3NNakU1Q2drSkNXTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE01TERJeE9TNDJMREV6T1N3eU1UbDZJRTB4TXprc01qSTFZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TXprc01qSTFMallzTVRNNUxESXlOWG9LQ1FrSklFMHhORE1zTWpNeVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhORE1zTWpNeUxqWXNNVFF6TERJek1ub2dUVEUwT0N3eU16QmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hDZ2tKQ1ZNeE5EZ3NNak13TGpZc01UUTRMREl6TUhvZ1RURTFNeXd5TXpSak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTFNeXd5TXpRdU5pd3hOVE1zTWpNMGVpQk5NVFUzTERJeU9HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eENna0pDWE10TUM0MExERXRNU3d4VXpFMU55d3lNamd1Tml3eE5UY3NNakk0ZWlCTk1UWXpMREl5TkdNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UWXpMREl5TkM0MkxERTJNeXd5TWpSNklFMHhOVGtzTWpJeFl6QXRNQzQyTERBdU5DMHhMREV0TVFvSkNRbHpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRVNUxESXlNUzQyTERFMU9Td3lNakY2SUUweE5qTXNNakU0WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5qTXNNakU0TGpZc01UWXpMREl4T0hvZ1RURTFPQ3d5TVRRS0NRa0pZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qRTBMallzTVRVNExESXhOSG9nVFRFek5Dd3lNakJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFek5Dd3lNakF1Tml3eE16UXNNakl3ZWdvSkNRa2dUVEUxTUN3eU1qVmpNaTQ0TERBc05TMHlMaklzTlMwMWN5MHlMakl0TlMwMUxUVnpMVFVzTWk0eUxUVXNOVk14TkRjdU1pd3lNalVzTVRVd0xESXlOWG9nVFRFMU55d3lNakJqTUN3ekxqa3RNeTR4TERjdE55dzNjeTAzTFRNdU1TMDNMVGR6TXk0eExUY3NOeTAzQ2drSkNWTXhOVGNzTWpFMkxqRXNNVFUzTERJeU1Ib2dUVEkwTXl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TkRONklFMHlOaklzTWpBd1l6QXRNQzQyTERBdU5DMHhMREV0TVdneUNna0pDV013TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNeU5qSXVOQ3d5TURFc01qWXlMREl3TUM0MkxESTJNaXd5TURCNklFMHlORGdzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURUtDUWtKU0RJME9Ib2dUVEl5TXl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TWpONklFMHlNamdzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESUtDUWtKWXpBdU5pd3dMREV0TUM0MExERXRNWE10TUM0MExURXRNUzB4U0RJeU9Ib2dUVEl6Tnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpNM0xqUXNNakV4TERJek55d3lNVEF1Tml3eU16Y3NNakV3ZWdvSkNRa2dUVEkxTWl3eU1URmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpVeUxqUXNNakV5TERJMU1pd3lNVEV1Tml3eU5USXNNakV4ZWlCTk1qWTBMREl3T1dNdE1DNDJMREF0TVN3d0xqUXRNU3d4Y3pBdU5Dd3hMREVzTVdneUNna0pDV013TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TmpSNklFMHlOVE1zTVRrMVl6QXRNQzQyTERBdU5DMHhMREV0TVdneVl6QXVOaXd3TERFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eGFDMHlRekkxTXk0MExERTVOaXd5TlRNc01UazFMallzTWpVekxERTVOWG9LQ1FrSklFMHlNelFzTVRrMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklNak0wZWlCTk1qUXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbG9MVEpETWpRd0xqUXNNakF4TERJME1Dd3lNREF1Tml3eU5EQXNNakF3ZWlCTk1qRTFMREl4TldNd0xUQXVOU3d3TFRBdU9Td3dMVEV1TkdNdE1pNDFMVEV1TVMwekxqY3ROQzB5TGpZdE5pNDJZekF1TWkwd0xqVXNNQzQxTFRFc01DNDVMVEV1TkdNdE1DNDVMVElzTUMwMExqSXNNUzQ1TFRVdU1nb0pDUWxqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUdNd0xqUXRNQzQxTERBdU9TMHdMamtzTVM0MUxURXVNV013TGpVdE1pNDNMRE11TVMwMExqVXNOUzQ0TFRRdU1XTXdMamNzTUM0eExERXVOQ3d3TGpRc01pd3dMamhqTlM0ekxUTXVPQ3d4TVM0MkxUVXVPU3d4T0M0eUxUVXVPUW9KQ1Fsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamxqTWk0ekxURXVOaXcxTGpRdE1TdzNMREV1TTJNd0xqUXNNQzQyTERBdU55d3hMak1zTUM0NExESmpNQzQyTERBdU1pd3hMakVzTUM0MkxERXVOU3d4TGpGak1pNDNMREF1T0N3MExqSXNNeTQxTERNdU5DdzJMakpzTUN3d0Nna0pDV014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpKak1TNDVMRElzTVM0NExEVXVNaTB3TGpJc04yTXRNQzQwTERBdU5DMHdMamtzTUM0M0xURXVOU3d4WXpBc01DNDFMREFzTUM0NUxEQXNNUzQwZGpGb0xUWXlkaTB4U0RJeE5Yb2dUVEl4TlM0NExESXdOeTQ0Q2drSkNXTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpaakxURXVNeTB4TFRFdU5pMHlMamt0TUM0MkxUUXVNbXd3TERCRE1qRTFMREl3Tnk0MUxESXhOUzQwTERJd055NDNMREl4TlM0NExESXdOeTQ0VERJeE5TNDRMREl3Tnk0NGVpQk5NakUzTGpNc01qQXpMaklLQ1FrSll5MHdMalFzTUM0NUxUQXVOeXd4TGpndE1Td3lMamRqTFRFdE1DNDBMVEV1TmkweExqVXRNUzR6TFRJdU5XTXdMakl0TUM0MUxEQXVOaTB3TGprc01TNHhMVEV1TWtNeU1UWXVOU3d5TURJdU5pd3lNVFl1T1N3eU1ESXVPU3d5TVRjdU15d3lNRE11TWt3eU1UY3VNeXd5TURNdU1ub0tDUWtKSUUweU1Ua3VOaXd4T1RndU4yTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRE1qRTRMak1zTVRrM0xqWXNNakU0TGprc01UazRMak1zTWpFNUxqWXNNVGs0TGpjS0NRa0pUREl4T1M0MkxERTVPQzQzZWlCTk1qSXdMamdzTVRrM1l6QXVOQzB3TGpVc01DNDNMVEVzTVM0eExURXVOV010TUM0ekxUQXVOUzB3TGprdE1DNDNMVEV1TkMwd0xqUnpMVEF1Tnl3d0xqa3RNQzQwTERFdU5FTXlNakF1TXl3eE9UWXVOeXd5TWpBdU5Td3hPVFl1T1N3eU1qQXVPQ3d4T1RjS0NRa0pUREl5TUM0NExERTVOM29nVFRJeU5pNHhMREU1TVM0eVl5MHhMREF1T1MweUxERXVPQzB5TGprc01pNDRZeTB3TGpNdE1DNHpMVEF1Tnkwd0xqWXRNUzR4TFRBdU9HTXdMalF0TVM0MkxESXVNUzB5TGpVc015NDNMVEl1TVFvSkNRbERNakkxTGprc01Ua3hMakVzTWpJMkxERTVNUzR5TERJeU5pNHhMREU1TVM0eVRESXlOaTR4TERFNU1TNHllaUJOTWpZNExqZ3NNVGswWXkwd0xqa3RNUzB4TGprdE1TNDVMVEl1T1MweUxqaGpNUzQxTFRBdU5pd3pMak1zTUM0eExETXVPU3d4TGpjS0NRa0pZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNeU5qa3VOU3d4T1RNdU5Dd3lOamt1TVN3eE9UTXVOaXd5TmpndU9Dd3hPVFJNTWpZNExqZ3NNVGswZWlCTk1qY3dMakVzTVRrMUxqVmpNQzQwTERBdU5Td3dMamdzTVN3eExqRXNNUzQwQ2drSkNXTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW5NdE1DNDNMVEF1T1MweExqSXRNQzQ0UXpJM01DNDFMREU1TlM0eExESTNNQzR6TERFNU5TNHpMREkzTUM0eExERTVOUzQxZWlCTk1qY3pMamtzTWpBeExqUmpMVEF1TlMwd0xqa3RNUzB4TGpndE1TNDFMVEl1TndvSkNRbGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXlOelF1TWl3eU1ERXVNU3d5TnpRc01qQXhMaklzTWpjekxqa3NNakF4TGpSNklFMHlOelV1Tml3eU1EVXVPV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M0Nna0pDV013TGpRdE1DNHpMREF1T0Mwd0xqWXNNUzR5TFRGak1Td3dMalVzTVM0MExERXVOeXd4TERJdU4wTXlOell1Tml3eU1EVXVNeXd5TnpZdU1pd3lNRFV1Tnl3eU56VXVOaXd5TURVdU9Yb2dUVEkzTmk0NExESXhNUzQwWXkwd0xqRXRNUzR5TFRBdU5DMHlMalF0TUM0MkxUTXVOZ29KQ1Fsak1DNDFMVEF1TVN3d0xqa3RNQzQwTERFdU1pMHdMalpETWpjNExqUXNNakE0TGpVc01qYzRMakVzTWpFd0xqUXNNamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUjZJRTB5TnpVc01qRTBZeTB3TGpVdE1UWXRNVE11T1MweU9DNDJMVEk1TGprdE1qZ3VNUW9KQ1FsakxURTFMak1zTUM0MUxUSTNMallzTVRJdU9DMHlPQzR4TERJNExqRklNamMxVERJM05Td3lNVFI2SUUwM01pNHpMREU1T0M0eFl5MHdMakl0TUM0ekxUQXVNeTB3TGpjdE1DNHpMVEV1TVhZdE1USm9MVEoyTVRKak1Dd3lMaklzTVM0NExEUXNOQ3cwQ2drSkNXTXhMaklzTUN3eUxqTXRNQzQxTERNdU1TMHhMalJqTUM0MkxUQXVOeXd3TGprdE1TNDJMREF1T1MweUxqVjJMVEV5YUMweWRqRXlZekFzTVM0eExUQXVPU3d5TFRJc01td3dMREJETnpNdU15d3hPVGtzTnpJdU55d3hPVGd1Tnl3M01pNHpMREU1T0M0eGVpQk5OelVzTVRjMkNna0pDV013TGpRc01Dd3dMamNzTUN3eExqRXRNQzR4WXpBdU5Td3lMaklzTWk0MkxETXVOU3cwTGpnc00yTXdMalV0TUM0eExERXRNQzR6TERFdU5DMHdMalpqTVM0eExESXVNU3d4TGpjc05DNDBMREV1Tnl3MkxqZDJNalJqTUN3ekxqTXRNaTQzTERZdE5pdzJhQzB6ZGprS0NRa0pZekFzTWk0NExUSXVNaXcxTFRVc05YTXROUzB5TGpJdE5TMDFkaTA1YUMwell5MHpMak1zTUMwMkxUSXVOeTAyTFRaMkxUSTBZekF0Tnk0M0xEWXVNeTB4TkN3eE5DMHhORU0zTUN3eE56TXVPQ3czTWk0eUxERTNOaXczTlN3eE56WjZJRTAxT0N3eE9URjJNVElLQ1FrSll6QXNNQzQ0TERBdU5Td3hMalVzTVM0eUxERXVPR013TGprc01DNDBMREV1T1N3d0xqRXNNaTQwTFRBdU4yTXdMakl0TUM0ekxEQXVNeTB3TGpjc01DNHpMVEV1TVhZdE1USm9Nbll4TW1Nd0xESXVNaTB4TGpjc05DMHpMamtzTkdNdE1DNDFMREF0TVMwd0xqRXRNUzQwTFRBdU1nb0pDUWxqTFRBdU1pMHdMakV0TUM0MExUQXVNaTB3TGpjdE1DNHpkakl1TldNd0xESXVNaXd4TGpnc05DdzBMRFJvTVRaak1pNHlMREFzTkMweExqZ3NOQzAwZGkweU5HTXdMVEV1TlMwd0xqSXRNaTQ1TFRBdU55MDBMakpqTFRBdU5Dd3dMakV0TUM0NUxEQXVNaTB4TGpNc01DNHlDZ2tKQ1dNdE1pNHhMREF0TkM0eExURXVNUzAxTGpJdE0yTXRNeTB3TGpFdE5TNDJMVEl0Tmk0MUxUUXVPVU0yTWk0MExERTNOQ3cxT0N3eE56a3NOVGdzTVRnMVZqRTVNWG9nVFRZM0xESXhOWFk1WXpBc01TNDNMREV1TXl3ekxETXNNM016TFRFdU15d3pMVE4yTFRsSU5qZDZJaTgrQ2drSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUUzB4Tnl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TVRkNklFMHlMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTWdvSkNRbGpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERklNME15TGpRc01qQXhMRElzTWpBd0xqWXNNaXd5TURCNklFMHRNVElzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEV5ZWdvSkNRa2dUUzB6Tnl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TXpkNklFMHRNeklzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweENna0pDWE10TUM0MExURXRNUzB4U0Mwek1ub2dUUzB5TXl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRJeUxqWXNNakV4TFRJekxESXhNQzQyTFRJekxESXhNSG9nVFMwNExESXhNV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKYURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVGN1Tml3eU1USXRPQ3d5TVRFdU5pMDRMREl4TVhvZ1RUUXNNakE1WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU5Ib0tDUWtKSUUwdE55d3hPVFZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUWXVOaXd4T1RZdE55d3hPVFV1TmkwM0xERTVOWG9nVFMweU5pd3hPVFZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTWdvSkNRbGpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEkyZWlCTkxUSXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXRNVGt1Tml3eU1ERXRNakFzTWpBd0xqWXRNakFzTWpBd2VpQk5MVFExTERJeE5Rb0pDUWxqTUMwd0xqVXNNQzB3TGprc01DMHhMalJqTFRJdU5TMHhMakV0TXk0M0xUUXRNaTQyTFRZdU5tTXdMakl0TUM0MUxEQXVOUzB4TERBdU9TMHhMalJqTFRBdU9TMHlMREF0TkM0eUxERXVPUzAxTGpKakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01Bb0pDUWxqTUM0MExUQXVOU3d3TGprdE1DNDVMREV1TlMweExqRmpNQzQxTFRJdU55d3pMakV0TkM0MUxEVXVPQzAwTGpGak1DNDNMREF1TVN3eExqUXNNQzQwTERJc01DNDRZelV1TXkwekxqZ3NNVEV1TmkwMUxqa3NNVGd1TWkwMUxqbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGprS0NRa0pZekl1TXkweExqWXNOUzQwTFRFc055d3hMak5qTUM0MExEQXVOaXd3TGpjc01TNHpMREF1T0N3eVl6QXVOaXd3TGpJc01TNHhMREF1Tml3eExqVXNNUzR4WXpJdU55d3dMamdzTkM0eUxETXVOU3d6TGpRc05pNHliREFzTUdNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSUtDUWtKWXpFdU9Td3lMREV1T0N3MUxqSXRNQzR5TERkakxUQXVOQ3d3TGpRdE1DNDVMREF1TnkweExqVXNNV013TERBdU5Td3dMREF1T1N3d0xERXVOSFl4YUMwMk1uWXRNVWd0TkRWNklFMHRORFF1TWl3eU1EY3VPR010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWUtDUWtKWXkweExqTXRNUzB4TGpZdE1pNDVMVEF1TmkwMExqSnNNQ3d3UXkwME5Td3lNRGN1TlMwME5DNDJMREl3Tnk0M0xUUTBMaklzTWpBM0xqaE1MVFEwTGpJc01qQTNMamg2SUUwdE5ESXVOeXd5TURNdU1tTXRNQzQwTERBdU9TMHdMamNzTVM0NExURXNNaTQzQ2drSkNXTXRNUzB3TGpRdE1TNDJMVEV1TlMweExqTXRNaTQxWXpBdU1pMHdMalVzTUM0MkxUQXVPU3d4TGpFdE1TNHlReTAwTXk0MUxESXdNaTQyTFRRekxqRXNNakF5TGprdE5ESXVOeXd5TURNdU1rd3ROREl1Tnl3eU1ETXVNbm9nVFMwME1DNDBMREU1T0M0M0Nna0pDV010TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRMVFF4TGpjc01UazNMall0TkRFdU1Td3hPVGd1TXkwME1DNDBMREU1T0M0M2VpQk5MVE01TGpJc01UazNDZ2tKQ1dNd0xqTXRNQzQxTERBdU55MHhMREV1TVMweExqVmpMVEF1TXkwd0xqVXRNQzQ1TFRBdU55MHhMalF0TUM0MGN5MHdMamNzTUM0NUxUQXVOQ3d4TGpSRExUTTVMamNzTVRrMkxqY3RNemt1TlN3eE9UWXVPUzB6T1M0eUxERTVOMHd0TXprdU1pd3hPVGQ2SUUwdE16TXVPU3d4T1RFdU1nb0pDUWxqTFRFc01DNDVMVElzTVM0NExUSXVPU3d5TGpoakxUQXVNeTB3TGpNdE1DNDNMVEF1TmkweExqRXRNQzQ0WXpBdU5DMHhMallzTWk0eExUSXVOU3d6TGpjdE1pNHhReTB6TkM0eExERTVNUzR4TFRNMExERTVNUzR5TFRNekxqa3NNVGt4TGpKTUxUTXpMamtzTVRreExqSjZJRTA0TGpnc01UazBDZ2tKQ1dNdE1DNDVMVEV0TVM0NUxURXVPUzB5TGprdE1pNDRZekV1TlMwd0xqWXNNeTR6TERBdU1Td3pMamtzTVM0M1l6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME01TGpVc01Ua3pMalFzT1M0eExERTVNeTQyTERndU9Dd3hPVFJNT0M0NExERTVOSG9nVFRFd0xqRXNNVGsxTGpVS0NRa0pZekF1TkN3d0xqVXNNQzQ0TERFc01TNHhMREV1TkdNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbU10TUM0eExUQXVOUzB3TGpjdE1DNDVMVEV1TWkwd0xqaERNVEF1TlN3eE9UVXVNU3d4TUM0ekxERTVOUzR6TERFd0xqRXNNVGsxTGpWNklFMHhNeTQ1TERJd01TNDBDZ2tKQ1dNdE1DNDFMVEF1T1Mwd0xqa3RNUzQ0TFRFdU5TMHlMamRqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa014TkM0eUxESXdNUzR4TERFMExESXdNUzR5TERFekxqa3NNakF4TGpSNklFMHhOUzQzTERJd05TNDVDZ2tKQ1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNZekF1TkMwd0xqTXNNQzQ0TFRBdU5pd3hMakl0TVdNeExEQXVOU3d4TGpRc01TNDNMREVzTWk0M1F6RTJMallzTWpBMUxqTXNNVFl1TWl3eU1EVXVOeXd4TlM0M0xESXdOUzQ1ZWlCTk1UWXVPQ3d5TVRFdU5Bb0pDUWxqTFRBdU1TMHhMakl0TUM0MExUSXVOQzB3TGpZdE15NDJZekF1TlMwd0xqRXNNQzQ1TFRBdU5Dd3hMakl0TUM0MlF6RTRMalFzTWpBNExqVXNNVGd1TVN3eU1UQXVOQ3d4Tmk0NExESXhNUzQwVERFMkxqZ3NNakV4TGpSTU1UWXVPQ3d5TVRFdU5Ib2dUVEUxTERJeE5Bb0pDUWxqTFRBdU5TMHhOaTB4TXk0NUxUSTRMall0TWprdU9TMHlPQzR4WXkweE5TNHpMREF1TlMweU55NDJMREV5TGpndE1qZ3VNU3d5T0M0eFNERTFUREUxTERJeE5Ib2lMejRLQ1R3dlp6NEtQQzluUGdvOEwzTjJaejRLJztcbiRjaGF0LWJnLWRhcms6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2SXpFM01VRXlORHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICAgRmlsZSBOYW1lOiBwYWxsZXR0ZS1ncmFkaWVudC5zY3NzXG4vLyAgIERlc2NyaXB0aW9uOiBncmFkaWVudCBjb2xvciBzeXN0ZW0gc3R5bGVzXG4vLyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4vLyAgIEF1dGhvcjogUElYSU5WRU5UXG4vLyAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQGZ1bmN0aW9uIGNvbG9yLWZ1bmN0aW9uKCRjb2xvciwgJHR5cGUpIHtcbiAgQGlmIG1hcC1oYXMta2V5KCRjb2xvcnMsICRjb2xvcikge1xuICAgICRjdXJyX2NvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvcik7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRjdXJyX2NvbG9yLCAkdHlwZSkge1xuICAgICAgQHJldHVybiBtYXAtZ2V0KCRjdXJyX2NvbG9yLCAkdHlwZSk7XG4gICAgfVxuICB9XG4gIC8vIEB3YXJuIFwiVW5rbm93biBgI3tuYW1lfWAgaW4gJGNvbG9ycy5cIjtcbiAgQHJldHVybiBudWxsO1xufVxuXG4vLyBDb2xvciBwYWxldHRlc1xuQGltcG9ydCAncGFsZXR0ZS12YXJpYWJsZXMnO1xuXG5AaW1wb3J0ICdib290c3RyYXAvc2Nzcy9taXhpbnMvX2dyYWRpZW50cyc7XG5AaW1wb3J0ICdib290c3RyYXAvc2Nzcy9taXhpbnMvZ3JhZGllbnRzJztcblxuQGVhY2ggJGNvbG9yX25hbWUsICRjb2xvciBpbiAkY29sb3JzIHtcbiAgQGVhY2ggJGNvbG9yX3R5cGUsICRjb2xvcl92YWx1ZSBpbiAkY29sb3Ige1xuICAgIEBpZiAkY29sb3JfdHlwZSA9PSAnYmFzZScge1xuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XG4gICAgICAgIC5iZy1ncmFkaWVudC0jeyRjb2xvcl9uYW1lfSxcbiAgICAgICAgLmJ0bi1ncmFkaWVudC0jeyRjb2xvcl9uYW1lfSB7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgIEBpZiAkY29sb3JfbmFtZSA9PSAnZGFyaycge1xuICAgICAgICAgICAgQGlmIChjb2xvci1mdW5jdGlvbigkY29sb3JfbmFtZSwgJ2Jhc2UnKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWRpcmVjdGlvbmFsKG1hcC1nZXQoKCRjb2xvciksICdiYXNlJyksIG1hcC1nZXQoKCRjb2xvciksICdkYXJrZW4tMicpLCA0N2RlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmb3IgZGFyayBsYXlvdXRcbiAgICAgICAgICAgIC5kYXJrLWxheW91dCAmIHtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtZGlyZWN0aW9uYWwobWFwLWdldCgoJGNvbG9yKSwgJ2Rhcmtlbi0yJyksIG1hcC1nZXQoKCRjb2xvciksICdiYXNlJyksIDQ3ZGVnKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICBAaWYgKGNvbG9yLWZ1bmN0aW9uKCRjb2xvcl9uYW1lLCAnYmFzZScpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtZGlyZWN0aW9uYWwobWFwLWdldCgoJGNvbG9yKSwgJ2Jhc2UnKSwgbWFwLWdldCgoJGNvbG9yKSwgJ2xpZ2h0ZW4tMicpLCA0N2RlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgQGlmIChjb2xvci1mdW5jdGlvbigkY29sb3JfbmFtZSwgJ2Rhcmtlbi0yJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1kaXJlY3Rpb25hbChtYXAtZ2V0KCgkY29sb3IpLCAnZGFya2VuLTInKSwgbWFwLWdldCgoJGNvbG9yKSwgJ2Jhc2UnKSwgNDdkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIEdyYWRpZW50c1xuXG5AbWl4aW4gZ3JhZGllbnQtYmcoJGNvbG9yKSB7XG4gIEBpZiAkZW5hYmxlLWdyYWRpZW50cyB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIG1peCgkYm9keS1iZywgJGNvbG9yLCAxNSUpLCAkY29sb3IpIHJlcGVhdC14O1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gIH1cbn1cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbkBtaXhpbiBncmFkaWVudC14KCRzdGFydC1jb2xvcjogJGdyYXktNzAwLCAkZW5kLWNvbG9yOiAkZ3JheS04MDAsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gVmVydGljYWwgZ3JhZGllbnQsIGZyb20gdG9wIHRvIGJvdHRvbVxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG5AbWl4aW4gZ3JhZGllbnQteSgkc3RhcnQtY29sb3I6ICRncmF5LTcwMCwgJGVuZC1jb2xvcjogJGdyYXktODAwLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtZGlyZWN0aW9uYWwoJHN0YXJ0LWNvbG9yOiAkZ3JheS03MDAsICRlbmQtY29sb3I6ICRncmF5LTgwMCwgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cbkBtaXhpbiBncmFkaWVudC14LXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICRibHVlLCAkbWlkLWNvbG9yOiAkcHVycGxlLCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAkcmVkKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC15LXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICRibHVlLCAkbWlkLWNvbG9yOiAkcHVycGxlLCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAkcmVkKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXJhZGlhbCgkaW5uZXItY29sb3I6ICRncmF5LTcwMCwgJG91dGVyLWNvbG9yOiAkZ3JheS04MDApIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXN0cmlwZWQoJGNvbG9yOiByZ2JhKCR3aGl0ZSwgLjE1KSwgJGFuZ2xlOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMtZGFyay5zY3NzXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBkYXJrIHRoZW1lIHZhcmlhYmxlc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbi8vICBBdXRob3I6IFBJWElOVkVOVFxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBXQVJOSU5HOiBQTEVBU0UgRE8gTk9UIENIQU5HRSBUSElTIFZBUklBQkxFIEZJTEUuXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWVUVYWSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXG4vLyAgVElQOlxuLy8gIFdlIHN1Z2dlc3QgeW91IHRvIHVzZSB0aGlzIChhc3NldHMvc2Nzcy92YXJpYWJsZXMvX3ZhcmlhYmxlcy1jb21wb25lbnRzLnNjc3MpIGZpbGUgZm9yIG92ZXJyaWRpbmcgY29tcG9uZW50cyB2YXJpYWJsZXMuXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vQm9keVxuJHRoZW1lLWRhcmstYm9keS1iZzogIzE2MWQzMSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJvZHktY29sb3I6ICNiNGI3YmQgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1ib3JkZXItY29sb3I6ICMzYjQyNTMgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1jdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I6ICM0NDQwNWUgIWRlZmF1bHQ7XG5cbi8vVHlwb2dyYXBoeVxuJHRoZW1lLWRhcmstaGVhZGluZ3MtY29sb3I6ICNkMGQyZDYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1sYWJlbC1jb2xvcjogI2QwZDJkNiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLXRleHQtbXV0ZWQtY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XG5cbi8vQ2FyZFxuJHRoZW1lLWRhcmstY2FyZC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4yNCk7XG5cbi8vSW5wdXRcbiR0aGVtZS1kYXJrLWlucHV0LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1pbnB1dC1ib3JkZXItY29sb3I6ICM0MDQ2NTYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1pbnB1dC1kaXNhYmxlZC1iZzogIzI0MjMzYSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzQ0NGI2MCAhZGVmYXVsdDtcblxuLy8gU3dpdGNoXG4kdGhlbWUtZGFyay1zd2l0Y2gtYmc6ICM1NDVhNmE7XG4kdGhlbWUtZGFyay1zd2l0Y2gtYmctZGlzYWJsZWQ6ICMxYjIzMzc7XG5cbi8vVGFibGVcbiR0aGVtZS1kYXJrLXRhYmxlLWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtaGVhZGVyLWJnOiAjMzQzZDU1ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtcm93LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstdGFibGUtaG92ZXItYmc6ICMyNDJiM2QgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay10YWJsZS1zdHJpcGVkLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xuXG4kdGhlbWUtZGFyay1tb2RhbC1oZWFkZXItYmc6ICMxNjFkMzEgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay1wYWdpbmF0aW9uLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xuJHRoZW1lLWRhcmstY2hhcnQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XG4kdGhlbWUtZGFyay13aWRnZXQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 9960:
/*!*************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesModule": () => (/* binding */ DatatablesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ctrl/ngx-csv */ 30839);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.module */ 76826);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 50619);
/* harmony import */ var app_main_tables_datatables_datatables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/tables/datatables/datatables.component */ 12716);
/* harmony import */ var app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/tables/datatables/datatables.service */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);












const routes = [
    {
        path: 'datatables',
        component: app_main_tables_datatables_datatables_component__WEBPACK_IMPORTED_MODULE_3__.DatatablesComponent,
        resolve: {
            datatables: app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_4__.DatatablesService
        },
        data: { animation: 'datatables' }
    }
];
class DatatablesModule {
}
DatatablesModule.ɵfac = function DatatablesModule_Factory(t) { return new (t || DatatablesModule)(); };
DatatablesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DatatablesModule });
DatatablesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_4__.DatatablesService], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule,
        app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule,
        _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__.CardSnippetModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.NgxDatatableModule,
        _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_10__.CsvModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DatatablesModule, { declarations: [app_main_tables_datatables_datatables_component__WEBPACK_IMPORTED_MODULE_3__.DatatablesComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule,
        app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule,
        _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__.CardSnippetModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.NgxDatatableModule,
        _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_10__.CsvModule] }); })();


/***/ }),

/***/ 7502:
/*!**************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesService": () => (/* binding */ DatatablesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class DatatablesService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onDatatablessChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([this.getDataTableRows()]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get rows
     */
    getDataTableRows() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/datatable-rows').subscribe((response) => {
                this.rows = response;
                this.onDatatablessChanged.next(this.rows);
                resolve(this.rows);
            }, reject);
        });
    }
}
DatatablesService.ɵfac = function DatatablesService_Factory(t) { return new (t || DatatablesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DatatablesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DatatablesService, factory: DatatablesService.ɵfac });


/***/ }),

/***/ 29239:
/*!******************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.snippetcode.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "snippetCodeCustomCheckbox": () => (/* binding */ snippetCodeCustomCheckbox),
/* harmony export */   "snippetCodeInlineEditing": () => (/* binding */ snippetCodeInlineEditing),
/* harmony export */   "snippetCodeKitchenSink": () => (/* binding */ snippetCodeKitchenSink),
/* harmony export */   "snippetCodeMultilangual": () => (/* binding */ snippetCodeMultilangual),
/* harmony export */   "snippetCodeResponsive": () => (/* binding */ snippetCodeResponsive),
/* harmony export */   "snippetCodeRowDetails": () => (/* binding */ snippetCodeRowDetails)
/* harmony export */ });
const snippetCodeKitchenSink = {
    html: `
<div class="row">
  <div class="col-12 mb-50">
    <button class="btn btn-primary ml-1" rippleEffect>
      <i data-feather="plus" class="mr-0 mr-sm-1"></i
      ><span class="d-none d-sm-inline-block">Add New Record</span>
    </button>

    <a csvLink [data]="exportCSVData" class="btn btn-outline-secondary float-right mr-1" rippleEffect
      >Export CSV</a
    >
  </div>
  <div class="col-md-6 col-12">
    <div class="d-flex justify-content-between align-items-center m-1">
      <label class="d-flex align-items-center"
        >Show
        <select class="form-control mx-25" [(ngModel)]="basicSelectedOption">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries</label
      >
    </div>
  </div>
  <div class="col-md-6 col-12 d-flex justify-content-md-end">
    <div class="d-flex align-items-center justify-content-end pr-1 pb-1 pl-1 pl-md-0 pb-md-0">
      <label class="d-flex align-items-center"
        >Search<input
          type="search"
          placeholder="Search"
          class="form-control ml-25"
          (keyup)="filterUpdate($event)"
          (search)="filterUpdate($event)"
      /></label>
    </div>
  </div>
</div>
<ngx-datatable
  [rows]="kitchenSinkRows"
  [rowHeight]="58"
  class="bootstrap core-bootstrap"
  [limit]="10"
  [columnMode]="ColumnMode.force"
  [headerHeight]="40"
  [footerHeight]="50"
  [scrollbarH]="true"
  [selectionType]="SelectionType.checkbox"
  [limit]="basicSelectedOption"
  (activate)="onActivate($event)"
  (select)="onSelect($event)"
>
  <ngx-datatable-column
    [width]="50"
    [sortable]="false"
    [canAutoResize]="false"
    [draggable]="false"
    [resizeable]="false"
  >
    <ng-template
      ngx-datatable-header-template
      let-value="value"
      let-allRowsSelected="allRowsSelected"
      let-selectFn="selectFn"
    >
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          [checked]="allRowsSelected"
          (change)="selectFn(!allRowsSelected)"
          id="headerChkbxRef"
        />
        <label class="custom-control-label" for="headerChkbxRef"></label>
      </div>
    </ng-template>
    <ng-template
      ngx-datatable-cell-template
      let-rowIndex="rowIndex"
      let-value="value"
      let-isSelected="isSelected"
      let-onCheckboxChangeFn="onCheckboxChangeFn"
    >
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          [checked]="isSelected"
          (change)="onCheckboxChangeFn($event)"
          id="rowChkbxRef{{ rowIndex }}"
        />
        <label class="custom-control-label" for="rowChkbxRef{{ rowIndex }}"></label>
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Name" prop="full_name" [width]="280">
    <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div *ngIf="row.avatar.length > 0; else customAvatar">
          <img
            class="rounded-circle mr-1"
            src="assets/images/portrait/small/{{ row.avatar }}"
            height="32"
            width="32"
            alt="datatable-avatar"
          />
        </div>
        <ng-template #customAvatar>
          <div
            class="avatar mr-1 ml-0"
            [ngClass]="{
              'bg-light-primary': row.status == '1',
              'bg-light-success': row.status == '2',
              'bg-light-danger': row.status == '3',
              'bg-light-warning': row.status == '4',
              'bg-light-info': row.status == '5'
            }"
          >
            <div class="avatar-content">{{ name | initials }}</div>
          </div>
        </ng-template>
        <div class="cell-line-height">
          <p class="font-medium-1 font-weight-bold line-height-1 mb-25">
            {{ name }}
          </p>
          <span class="text-muted font-small-2"> {{ row.post }}</span>
        </div>
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Email" prop="email" [width]="250"></ngx-datatable-column>
  <ngx-datatable-column name="Date" prop="start_date" [width]="120"></ngx-datatable-column>
  <ngx-datatable-column name="Salary" prop="salary" [width]="120"></ngx-datatable-column>
  <ngx-datatable-column name="Status" prop="status" [width]="120">
    <ng-template let-status="value" ngx-datatable-cell-template>
      <div
        class="badge badge-pill"
        [ngClass]="{
          'badge-light-primary': status == '1',
          'badge-light-success': status == '2',
          'badge-light-danger': status == '3',
          'badge-light-warning': status == '4',
          'badge-light-info': status == '5'
        }"
      >
        {{
          status == 1
            ? 'Current'
            : status == 2
            ? 'Professional'
            : status == 3
            ? 'Rejected'
            : status == 4
            ? 'Resigned'
            : status == 5
            ? 'Applied'
            : 'Applied'
        }}
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Actions" [width]="120" [sortable]="false">
    <ng-template ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div ngbDropdown container="body">
          <a
            ngbDropdownToggle
            href="javascript:void(0);"
            class="hide-arrow"
            id="dropdownBrowserState"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="file-text" class="mr-50"></i> Details</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="archive" class="mr-50"></i> Archive</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="trash-2" class="mr-50"></i> Delete</a
            >
          </div>
        </div>

        <i data-feather="edit" class="text-primary cursor-pointer"></i>
      </div>
    </ng-template>
  </ngx-datatable-column>
</ngx-datatable>
  `,
    ts: `
  public kitchenSinkRows: any;
  public basicSelectedOption: number = 10;
  public SelectionType = SelectionType;

  /**
   * Method Search (filter)
   *
   * @param event
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.kitchenSinkRows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.kitchenSinkRows = this.rows;
      this.exportCSVData = this.rows;
    });
  }
  `
};
const snippetCodeInlineEditing = {
    html: `
<ngx-datatable
  class="bootstrap core-bootstrap"
  [headerHeight]="40"
  [rowHeight]="58"
  [limit]="10"
  [columnMode]="ColumnMode.force"
  [footerHeight]="50"
  [rows]="rows"
  [scrollbarH]="true"
>
  <ngx-datatable-column [width]="280" name="Name" prop="full_name">
    <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
      <div
        title="Double click to edit"
        (dblclick)="editingName[rowIndex + '-full_name'] = true"
        *ngIf="!editingName[rowIndex + '-full_name']"
      >
        <div class="d-flex align-items-center">
          <div *ngIf="row.avatar.length > 0; else customAvatar">
            <img
              class="rounded-circle mr-1"
              src="assets/images/portrait/small/{{ row.avatar }}"
              height="32"
              width="32"
              alt="datatable-avatar"
            />
          </div>
          <ng-template #customAvatar>
            <div
              class="avatar mr-1 ml-0"
              [ngClass]="{
                'bg-light-primary': row.status == '1',
                'bg-light-success': row.status == '2',
                'bg-light-danger': row.status == '3',
                'bg-light-warning': row.status == '4',
                'bg-light-info': row.status == '5'
              }"
            >
              <div class="avatar-content">{{ value | initials }}</div>
            </div>
          </ng-template>
          <div class="cell-line-height">
            <p class="font-medium-1 line-height-1 mb-0">{{ value }}</p>
            <span class="text-muted font-small-2"> {{ row.post }}</span>
          </div>
        </div>
      </div>
      <input
        autofocus
        class="form-control form-control-sm"
        (blur)="inlineEditingUpdateName($event, 'full_name', rowIndex)"
        *ngIf="editingName[rowIndex + '-full_name']"
        type="text"
        [value]="value"
      />
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column [width]="120" name="Status" prop="status">
    <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-row="row" let-value="value">
      <div
        title="Double click to edit"
        (dblclick)="editingStatus[rowIndex + '-status'] = true"
        *ngIf="!editingStatus[rowIndex + '-status']"
      >
        <div
          class="badge badge-pill"
          [ngClass]="{
            'badge-light-primary': value == '1',
            'badge-light-success': value == '2',
            'badge-light-danger': value == '3',
            'badge-light-warning': value == '4',
            'badge-light-info': value == '5'
          }"
        >
          {{
            value == 1
              ? 'Current'
              : value == 2
              ? 'Professional'
              : value == 3
              ? 'Rejected'
              : value == 4
              ? 'Resigned'
              : value == 5
              ? 'Applied'
              : 'Applied'
          }}
        </div>
      </div>
      <select
        *ngIf="editingStatus[rowIndex + '-status']"
        (blur)="editingStatus[rowIndex + '-status'] = false"
        (change)="inlineEditingUpdateStatus($event, 'status', rowIndex)"
        [value]="value"
        class="form-control form-control-sm"
      >
        <option value="1">Current</option>
        <option value="2">Professional</option>
        <option value="3">Rejected</option>
        <option value="4">Resigned</option>
        <option value="5">Applied</option>
      </select>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column [width]="50" name="Age" prop="age">
    <ng-template ngx-datatable-cell-template let-value="value" let-rowIndex="rowIndex" let-row="row">
      <div
        title="Double click to edit"
        (dblclick)="editingAge[rowIndex + '-age'] = true"
        *ngIf="!editingAge[rowIndex + '-age']"
      >
        {{ value }}
      </div>
      <input
        autofocus
        class="form-control form-control-sm"
        (blur)="inlineEditingUpdateAge($event, 'age', rowIndex)"
        *ngIf="editingAge[rowIndex + '-age']"
        type="text"
        [value]="value"
      />
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column [width]="100" name="Salary" prop="salary" [width]="120">
    <ng-template ngx-datatable-cell-template let-value="value" let-rowIndex="rowIndex" let-row="row">
      <div
        title="Double click to edit"
        (dblclick)="editingSalary[rowIndex + '-salary'] = true"
        *ngIf="!editingSalary[rowIndex + '-salary']"
      >
        {{ value }}
      </div>
      <input
        autofocus
        class="form-control form-control-sm"
        (blur)="inlineEditingUpdateSalary($event, 'salary', rowIndex)"
        *ngIf="editingSalary[rowIndex + '-salary']"
        type="text"
        [value]="value"
      />
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Actions" [width]="120" [sortable]="false">
    <ng-template ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div ngbDropdown container="body">
          <a
            ngbDropdownToggle
            href="javascript:void(0);"
            class="hide-arrow"
            id="dropdownBrowserState"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="file-text" class="mr-50"></i> Details</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="archive" class="mr-50"></i> Archive</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="trash-2" class="mr-50"></i> Delete</a
            >
          </div>
        </div>

        <i data-feather="edit" class="text-primary cursor-pointer"></i>
      </div>
    </ng-template>
  </ngx-datatable-column>
</ngx-datatable>
  `,
    ts: `

  public editingName = {};
  public editingStatus = {};
  public editingAge = {};
  public editingSalary = {};

  /**
   * Inline editing Name
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateName(event, cell, rowIndex) {
    this.editingName[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Age
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateAge(event, cell, rowIndex) {
    this.editingAge[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Salary
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateSalary(event, cell, rowIndex) {
    this.editingSalary[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Status
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateStatus(event, cell, rowIndex) {
    this.editingStatus[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }
  `
};
const snippetCodeRowDetails = {
    html: `
  <!-- ngx-datatable-row-details -->
  <ngx-datatable
    #tableRowDetails
    class="bootstrap core-bootstrap"
    [columnMode]="ColumnMode.force"
    [headerHeight]="40"
    [footerHeight]="50"
    [rowHeight]="58"
    [limit]="10"
    [rows]="rows"
    [scrollbarH]="true"
  >
    <!-- Row Detail Template -->
    <ngx-datatable-row-detail [rowHeight]="50">
      <ng-template let-row="row" let-expanded="expanded" ngx-datatable-row-detail-template>
        <div class="ml-75 pl-5 pt-75">
          <div>
            <span><strong>City : </strong> {{ row.city }}</span
            ><span class="ml-1"><strong>Experience : </strong> {{ row.experience }}</span
            ><span class="ml-1"><strong>Start Date : </strong> {{ row.start_date }}</span>
          </div>
        </div>
      </ng-template>
    </ngx-datatable-row-detail>
    <ngx-datatable-column
      [width]="50"
      [resizeable]="false"
      [sortable]="false"
      [draggable]="false"
      [canAutoResize]="false"
    >
      <ng-template let-row="row" let-expanded="expanded" ngx-datatable-cell-template>
        <a
          href="javascript:void(0)"
          [class.datatable-icon-right]="!expanded"
          [class.datatable-icon-down]="expanded"
          title="Expand/Collapse Row"
          (click)="rowDetailsToggleExpand(row)"
        >
        </a>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Name" prop="full_name" [width]="280">
      <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
        <div class="d-flex align-items-center">
          <div *ngIf="row.avatar.length > 0; else customAvatar">
            <img
              class="rounded-circle mr-1"
              src="assets/images/portrait/small/{{ row.avatar }}"
              height="32"
              width="32"
              alt="datatable-avatar"
            />
          </div>
          <ng-template #customAvatar>
            <div
              class="avatar mr-1 ml-0"
              [ngClass]="{
                'bg-light-primary': row.status == '1',
                'bg-light-success': row.status == '2',
                'bg-light-danger': row.status == '3',
                'bg-light-warning': row.status == '4',
                'bg-light-info': row.status == '5'
              }"
            >
              <div class="avatar-content">{{ name | initials }}</div>
            </div>
          </ng-template>
          <div class="cell-line-height">
            <p class="font-medium-1 line-height-1 mb-0">{{ name }}</p>
            <span class="text-muted font-small-2"> {{ row.post }}</span>
          </div>
        </div>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Email" prop="email" [width]="250"></ngx-datatable-column>
    <ngx-datatable-column name="Age" prop="age" [width]="50"></ngx-datatable-column>
    <ngx-datatable-column name="Salary" prop="salary" [width]="120"></ngx-datatable-column>
    <ngx-datatable-column name="Status" prop="status" [width]="120">
      <ng-template let-status="value" ngx-datatable-cell-template>
        <div
          class="badge badge-pill"
          [ngClass]="{
            'badge-light-primary': status == '1',
            'badge-light-success': status == '2',
            'badge-light-danger': status == '3',
            'badge-light-warning': status == '4',
            'badge-light-info': status == '5'
          }"
        >
          {{
            status == 1
              ? 'Current'
              : status == 2
              ? 'Professional'
              : status == 3
              ? 'Rejected'
              : status == 4
              ? 'Resigned'
              : status == 5
              ? 'Applied'
              : 'Applied'
          }}
        </div>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Actions" [width]="120" [sortable]="false">
      <ng-template ngx-datatable-cell-template>
        <div class="d-flex align-items-center">
          <div ngbDropdown container="body">
            <a
              ngbDropdownToggle
              href="javascript:void(0);"
              class="hide-arrow"
              id="dropdownBrowserState"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
            </a>
            <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="file-text" class="mr-50"></i> Details</a
              >
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="archive" class="mr-50"></i> Archive</a
              >
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="trash-2" class="mr-50"></i> Delete</a
              >
            </div>
          </div>

          <i data-feather="edit" class="text-primary cursor-pointer"></i>
        </div>
      </ng-template>
    </ngx-datatable-column>
  </ngx-datatable>
  <!-- ngx-datatable-row-details -->
  `,
    ts: `

  @ViewChild('tableRowDetails') tableRowDetails: any;

  public ColumnMode = ColumnMode;

  /**
   * rowDetailsToggleExpand
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }
  `
};
const snippetCodeCustomCheckbox = {
    html: `
<!-- ngx-datatable-custom-checkbox -->
  <div class="row">
    <div class="col-12">
      <ngx-datatable
        class="bootstrap core-bootstrap"
        [rows]="rows"
        [columnMode]="ColumnMode.force"
        [headerHeight]="40"
        [footerHeight]="50"
        [rowHeight]="58"
        [limit]="10"
        [selected]="chkBoxSelected"
        [selectionType]="SelectionType.checkbox"
        (select)="customChkboxOnSelect($event)"
        [scrollbarH]="true"
        (activate)="onActivate($event)"
        (select)="onSelect($event)"
      >
        <ngx-datatable-column
          [width]="50"
          [sortable]="false"
          [canAutoResize]="false"
          [draggable]="false"
          [resizeable]="false"
        >
          <ng-template
            ngx-datatable-header-template
            let-value="value"
            let-allRowsSelected="allRowsSelected"
            let-selectFn="selectFn"
          >
            <div class="custom-control custom-control-primary custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                [checked]="allRowsSelected"
                (change)="selectFn(!allRowsSelected)"
                id="headerCustomChkbxRef"
              />
              <label class="custom-control-label" for="headerCustomChkbxRef"></label>
            </div>
          </ng-template>
          <ng-template
            ngx-datatable-cell-template
            let-rowIndex="rowIndex"
            let-value="value"
            let-isSelected="isSelected"
            let-onCheckboxChangeFn="onCheckboxChangeFn"
          >
            <div class="custom-control custom-control-primary custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                [checked]="isSelected"
                (change)="onCheckboxChangeFn($event)"
                id="rowCustomChkbxRef{{ rowIndex }}"
              />
              <label class="custom-control-label" for="rowCustomChkbxRef{{ rowIndex }}"></label>
            </div>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Name" prop="full_name" [width]="280">
          <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
            <div class="d-flex align-items-center">
              <div *ngIf="row.avatar.length > 0; else customAvatar">
                <img
                  class="rounded-circle mr-1"
                  src="assets/images/portrait/small/{{ row.avatar }}"
                  height="32"
                  width="32"
                  alt="datatable-avatar"
                />
              </div>
              <ng-template #customAvatar>
                <div
                  class="avatar mr-1 ml-0"
                  [ngClass]="{
                    'bg-light-primary': row.status == '1',
                    'bg-light-success': row.status == '2',
                    'bg-light-danger': row.status == '3',
                    'bg-light-warning': row.status == '4',
                    'bg-light-info': row.status == '5'
                  }"
                >
                  <div class="avatar-content">{{ name | initials }}</div>
                </div>
              </ng-template>
              <div class="cell-line-height">
                <p class="font-medium-1 line-height-1 mb-0">{{ name }}</p>
                <span class="text-muted font-small-2"> {{ row.post }}</span>
              </div>
            </div>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Email" prop="email" [width]="250"></ngx-datatable-column>
        <ngx-datatable-column name="Age" prop="age" [width]="50"></ngx-datatable-column>
        <ngx-datatable-column name="Salary" prop="salary" [width]="120"></ngx-datatable-column>
        <ngx-datatable-column name="Status" prop="status" [width]="120">
          <ng-template let-status="value" ngx-datatable-cell-template>
            <div
              class="badge badge-pill"
              [ngClass]="{
                'badge-light-primary': status == '1',
                'badge-light-success': status == '2',
                'badge-light-danger': status == '3',
                'badge-light-warning': status == '4',
                'badge-light-info': status == '5'
              }"
            >
              {{
                status == 1
                  ? 'Current'
                  : status == 2
                  ? 'Professional'
                  : status == 3
                  ? 'Rejected'
                  : status == 4
                  ? 'Resigned'
                  : status == 5
                  ? 'Applied'
                  : 'Applied'
              }}
            </div>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Actions" [width]="120" [sortable]="false">
          <ng-template ngx-datatable-cell-template>
            <div class="d-flex align-items-center">
              <div ngbDropdown container="body">
                <a
                  ngbDropdownToggle
                  href="javascript:void(0);"
                  class="hide-arrow"
                  id="dropdownBrowserState"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
                </a>
                <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
                  <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                    ><i data-feather="file-text" class="mr-50"></i> Details</a
                  >
                  <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                    ><i data-feather="archive" class="mr-50"></i> Archive</a
                  >
                  <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                    ><i data-feather="trash-2" class="mr-50"></i> Delete</a
                  >
                </div>
              </div>

              <i data-feather="edit" class="text-primary cursor-pointer"></i>
            </div>
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
    <div class="selected-column col-12 mt-1">
      <hr class="w-100" />
      <h5 class="mx-1">
        Selections <small>({{ chkBoxSelected?.length }})</small>
      </h5>
      <ul>
        <li *ngFor="let sel of chkBoxSelected">
          {{ sel.full_name }}
        </li>
        <li *ngIf="!chkBoxSelected?.length">No Selections</li>
      </ul>
    </div>
  </div>
  <!--/ ngx-datatable-custom-checkbox -->
  `,
    ts: `

  @ViewChild('tableRowDetails') tableRowDetails: any;

  public ColumnMode = ColumnMode;

  public chkBoxSelected = [];

  /**
   * customChkboxOnSelect
   *
   * @param { selected }
   */
  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }

  `
};
const snippetCodeResponsive = {
    html: `
  <!-- ngx-datatables responsive -->
  <ngx-datatable
    #table
    class="bootstrap core-bootstrap"
    [columnMode]="ColumnMode.force"
    [headerHeight]="40"
    [rowHeight]="58"
    [footerHeight]="50"
    rowHeight="auto"
    [limit]="10"
    [rows]="rows"
    [scrollbarH]="true"
  >
    <ngx-datatable-column name="Name" prop="full_name" [width]="280">
      <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
        <div class="d-flex align-items-center">
          <div *ngIf="row.avatar.length > 0; else customAvatar">
            <img
              class="rounded-circle mr-1"
              src="assets/images/portrait/small/{{ row.avatar }}"
              height="32"
              width="32"
              alt="datatable-avatar"
            />
          </div>
          <ng-template #customAvatar>
            <div
              class="avatar mr-1 ml-0"
              [ngClass]="{
                'bg-light-primary': row.status == '1',
                'bg-light-success': row.status == '2',
                'bg-light-danger': row.status == '3',
                'bg-light-warning': row.status == '4',
                'bg-light-info': row.status == '5'
              }"
            >
              <div class="avatar-content">{{ name | initials }}</div>
            </div>
          </ng-template>
          <div class="cell-line-height">
            <p class="font-medium-1 line-height-1 mb-0">{{ name }}</p>
            <span class="text-muted font-small-2"> {{ row.post }}</span>
          </div>
        </div>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Email" prop="email" [width]="250"></ngx-datatable-column>
    <ngx-datatable-column name="Age" prop="age" [width]="50"></ngx-datatable-column>
    <ngx-datatable-column name="Status" prop="status" [width]="120">
      <ng-template let-status="value" ngx-datatable-cell-template>
        <div
          class="badge badge-pill"
          [ngClass]="{
            'badge-light-primary': status == '1',
            'badge-light-success': status == '2',
            'badge-light-danger': status == '3',
            'badge-light-warning': status == '4',
            'badge-light-info': status == '5'
          }"
        >
          {{
            status == 1
              ? 'Current'
              : status == 2
              ? 'Professional'
              : status == 3
              ? 'Rejected'
              : status == 4
              ? 'Resigned'
              : status == 5
              ? 'Applied'
              : 'Applied'
          }}
        </div>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Action" [width]="120" [sortable]="false">
      <ng-template ngx-datatable-cell-template>
        <div class="d-flex align-items-center">
          <div ngbDropdown container="body">
            <a
              ngbDropdownToggle
              href="javascript:void(0);"
              class="hide-arrow"
              id="dropdownBrowserState"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
            </a>
            <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="file-text" class="mr-50"></i> Details</a
              >
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="archive" class="mr-50"></i> Archive</a
              >
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="trash-2" class="mr-50"></i> Delete</a
              >
            </div>
          </div>

          <i data-feather="edit" class="text-primary cursor-pointer"></i>
        </div>
      </ng-template>
    </ngx-datatable-column>
  </ngx-datatable>
  <!--/ ngx-datatables responsive -->
  `,
    ts: `
  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }
  `
};
const snippetCodeMultilangual = {
    html: `
  <ngx-datatable
  #table
  class="bootstrap core-bootstrap"
  [columnMode]="ColumnMode.force"
  [headerHeight]="40"
  [rowHeight]="58"
  [footerHeight]="50"
  rowHeight="auto"
  [limit]="10"
  [rows]="rows"
  [scrollbarH]="true"
>
  <ngx-datatable-column name="{{ 'HEADER.NAME' | translate }}" prop="full_name" [width]="280">
    <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div *ngIf="row.avatar.length > 0; else customAvatar">
          <img
            class="rounded-circle mr-1"
            src="assets/images/portrait/small/{{ row.avatar }}"
            height="32"
            width="32"
            alt="datatable-avatar"
          />
        </div>
        <ng-template #customAvatar>
          <div
            class="avatar mr-1 ml-0"
            [ngClass]="{
              'bg-light-primary': row.status == '1',
              'bg-light-success': row.status == '2',
              'bg-light-danger': row.status == '3',
              'bg-light-warning': row.status == '4',
              'bg-light-info': row.status == '5'
            }"
          >
            <div class="avatar-content">{{ name | initials }}</div>
          </div>
        </ng-template>
        <div class="cell-line-height">
          <p class="font-medium-1 line-height-1 mb-0">{{ name }}</p>
          <span class="text-muted font-small-2"> {{ row.post }}</span>
        </div>
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column
    name="{{ 'HEADER.EMAIL' | translate }}"
    prop="email"
    [width]="250"
  ></ngx-datatable-column>
  <ngx-datatable-column name="{{ 'HEADER.AGE' | translate }}" prop="age" [width]="50"></ngx-datatable-column>
  <ngx-datatable-column name="{{ 'HEADER.STATUS' | translate }}" prop="status" [width]="120">
    <ng-template let-status="value" ngx-datatable-cell-template>
      <div
        class="badge badge-pill"
        [ngClass]="{
          'badge-light-primary': status == '1',
          'badge-light-success': status == '2',
          'badge-light-danger': status == '3',
          'badge-light-warning': status == '4',
          'badge-light-info': status == '5'
        }"
      >
        {{
          status == 1
            ? 'Current'
            : status == 2
            ? 'Professional'
            : status == 3
            ? 'Rejected'
            : status == 4
            ? 'Resigned'
            : status == 5
            ? 'Applied'
            : 'Applied'
        }}
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="{{ 'HEADER.ACTIONS' | translate }}" [width]="120" [sortable]="false">
    <ng-template ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div ngbDropdown container="body">
          <a
            ngbDropdownToggle
            href="javascript:void(0);"
            class="hide-arrow"
            id="dropdownBrowserState"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="file-text" class="mr-50"></i> Details</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="archive" class="mr-50"></i> Archive</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="trash-2" class="mr-50"></i> Delete</a
            >
          </div>
        </div>

        <i data-feather="edit" class="text-primary cursor-pointer"></i>
      </div>
    </ng-template>
  </ngx-datatable-column>
</ngx-datatable>
  `,
    ts: `
  constructor( private _coreTranslationService: CoreTranslationService) {
    this._coreTranslationService.translate(english, french, german, portuguese);
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }
  `
};


/***/ }),

/***/ 67084:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/de.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'de',
    data: {
        HEADER: {
            NAME: 'NAME',
            EMAIL: 'EMAIL',
            AGE: 'ALTER',
            STATUS: 'STATUS',
            ACTIONS: 'AKTIONEN'
        }
    }
};


/***/ }),

/***/ 12228:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/en.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'en',
    data: {
        HEADER: {
            NAME: 'NAME',
            EMAIL: 'EMAIL',
            AGE: 'AGE',
            STATUS: 'STATUS',
            ACTIONS: 'ACTIONS'
        }
    }
};


/***/ }),

/***/ 18383:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/fr.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'fr',
    data: {
        HEADER: {
            NAME: 'NOM',
            EMAIL: 'EMAIL',
            AGE: 'ÂGE',
            STATUS: 'STATUT',
            ACTIONS: 'ACTIONS'
        }
    }
};


/***/ }),

/***/ 49767:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/pt.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'pt',
    data: {
        HEADER: {
            NAME: 'NOME',
            EMAIL: 'O EMAIL',
            AGE: 'ERA',
            STATUS: 'STATUS',
            ACTIONS: 'AÇÕES'
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=default-src_app_main_tables_datatables_datatables_module_ts.js.map