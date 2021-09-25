# DevOps Components for React

[![npm](https://img.shields.io/npm/v/devops-components.svg)](https://www.npmjs.com/package/devops-components)
[![npm](https://img.shields.io/npm/dt/devops-components.svg)](https://www.npmjs.com/package/devops-components)
[![npm](https://img.shields.io/npm/l/devops-components.svg)](https://www.npmjs.com/package/devops-components)
# 1. Install

```sh
npm install --save devops-components
```
# 2. Usage

## 2.1 Kanban

Online demo see [https://foolwc.github.io/devops-components/](https://foolwc.github.io/devops-components/).

```jsx
import React from 'react';
import { Kanban } from 'devops-components';

import "devops-components/build/index.css";

const records = [
    {
        id: 1,
        title: "test",
        status: "done",
        priority: "emergency",
        issueType: "shishi",
        deadline: "2021年9月10日"
    },
    {
        id: 2,
        title: "[示例任务]-增加邮件邀请成员弹窗并完成邀请成员交互功能",
        status: "notStarted",
        priority: "high",
        issueType: "renwu",
        deadline: "2021年9月10日"
    },
    {
        id: 3,
        title: "[示例需求]-通过访问邀请链接可注册成为团队成员",
        status: "notStarted",
        priority: "middle",
        issueType: "shishi",
        deadline: "2021年9月10日"
    },
    {
        id: 4,
        title: "需求2",
        status: "test",
        priority: "emergency",
        issueType: "bug",
        deadline: "2021年9月10日"
    },
    {
        id: 5,
        title: "需求2",
        status: "dev",
        priority: "low",
        issueType: "xuqiu",
        deadline: "2021年9月10日"
    },
    {
        id: 6,
        title: "需求2",
        status: "dev",
        priority: "high",
        issueType: "bug",
        deadline: "2021年9月10日"
    },
    {
        id: 7,
        title: "需求2",
        status: "notStarted",
        priority: "middle",
        issueType: "xuqiu",
        deadline: "2021年9月10日"
    }
];
export default function App() {
    return (
        <div className="App">
            <Kanban records={records} />
        </div>
    );
}
```

Or you can see the code on  [codesandbox](https://codesandbox.io/s/kanban-wob5z?file=/src/App.js:23-1244).

## 2.2. Kanban props
- **`records`** (required, array)

- **`height`** (optional, string)

- **`onIssueDragEnd`** (optional, func)

- **`onIssueClick`** (optional, func)

# 3. Screenshot

# 4. LICENSE

MIT @[foolwc](https://github.com/foolwc)