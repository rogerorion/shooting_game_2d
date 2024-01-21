System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, macro, SystemEvent, _dec, _class, _crd, ccclass, property, Input, hero;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      macro = _cc.macro;
      SystemEvent = _cc.SystemEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68496Z2owFB3ajDZW9++n0A", "hero", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'macro', 'Node', 'SystemEvent']);

      ({
        ccclass,
        property
      } = _decorator);
      Input = {};

      _export("hero", hero = (_dec = ccclass('hero'), _dec(_class = class hero extends Component {
        onLoad() {
          this.node.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          this.node.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        }

        start() {}

        update(deltaTime) {
          //每帧调用
          if (Input[macro.KEY.left] == 1) {
            console.log("left");
          } else if (Input[macro.KEY.right] == 1) {
            console.log("right");
          } else if (Input[macro.KEY.up] == 1) {
            console.log("up");
          } else if (Input[macro.KEY.down] == 1) {
            console.log("down");
          }
        }

        onKeyDown(event) {
          Input[event.keyCode] = 1;
        }

        onKeyUp(event) {
          Input[event.keyCode] = 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=31f5c52951c6dd87991c69b072a2ee6df9c807c5.js.map