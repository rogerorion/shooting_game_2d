System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, input, Input, KeyCode, RigidBody2D, v2, Vec3, Collider2D, Contact2DType, _dec, _class, _crd, ccclass, property, Inputs, hero;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      RigidBody2D = _cc.RigidBody2D;
      v2 = _cc.v2;
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68496Z2owFB3ajDZW9++n0A", "hero", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'EventKeyboard', 'input', 'Input', 'KeyCode', 'RigidBody2D', 'v2', 'Vec3', 'Collider2D', 'Contact2DType', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);
      Inputs = {};

      _export("hero", hero = (_dec = ccclass('hero'), _dec(_class = class hero extends Component {
        constructor(...args) {
          super(...args);
          this._speed = 0;
          this._curPosition = void 0;
          this._deltaPos = void 0;
          this._state = 0;
          this._animation = void 0;
          this._lv = void 0;
        }

        onLoad() {
          console.log("onLoad");
          this._speed = 5;
          this._curPosition = this.node.position;
          this._deltaPos = new Vec3(0, 0, 0);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this); //this._state

          this._animation = this.node.getComponentInChildren(Animation);
        }

        onSetState(state) {
          if (state == this._state) return;
          this._state = state;
          var animationName = 'idle';
          if (this._state == 1) animationName = 'run';

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

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          console.log('onBeginContact');
        }

        onEndContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体结束接触时被调用一次
          console.log('onEndContact');
        }

        onPreSolve(selfCollider, otherCollider, contact) {
          // 每次将要处理碰撞体接触逻辑时被调用
          console.log('onPreSolve');
        }

        onPostSolve(selfCollider, otherCollider, contact) {
          // 每次处理完碰撞体接触逻辑时被调用
          console.log('onPostSolve');
        }

        update(deltaTime) {
          //每帧调用
          var state = 0;
          this._lv = this.node.getComponent(RigidBody2D).linearVelocity; //this._curPosition = this.node.position;

          if (Inputs[KeyCode.KEY_D] == 1) {
            console.log("left"); // this._deltaPos.x = this._speed * deltaTime;
            // Vec3.add(this._curPosition, this._curPosition, this._deltaPos);
            // this.node.setPosition(this._curPosition);

            this._lv.y = 0;
            this._lv.x = this._speed;
            state = 1;
          } else if (Inputs[KeyCode.KEY_A] == 1) {
            console.log("right"); // this._deltaPos.x = -this._speed * deltaTime;
            // Vec3.add(this._curPosition, this._curPosition, this._deltaPos);
            // this.node.setPosition(this._curPosition);

            this._lv.y = 0;
            this._lv.x = 0 - this._speed;
            state = 1;
          } else if (Inputs[KeyCode.KEY_W] == 1) {
            console.log("up"); // this._deltaPos.y = this._speed * deltaTime;
            // Vec3.add(this._curPosition, this._curPosition, this._deltaPos);
            // this.node.setPosition(this._curPosition);

            this._lv.x = 0;
            this._lv.y = this._speed;
            state = 1;
          } else if (Inputs[KeyCode.KEY_S] == 1) {
            console.log("down"); // this._deltaPos.y = -this._speed * deltaTime;
            // Vec3.add(this._curPosition, this._curPosition, this._deltaPos);
            // this.node.setPosition(this._curPosition);

            this._lv.x = 0;
            this._lv.y = 0 - this._speed;
            state = 1;
          } else {
            this._lv = v2(0, 0);
          }

          this.node.getComponent(RigidBody2D).linearVelocity = this._lv;
          this.onSetState(state);
        }

        onKeyDown(event) {
          Inputs[event.keyCode] = 1;
        }

        onKeyUp(event) {
          Inputs[event.keyCode] = 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e9c4529e9561c7279b336ec6b56930ecc9e0793.js.map