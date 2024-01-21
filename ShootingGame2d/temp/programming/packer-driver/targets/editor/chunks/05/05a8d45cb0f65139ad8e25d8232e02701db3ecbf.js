System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, KeyCode, Vec3, _dec, _class, _crd, ccclass, property, Inputs, hero;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68496Z2owFB3ajDZW9++n0A", "hero", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'input', 'Input', 'KeyCode', 'Vec3']);

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
        }

        onLoad() {
          console.log("onLoad");
          this._speed = 100;
          this._curPosition = this.node.position;
          this._deltaPos = new Vec3(0, 0, 0);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        start() {}

        update(deltaTime) {
          //每帧调用
          if (Inputs[KeyCode.KEY_D] == 1) {
            console.log("left");
            this._curPosition = this.node.position;
            this._deltaPos.x = this._speed * deltaTime;
            Vec3.add(this._curPosition, this._curPosition, this._deltaPos); // 应用这个位移

            this.node.setPosition(this._curPosition);
          } else if (Inputs[KeyCode.KEY_A] == 1) {
            console.log("right");
            this.node.position.add(new Vec3(this._speed * deltaTime, 0, 0));
          } else if (Inputs[KeyCode.KEY_W] == 1) {
            console.log("up");
            this.node.position.add(new Vec3(0, this._speed * deltaTime, 0));
          } else if (Inputs[KeyCode.KEY_S] == 1) {
            console.log("down");
            this.node.position.add(new Vec3(0, -this._speed * deltaTime, 0));
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
//# sourceMappingURL=05a8d45cb0f65139ad8e25d8232e02701db3ecbf.js.map