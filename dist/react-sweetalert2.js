var ReactSweetAlert2 = (function (exports, React, Swal, ReactDOM) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var Swal__default = /*#__PURE__*/_interopDefaultLegacy(Swal);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    var useForceRerendering = function () {
        var _a = React.useState(false), rerender = _a[0], setRerender = _a[1];
        return function () { return setRerender(!rerender); };
    };

    var withSwal = function (Component) {
        return React__default["default"].forwardRef(function (props, ref) { return (React__default["default"].createElement(Component, __assign({ ref: ref, swal: Swal__default["default"] }, props))); });
    };
    function SweetAlert2(props) {
        var forceRerendering = useForceRerendering();
        React.useEffect(function () {
            if (props.show) {
                mountSwal();
                if (props.showLoading) {
                    Swal__default["default"].showLoading();
                }
            }
            else {
                Swal__default["default"].close();
            }
        }, [props.show]);
        React.useEffect(function () {
            if (props.show && props.showLoading) {
                Swal__default["default"].showLoading();
            }
            else {
                Swal__default["default"].hideLoading();
            }
        }, [props.showLoading]);
        function mountSwal() {
            props.show; props.showLoading; var onConfirm = props.onConfirm, willOpen = props.willOpen, onResolve = props.onResolve, onError = props.onError; props.children; var rest = __rest(props, ["show", "showLoading", "onConfirm", "willOpen", "onResolve", "onError", "children"]);
            rest['willOpen'] = function (el) {
                forceRerendering();
                willOpen && willOpen(el);
            };
            Swal__default["default"].fire(rest).then(function (result) {
                if (result.isConfirmed)
                    onConfirm && onConfirm(result);
                onResolve && onResolve(result);
            }).catch(function (error) { return onError && onError(error); });
        }
        var swalContainer = Swal__default["default"].getHtmlContainer();
        if (swalContainer && !props.html) {
            swalContainer.style.display = props.children ? 'block' : 'none';
            return ReactDOM__default["default"].createPortal(props.children, swalContainer);
        }
        return React__default["default"].createElement(React__default["default"].Fragment, null);
    }

    exports.SweetAlert2 = SweetAlert2;
    exports.withSwal = withSwal;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, React, Swal, ReactDOM);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtc3dlZXRhbGVydDIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
