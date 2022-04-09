(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{773:function(v,_,r){"use strict";r.r(_);var t=r(14),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h2",{attrs:{id:"线程池的核心参数-threadpoolexecutor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#线程池的核心参数-threadpoolexecutor"}},[v._v("#")]),v._v(" 线程池的核心参数-ThreadPoolExecutor")]),v._v(" "),r("ol",[r("li",[r("p",[r("strong",[v._v("corePoolSize")]),v._v("：核心线程数")])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("maximumPoolSize")]),v._v("：最大线程数")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("当有新任务提交时，线程池首先会判断运行的线程数量是否少于核心线程数，如果小于，则会创建核心线程来处理任务。")])]),v._v(" "),r("li",[r("p",[v._v("如果线程池中的线程数量大于核心线程数，且工作队列未满时，会将任务放入工作队列中等待空闲线程去执行。")])]),v._v(" "),r("li",[r("p",[v._v("当工作队列也满了，但是线程池中的线程数小于最大线程数，则线程池会创建新的非核心线程去处理任务。")])]),v._v(" "),r("li",[r("p",[v._v("如果线程数量大于最大线程数，那么线程池将根据饱和策略来处理新提交的任务。")])])])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("keepAliveTime")]),v._v("：线程保持活动时间。当线程数量大于核心线程数时，如果没有新的任务到达，那么核心线程之外的线程在等待了活动时间之后会自动销毁。而核心线程则保持活跃。")])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("unit")]),v._v("：时间单位")])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("workQueue")]),v._v("：工作队列（一般是阻塞队列）")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("ArrayBlockingQueue：有界阻塞队列")])]),v._v(" "),r("li",[r("p",[v._v("LinkedBlockingQueue：无界阻塞队列")])]),v._v(" "),r("li",[r("p",[v._v("SynchronousQueue，该对垒不会保存提交的任务，而是需要直接创建一个线程来执行新的任务。换句话说，每个插入操作都需要等到另一个线程调用移除操作，否则将一直阻塞。")])]),v._v(" "),r("li",[r("p",[v._v("PriorityQueue：")])])])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("threadFactory")]),v._v("：线程工程工厂，主要用于实现给线程设置名字等一些功能。")])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("handler")]),v._v("：饱和策略，当队列和线程池满了时，需要采取一种策略来处理提交新的任务。")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("丢弃任务并抛出异常：默认策略")])]),v._v(" "),r("li",[r("p",[v._v("丢弃任务但不抛出异常")])]),v._v(" "),r("li",[r("p",[v._v("丢弃工作队列中最前面（老）的任务")])]),v._v(" "),r("li",[r("p",[v._v("直接调用run方法并且阻塞执行")])])])])]),v._v(" "),r("h2",{attrs:{id:"讲一下常见的线程池有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#讲一下常见的线程池有哪些"}},[v._v("#")]),v._v(" 讲一下常见的线程池有哪些？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("newSingleThreadExecutor")]),v._v(" "),r("ul",[r("li",[v._v("核心线程数和最大线程数均设置为1，表示这是一个单线程的线程池。")]),v._v(" "),r("li",[v._v("工作队列使用的是"),r("strong",[v._v("无界队列")]),v._v("，所以永远不会出现饱和的情况")]),v._v(" "),r("li",[v._v("这种队列的作用是可以保证顺序地执行每个任务")])])]),v._v(" "),r("li",[r("p",[v._v("newFixedThreadPool")]),v._v(" "),r("ul",[r("li",[v._v("核心线程数设置为固定值，最大线程数设置为与核心线程数相同的值")]),v._v(" "),r("li",[v._v("工作队列使用的是"),r("strong",[v._v("无界队列")]),v._v("，所以，最大线程数和keepAliveTime是没有用到的参数，此外，线程池也不会饱和，即饱和策略失效。")]),v._v(" "),r("li",[v._v("由于最大线程数设置为核心线程数相同的值，当线程池中没有可以运行的任务时，工作线程也不会被释放，这会占用系统资源。")])])]),v._v(" "),r("li",[r("p",[v._v("newCachedThreadPool")]),v._v(" "),r("ul",[r("li",[v._v("核心线程数设置为0，"),r("strong",[v._v("最大线程数设置为Integer.MAX_VALUE")]),v._v("。")]),v._v(" "),r("li",[v._v("工作队列使用的是SynchronousQueue，表示线程池不会对线程池大小做限制，可以创建的线程大小完全取决于操作系统。")]),v._v(" "),r("li",[v._v("由于最大线程数大于核心线程数，且核心线程数等于0，所以当工作线程空闲60秒后将自动回收。由于最大线程数为最大值，存在内存溢出的风险。")])])]),v._v(" "),r("li",[r("p",[v._v("newScheduleThreadPool")]),v._v(" "),r("ul",[r("li",[v._v("创建一个可以定时执行的线程池，核心线程数设置为固定值，"),r("strong",[v._v("最大线程数设置为Integer.MAX_VALUE")]),v._v("。")]),v._v(" "),r("li",[v._v("工作队列使用DelayedWorkQueue，这种队列中的元素只有当延迟时间到了才能从队列中获取元素。")])])])]),v._v(" "),r("h2",{attrs:{id:"说一下创建线程的方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说一下创建线程的方法"}},[v._v("#")]),v._v(" 说一下创建线程的方法？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("继承Thread类，并重写run方法。")])]),v._v(" "),r("li",[r("p",[v._v("实现Runnable接口，并实现run方法。")])]),v._v(" "),r("li",[r("p",[v._v("实现Callable接口，并实现call方法。")])]),v._v(" "),r("li",[r("p",[v._v("通过线程池创建。")])])]),v._v(" "),r("h2",{attrs:{id:"java中线程有哪些状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java中线程有哪些状态"}},[v._v("#")]),v._v(" Java中线程有哪些状态？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("New: 新建状态表示状态被创建了，但还没被启动")])]),v._v(" "),r("li",[r("p",[v._v("Runnable: 可运行状态包括两类，一类是Ready状态，一类是Running状态，它们统称为Runnable状态。其中，Ready状态表示线程正在等待处理器资源，是一种就绪状态，只要分配了时间片，可以立即运行。")])]),v._v(" "),r("li",[r("p",[v._v("Waiting: 无限等待状态，这表示线程主动进入到了等待状态，它需要等待其他线程对其进行显示地唤醒。wait，join等会使线程进入该状态。")])]),v._v(" "),r("li",[r("p",[v._v("Timed-Waiting: 有限等待状态，表示它无需其他线程显式地唤醒，在一定时间之后会被系统自动唤醒。sleep，带时间参数的wait和join方法会使线程进入此状态。")])]),v._v(" "),r("li",[r("p",[v._v("Blocked: 阻塞状态，表示线程被动阻塞状态，这表示线程正在等待锁，如果获取锁后，将进入Runnable状态。")])]),v._v(" "),r("li",[r("p",[v._v("Terminated: 终止状态。")])])]),v._v(" "),r("h2",{attrs:{id:"synchronized的实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#synchronized的实现原理"}},[v._v("#")]),v._v(" synchronized的实现原理？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("synchronized关键字是用来实现线程同步的一种同步机制。它可以用来修饰代码块以及方法，通过synchronized关键字，可以实现多线程的同步。")])]),v._v(" "),r("li",[r("p",[v._v("synchronized的底层"),r("strong",[v._v("依赖于Monitor对象")]),v._v("，每一个对象实例都拥有一个Monitor对象，它随实例对象一起创建和销毁。此外，Monitor还维护了一个Mutex互斥锁，它通过这个互斥锁来实现线程的互斥。")])]),v._v(" "),r("li",[r("p",[v._v("当synchronized关键字用来修饰代码块时，在编译时，会在代码块的前后添加"),r("strong",[v._v("monitorenter和monitorexit")]),v._v("这两个关键字。")])]),v._v(" "),r("li",[r("p",[v._v("当synchronized关键字修饰方法时，在编译阶段，该方法上将添加一个"),r("strong",[v._v("ACC_SYNCHRONIZED")]),v._v("标志。")])]),v._v(" "),r("li",[r("p",[v._v("不管是monitorenter还是ACC_SYNCHRONIZED指令，它们都界定了一个临界区，而线程需要进入这个临界区，都需要获取到monitor对象。当多个线程访问同一段代码块或者访问同一个方法时，它们都会先进入Monitor维护的EntryList队列中，接下来，如果EntryList队列不为空，则"),r("strong",[v._v("从队列中取出一个线程去竞争Monitor的互斥锁")]),v._v("，这里主要是和还未进入EntryList队列中的刚来的还在自旋获取锁的线程竞争，这也就是为什么说synchronized是一种不公平锁的实现方式。当该队列中的候选线程成功获取到Monitor对象，或者Monitor互斥锁后，即可执行临界区的代码。")])]),v._v(" "),r("li",[r("p",[v._v("在同步代码块中，如果获取到锁的线程执行或调用了锁对象的wait方法，那么这个线程将会被移动到WaitSet集合中，并且会释放锁和cpu资源。")])]),v._v(" "),r("li",[r("p",[v._v("当其他线程调用了notify或者notifyAll方法（"),r("strong",[v._v("notify和notifyAll的区别：")]),r("a",{attrs:{href:"https://www.yuque.com/hanchanmingqi-zjjw3/kb/ctlf3b#gvnkW",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://www.yuque.com/hanchanmingqi-zjjw3/kb/ctlf3b#gvnkW"),r("OutboundLink")],1),v._v("），在WaitSet中的线程才会再次被移动到EntryList队列中，等待再次获取锁。")])])]),v._v(" "),r("h2",{attrs:{id:"synchronized的优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#synchronized的优化"}},[v._v("#")]),v._v(" synchronized的优化？")]),v._v(" "),r("h3",{attrs:{id:"偏向锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#偏向锁"}},[v._v("#")]),v._v(" 偏向锁")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("在大多实际环境下，锁不仅不存在多线程竞争，而且总是由同一个线程多次获取，那么在同一个线程反复获取所释放锁中，其中并还没有锁的竞争，那么这样看上去，多次的获取锁和释放锁带来了很多不必要的性能开销和上下文切换。")])]),v._v(" "),r("li",[r("p",[v._v("偏向锁的思想是偏向于"),r("strong",[v._v("第一个获取锁对象的线程，这个线程在之后获取该锁就不再需要进行同步操作，甚至连 CAS 操作也不再需要")]),v._v("。具体地，JVM 会利用 CAS 操作（compare and swap），在锁对象头上的 Mark Word 部分设置线程 ID，以"),r("strong",[v._v("表示这个锁对象偏向于当前线程，所以并不涉及真正的互斥锁")]),v._v("。这样做的假设是基于在很多应用场景中，大部分对象生命周期中最多会被一个线程锁定，使用偏向锁可以降低无竞争开销。")])]),v._v(" "),r("li",[r("p",[v._v("偏向锁使用了一种"),r("strong",[v._v("等待竞争出现才会释放锁的机制")]),v._v("。所以当其他线程尝试获取偏向锁时，持有偏向锁的线程才会释放锁。")])])]),v._v(" "),r("h3",{attrs:{id:"轻量锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#轻量锁"}},[v._v("#")]),v._v(" 轻量锁")]),v._v(" "),r("p",[v._v("轻量级锁是相对于重量级锁而言的。使用轻量级锁时，不需要申请互斥量，仅仅将锁对象的Mark Word中的部分字节CAS更新指向自己线程栈中的Lock Record（锁记录用于存储Mark Word的拷贝），如果更新成功，则轻量级锁获取成功，记录锁状态为轻量级锁；否则，说明已经有线程获得了轻量级锁，目前发生了锁竞争（不适合继续使用轻量级锁），接下来膨胀为重量级锁。")]),v._v(" "),r("h3",{attrs:{id:"锁消除"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#锁消除"}},[v._v("#")]),v._v(" 锁消除")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("除了锁升级优化，Java 还"),r("strong",[v._v("使用了编译器对锁进行优化")]),v._v("。优化措施包括"),r("strong",[v._v("锁消除和锁粗化")]),v._v("。"),r("strong",[v._v("锁消除是指对于被检测出不可能存在竞争的共享数据的锁进行消除")]),v._v("。")])]),v._v(" "),r("li",[r("p",[v._v("比如，即时编译器中的逃逸分析技术就可以用于帮助锁消除的判定。逃逸分析可以用于"),r("strong",[v._v("判断同步块使用的锁对象是否只能够被一个线程访问，而没有被发布到其它线程")]),v._v("。认是的话，那么 JIT 编译器在编译这个同步块的时候不会生成 synchronized 所表示的锁的申请与释放的机器码，即消除了锁的使用。")])])]),v._v(" "),r("h3",{attrs:{id:"锁粗化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#锁粗化"}},[v._v("#")]),v._v(" 锁粗化")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("原则上，我们都知道在加同步锁时，尽可能的将同步块的作用范围限制到尽量小的范围(只在共享数据的实际作用域中才进行同步，这样是为了使得需要同步的操作数量尽可能变小。在存在锁同步竞争中，也可以使得等待锁的线程尽早的拿到锁)。")])]),v._v(" "),r("li",[r("p",[v._v("大部分上述情况是完美正确的，"),r("strong",[v._v("但是如果存在连串的一系列操作都对同一个对象反复加锁和解锁，甚至加锁操作时出现在循环体中的，那即使没有线程竞争，频繁地进行互斥同步操作也会导致不必要地性能操作")]),v._v("。")])])]),v._v(" "),r("h3",{attrs:{id:"自旋锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自旋锁"}},[v._v("#")]),v._v(" 自旋锁")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("在没有加入锁优化时，Synchronized是一个非常“胖大”的家伙。在多线程竞争锁时，当一个线程获取锁时，它会阻塞所有正在竞争的线程，这样对性能带来了极大的影响。"),r("strong",[v._v("在挂起线程和恢复线程的操作都需要转入内核态中完成，这些操作对系统的并发性能带来了很大的压力")]),v._v("。同时HotSpot团队注意到在很多情况下，"),r("strong",[v._v("共享数据的锁定状态只会持续很短的一段时间，为了这段时间去挂起和回复阻塞线程并不值得")]),v._v("。")])]),v._v(" "),r("li",[r("p",[v._v("在如今多处理器环境下，完全可以"),r("strong",[v._v("让另一个没有获取到锁的线程在门外等待一会(自旋)，但不放弃CPU的执行时间")]),v._v("。等待持有锁的线程是否很快就会释放锁。为了让线程等待，我们只需要让线程执行一个忙循环(自旋)，这便是自旋锁由来的原因。")])]),v._v(" "),r("li",[r("p",[v._v("自旋锁早在JDK1.4 中就引入了，只是当时默认时关闭的。在JDK 1.6后默认为开启状态。")])])]),v._v(" "),r("h3",{attrs:{id:"自适应自旋锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自适应自旋锁"}},[v._v("#")]),v._v(" 自适应自旋锁")]),v._v(" "),r("p",[v._v("在JDK 1.6中引入了自适应自旋锁。这就意味着自旋的时间不再固定了，而是由前一次在同一个锁上的自旋 时间及锁的拥有者的状态来决定的。"),r("strong",[v._v("如果在同一个锁对象上，自旋等待刚刚成功获取过锁，并且持有锁的线程正在运行中，那么JVM会认为该锁自旋获取到锁的可能性很大，会自动增加等待时间")]),v._v("。")]),v._v(" "),r("h2",{attrs:{id:"notify和notifyall的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notify和notifyall的区别"}},[v._v("#")]),v._v(" notify和notifyAll的区别？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("**notify和notifyAll的区别：**在调用notify时，JVM会从条件队列上等待的多个线程中选择一个来唤醒；而调用notifyAll则会唤醒所有在这个条件队列上等待的线程。")])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("为什么选择使用notifyAll而不是notify：****由于多个线程可以基于不同的条件谓词在同一个条件队列上等待，如果使用notify而不是notifyAll方法，将会变的很危险，因为单一的通知很容易导致类似于信号丢失的问题（面包烤好的通知发出时，正在等待的人出去了，错过了通知）")]),v._v("。")])])]),v._v(" "),r("h2",{attrs:{id:"reentrantlock的实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reentrantlock的实现原理"}},[v._v("#")]),v._v(" ReentrantLock的实现原理？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("与synchronized这种内置锁机制不同，ReentrantLock是一种显示的加锁机制。它的底层依赖了AbstractQueuedSynchronized机制。")])]),v._v(" "),r("li",[r("p",[v._v("AbstractQueuedSynchronized是一个"),r("strong",[v._v("用于构建锁和同步器的框架")]),v._v("，很多的同步器都是通过AQS构造出来的。在AQS框架中，它将需要成为状态依赖的类分配了一个状态值state，通常是整数类型，可以用于表示任意的状态。对于ReentrantLock来说，它使用state来表示为一个锁被线程获取的次数，包括同一个线程重复获取的次数。")])]),v._v(" "),r("li",[r("p",[v._v("AQS中定义了获取和释放状态变量操作的一般形式，即首先同步器会判断当前状态是否允许获取操作，如果允许，则运行程序执行，否则获取操作将阻塞或者失败。AQS的核心思想是，如果被请求的状态变量或者共享资源时空闲的，则将当前的线程设置为有效的工作线程，并且将状态变量设置为锁定状态。如果共享资源被占用，"),r("strong",[v._v("AQS则提供了一套线程阻塞等待和唤醒的机制")]),v._v("。这种机制主要通过CLH队列来实现，这是一种虚拟的双向队列，它将请求资源的线程封装为虚拟队列中的一个节点来实现锁的分配。")])]),v._v(" "),r("li",[r("p",[v._v("ReentrantLock中分别实现了公平锁和非公平锁，默认是非公平锁，这可以通过构造函数的参数来自定义。对于非公平锁，在资源时空闲时，"),r("strong",[v._v("并不会判断队列中是已经等待时间更长的线程")]),v._v("，而是直接去竞争锁，所以说这是不公平的。")])])]),v._v(" "),r("h2",{attrs:{id:"volatile关键字的作用和实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#volatile关键字的作用和实现原理"}},[v._v("#")]),v._v(" volatile关键字的作用和实现原理？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("volatile关键字也是一种用于线程同步的机制，但与synchronized和reentrantlock这两种方式不同，它并不是通过加锁的方式来实现线程间的同步，而是解决了多线程环境下的常见的可见性问题。")])]),v._v(" "),r("li",[r("p",[v._v("所谓的可见性，是针对堆中的恭喜对象而言的，因为虚拟机栈中是线程私有的，所以不存在可见性问题。在操作系统中，我们知道CPU通常有缓存，它存储了内存中的一些数据。为了屏蔽底层操作系统这种内存架构的差异，Java虚拟机里定义了一类Java内存模型，它通过设置了线程的工作内存对应着操作系统处理器的缓存，而且设置了主内存对应着操作系统的内存。对于多线程共享的变量，每次线程对其访问和修改都需要先将其拷贝到工作内存，并在修改后重新写回到主内存，但是，这种写回的时机是不确定。正是因为这种现象的存在，导致了一个线程对共享变量的修改可能无法及时对其他线程可见，进而出现不一致的数据访问。")])]),v._v(" "),r("li",[r("p",[v._v("而volatile的出现则解决了这种问题。它通过使用操作系统底层的lock关键字解决了数据可见性的问题。它通过锁定总线的方式，使得当一个线程修改了工作内存中的副本变量时，这个新的值能够被立即刷新到主内存中。此外，lock指令还通过一种嗅探机制实现了当主内存中的数据发生变化后，它能够使其他使用了该变量的线程中的工作内存中的副本失效，并且强制这些工作内存去读取主内存中的最新值。通过这两种方式，也就自然而然解决了变量的可见性问题。")])]),v._v(" "),r("li",[r("p",[v._v("除了可以解决可见性问题，volatile还可以禁止重排序。重排序一般是编译器和处理器会对字节码和指令等进行重排序，以此实现某些场景下的优化。重排序一般在单线程环境下是不会出现问题的，它保证了as if serial语义，即在单线程环境下重排序后的结果需要和未重排序之后的结果需要相同。但是，在多线程情况下，"),r("strong",[v._v("重排序会导致数据不一致情况的出现")]),v._v("。为了禁止重排序进而防止这种情况的出现，volatile使用了内存屏障来禁止重排序。storestore指令，storeload指令，loadload指令，loadstore指令，通过这些内存屏障，可以解决某些情况下的指令重排序问题。")])])]),v._v(" "),r("h2",{attrs:{id:"cas是什么-有什么问题-如何解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cas是什么-有什么问题-如何解决"}},[v._v("#")]),v._v(" CAS是什么？有什么问题？如何解决？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("独占锁是一种悲观技术，它假设最坏的情况，并且只有在确保其他线程不会造成干扰的情况下才能执行下去。对于细粒度的操作，还有另一种更高效的方法，即乐观技术。通过这种方法可以在不发生干扰的情况下完成更新操作。"),r("strong",[v._v("这种方法借助冲突检查机制来更新过程中是否存在来自其他线程的干扰，如果存在，这个操作将会失败，并且可以重试")]),v._v("。")])]),v._v(" "),r("li",[r("p",[v._v("CAS包含了三个操作数-需要读写的内存位置V，进行比较的值A以及拟写入的新值B。当且仅当V的值等于A时，CAS才会通过原子方式用新值B来更新V的值，否则不会执行任何操作。")])]),v._v(" "),r("li",[r("p",[v._v("在CAS操作中，当看到V值的值为A时，并不能代表这个值自上次看到以来没有发生过任何变化。因为在某些算法中，"),r("strong",[v._v("如果V的值首先由A变成B，再由B变成A，那么仍然认为V的值发生了变化")]),v._v("。")])]),v._v(" "),r("li",[r("p",[v._v("此时的解决方案是，不要直接更新某个引用的值，而是更新两个值，包括一个引用和一个版本号。即V的值首先由A变成B，再由B变成A，版本号是不同的。"),r("strong",[v._v("AtomicStampedReference")]),v._v("支持在两个变量上执行原子的条件更新。从而避免了ABA问题。")])])]),v._v(" "),r("h2",{attrs:{id:"threadlocal了解吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal了解吗"}},[v._v("#")]),v._v(" ThreadLocal了解吗？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("通常情况下，我们创建的变量是可以被任何一个线程访问并修改的。"),r("strong",[v._v("如果想实现每一个线程都有自己的专属本地变量该如何解决呢？")]),v._v(" JDK 中提供的"),r("code",[v._v("ThreadLocal")]),v._v("类正是为了解决这样的问题。 "),r("code",[v._v("**ThreadLocal**")]),r("strong",[v._v("类主要解决的就是让每个线程绑定自己的值，可以将")]),r("code",[v._v("**ThreadLocal**")]),r("strong",[v._v("类形象的比喻成存放数据的盒子，盒子中可以存储每个线程的私有数据。")])])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("每个")]),r("code",[v._v("**Thread**")]),r("strong",[v._v("中都具备一个")]),r("code",[v._v("**ThreadLocalMap**")]),r("strong",[v._v("，而")]),r("code",[v._v("**ThreadLocalMap**")]),r("strong",[v._v("可以存储以")]),r("code",[v._v("**ThreadLocal**")]),r("strong",[v._v("为 key ，Object 对象为 value 的键值对。")])])])]),v._v(" "),r("h2",{attrs:{id:"threadlocal的内存泄漏了解吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal的内存泄漏了解吗"}},[v._v("#")]),v._v(" ThreadLocal的内存泄漏了解吗？")]),v._v(" "),r("ol",[r("li",[r("p",[r("code",[v._v("**ThreadLocalMap**")]),v._v(" "),r("strong",[v._v("中使用的 key 为")]),v._v(" "),r("code",[v._v("**ThreadLocal**")]),v._v(" "),r("strong",[v._v("的弱引用，而 value 是强引用")]),v._v("。所以，如果 "),r("code",[v._v("ThreadLocal")]),v._v(" 没有被外部强引用的情况下，在垃圾回收的时候，key 会被清理掉，而 value 不会被清理掉。这样一来，"),r("code",[v._v("ThreadLocalMap")]),v._v(" 中就会出现 key 为 null 的 Entry。假如我们不做任何措施的话，value 永远无法被 GC 回收，这个时候就可能会产生内存泄露。")])]),v._v(" "),r("li",[r("p",[r("strong",[v._v("ThreadLocalMap 实现中已经考虑了这种情况，在调用")]),v._v(" "),r("code",[v._v("**set()**")]),r("strong",[v._v("、")]),r("code",[v._v("**get()**")]),r("strong",[v._v("、")]),r("code",[v._v("**remove()**")]),v._v(" "),r("strong",[v._v("方法的时候，会清理掉 key 为 null 的记录")]),v._v("。使用完 "),r("code",[v._v("ThreadLocal")]),v._v("方法后 最好手动调用"),r("code",[v._v("remove()")]),v._v("方法")])])]),v._v(" "),r("h2",{attrs:{id:"aqs机制了解吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aqs机制了解吗"}},[v._v("#")]),v._v(" AQS机制了解吗？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("AQS是一个用来构建锁和同步器的"),r("strong",[v._v("框架")]),v._v("，使用AQS能"),r("strong",[v._v("简单且高效地构造出应用广泛的大量的同步器")]),v._v("，比如我们提到的ReentrantLock，Semaphore，其他的诸如ReentrantReadWriteLock，SynchronousQueue，FutureTask等等皆是基于AQS的。当然，我们自己也能利用AQS非常轻松容易地构造出符合我们自己需求的同步器。")])]),v._v(" "),r("li",[r("p",[v._v("AQS核心思想是，如果被请求的"),r("strong",[v._v("共享资源")]),v._v("空闲，则将当前请求资源的线程设置为有效的工作线程，并且将共享资源设置为锁定状态。如果被请求的共享资源被占用，那么就需要一套线程阻塞等待以及被唤醒时锁分配的机制，这个机制AQS是用"),r("strong",[v._v("CLH队列锁")]),v._v("实现的，即"),r("strong",[v._v("将暂时获取不到锁的线程加入到队列中")]),v._v("。")])]),v._v(" "),r("li",[r("p",[v._v("AQS使用一个int成员变量来表示"),r("strong",[v._v("同步状态")]),v._v("，通过内置的FIFO队列来完成获取资源线程的排队工作。"),r("strong",[v._v("AQS使用CAS对该同步状态进行原子操作实现对其值的修改")]),v._v("。")])])]),v._v(" "),r("h2",{attrs:{id:"cyclicbarrier和countdonwlatch的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cyclicbarrier和countdonwlatch的区别"}},[v._v("#")]),v._v(" CyclicBarrier和CountDonwLatch的区别？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("CountDownLatch减计数，CyclicBarrier加计数。")])]),v._v(" "),r("li",[r("p",[v._v("CountDownLatch是一次性的，CyclicBarrier可以重用。")])]),v._v(" "),r("li",[r("p",[v._v("CountDownLatch和CyclicBarrier都有让多个线程等待同步然后再开始下一步动作的意思，但是"),r("strong",[v._v("CountDownLatch的下一步的动作实施者是主线程，具有不可重复性；而CyclicBarrier的下一步动作实施者还是“其他线程”本身，具有往复多次实施动作的特点")]),v._v("。")])])]),v._v(" "),r("h2",{attrs:{id:"有哪些jdk源码中使用了fork-join思想"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有哪些jdk源码中使用了fork-join思想"}},[v._v("#")]),v._v(" 有哪些JDK源码中使用了Fork/Join思想?")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("我们常用的数组工具类 **Arrays 在JDK 8之后新增的并行排序方法(parallelSort)**就运用了 ForkJoinPool 的特性")])]),v._v(" "),r("li",[r("p",[v._v("还有 ConcurrentHashMap 在JDK 8之后添加的函数式方法("),r("strong",[v._v("如forEach等")]),v._v(")也有运用。")])]),v._v(" "),r("li",[r("p",[v._v("stream流的map等方法也使用了fork/join思想")])])]),v._v(" "),r("h2",{attrs:{id:"java中的同步容器有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java中的同步容器有哪些"}},[v._v("#")]),v._v(" Java中的同步容器有哪些？")]),v._v(" "),r("p",[v._v("在 Java 中，同步容器主要包括 2 类：")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("Vector、Stack、Hashtable")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("Vector - Vector 实现了 List 接口。Vector 实际上就是一个数组，和 ArrayList 类似。但是 Vector 中的方法都是 synchronized 方法，即进行了同步措施。")])]),v._v(" "),r("li",[r("p",[v._v("Stack - Stack 也是一个同步容器，它的方法也用 synchronized 进行了同步，它实际上是"),r("strong",[v._v("继承于 Vector 类")]),v._v("。")])]),v._v(" "),r("li",[r("p",[v._v("Hashtable- Hashtable 实现了 Map 接口，它和 HashMap 很相似，但是 Hashtable 进行了同步处理，而 HashMap 没有。")])])])]),v._v(" "),r("li",[r("p",[v._v("Collections 类中提供的静态工厂方法创建的类（由 "),r("strong",[v._v("Collections.synchronizedXXX等方法")]),v._v("）")])])]),v._v(" "),r("h2",{attrs:{id:"concurrenthashmap原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap原理"}},[v._v("#")]),v._v(" ConcurrentHashMap原理？")]),v._v(" "),r("h3",{attrs:{id:"_1-7和1-8版本的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-7和1-8版本的区别"}},[v._v("#")]),v._v(" 1.7和1.8版本的区别？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("Java 1.7")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("数据结构："),r("strong",[v._v("数组＋单链表")])])]),v._v(" "),r("li",[r("p",[v._v("并发机制：采用分段ReentrantLock锁机制细化锁粒度，降低阻塞，从而提高并发性。")])])])]),v._v(" "),r("li",[r("p",[v._v("Java 1.8")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("数据结构："),r("strong",[v._v("数组＋单链表＋红黑树")])])]),v._v(" "),r("li",[r("p",[v._v("并发机制：取消分段锁，之后基于 CAS + synchronized 实现。")])])])])]),v._v(" "),r("h3",{attrs:{id:"concurrenthashmap的同步机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap的同步机制"}},[v._v("#")]),v._v(" ConcurrentHashMap的同步机制?")]),v._v(" "),r("p",[v._v("对于一个映射集合来说，ConcurrentHashMap是如果来做到并发安全，又是如何做到高效的并发的呢？")]),v._v(" "),r("p",[v._v("首先是读操作，从源码中可以看出来，在get操作中，根本没有使用同步机制，也没有使用unsafe方法，所以读操作是支持并发操作的。")]),v._v(" "),r("p",[v._v("那么写操作呢？")]),v._v(" "),r("p",[v._v("分析这个之前，先看看什么情况下会引起数组的扩容，"),r("strong",[v._v("扩容是通过transfer方法来进行的")]),v._v("。而调用transfer方法的只有trePresize、helpTransfer和addCount三个方法。")]),v._v(" "),r("p",[v._v("这三个方法又是分别在什么情况下进行调用的呢？")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("tryPresize是在treeIfybin和putAll方法中调用，treeIfybin主要是在put添加元素完之后，判断该数组节点相关元素是不是已经超过8个的时候，如果超过则会调用这个方法来扩容数组或者把链表转为树。")])]),v._v(" "),r("li",[r("p",[v._v("helpTransfer是在当一个线程要对table中元素进行操作的时候，如果检测到节点的HASH值为MOVED的时候，就会调用helpTransfer方法，在helpTransfer中再调用transfer方法来帮助完成数组的扩容")])]),v._v(" "),r("li",[r("p",[v._v("addCount是在当对数组进行操作，使得数组中存储的元素个数发生了变化的时候会调用的方法。")])])]),v._v(" "),r("p",[r("strong",[v._v("所以引起数组扩容的情况如下")]),v._v("：")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("只有在往map中添加元素的时候，在某一个节点的数目已经超过了8个，同时数组的长度又小于64的时候，才会触发数组的扩容。")])]),v._v(" "),r("li",[r("p",[v._v("当数组中元素达到了sizeCtl的数量的时候，则会调用transfer方法来进行扩容。")])])]),v._v(" "),r("p",[r("strong",[v._v("那么在扩容的时候，可以不可以对数组进行读写操作呢？")])]),v._v(" "),r("p",[v._v("事实上是可以的。当在进行数组扩容的时候，如果当前节点还没有被处理（也就是说还没有设置为fwd节点），那就可以进行设置操作。")]),v._v(" "),r("p",[v._v("如果该节点已经被处理了，则当前线程也会加入到扩容的操作中去。")]),v._v(" "),r("p",[r("strong",[v._v("那么，多个线程又是如何同步处理的呢？")])]),v._v(" "),r("p",[v._v("在ConcurrentHashMap中，"),r("strong",[v._v("同步处理主要是通过Synchronized和unsafe两种方式来完成的")]),v._v("。")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("在取得sizeCtl、某个位置的Node的时候，使用的都是unsafe的方法，来达到并发安全的目的")])]),v._v(" "),r("li",[r("p",[v._v("当需要在某个位置设置节点的时候，则会通过Synchronized的同步机制来锁定该位置的节点。")])]),v._v(" "),r("li",[r("p",[v._v("在数组扩容的时候，则通过处理的步长和fwd节点来达到并发安全的目的，通过设置hash值为MOVED")])]),v._v(" "),r("li",[r("p",[v._v("当把某个位置的节点复制到扩张后的table的时候，也通过Synchronized的同步机制来保证现程安全")])])]),v._v(" "),r("h2",{attrs:{id:"copyonwritearraylist原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist原理"}},[v._v("#")]),v._v(" CopyOnWriteArrayList原理？")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("CopyOnWriteArrayList 是线程安全的 ArrayList。CopyOnWrite 字面意思为"),r("strong",[v._v("写的时候会将共享变量新复制一份")]),v._v("出来。复制的好处在于"),r("strong",[v._v("读操作是无锁的")]),v._v("（也就是无阻塞）。")])]),v._v(" "),r("li",[r("p",[v._v("CopyOnWriteArrayList 内部维护了一个数组，成员变量 array 就指向这个内部数组，所有的读操作都是基于 array 进行的。所有的写操作都是**同步（加锁）**的。他们在备份数组的副本上工作。写操作完成后，后备阵列将被替换为复制的阵列，并释放锁定。")])]),v._v(" "),r("li",[r("p",[v._v("CopyOnWriteArrayList "),r("strong",[v._v("仅适用于写操作非常少的场景")]),v._v("，而且能够容忍读写的短暂不一致。如果读写比例均衡或者有大量写操作的话，使用 CopyOnWriteArrayList 的性能会非常糟糕。")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);