"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.useDuplicateSchedule = void 0;
var services_1 = require("@/services");
var react_query_1 = require("@tanstack/react-query");
exports.useDuplicateSchedule = function () {
    var queryClient = react_query_1.useQueryClient();
    return react_query_1.useMutation({
        mutationFn: function (previousSchedule) {
            return services_1.submitSchedule(previousSchedule);
        },
        onSuccess: function (res, previousSchedule) {
            queryClient.setQueryData(["ScheduleList"], function (scheduleList) {
                return __spreadArrays(scheduleList, [
                    __assign(__assign({}, previousSchedule), { id: res.data.scheduleId }),
                ]);
            });
        }
    });
};
