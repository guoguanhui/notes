(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{764:function(a,v,t){"use strict";t.r(v);var _=t(14),r=Object(_.a)({},(function(){var a=this,v=a.$createElement,t=a._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"java-与-c-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-与-c-的区别"}},[a._v("#")]),a._v(" Java 与 C++ 的区别")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Java 是纯粹的面向对象语言，所有的对象都继承自 java.lang.Object，C++ 为了兼容 C 即支持面向对象也支持面向过程。")])]),a._v(" "),t("li",[t("p",[a._v("Java 通过虚拟机从而实现跨平台特性，但是 C++ 依赖于特定的平台。")])]),a._v(" "),t("li",[t("p",[a._v("Java 没有指针，它的引用可以理解为安全指针，而 C++ 具有和 C 一样的指针。")])]),a._v(" "),t("li",[t("p",[a._v("Java 支持自动垃圾回收，而 C++ 需要手动回收。")])]),a._v(" "),t("li",[t("p",[a._v("Java 不支持多重继承，只能通过实现多个接口来达到相同目的，而 C++ 支持多重继承。")])]),a._v(" "),t("li",[t("p",[a._v("Java 不支持操作符重载，虽然可以对两个 String 对象执行加法运算，但是这是语言内置支持的操作，不属于操作符重载，而 C++ 可以。")])]),a._v(" "),t("li",[t("p",[a._v("Java 的 goto 是保留字，但是不可用，C++ 可以使用 goto。")])])]),a._v(" "),t("h2",{attrs:{id:"java的基础数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java的基础数据类型"}},[a._v("#")]),a._v(" Java的基础数据类型？")]),a._v(" "),t("p",[t("strong",[a._v("四类八种")])]),a._v(" "),t("ul",[t("li",[a._v("byte/8")]),a._v(" "),t("li",[a._v("char/16")]),a._v(" "),t("li",[a._v("short/16")]),a._v(" "),t("li",[a._v("int/32")]),a._v(" "),t("li",[a._v("float/32")]),a._v(" "),t("li",[a._v("long/64")]),a._v(" "),t("li",[a._v("double/64")]),a._v(" "),t("li",[a._v("boolean/~")])]),a._v(" "),t("h2",{attrs:{id:"string的底层实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string的底层实现"}},[a._v("#")]),a._v(" String的底层实现？")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("在jdk1.8中，String的底层数据类型是private final char[]数组，在jdk1.9时，String的底层数据类型变成了private final byte[]数组。")])]),a._v(" "),t("li",[t("p",[a._v("至于为什么在jdk1.9中底层数据类型变成了byte数组，因为开发人员发现，使用频率最高的字符是拉丁字符，而拉丁字符只需要一个字节就可存储，但是char需要两个字节。所以，为了避免造成内存浪费，所以jdk1.9将String的底层char数组改为了byte数组。")])])]),a._v(" "),t("h2",{attrs:{id:"string为什么是不可变的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string为什么是不可变的"}},[a._v("#")]),a._v(" String为什么是不可变的？")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("将String设置为不可变的第一个重要原因就是为了方便实现字符串常量池。而字符串常量池的实现可以极大地节省堆空间，因为不同的字符串变量都指向相同的字符串。如果字符串是可变的，当一个变量修改了这个值，那其他的变量也会改变，这就无法达到实现字符串常量池的目的了。")])]),a._v(" "),t("li",[t("p",[a._v("第二个原因是为了线程安全，将String设置为不可变，所以其无法被修改，所以在多线程环境下是线程安全的，不需要借助额外的同步措施来保证对String操作的线程安全。")])]),a._v(" "),t("li",[t("p",[a._v("第三个原因是为了保证String的hash值不会改变，这样，当String作为HashMap或者HashSet的键时，可以没有其他问题。比如，如果你使用了StringBuilder作为HashMap的键，但是你又修改了StringBuilder的内容，这可能导致键相同的情况存在。")])])]),a._v(" "),t("h2",{attrs:{id:"string的拼接的底层原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string的拼接的底层原理"}},[a._v("#")]),a._v(" String的拼接的底层原理？")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("对于字符串常量的拼接，编译器会直接将其优化为一个常量字符串。")])]),a._v(" "),t("li",[t("p",[a._v("当字符串拼接的过程中出现了变量，则会构建出StringBuilder临时对象，通过调用append方法进行字符串的拼接。")])])]),a._v(" "),t("h2",{attrs:{id:"stringbuilder和stringbuffer的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stringbuilder和stringbuffer的区别"}},[a._v("#")]),a._v(" StringBuilder和StringBuffer的区别？")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("StringBuilder与StringBuffer都是可变的，这是它们与String的最大不同之处。")])]),a._v(" "),t("li",[t("p",[a._v("对于StringBuffer来说，它的底层append方法都是通过Synchronized关键字修饰的，所以它是线程安全。")])]),a._v(" "),t("li",[t("p",[a._v("而对于StringBuilder来说，它的底层方法并没有经过Synchronized关键字修饰，所以它在多线程下是不安全的。")])])]),a._v(" "),t("h2",{attrs:{id:"重写equals为什么要重写hashcode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重写equals为什么要重写hashcode"}},[a._v("#")]),a._v(" 重写equals为什么要重写hashcode?")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("首先说一下hashcode是什么，它的作用是获取对象的哈希吗，实际上是一个整数，通常是将对象的内存地址转换为整数的。")])]),a._v(" "),t("li",[t("p",[a._v("再说一下为什么要有hashcode，在HashMap或者HashSet等哈希容器中，它们能够根据键快速地检索出对应的值，这就需要用到hashcode。首先，它会使用对象的hashcode来判断对象加入的哈希桶的位置，同时会与其他的hashcode做比较，如果没有相同的hashcode则表明对象没有重复初选，如果发现有相同的hashcode，则会再次调用equals方法来判断对象是否真正相同。")])]),a._v(" "),t("li",[t("p",[a._v("那为什么重写equals时必须重写hashCode方法，"),t("strong",[a._v("因为java规定了如果两个对象相等，hashcode必须要是相同的")]),a._v("，两个相同的对象分别调用equals方法返回true。"),t("strong",[a._v("如果此时不重写hashCode，因为hashCode的默认行为是对堆上的对象产生的独特值，不重写的话，两个对象是无论如何都不可能相同的。")])])]),a._v(" "),t("li",[t("p",[a._v("最后，实际上，"),t("strong",[a._v("hashcode的作用是用来缩小查找成本的")]),a._v("，因为两个对象如果有相同的hashcode值，它们是不一定相同的，因为hashcode所使用的杂凑算法也会会让多个对象传回相同的杂凑值，这也就是为什么在HashMap中，对于相同hashcode的对象会再次使用equals方法来判断是否真的相同。"),t("strong",[a._v("但是程序员应该知道，给不相等的对象产生截然不同的整数结果，有可能提高散列表（ hashtable ）的性能。")])])])]),a._v(" "),t("h2",{attrs:{id:"泛型的类型擦除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#泛型的类型擦除"}},[a._v("#")]),a._v(" 泛型的类型擦除？")]),a._v(" "),t("p",[a._v("Java泛型这个特性是从JDK 1.5才开始加入的，因此为了兼容之前的版本，Java泛型的实现采取了“"),t("strong",[a._v("伪泛型")]),a._v("”的策略，即Java在语法上支持泛型，但是在编译阶段会进行所谓的“"),t("strong",[a._v("类型擦除")]),a._v("”（Type Erasure），"),t("strong",[a._v("将所有的泛型表示（尖括号中的内容）都替换为具体的类型（其对应的原生态类型），就像完全没有泛型一样")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"异常的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异常的分类"}},[a._v("#")]),a._v(" 异常的分类？")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("在Java中，异常都有一个共同的祖先，叫做Throwable，而这个父类有两个重要的子类，分别是Error和Exception。")])]),a._v(" "),t("li",[t("p",[a._v("异常和错误的最大区别是，异常可以被程序本身处理，但是错误是无法被处理的。")])]),a._v(" "),t("li",[t("p",[a._v("Error通常表示程序无法处理的错误，表示运行过程中引用程序遇到的比较严重的问题，通常是java虚拟机出现的问题。最常见的错误有内存溢出错误，栈溢出错误，类定义错误等。")])]),a._v(" "),t("li",[t("p",[a._v("Exception通常表示程序本身可以处理的异常，而这类异常也通常被分为两类，分别是运行时异常和受检异常。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("运行时异常都是RuntimeException类及其子类的异常，最常见的有空指针异常，下标越界异常等。这类异常的特点是Java编译器不会检查它们，当程序中出现这类异常，即使没有使用try-catch语句捕获也没有使用throws子句抛出也会编译通过。")])]),a._v(" "),t("li",[t("p",[a._v("受检异常是除了运行时异常的所有其他Exception异常，这类异常是必须进行处理的，也就是受检异常。这类常见的异常有IO异常，InterruptedException以及NoSuchMethodException和ClassNotFoundException等常见的异常。")])])])])]),a._v(" "),t("h2",{attrs:{id:"继承类时的异常范围确定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继承类时的异常范围确定"}},[a._v("#")]),a._v(" 继承类时的异常范围确定？")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("子类覆盖了基类方法时，"),t("strong",[a._v("子类方法抛出异常的范围不能大于基类方法抛出的异常范围")]),a._v("。")])]),a._v(" "),t("li",[t("p",[a._v("子类方法可以不抛出异常，也可以只抛出基类方法的部分异常，但不可以抛出基类方法以外的异常。")])]),a._v(" "),t("li",[t("p",[a._v("需要注意的是，这与"),t("strong",[a._v("继承时访问修饰符不一样，子类的访问权限一定要大于父类的访问权限")]),a._v("，这两类情况都是为了满足里式替换原则。此外，"),t("strong",[a._v("子类方法的返回值应该小于父类方法的返回值类型")]),a._v("。")])])]),a._v(" "),t("h2",{attrs:{id:"抽象类和接口的对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽象类和接口的对比"}},[a._v("#")]),a._v(" 抽象类和接口的对比？")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("从设计层面上看，抽象类提供了一种 IS-A 关系，需要满足里式替换原则，即子类对象必须能够替换掉所有父类对象。而接口更像是一种 LIKE-A 关系，它只是提供一种方法实现契约，并不要求接口和实现接口的类具有 IS-A 关系。")])]),a._v(" "),t("li",[t("p",[a._v("从使用上来看，一个类可以实现多个接口，但是不能继承多个抽象类。")])]),a._v(" "),t("li",[t("p",[a._v("接口的字段只能是 static 和 final 类型的，而抽象类的字段没有这种限制。")])]),a._v(" "),t("li",[t("p",[a._v("从 Java 8 开始，"),t("strong",[a._v("接口也可以拥有默认的方法实现")]),a._v("，这是因为不支持默认方法的接口的维护成本太高了。在 Java 8 之前，如果一个接口想要添加新的方法，那么要修改所有实现了该接口的类，让它们都实现新增的方法。")])]),a._v(" "),t("li",[t("p",[a._v("接口的成员（字段 + 方法）默认都是 public 的，并且不允许定义为 private 或者 protected。"),t("strong",[a._v("从 Java 9 开始，允许将方法定义为 private")]),a._v("，这样就能定义某些复用的代码又不会把方法暴露出去。")])])]),a._v(" "),t("h2",{attrs:{id:"java实例化时父子类初始化的先后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java实例化时父子类初始化的先后"}},[a._v("#")]),a._v(" Java实例化时父子类初始化的先后？")]),a._v(" "),t("p",[a._v("在构造一个类的实例对象时，遵循的原则是**先静后动，先父后子，先变量，后代码块，构造器。**在Java程序层面会依次进行以下操作：")]),a._v(" "),t("ol",[t("li",[a._v("初始化父类的静态变量（如果是首次使用此类）")]),a._v(" "),t("li",[a._v("初始化子类的静态变量（如果是首次使用此类）")]),a._v(" "),t("li",[a._v("执行父类的静态代码块（如果是首次使用此类）")]),a._v(" "),t("li",[a._v("执行子类的静态代码块（如果是首次使用此类）")]),a._v(" "),t("li",[a._v("初始化父类的实例变量")]),a._v(" "),t("li",[a._v("初始化子类的实例变量")]),a._v(" "),t("li",[a._v("执行父类的普通代码块")]),a._v(" "),t("li",[a._v("执行子类的普通代码块")]),a._v(" "),t("li",[a._v("执行父类的构造器")]),a._v(" "),t("li",[a._v("执行子类的构造器")])]),a._v(" "),t("h2",{attrs:{id:"java对象的创建过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java对象的创建过程"}},[a._v("#")]),a._v(" Java对象的创建过程？")]),a._v(" "),t("h4",{attrs:{id:"_1-类加载检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-类加载检查"}},[a._v("#")]),a._v(" 1. 类加载检查")]),a._v(" "),t("p",[a._v("当Java虚拟机遇到一条字节码"),t("strong",[a._v("new指令")]),a._v("时，首先将去"),t("strong",[a._v("检查这个指令的参数是否能在常量池中定位到一个类的符号引用，并且检查这个符号引用代表的类是否已被加载、解析和初始化过")]),a._v("。如果没有，那必须先执行相应的类加载过程。")]),a._v(" "),t("h4",{attrs:{id:"_2-分配内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-分配内存"}},[a._v("#")]),a._v(" 2. 分配内存")]),a._v(" "),t("p",[a._v("在类加载检查通过后，接下来虚拟机将"),t("strong",[a._v("为新生对象分配内存")]),a._v("。对象所需内存的大小在类加载完成后便可完全确定，"),t("strong",[a._v("为对象分配空间的任务实际上便等同于把一块确定大小的内存块从Java堆中划分出来")]),a._v("。")]),a._v(" "),t("h4",{attrs:{id:"_3-初始化零值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-初始化零值"}},[a._v("#")]),a._v(" 3. 初始化零值")]),a._v(" "),t("p",[a._v("内存分配完成之后，"),t("strong",[a._v("虚拟机必须将分配到的内存空间（但不包括对象头）都初始化为零值")]),a._v("，如果使用了TLAB的话，这一项工作也可以提前至TLAB分配时顺便进行。"),t("strong",[a._v("这步操作保证了对象的实例字段在Java代码中可以不赋初始值就直接使用，使程序能访问到这些字段的数据类型所对应的零值。")])]),a._v(" "),t("h4",{attrs:{id:"_4-设置对象头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置对象头"}},[a._v("#")]),a._v(" 4. 设置对象头")]),a._v(" "),t("p",[a._v("接下来，Java虚拟机还要对对象进行必要的设置，例如"),t("strong",[a._v("这个对象是哪个类的实例、如何才能找到类的元数据信息、对象的哈希码")]),a._v("（实际上对象的哈希码会延后到真正调用Object::hashCode()方法时才计算）、对象的GC分代年龄等信息。这些信息存放在对象的对象头（Object Header）之中。根据虚拟机当前运行状态的不同，如是否启用偏向锁等，对象头会有不同的设置方式。")]),a._v(" "),t("h4",{attrs:{id:"_5-执行init方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-执行init方法"}},[a._v("#")]),a._v(" 5. 执行init方法")]),a._v(" "),t("p",[a._v("在上面工作都完成之后，从虚拟机的视角来看，一个新的对象已经产生了。但是从Java程序的视角看来，"),t("strong",[a._v("对象创建才刚刚开始——构造函数，即Class文件中的<init>()方法还没有执行，所有的字段都为默认的零值")]),a._v("，对象需要的其他资源和状态信息也还没有按照预定的意图构造好。一般来说（由字节码流中new指令后面是否跟随invokespecial指令所决定，Java编译器会在遇到new关键字的地方同时生成这两条字节码指令，但如果直接通过其他方式产生的则不一定如此），new指令之后会接着执行<init>()方法，按照程序员的意愿对对象进行初始化，这样一个真正可用的对象才算完全被构造出来。")]),a._v(" "),t("h2",{attrs:{id:"java各版本的新特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java各版本的新特性"}},[a._v("#")]),a._v(" Java各版本的新特性？")]),a._v(" "),t("h3",{attrs:{id:"java8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java8"}},[a._v("#")]),a._v(" Java8")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("函数式编程 "),t("strong",[a._v("- lambda表达式和stream")]),a._v("："),t("strong",[a._v("面向对象编程是对数据进行抽象，而函数式编程是对行为进行抽象")]),a._v("。Java8中函数式编程主要对核心类库的改进主要"),t("strong",[a._v("包括集合类的API和新引入的流Stream")]),a._v("。流使程序员可以站在更高的抽象层次上对集合进行操作。")])]),a._v(" "),t("li",[t("p",[a._v("Optional类：身为一名Java程序员，大家可能都有这样的经历: 调用一个方法得到了返回值却不能直接将返回值作为参数去调用别的方法。"),t("strong",[a._v("我们首先要判断这个返回值是否为null，只有在非空的前提下才能将其作为其他方法的参数")]),a._v("。")])]),a._v(" "),t("li",[t("p",[a._v("接口的默认方法和静态方法。")])]),a._v(" "),t("li",[t("p",[a._v("类型推断优化：如HashMap的类型推断")])]),a._v(" "),t("li",[t("p",[a._v("移除永久代：移除的原因是，这部分区域经常出现内存溢出异常。")])]),a._v(" "),t("li",[t("p",[a._v("引入元空间。")])])]),a._v(" "),t("h3",{attrs:{id:"java9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java9"}},[a._v("#")]),a._v(" Java9")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("接口中新增私有方法：私有方法必须包含方法体，必须是具体方法。")])]),a._v(" "),t("li",[t("p",[a._v("java平台模块：把模块化开发实践引入到了 Java 平台中。在引入了模块系统之后，"),t("strong",[a._v("JDK 被重新组织成 94 个模块")]),a._v("。Java 9 模块的重要特征是"),t("strong",[a._v("在其工件（artifact）的根目录中包含了一个描述模块的 module-info.class 文件")]),a._v("。")])]),a._v(" "),t("li",[t("p",[a._v("集合、Stream和Optional新增功能：在集合上，Java 9 增加 了 **List.of()****、"),t("strong",[t("strong",[a._v("Set.of()")])]),a._v("、**"),t("strong",[a._v("Map.of()")]),a._v(" "),t("strong",[a._v("和")]),a._v(" **Map.ofEntries()**"),t("strong",[a._v("等工厂方法来创建不可变集合")]),a._v("；Stream 中增加了新的方法 ofNullable、dropWhile、takeWhile 和 iterate；Optional 类中新增了 ifPresentOrElse、or 和 stream 等方法。")])])]),a._v(" "),t("h3",{attrs:{id:"java10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java10"}},[a._v("#")]),a._v(" Java10")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("局部变量类型推断：向 Java 语法中引入在其他语言中很常见的"),t("strong",[a._v("保留类型名称 var")]),a._v(" 。但需要特别注意的是： var 不是一个关键字，而是一个保留字。")])]),a._v(" "),t("li",[t("p",[a._v("并行垃圾收集器G1：我们知道，"),t("strong",[a._v("调优的最终目标是通过参数设置来达到快速、低延时的内存垃圾回收以提高应用吞吐量，尽可能的避免因内存回收不及时而触发的完整 GC")]),a._v("（Full GC 会带来应用出现卡顿）。G1 垃圾回收器是 **Java 9 中 Hotspot 的默认垃圾回收器。**为了最大限度地减少 Full GC 造成的应用停顿的影响，"),t("strong",[a._v("Java 10 中将为 G1 引入多线程并行 GC，同时会使用与年轻代回收和混合回收相同的并行工作线程数量，从而减少了 Full GC 的发生。")])])])]),a._v(" "),t("h3",{attrs:{id:"java11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java11"}},[a._v("#")]),a._v(" Java11")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("ZGC：可伸缩低延迟垃圾收集器。ZGC 即 Z Garbage Collector（垃圾收集器或垃圾回收器），"),t("strong",[a._v("这应该是 Java 11 中最为瞩目的特性，没有之一")]),a._v("。目前 ZGC "),t("strong",[a._v("还处于实验阶段。")])])]),a._v(" "),t("li",[t("p",[a._v("用于Lambda参数的局部变量语法："),t("strong",[a._v("允许开发者在 Lambda 表达式中使用 var 进行参数声明")]),a._v("。")])])]),a._v(" "),t("h3",{attrs:{id:"java12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java12"}},[a._v("#")]),a._v(" Java12")]),a._v(" "),t("ol",[t("li",[a._v("增强Switch（预览版）：Java12 提供了 swtich 表达式，使用类似 lambda 语法条件匹配成功后的执行块，不需要多写 break。")]),a._v(" "),t("li",[a._v("G1垃圾收集器的提升。")])]),a._v(" "),t("h3",{attrs:{id:"java13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java13"}},[a._v("#")]),a._v(" Java13")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("ZGC垃圾收集器增强："),t("strong",[a._v("ZGC 收集器中并没有像 Hotspot 中的 G1 和 Shenandoah 垃圾收集器一样，能够主动将未使用的内存释放给操作系统的功能")]),a._v("。")])]),a._v(" "),t("li",[t("p",[a._v("Socket API重构：")])]),a._v(" "),t("li",[t("p",[a._v("Switch表达式扩展（预览）："),t("strong",[a._v("在 Java 13 中对 Switch 表达式做了增强改进，在块中引入了 yield 语句来返回值，而不是使用 break")]),a._v("。这意味着，Switch 表达式（返回值）应该使用 yield，而 Switch 语句（不返回值）应该使用 break，而在此之前，想要在 Switch 中返回内容，还是比较麻烦的，只不过目前还处于预览状态。")])]),a._v(" "),t("li",[t("p",[a._v("文本块：解决 Java 定义多行字符串时只能通过换行转义或者换行连接符来变通支持的问题，引入三重双引号来定义多行文本。")])])]),a._v(" "),t("h3",{attrs:{id:"java14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java14"}},[a._v("#")]),a._v(" Java14")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("删除CMS垃圾收集器。")])]),a._v(" "),t("li",[t("p",[a._v("Switch表达式正式版：switch 表达式在之前的 Java 12 和 Java 13 中都是处于预览阶段，而在这次更新的 Java 14 中，终于成为稳定版本，能够正式可用。")])]),a._v(" "),t("li",[t("p",[a._v("instanceOf模式匹配改进（预览）：")])])]),a._v(" "),t("h3",{attrs:{id:"java15"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java15"}},[a._v("#")]),a._v(" Java15")]),a._v(" "),t("ol",[t("li",[a._v("ZGC：ZGC是"),t("strong",[a._v("Java 11引入")]),a._v("的新的垃圾收集器（JDK9以后默认的垃圾回收器是G1），经过了多个实验阶段，自此终于成为正式特性。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);