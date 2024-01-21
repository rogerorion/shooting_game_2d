System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, macro, _dec, _class, _crd, ccclass, property, Inputs, hero;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      input = _cc.input;
      Input = _cc.Input;
      macro = _cc.macro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68496Z2owFB3ajDZW9++n0A", "hero", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'input', 'Input', 'macro', 'Node', 'SystemEvent']);

      ({
        ccclass,
        property
      } = _decorator);
      Inputs = {};

      _export("hero", hero = (_dec = ccclass('hero'), _dec(_class = class hero extends Component {
        onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        start() {}

        update(deltaTime) {
          //每帧调用
          if (Inputs[macro.KEY.left] == 1) {
            console.log("left");
          } else if (Inputs[macro.KEY.right] == 1) {
            console.log("right");
          } else if (Inputs[macro.KEY.up] == 1) {
            console.log("up");
          } else if (Inputs[macro.KEY.down] == 1) {
            console.log("down");
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
//# sourceMappingURL=9c699d0d9c612be58cffe20e3402ac1b4cc5174e.js.map