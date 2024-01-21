System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SystemEvent, _dec, _class, _crd, ccclass, property, hero;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SystemEvent = _cc.SystemEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68496Z2owFB3ajDZW9++n0A", "hero", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SystemEvent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("hero", hero = (_dec = ccclass('hero'), _dec(_class = class hero extends Component {
        onLoad() {
          this.node.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        }

        start() {}

        update(deltaTime) {//每帧调用
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f721e601432ac7eecb559d221d0f37398897e8ca.js.map