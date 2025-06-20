/**
 * 自定义积木示例
 */
//% color=#0fbc11 icon="⚡" block="我的积木"
namespace MyBlocks {
    /**
     * 打印一句话到屏幕
     */
    //% block
    export function sayHello(): void {
        basic.showString("Hello!")
    }
}
