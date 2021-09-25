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
const move = (source: Iterable<any> | ArrayLike<any>, destination: Iterable<any> | ArrayLike<any>, droppableSource: { index: number; droppableId: string | number; }, droppableDestination: { index: number; droppableId: string | number; }) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result: any = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

export type Status = 'notStarted' | 'dev' | 'test' | 'done';

export type Priority = 'emergency' | 'high' | 'middle' | 'low';

export type IssueType = 'shishi' | 'xuqiu' | 'renwu' | 'bug';

export interface Issue {
    id: number,
    title: string,
    status: Status,
    priority: Priority,
    issueType: IssueType,
    deadline?: string,
}

export interface KanbanProps {
    onIssueClick?: (issue: Issue) => void;
    records?: Issue[];
    onIssueDragEnd?: (issue: Issue, targetStatus: number) => void;
    height?: string;
}


const Kanban: React.FC<KanbanProps> = (props) => {
    const {records = [], onIssueClick, onIssueDragEnd, height} = props;

    const [state, setState] = useState<any[]>([[], [], [], []]);

    useEffect(() => {
        const status1 = records.filter(item => item.status === 'notStarted');
        const status2 = records.filter(item => item.status === 'dev');
        const status3 = records.filter(item => item.status === 'test');
        const status4 = records.filter(item => item.status === 'done');
        const backlog = [status1, status2, status3, status4];
        setState(backlog);

    }, [records]);

    function onDragEnd(result: any) {
        const {source, destination} = result;
        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        const issue = state[sInd][source.index];
        const targetStatus = dInd;
        if (onIssueDragEnd) {
            onIssueDragEnd(issue, targetStatus);
        }

        if (sInd === dInd) {
            return;
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];
            setState(newState);
        }
    }

    return (
        <div>
            <div className={'kanban-wrapper'} style={{height: height}}>
                <div className={'column-container'}>
                    <div className={'column-wrapper'}>
                        <DragDropContext onDragEnd={onDragEnd}>
                            {state.map((el, ind) => (
                                <Droppable key={ind} droppableId={`${ind}`}>
                                    {(provided: any, snapshot: any) => (
                                        <div
                                            className={'column'}
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            {
                                                snapshot.isDraggingOver &&
                                                <div className={'mask'}>
                                                    <span>{getKanbanTitle(ind)}</span>
                                                </div>
                                            }
                                            <div className={'column-header'}>
                                                <div className="title">{getKanbanTitle(ind)}</div>
                                                <div className={'num-tag'}>{el.length}</div>
                                            </div>
                                            <div className={'items'}>
                                                {el.map((item: Issue, index: number) => (
                                                    <Draggable
                                                        key={`${item.id}`}
                                                        draggableId={`${item.id}`}
                                                        index={index}
                                                    >
                                                        {(provided: any, snapshot: any) => (
                                                            <div
                                                                className={'card'}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <div className={'header'} onClick={() => {
                                                                    onIssueClick && onIssueClick(item)
                                                                }}>
                                                                    <div className={'title'}>{item.title}</div>
                                                                    {/* 预留做标签的section*/}
                                                                    <div className="label-section">
                                                                        {item.deadline &&
                                                                        <span
                                                                            className={'date-label'}>{item.deadline}截止</span>}
                                                                    </div>
                                                                    <div className={'footer'}>
                                                                        <div className={'left'}>
                                                                            {switchIssueType(item.issueType)}
                                                                            <span className={'id'}>#{item.id}</span>
                                                                        </div>
                                                                        <div className={'right'}>
                                                                            <div
                                                                                className={'priority'}>{switchIssuePriority(item.priority)}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                            </div>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            ))}
                        </DragDropContext>
                    </div>
                </div>
            </div>
        </div>
    );
}
Kanban.defaultProps = {
    height: '600px',
}
export default Kanban
