System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, KeyCode, Vec3, _dec, _class, _crd, ccclass, property, Inputs, speed, hero;

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
      speed = 100;

      _export("hero", hero = (_dec = ccclass('hero'), _dec(_class = class hero extends Component {
        onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        start() {}

        update(deltaTime) {
          //每帧调用
          if (Inputs[KeyCode.KEY_D] == 1) {
            console.log("left");
            this.node.position.add(new Vec3(-speed, 0, 0));
          } else if (Inputs[KeyCode.KEY_A] == 1) {
            console.log("right");
            this.node.position.add(new Vec3(speed, 0, 0));
          } else if (Inputs[KeyCode.KEY_W] == 1) {
            console.log("up");
            this.node.position.add(new Vec3(0, speed, 0));
          } else if (Inputs[KeyCode.KEY_S] == 1) {
            console.log("down");
            this.node.position.add(new Vec3(0, -speed, 0));
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
//# sourceMappingURL=15d41f6a49208be5ff20794eaaac2eae5c1b2a55.js.map