/**
 * This class creates a fixed position div in the browser to display messages or logs. 
 * If not in a browser environment, it logs messages to the console.
 * 
 * 该类在浏览器中创建一个固定位置的 div 来显示消息或日志。如果不在浏览器环境中，它会将消息记录到控制台。
 * 
 * @example
 * const ap = new Ap("blue", "yellow");
 * ap.push({ message: "Hello, world!" });
 * ap.push("This is a test message.");
 */
export default class Ap {
  /**
   * Pushes data to the div as a new paragraph or logs it to the console.
   * 
   * 将数据作为新段落推送到 div 或记录到控制台。
   * 
   * @param {any} data - The data to be displayed or logged. 要显示或记录的数据。
   */
  push: (data: any) => void;
  /**
   * Creates an instance of Ap.
   * 
   * 创建 Ap 的实例。
   * 
   * @param {string} [bgColor="black"] - The background color of the div. div 的背景颜色。
   * @param {string} [color="white"] - The text color of the div. div 的文字颜色。
   */
  constructor(bgColor: string = "black", color: string = "white") {
    const isBrowser = typeof document !== "undefined";

    switch (isBrowser) {
      case true: {
        const div = document.createElement("div");
        div.style.boxSizing = "border-box";
        div.style.position = "fixed";
        div.style.bottom = "0";
        div.style.right = "0";
        div.style.zIndex = "99999";
        div.style.backgroundColor = bgColor;
        div.style.color = color;
        div.style.fontSize = "1.5rem";
        div.style.padding = "1rem";
        div.style.borderRadius = "1rem";
        div.style.overflow = "auto";
        div.style.width = "100%";
        div.style.maxHeight = "25%";
        document.body.appendChild(div);
        this.push = (data: any) => {
          const dataString = JSON.stringify(data);
          const p = document.createElement("p");
          p.textContent = dataString;
          div.appendChild(p);
        };
        break;
      }
      case false: {
        this.push = (data: any) => {
          console.log(`%c${JSON.stringify(data)}`, `background-color: ${bgColor}; color: ${color}; padding: 0.5rem; border-radius: 0.5rem;`);
        };
        break;
      }
    }
  }
}