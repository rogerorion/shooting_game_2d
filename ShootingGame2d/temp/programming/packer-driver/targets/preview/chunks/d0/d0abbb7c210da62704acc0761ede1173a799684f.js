System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PhysicsSystem2D, v2, TiledMap, RigidBody2D, BoxCollider2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, game;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      v2 = _cc.v2;
      TiledMap = _cc.TiledMap;
      RigidBody2D = _cc.RigidBody2D;
      BoxCollider2D = _cc.BoxCollider2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e7bdaUAzhMaodHy/UtUA9h", "game", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'PhysicsSystem2D', 'math', 'v2', 'TiledMap', 'RigidBody2D', 'ERigidBody2DType', 'BoxCollider2D', 'EPhysics2DDrawFlags', 'Collider2D', 'Contact2DType', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("game", game = (_dec = ccclass('game'), _dec2 = property(TiledMap), _dec(_class = (_class2 = class game extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tiledMap", _descriptor, this);
        }

        onLoad() {
          PhysicsSystem2D.instance.enable = true; //3.8默认开启

          PhysicsSystem2D.instance.gravity = v2(0, 0);
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb; //打开了调试模式
        }

        start() {
          var layer = this.tiledMap.getLayer('wall');
          var layerSize = layer.getLayerSize();
          var tiledCellSize = this.tiledMap.getTileSize();

          for (var i = 0; i < layerSize.width; i++) {
            for (var j = 0; j < layerSize.height; j++) {
              var tiled = layer.getTiledTileAt(i, j, true);

              if (tiled.grid != 0) {
                var body = tiled.node.addComponent(RigidBody2D); //body.type = ERigidBody2DType.Static;

                body.group = 1;

                var _collider = tiled.node.addComponent(BoxCollider2D);

                _collider.offset = v2(tiledCellSize.width / 2, tiledCellSize.height / 2);
                _collider.size = tiledCellSize;
                _collider.group = 1;

                _collider.apply();
              }
            }
          } // 注册单个碰撞体的回调函数


          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          console.log('onBeginContact -- selfCollider.group = %d', selfCollider.group);
          console.log('onBeginContact -- otherCollider.group = %d', otherCollider.group);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tiledMap", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0abbb7c210da62704acc0761ede1173a799684f.js.map