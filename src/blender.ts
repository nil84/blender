
export type JsContext = {
    openBlFile(blFile: string);
    evalJs(jsStr:string);
    exec(fun:Function);
}

export class Blender {

    constructor(options: {
        blender: string
    }) {

    }

    /**运行内置start.py文件， 将blender对象暴露给js环境*/
    private _init() {

    }

    /**可以传入一个pyhton文件完成初始化设置 */
    public init(pyFile?: string) {
        this._init();
        return this;
    }

    public then(fun: (ctx: JsContext) => void) {
        return this;
    }

    public appendContext(pyFile:string){

    }

    public appendPath(path:string){

    }

    private setContext(){

    }

    public evalPy(str:string){
        return this;
    }

    /**最终形成一个python脚本传入blender运行 */
    public run() {

    }
}
