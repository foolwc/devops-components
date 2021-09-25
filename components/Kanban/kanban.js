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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useEffect, useState } from "react";
// @ts-ignore
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { switchIssuePriority, getKanbanTitle, switchIssueType } from "./util";
/**
 * Moves an item from one list to another list.
 * source: 源数组
 * destination: 目标数组
 * droppableSource: 源拖拽对象
 * droppableDestination: 拖拽处的上面对象
 */
var move = function (source, destination, droppableSource, droppableDestination) {
    var sourceClone = Array.from(source);
    var destClone = Array.from(destination);
    var removed = sourceClone.splice(droppableSource.index, 1)[0];
    destClone.splice(droppableDestination.index, 0, removed);
    var result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
};
var Kanban = function (props) {
    var _a = props.records, records = _a === void 0 ? [] : _a, onIssueClick = props.onIssueClick, onIssueDragEnd = props.onIssueDragEnd, height = props.height;
    var _b = useState([[], [], [], []]), state = _b[0], setState = _b[1];
    useEffect(function () {
        var status1 = records.filter(function (item) { return item.status === 'notStarted'; });
        var status2 = records.filter(function (item) { return item.status === 'dev'; });
        var status3 = records.filter(function (item) { return item.status === 'test'; });
        var status4 = records.filter(function (item) { return item.status === 'done'; });
        var backlog = [status1, status2, status3, status4];
        setState(backlog);
    }, [records]);
    function onDragEnd(result) {
        var source = result.source, destination = result.destination;
        // dropped outside the list
        if (!destination) {
            return;
        }
        var sInd = +source.droppableId;
        var dInd = +destination.droppableId;
        var issue = state[sInd][source.index];
        var targetStatus = dInd;
        if (onIssueDragEnd) {
            onIssueDragEnd(issue, targetStatus);
        }
        if (sInd === dInd) {
            return;
        }
        else {
            var result_1 = move(state[sInd], state[dInd], source, destination);
            var newState = __spreadArray([], state, true);
            newState[sInd] = result_1[sInd];
            newState[dInd] = result_1[dInd];
            setState(newState);
        }
    }
    return (React.createElement("div", null,
        React.createElement("div", { className: 'kanban-wrapper', style: { height: height } },
            React.createElement("div", { className: 'column-container' },
                React.createElement("div", { className: 'column-wrapper' },
                    React.createElement(DragDropContext, { onDragEnd: onDragEnd }, state.map(function (el, ind) { return (React.createElement(Droppable, { key: ind, droppableId: "" + ind }, function (provided, snapshot) { return (React.createElement("div", __assign({ className: 'column', ref: provided.innerRef }, provided.droppableProps),
                        snapshot.isDraggingOver &&
                            React.createElement("div", { className: 'mask' },
                                React.createElement("span", null, getKanbanTitle(ind))),
                        React.createElement("div", { className: 'column-header' },
                            React.createElement("div", { className: "title" }, getKanbanTitle(ind)),
                            React.createElement("div", { className: 'num-tag' }, el.length)),
                        React.createElement("div", { className: 'items' }, el.map(function (item, index) { return (React.createElement(Draggable, { key: "" + item.id, draggableId: "" + item.id, index: index }, function (provided, snapshot) { return (React.createElement("div", __assign({ className: 'card', ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
                            React.createElement("div", { className: 'header', onClick: function () {
                                    onIssueClick && onIssueClick(item);
                                } },
                                React.createElement("div", { className: 'title' }, item.title),
                                React.createElement("div", { className: "label-section" }, item.deadline &&
                                    React.createElement("span", { className: 'date-label' },
                                        item.deadline,
                                        "\u622A\u6B62")),
                                React.createElement("div", { className: 'footer' },
                                    React.createElement("div", { className: 'left' },
                                        switchIssueType(item.issueType),
                                        React.createElement("span", { className: 'id' },
                                            "#",
                                            item.id)),
                                    React.createElement("div", { className: 'right' },
                                        React.createElement("div", { className: 'priority' }, switchIssuePriority(item.priority))))))); })); })),
                        provided.placeholder)); })); })))))));
};
Kanban.defaultProps = {
    height: '600px',
};
export default Kanban;
