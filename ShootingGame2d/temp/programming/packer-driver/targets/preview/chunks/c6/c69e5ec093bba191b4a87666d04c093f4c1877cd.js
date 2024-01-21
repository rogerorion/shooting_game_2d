System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PhysicsSystem2D, v2, _dec, _class, _crd, ccclass, property, game;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      v2 = _cc.v2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e7bdaUAzhMaodHy/UtUA9h", "game", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'PhysicsSystem2D', 'math', 'v2', 'TiledMap']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("game", game = (_dec = ccclass('game'), _dec(_class = class game extends Component {
        constructor() {
          super(...arguments);
          this.tiledMap = void 0;
        }

        onLoad() {
          PhysicsSystem2D.instance.enable = true; //3.8默认开启

          PhysicsSystem2D.instance.gravity = v2(0, 0);
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c69e5ec093bba191b4a87666d04c093f4c1877cd.js.map