# Ap Class

This repository contains the `Ap` class, which creates a fixed position div in the browser to display messages or logs. If not in a browser environment, it logs messages to the console.

该仓库包含 `Ap` 类，该类在浏览器中创建一个固定位置的 div 来显示消息或日志。如果不在浏览器环境中，它会将消息记录到控制台。

## Usage 用法
Here is an example of how to use the Ap class:

以下是如何使用 Ap 类的示例：
  
```javascript
import Ap from 'jsr:@intpfx/ap';

const ap = new Ap("blue", "yellow");
ap.push({ message: "Hello, world!" });
ap.push("This is a test message.");
```

OR

或者

```bash
npm install @intpfx/ap
```

```javascript
import Ap from '@intpfx/ap';

const ap = new Ap("blue", "yellow");
ap.push({ message: "Hello, world!" });
ap.push("This is a test message.");
```

## Contributing 贡献
If you would like to contribute to this project, please follow these steps:

如果您想为此项目做出贡献，请按照以下步骤操作：

1. Fork the repository 分叉仓库
2. Create a new branch 创建一个新分支
3. Make your changes and commit them 进行更改并提交
4. Push your changes to your fork 将更改推送到您的分叉
5. Create a pull request 创建一个拉取请求

## License 许可证
This project is licensed under the MIT License. See the LICENSE file for details.

此项目使用 MIT 许可证。有关详细信息，请参阅 LICENSE 文件