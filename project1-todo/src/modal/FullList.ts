import ListItem from "./ListItem"

interface List {
    list:ListItem[],
    load():void,
    save():void,
    clearList():void,
    addItem(itemObj:ListItem):void,
    removeItem(id:string):void,
}

export default class FullList implements List{
    // 
    static instance:FullList=new FullList();

    // Singleton: Only one instance of FullList can be created so we have used private constructor
    private constructor(private _list:ListItem[] = []){}

    get list():ListItem[]{
        return this._list;
    }

    load(): void {
        const storedList: string|null=localStorage.getItem("myList");
        if(typeof storedList !== "string") return;
        const parsedList:{
            _id:string,
            _title:string,
            _checked:boolean,
        }[]=JSON.parse(storedList);
        parsedList.forEach((itemObj)=>{
            const newListItem=new ListItem(
                itemObj._id,
                itemObj._title,
                itemObj._checked
            );
            FullList.instance.addItem(newListItem);
        });
    }

    save():void{
        localStorage.setItem("myList",JSON.stringify(this._list));
    }

    clearList(): void {
        this._list=[];
        this.save();
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }
    removeItem(id: string): void {
        this._list=this._list.filter((item)=>item.id!==id);
        this.save();
    }
}