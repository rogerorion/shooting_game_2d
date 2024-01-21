import { _decorator, Animation, Component, EventKeyboard, input, Input, KeyCode, RigidBody2D, v2, Vec3,Collider2D, Contact2DType, IPhysics2DContact} from 'cc';
const { ccclass, property } = _decorator;
const Inputs = {}

@ccclass('hero')
export class hero extends Component {
    private _speed:number = 0;
    private _curPosition: Vec3;
    private _deltaPos: Vec3;
    private _state:number = 0;
    private _animation;
    private _lv;

    onLoad() {        
        console.log("onLoad");
        this._speed = 5;
        this._curPosition = this.node.position;
        this._deltaPos = new Vec3(0, 0, 0);
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);

        //this._state
        this._animation = this.node.getComponentInChildren(Animation);
    }

    onSetState(state)
    {
        if (state == this._state)
            return;
        this._state = state;
        var animationName = 'idle';
        if (this._state == 1)
            animationName = 'run';

        this._animation.play(animationName);
    }

    start() {                       
        // 注册单个碰撞体的回调函数
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次
        console.log('onBeginContact -- selfCollider.group = %d', selfCollider.group);
        console.log('onBeginContact -- otherCollider.group = %d', otherCollider.group);
    }
    onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体结束接触时被调用一次
        console.log('onEndContact');
    }
    onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 每次将要处理碰撞体接触逻辑时被调用
        console.log('onPreSolve');
    }
    onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 每次处理完碰撞体接触逻辑时被调用
        console.log('onPostSolve');
    }

    update(deltaTime: number) {     //每帧调用
        var state = 0;
        this._lv = this.node.getComponent(RigidBody2D).linearVelocity;
        //this._curPosition = this.node.position;
        if (Inputs[KeyCode.KEY_D] == 1)
        {
            console.log("left");
            // this._deltaPos.x = this._speed * deltaTime;
            // Vec3.add(this._curPosition, this._curPosition, this._deltaPos);
            // this.node.setPosition(this._curPosition);
            this._lv.y = 0;
            this._lv.x = this._speed;
            state = 1;
        }
        else if(Inputs[KeyCode.KEY_A] == 1)
        {
            console.log("right");
            // this._deltaPos.x = -this._speed * deltaTime;
            // Vec3.add(this._curPosition, this._curPosition, this._deltaPos);
            // this.node.setPosition(this._curPosition);

            this._lv.y = 0;
            this._lv.x = 0 - this._speed;
            state = 1;
        }
        else if(Inputs[KeyCode.KEY_W] == 1)
        {
            console.log("up");
            // this._deltaPos.y = this._speed * deltaTime;
            // Vec3.add(this._curPosition, this._curPosition, this._deltaPos);
            // this.node.setPosition(this._curPosition);

            this._lv.x = 0;
            this._lv.y = this._speed;
            state = 1;
        }
        else if(Inputs[KeyCode.KEY_S] == 1)
        {
            console.log("down");
            // this._deltaPos.y = -this._speed * deltaTime;
            // Vec3.add(this._curPosition, this._curPosition, this._deltaPos);
            // this.node.setPosition(this._curPosition);

            this._lv.x = 0;
            this._lv.y = 0 - this._speed;
            state = 1;
        }
        else
        {
            this._lv = v2(0, 0);
        }

        this.node.getComponent(RigidBody2D).linearVelocity = this._lv;

        this.onSetState(state);
    }

    onKeyDown(event: EventKeyboard) {
        Inputs[event.keyCode] = 1;
    }

    onKeyUp(event: EventKeyboard)
    {
        Inputs[event.keyCode] = 0;
    }
}


