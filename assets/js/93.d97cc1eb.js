(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{648:function(t,a,r){"use strict";r.r(a);var _=r(14),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"cap理论"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cap理论"}},[t._v("#")]),t._v(" CAP理论")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/CAP%E5%AE%9A%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAP 理论/定理(opens new window)"),r("OutboundLink")],1),t._v("起源于 2000年，由加州大学伯克利分校的Eric Brewer教授在分布式计算原理研讨会（PODC）上提出，因此 CAP定理又被称作 "),r("strong",[t._v("布鲁尔定理（Brewer’s theorem）")])]),t._v(" "),r("p",[t._v("2年后，麻省理工学院的Seth Gilbert和Nancy Lynch 发表了布鲁尔猜想的证明，CAP理论正式成为分布式领域的定理。")]),t._v(" "),r("h3",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),r("p",[r("strong",[t._v("CAP")]),t._v(" 也就是 "),r("strong",[t._v("Consistency（一致性）")]),t._v("、"),r("strong",[t._v("Availability（可用性）")]),t._v("、"),r("strong",[t._v("Partition Tolerance（分区容错性）")]),t._v(" 这三个单词首字母组合。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203291246586.png",alt:"img"}})]),t._v(" "),r("p",[t._v("CAP 理论的提出者布鲁尔在提出 CAP 猜想的时候，并没有详细定义 "),r("strong",[t._v("Consistency")]),t._v("、"),r("strong",[t._v("Availability")]),t._v("、"),r("strong",[t._v("Partition Tolerance")]),t._v(" 三个单词的明确定义。")]),t._v(" "),r("p",[t._v("因此，对于 CAP 的民间解读有很多，一般比较被大家推荐的是下面 👇 这种版本的解读。")]),t._v(" "),r("p",[t._v("在理论计算机科学中，CAP 定理（CAP theorem）指出对于一个分布式系统来说，当设计读写操作时，只能同时满足以下三点中的两个：")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("一致性（Consistency）")]),t._v(" : 所有节点访问同一份最新的数据副本")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("可用性（Availability）")]),t._v(": 非故障的节点在合理的时间内返回合理的响应（不是错误或者超时的响应）。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("分区容错性（Partition tolerance）")]),t._v(" : 分布式系统出现网络分区的时候，仍然能够对外提供服务。")])])]),t._v(" "),r("h4",{attrs:{id:"什么是网络分区"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是网络分区"}},[t._v("#")]),t._v(" 什么是网络分区？")]),t._v(" "),r("p",[t._v("分布式系统中，多个节点之前的网络本来是连通的，但是因为某些故障（比如部分节点网络出了问题）某些节点之间不连通了，整个网络就分成了几块区域，这就叫网络分区。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203291246554.png",alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"不是所谓的-3-选-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不是所谓的-3-选-2"}},[t._v("#")]),t._v(" 不是所谓的“3 选 2”")]),t._v(" "),r("p",[t._v("大部分人解释这一定律时，常常简单的表述为：“一致性、可用性、分区容忍性三者你只能同时达到其中两个，不可能同时达到”。实际上这是一个非常具有误导性质的说法，而且在 CAP 理论诞生 12 年之后，CAP 之父也在 2012 年重写了之前的论文。")]),t._v(" "),r("p",[r("strong",[t._v("当发生网络分区的时候，如果我们要继续服务，那么强一致性和可用性只能 2 选 1。也就是说当网络分区之后 P 是前提，决定了 P 之后才有 C 和 A 的选择。也就是说****分区容错性（Partition tolerance）我们是必须要实现的。")])]),t._v(" "),r("p",[t._v("简而言之就是：CAP 理论中分区容错性 P 是一定要满足的，在此基础上，只能满足可用性 A 或者一致性 C。")]),t._v(" "),r("p",[t._v("因此，"),r("strong",[t._v("分布式系统理论上不可能选择 CA 架构，只能选择 CP 或者 AP 架构")]),t._v("**。** 比如 ZooKeeper、HBase 就是 CP 架构，Cassandra、Eureka 就是 AP 架构，Nacos 不仅支持 CP 架构也支持 AP 架构。")]),t._v(" "),r("p",[r("strong",[t._v("为啥不可能选择 CA 架构呢？")]),t._v(" 举个例子：若系统出现“分区”，系统中的某个节点在进行写操作。为了保证 C， 必须要禁止其他节点的读写操作，这就和 A 发生冲突了。如果为了保证 A，其他节点的读写操作正常的话，那就和 C 发生冲突了。")]),t._v(" "),r("p",[r("strong",[t._v("选择 CP 还是 AP 的关键在于当前的业务场景，没有定论，比如对于需要确保强一致性的场景如银行一般会选择保证 CP 。")])]),t._v(" "),r("p",[t._v("另外，需要补充说明的一点是： "),r("strong",[t._v("如果网络分区正常的话（系统在绝大部分时候所处的状态），也就说不需要保证 P 的时候，C 和 A 能够同时保证。")])]),t._v(" "),r("h3",{attrs:{id:"cap-实际应用案例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cap-实际应用案例"}},[t._v("#")]),t._v(" CAP 实际应用案例")]),t._v(" "),r("p",[t._v("我这里以注册中心来探讨一下 CAP 的实际应用。考虑到很多小伙伴不知道注册中心是干嘛的，这里简单以 Dubbo 为例说一说。")]),t._v(" "),r("p",[t._v("下图是 Dubbo 的架构图。"),r("strong",[t._v("注册中心 Registry 在其中扮演了什么角色呢？提供了什么服务呢？")])]),t._v(" "),r("p",[t._v("注册中心负责服务地址的注册与查找，相当于目录服务，服务提供者和消费者只在启动时与注册中心交互，注册中心不转发请求，压力较小。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203291246596.png",alt:"img"}})]),t._v(" "),r("p",[t._v("常见的可以作为注册中心的组件有：ZooKeeper、Eureka、Nacos...。")]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("ZooKeeper 保证的是 CP。")]),t._v(" 任何时刻对 ZooKeeper 的读请求都能得到一致性的结果，但是， ZooKeeper 不保证每次请求的可用性比如在 Leader 选举过程中或者半数以上的机器不可用的时候服务就是不可用的。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Eureka 保证的则是 AP。")]),t._v(" Eureka 在设计的时候就是优先保证 A （可用性）。在 Eureka 中不存在什么 Leader 节点，每个节点都是一样的、平等的。因此 Eureka 不会像 ZooKeeper 那样出现选举过程中或者半数以上的机器不可用的时候服务就是不可用的情况。 Eureka 保证即使大部分节点挂掉也不会影响正常提供服务，只要有一个节点是可用的就行了。只不过这个节点上的数据可能并不是最新的。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Nacos 不仅支持 CP 也支持 AP。")])])])]),t._v(" "),r("h3",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("在进行分布式系统设计和开发时，我们不应该仅仅局限在 CAP 问题上，还要关注系统的扩展性、可用性等等")])]),t._v(" "),r("li",[r("p",[t._v("在系统发生“分区”的情况下，CAP 理论只能满足 CP 或者 AP。要注意的是，这里的前提是系统发生了“分区”")])]),t._v(" "),r("li",[r("p",[t._v("如果系统没有发生“分区”的话，节点间的网络连接通信正常的话，也就不存在 P 了。这个时候，我们就可以同时保证 C 和 A 了。")])]),t._v(" "),r("li",[r("p",[t._v("总结："),r("strong",[t._v("如果系统发生“分区”，我们要考虑选择 CP 还是 AP。如果系统没有发生“分区”的话，我们要思考如何保证 CA 。")])])])]),t._v(" "),r("h2",{attrs:{id:"base-理论"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#base-理论"}},[t._v("#")]),t._v(" BASE 理论")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://dl.acm.org/doi/10.1145/1394127.1394128",target:"_blank",rel:"noopener noreferrer"}},[t._v("BASE 理论(opens new window)"),r("OutboundLink")],1),t._v("起源于 2008 年， 由eBay的架构师Dan Pritchett在ACM上发表。")]),t._v(" "),r("h3",{attrs:{id:"简介-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介-2"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),r("p",[r("strong",[t._v("BASE")]),t._v(" 是 "),r("strong",[t._v("Basically Available（基本可用）")]),t._v(" 、"),r("strong",[t._v("Soft-state（软状态）")]),t._v(" 和 "),r("strong",[t._v("Eventually Consistent（最终一致性）")]),t._v(" 三个短语的缩写。")]),t._v(" "),r("p",[t._v("BASE 理论是对 CAP 中一致性 C 和可用性 A 权衡的结果，其来源于对大规模互联网系统分布式实践的总结，是基于 CAP 定理逐步演化而来的，它大大降低了我们对系统的要求。")]),t._v(" "),r("h3",{attrs:{id:"base-理论的核心思想"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#base-理论的核心思想"}},[t._v("#")]),t._v(" BASE 理论的核心思想")]),t._v(" "),r("p",[t._v("即使无法做到强一致性，但每个应用都可以根据自身业务特点，采用适当的方式来使系统达到最终一致性。")]),t._v(" "),r("p",[t._v("也就是牺牲数据的一致性来满足系统的高可用性，系统中一部分数据不可用或者不一致时，仍需要保持系统整体“主要可用”。")]),t._v(" "),r("p",[r("strong",[t._v("BASE 理论本质上是对 CAP 的延伸和补充，更具体地说，是对 CAP 中 AP 方案的一个补充。")])]),t._v(" "),r("p",[t._v("**为什么这样说呢？**CAP 理论这节我们也说过了：如果系统没有发生“分区”的话，节点间的网络连接通信正常的话，也就不存在 P 了。这个时候，我们就可以同时保证 C 和 A 了。因此，"),r("strong",[t._v("如果系统发生“分区”，我们要考虑选择 CP 还是 AP。如果系统没有发生“分区”的话，我们要思考如何保证 CA 。")])]),t._v(" "),r("p",[t._v("因此，"),r("strong",[t._v("AP 方案只是在系统发生分区的时候放弃一致性，而不是永远放弃一致性。在分区故障恢复后，系统应该达到最终一致性")]),t._v("。这一点其实就是 BASE 理论延伸的地方。")]),t._v(" "),r("h3",{attrs:{id:"base-理论三要素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#base-理论三要素"}},[t._v("#")]),t._v(" BASE 理论三要素")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203291246532.png",alt:"img"}})]),t._v(" "),r("h4",{attrs:{id:"_1-基本可用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本可用"}},[t._v("#")]),t._v(" 1. 基本可用")]),t._v(" "),r("p",[t._v("基本可用是指分布式系统在出现不可预知故障的时候，允许损失部分可用性。但是，这绝不等价于系统不可用。")]),t._v(" "),r("p",[r("strong",[t._v("什么叫允许损失部分可用性呢？")])]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("响应时间上的损失")]),t._v(": 正常情况下，处理用户请求需要 0.5s 返回结果，但是由于系统出现故障，处理用户请求的时间变为 3 s。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("系统功能上的损失")]),t._v("：正常情况下，用户可以使用系统的全部功能，但是由于系统访问量突然剧增，系统的部分非核心功能无法使用。")])])]),t._v(" "),r("h4",{attrs:{id:"_2-软状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-软状态"}},[t._v("#")]),t._v(" 2. 软状态")]),t._v(" "),r("p",[t._v("软状态指允许系统中的数据存在中间状态（"),r("strong",[t._v("CAP 理论中的数据不一致")]),t._v("），并认为该中间状态的存在不会影响系统的整体可用性，即允许系统在不同节点的数据副本之间进行数据同步的过程存在延时。")]),t._v(" "),r("h4",{attrs:{id:"_3-最终一致性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-最终一致性"}},[t._v("#")]),t._v(" 3. 最终一致性")]),t._v(" "),r("p",[t._v("最终一致性强调的是系统中所有的数据副本，在经过一段时间的同步后，最终能够达到一个一致的状态。因此，最终一致性的本质是需要系统保证最终数据能够达到一致，而不需要实时保证系统数据的强一致性。")]),t._v(" "),r("p",[r("strong",[t._v("分布式一致性的 3 种级别：")])]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("强一致性")]),t._v(" ：系统写入了什么，读出来的就是什么。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("弱一致性")]),t._v(" ：不一定可以读取到最新写入的值，也不保证多少时间之后读取到的数据是最新的，只是会"),r("strong",[t._v("尽量保证某个时刻达到数据一致的状态")]),t._v("。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("最终一致性")]),t._v(" ：弱一致性的升级版，系统会保证在一定时间内达到数据一致的状态。")])])]),t._v(" "),r("p",[r("strong",[t._v("业界比较推崇是最终一致性级别，但是某些对数据一致要求十分严格的场景比如银行转账还是要保证强一致性。")])]),t._v(" "),r("p",[t._v("那实现最终一致性的具体方式是什么呢? "),r("a",{attrs:{href:"http://gk.link/a/10rZM",target:"_blank",rel:"noopener noreferrer"}},[t._v("《分布式协议与算法实战》(opens new window)"),r("OutboundLink")],1),t._v(" 中是这样介绍：")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("读时修复")]),t._v(" : 在读取数据时，检测数据的不一致，进行修复。比如 Cassandra 的 Read Repair 实现，具体来说，在向 Cassandra 系统查询数据的时候，如果检测到不同节点 的副本数据不一致，系统就自动修复数据。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("写时修复")]),t._v(" : 在写入数据，检测数据的不一致时，进行修复。比如 Cassandra 的 Hinted Handoff 实现。具体来说，Cassandra 集群的节点之间远程写数据的时候，如果写失败 就将数据缓存下来，然后定时重传，修复数据的不一致性。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("异步修复")]),t._v(" : 这个是最常用的方式，通过定时对账检测副本数据的一致性，并修复。")])])]),t._v(" "),r("p",[t._v("比较推荐 "),r("strong",[t._v("写时修复")]),t._v("，这种方式对性能消耗比较低。")]),t._v(" "),r("h3",{attrs:{id:"总结-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("**ACID 是数据库事务完整性的理论，CAP 是分布式系统设计理论，**"),r("strong",[t._v("BASE 是 CAP 理论中 AP 方案的延伸。")])]),t._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://javaguide.cn/distributed-system/%E7%90%86%E8%AE%BA&%E7%AE%97%E6%B3%95/cap&base%E7%90%86%E8%AE%BA/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaGuide"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=v.exports}}]);