(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{644:function(a,t,r){"use strict";r.r(t);var e=r(14),_=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"可扩展性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可扩展性"}},[a._v("#")]),a._v(" 可扩展性")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("可扩展性指的是，如果我用一台计算机解决了一些问题，当我买了第二台计算机，我只需要一半的时间就可以解决这些问题，或者说每分钟可以解决两倍数量的问题。两台计算机构成的系统如果有两倍性能或者吞吐，就是我说的可扩展性。")])]),a._v(" "),r("li",[r("p",[a._v("只要单台web服务器没有给数据库带来太多的压力，你可以在出现问题前添加很多web服务器，但是这种可扩展性并不是无限的。很可能在某个时间点你有了10台，20台，甚至100台web服务器，它们都在和同一个数据库通信。现在，数据库突然成为了瓶颈，并且增加更多的web服务器都无济于事了。所以很少有可以通过无限增加计算机来获取完整的可扩展性的场景。因为在某个临界点，你在系统中添加计算机的位置将不再是瓶颈了。在我们的例子中，如果你有了很多的web服务器，那么瓶颈就会转移到了别的地方，这里是从web服务器移到了数据库。")])]),a._v(" "),r("li",[r("p",[a._v("只有一个数据库时，很难重构它。而虽然可以将一个数据库拆分成多个数据库（进而提升性能），但是这需要大量的工作。（分布式存储）")])])]),a._v(" "),r("h2",{attrs:{id:"容错性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容错性"}},[a._v("#")]),a._v(" 容错性")]),a._v(" "),r("h3",{attrs:{id:"可用性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可用性"}},[a._v("#")]),a._v(" 可用性")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("一台计算机正常工作很长时间并不少见。然而如果你通过数千台计算机构建你的系统，那么即使每台计算机可以稳定运行一年，对于1000台计算机也意味着平均每天会有3台计算机故障。")])]),a._v(" "),r("li",[r("p",[a._v("所以，大型分布式系统中有一个大问题，那就是一些很罕见的问题会被放大。例如在我们的1000台计算机的集群中，总是有故障，要么是机器故障，要么是运行出错，要么是运行缓慢，要么是执行错误的任务。")])]),a._v(" "),r("li",[r("p",[a._v("**可用性是指：**某些系统经过精心的设计，这样在特定的错误类型下，系统仍然能够正常运行，仍然可以像没有出现错误一样，为你提供完整的服务。")])])]),a._v(" "),r("h3",{attrs:{id:"可恢复性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可恢复性"}},[a._v("#")]),a._v(" 可恢复性")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("一个好的可用的系统，某种程度上应该也是可恢复的。当出现太多故障时，系统会停止响应，但是修复之后依然能正确运行。")])]),a._v(" "),r("li",[r("p",[a._v("为了实现可恢复性，通常有两种手段：")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("一个是非易失存储（non-volatile storage，类似于硬盘）。这样当出现类似电源故障，甚至整个机房的电源都故障时，我们可以使用非易失存储，比如硬盘，闪存，SSD之类的。我们可以存放一些checkpoint或者系统状态的log在这些存储中，这样当备用电源恢复或者某人修好了电力供给，我们还是可以从硬盘中读出系统最新的状态，并从那个状态继续运行。因为更新非易失存储是代价很高的操作，所以相应的出现了很多非易失存储的管理工具。同时构建一个高性能，容错的系统，聪明的做法是避免频繁的写入非易失存储。在过去，甚至对于今天的一个3GHZ的处理器，写入一个非易失存储意味着移动磁盘臂并等待磁碟旋转，这两个过程都非常缓慢。")])]),a._v(" "),r("li",[r("p",[a._v("对于容错的另一个重要工具是复制（replication），不过，管理复制的多副本系统会有些棘手。任何一个多副本系统中，都会有一个关键的问题，比如说，我们有两台服务器，它们本来应该是有着相同的系统状态，现在的关键问题在于，这两个副本总是会意外的偏离同步的状态，而不再互为副本。")])])])])]),a._v(" "),r("h2",{attrs:{id:"一致性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一致性"}},[a._v("#")]),a._v(" 一致性")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("**强一致性：**可以保证读取操作每次都能读到最新写入的数据。")])]),a._v(" "),r("li",[r("p",[a._v("**弱一致性：**不保证读取操作可以读到最新的写入数据，有可能读取到的是旧数据。")])])]),a._v(" "),r("p",[a._v("虽然强一致可以确保get获取的是最新的数据，但是实现这一点的代价非常高。几乎可以确定的是，分布式系统的各个组件需要做大量的通信，才能实现强一致性。如果你有多个副本，那么不管get还是put都需要询问每一个副本。在之前的例子中，客户端在更新的过程中故障了，导致一个副本更新了，而另一个副本没有更新。如果我们要实现强一致，简单的方法就是同时读两个副本，如果有多个副本就读取所有的副本，并使用最近一次写入的数据。但是这样的代价很高，因为需要大量的通信才能得到一个数据。所以，为了尽可能的避免通信，尤其当副本相隔的很远的时候，人们会构建弱一致系统，并允许读取出旧的数据。")]),a._v(" "),r("p",[a._v("所以，人们常常会使用弱一致系统，你只需要更新最近的数据副本，并且只需要从最近的副本获取数据。")]),a._v(" "),r("h1",{attrs:{id:"复制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[a._v("#")]),a._v(" 复制")]),a._v(" "),r("p",[a._v("状态转移传输的是可能是内存，而复制状态机会将来自客户端的操作或者其他外部事件，从Primary传输到Backup。")]),a._v(" "),r("h2",{attrs:{id:"状态转移"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#状态转移"}},[a._v("#")]),a._v(" 状态转移")]),a._v(" "),r("p",[a._v("如果我们有一个服务器的两个副本，我们需要让它们保持同步，在实际上互为副本，这样一旦Primary出现故障，因为Backup有所有的信息，就可以接管服务。状态转移背后的思想是，Primary将自己完整状态，比如说内存中的内容，拷贝并发送给Backup。Backup会保存收到的最近一次状态，所以Backup会有所有的数据。当Primary故障了，Backup就可以从它所保存的最新状态开始运行。所以，状态转移就是发送Primary的状态。虽然VMware FT没有采用这种复制的方法，但是假设采用了的话，那么转移的状态就是Primary内存里面的内容。这种情况下，每过一会，Primary就会对自身的内存做一大份拷贝，并通过网络将其发送到Backup。为了提升效率，你可以想到每次同步只发送上次同步之后变更了的内存。")]),a._v(" "),r("h2",{attrs:{id:"复制状态机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复制状态机"}},[a._v("#")]),a._v(" 复制状态机")]),a._v(" "),r("p",[a._v("复制状态机基于这个事实：我们想复制的大部分的服务或者计算机软件都有一些确定的内部操作，不确定的部分是外部的输入。通常情况下，如果一台计算机没有外部影响，它只是一个接一个的执行指令，每条指令执行的是计算机中内存和寄存器上确定的函数，只有当外部事件干预时，才会发生一些预期外的事。例如，某个随机时间收到了一个网络数据包，导致服务器做一些不同的事情。所以，复制状态机不会在不同的副本之间发送状态，相应的，它只会从Primary将这些外部事件，例如外部的输入，发送给Backup。通常来说，如果有两台计算机，如果它们从相同的状态开始，并且它们以相同的顺序，在相同的时间，看到了相同的输入，那么它们会一直互为副本，并且一直保持一致。")]),a._v(" "),r("h1",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://mit-public-courses-cn-translatio.gitbook.io/mit6-824/",target:"_blank",rel:"noopener noreferrer"}},[a._v("简介 - MIT6.824"),r("OutboundLink")],1)]),a._v(" "),r("p",[r("a",{attrs:{href:"https://www.bilibili.com/video/BV1R7411t71W?p=1",target:"_blank",rel:"noopener noreferrer"}},[a._v("2020 MIT 6.824 分布式系统_哔哩哔哩_bilibili"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=_.exports}}]);