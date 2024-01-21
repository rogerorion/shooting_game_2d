System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, input, Input, KeyCode, Vec3, _dec, _class, _crd, ccclass, property, Inputs, hero;

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
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68496Z2owFB3ajDZW9++n0A", "hero", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'EventKeyboard', 'input', 'Input', 'KeyCode', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      Inputs = {};

      _export("hero", hero = (_dec = ccclass('hero'), _dec(_class = class hero extends Component {
        constructor() {
          super(...arguments);
          this._speed = 0;
          this._curPosition = void 0;
          this._deltaPos = void 0;
          this._state = 0;
          this._animation = void 0;
        }

        onLoad() {
          console.log("onLoad");
          this._speed = 20;
          this._curPosition = this.node.position;
          this._deltaPos = new Vec3(0, 0, 0);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this); //this._state

          this._animation = this.node.getComponentInChildren(Animation);
        }

        onSetState() {}

        start() {}

        update(deltaTime) {
          //每帧调用
          if (Inputs[KeyCode.KEY_D] == 1) {
            console.log("left");
            this._curPosition = this.node.position;
            this._deltaPos.x = this._speed * deltaTime;
            Vec3.add(this._curPosition, this._curPosition, this._deltaPos);
            this.node.setPosition(this._curPosition);
          } else if (Inputs[KeyCode.KEY_A] == 1) {
            console.log("right");
            this._curPosition = this.node.position;
            this._deltaPos.x = -this._speed * deltaTime;
            Vec3.add(this._curPosition, this._curPosition, this._deltaPos);
            this.node.setPosition(this._curPosition);
          } else if (Inputs[KeyCode.KEY_W] == 1) {
            console.log("up");
            this._curPosition = this.node.position;
            this._deltaPos.y = this._speed * deltaTime;
            Vec3.add(this._curPosition, this._curPosition, this._deltaPos);
            this.node.setPosition(this._curPosition);
          } else if (Inputs[KeyCode.KEY_S] == 1) {
            console.log("down");
            this._curPosition = this.node.position;
            this._deltaPos.y = -this._speed * deltaTime;
            Vec3.add(this._curPosition, this._curPosition, this._deltaPos);
            this.node.setPosition(this._curPosition);
          }
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
//# sourceMappingURL=5433aa0ccea00dfefcc650c5e37018ee4388f883.js.map