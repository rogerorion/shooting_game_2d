import { _decorator, Component, director, Node, PhysicsSystem2D, math, v2, TiledMap, RigidBody2D, ERigidBody2DType, BoxCollider2D, EPhysics2DDrawFlags
,Collider2D, Contact2DType, IPhysics2DContact} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('game')
export class game extends Component {
    @property(TiledMap)
    public tiledMap:TiledMap = null;

    onLoad(): void {
        PhysicsSystem2D.instance.enable = true; //3.8默认开启
        PhysicsSystem2D.instance.gravity = v2(0, 0);
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb  //打开了调试模式
    }

    start() {
        let layer = this.tiledMap.getLayer('wall');
        let layerSize = layer.getLayerSize();
        let tiledCellSize = this.tiledMap.getTileSize();

        for (let i = 0; i < layerSize.width; i++)
        {
            for (let j = 0; j < layerSize.height; j++)
            {
                let tiled = layer.getTiledTileAt(i, j, true);
                if (tiled.grid != 0)
                {
                    let body = tiled.node.addComponent(RigidBody2D);
                    body.type = ERigidBody2DType.Static;
                    body.group = 2;
                    body.enabledContactListener = true;

                    let collider = tiled.node.addComponent(BoxCollider2D);
                    collider.offset = v2(tiledCellSize.width/2, tiledCellSize.height/2);
                    collider.size = tiledCellSize;
                    collider.group = 2;
                    collider.apply();
                    collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, tiled.node);
                }
            }
        }

        // 注册单个碰撞体的回调函数
        // let collider = this.getComponent(Collider2D);
        // if (collider) {
        //     collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        //     // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        //     // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
        //     // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        // }
    }

    onPreSolve(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null)
    {
        console.log('wall onPreSolve -- selfCollider.group = %d', selfCollider.group);
        console.log('wall onPreSolve -- otherCollider.group = %d', otherCollider.group);
    }

    update(deltaTime: number) {
        
    }
}


