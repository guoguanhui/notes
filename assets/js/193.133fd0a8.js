(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{748:function(t,r,s){"use strict";s.r(r);var e=s(14),o=Object(e.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"总览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总览"}},[t._v("#")]),t._v(" 总览")]),t._v(" "),s("p",[t._v("在程序开发中，经常会遇到这种情况：**某个方法要实现的算法需要多个步骤，但其中有一些步骤是固定不变的，而另一些步骤则是不固定的。**为了提高代码的可扩展性和可维护性，模板方法模式在这种场景下就派上了用场。")]),t._v(" "),s("p",[t._v("在模板方法模式中，一个算法可以分为多个步骤，"),s("strong",[t._v("这些步骤的执行次序在一个被称为“模板方法”的方法中定义")]),t._v("，而算法的每个步骤都对应着一个方法，这些方法被称为“基本方法”。模板方法按照它定义的顺序依次调用多个基本方法，从而实现整个算法流程。")]),t._v(" "),s("p",[s("strong",[t._v("在模板方法模式中，会将模板方法的实现以及那些固定不变的基本方法的实现放在父类中，而那些不固定的基本方法在父类中只是抽象方法，其真正的实现代码会被延迟到子类中完成")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203281003410.png",alt:"img"}})]),t._v(" "),s("p",[t._v("template()方法是模板方法，"),s("strong",[t._v("operation3()是固定不变的")]),t._v("基本方法，而operation1、operation2 、operation4 都是"),s("strong",[t._v("不固定的基本方法")]),t._v("， 所以在AbstractClass 中都定义为抽象方法， 而ConcreteClass1 和ConcreteClass2这两个子类需要实现这些方法。")]),t._v(" "),s("p",[t._v("通过上面的描述可知，模板方法模式可以将模板方法以及固定不变的基本方法统一封装到父类中，而将变化的部分封装到子类中实现，这样就"),s("strong",[t._v("由父类控制整个算法的流程，而子类实现算法的某些细节，实现了这两方面的解耦")]),t._v("。当需要修改算法的行为时，开发人员可以通过添加子类的方式实现，这"),s("strong",[t._v("符合“开放-封闭”原则")]),t._v("。")]),t._v(" "),s("p",[t._v("模板方法模式不仅可以复用已有的代码，还可以充分利用了面向对象的多态性，系统可以在运行时选择一种具体子类实现完整的算法，这就提高系统的灵活性和可扩展性。")]),t._v(" "),s("p",[t._v("模板方法模式与其他设计模式一样，都会增加系统的抽象程度。另外，模板方法模式在修改算法实现细节时，会增加类的个数，也会增加系统的复杂性。")])])}),[],!1,null,null,null);r.default=o.exports}}]);