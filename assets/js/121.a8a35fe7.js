(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{676:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("h3",{attrs:{id:"定义及定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义及定位"}},[t._v("#")]),t._v(" 定义及定位")]),t._v(" "),s("p",[t._v("像 Maven 这样的一个项目管理工具提供了构建工具所提供功能的超集。除了提供构建的功能，Maven 还可以生成报告，生成Web 站点，并且帮助推动工作团队成员间的交流。")]),t._v(" "),s("p",[t._v("Maven 是一个项目管理工具，它包含了一个项目对象模型 (Project Object Model，POM)，一组标准集合，一个项目生命周期(Project Lifecycle)，一个依赖管理系统(Dependency Management System)，和用来运行定义在生命周期阶段中插件目标(plugin goal)的逻辑。当你使用Maven 的时候，你用一个明确定义的项目对象模型来描述你的项目，然后 Maven 可以应用"),s("strong",[t._v("横切的逻辑")]),t._v("，这些逻辑来自一组共享的（或者自定义的）插件。")]),t._v(" "),s("h3",{attrs:{id:"约定大于配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#约定大于配置"}},[t._v("#")]),t._v(" 约定大于配置")]),t._v(" "),s("p",[t._v("系统，类库，框架应该假定合理的默认值，而非要求提供不必要的配置。")]),t._v(" "),s("p",[t._v("一个约定优于配置的"),s("strong",[t._v("例子")]),t._v("就像 EJB3 持久化，将一个特殊的Bean 持久化，你所需要做的只是将这个类标注为**@Entity** 。 框架将会假定表名和列名是基于类名和属性名。系统也提供了一些钩子，当有需要的时候你可以重写这些名字，但是，在大部分情况下，你会发现使用框架提供的默认值会让你的项目运行的更快。")]),t._v(" "),s("p",[t._v("Maven 通过给项目提供明智的默认行为来融合这个概念。在没有自定义的情况下，"),s("strong",[t._v("源代码假定是在${basedir}/src/main/java，资源文件假定是在${basedir}/src/main/resources 。测试代码假定是在${basedir}/src/test 。项目假定会产生一个 JAR 文件")]),t._v("。Maven 假定你想要把编译好的字节码放到${basedir}/target/classes 并且在${basedir}/target 创建一个可分发的 JAR文件。虽然这看起来无关紧要，但是想想大部分基于 Ant 的构建必须为每个子项目定义这些目录。")]),t._v(" "),s("p",[t._v("Maven 对约定优于配置的应用不仅仅是简单的目录位置，Maven 的核心插件使用了一组通用的约定，以用来编译源代码，打包可分发的构件，生成 web 站点，还有许多其他的过程。")]),t._v(" "),s("h3",{attrs:{id:"maven和ant"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven和ant"}},[t._v("#")]),t._v(" Maven和Ant")]),t._v(" "),s("h4",{attrs:{id:"ant"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ant"}},[t._v("#")]),t._v(" Ant")]),t._v(" "),s("p",[t._v("Ant 在构建过程方面十分优秀，它是一个基于任务和依赖的构建系统。每个任务包含一组由 XML 编码的指令。有copy 任务和 javac 任务，以及jar 任务。在你使用 Ant的时候，你为 Ant 提供特定的指令以编译和打包你的输出。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("basedir")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \tsimple example build file\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- set global properties for this build --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("src/main/java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("target/classes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("target")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Create the time stamp --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tstamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Create the build directory structure used by compile --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${build}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("target")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("compile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("depends")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("compile the source "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Compile the java code from ${src} into ${build} --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("javac")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcdir")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${src}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("destdir")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${build}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("target")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("depends")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("compile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("generate the distribution"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Create the distribution directory --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${dist}/lib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Put everything in ${build} into the MyProject-${DSTAMP}.jar file --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("jarfile")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${dist}/lib/MyProject-${DSTAMP}.jar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("basedir")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${build}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("target")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("clean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("clean up"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Delete the ${build} and ${dist} directory trees --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${build}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${dist}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("你能看到，你需要明确的告诉 Ant 你想让它做什么。有一个包含javac 任务的编译目标用来将src/main/java 的源码编译至target/classes 目录。你必须明确告诉 Ant 你的源码在哪里，结果字节码你想存储在哪里，如何将这些字节码打包成 JAR 文件。虽然最近有些进展以帮助 Ant 减少程序，但一个开发者对 Ant 的感受是用 XML 编写程序语言。")]),t._v(" "),s("h4",{attrs:{id:"ant与maven的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ant与maven的区别"}},[t._v("#")]),t._v(" Ant与Maven的区别")]),t._v(" "),s("p",[t._v("Ant 没有正式的约定如一个一般项目的目录结构，你必须明确的告诉 Ant哪里去找源代码，哪里放置输出。随着时间的推移，非正式的约定出现了，但是它们还没有在产品中模式化。Maven 拥有约定，因为你遵循了约定，它已经知道你的源代码在哪里。它把字节码放到target/classes ，然后在 target 生成一个 JAR文件。")]),t._v(" "),s("p",[t._v("Ant 是程序化的，你必须明确的告诉 Ant 做什么，什么时候做。你必须告诉它去编译，然后复制，然后压缩。Maven 是声明式的。你需要做的只是创建一个 pom.xml 文件然后将源代码放到默认的目录。Maven 会帮你处理其它的事情。")]),t._v(" "),s("p",[t._v("Ant 没有生命周期，你必须定义目标和目标之间的依赖。你必须手工为每个目标附上一个任务序列。Maven 有一个生命周期，当你运行mvn install 的时候被调用。这条命令告诉 Maven 执行一系列的有序的步骤，直到到达你指定的生命周期。遍历生命周期旅途中的一个影响就是，"),s("strong",[t._v("Maven 运行了许多默认的插件目标，这些目标完成了像编译和创建一个 JAR 文件这样的工作")]),t._v("。")]),t._v(" "),s("p",[t._v("Maven 以插件的形式为一些一般的项目任务提供了内置的智能。如果你想要编写运行单元测试，你需要做的只是编写测试然后放到${basedir}/src/test/java ，添加一个对于 TestNG 或者 JUnit 的测试范围依赖，然后运行mvn test 。如果你想要部署一个 web 应用而非 JAR ，你需要做的是改变你的项目类型为 war ，然后把你文档根目录置为${basedir}/src/main/webapp 。当然，你可以用 Ant 做这些事情，但是你将需要从零开始写这些指令。使用 Ant ，你首先需要确定 JUnit JAR 文件应该放在哪里，然后你需要创建一个包含这个 JUnit JAR 文件的 classpath ，然后告诉 Ant 它应该从哪里去找测试源代码，编写一个目标来编译测试源代码为字节码，使用 JUnit 来执行单元测试。")]),t._v(" "),s("h2",{attrs:{id:"核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),s("h3",{attrs:{id:"maven插件和目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven插件和目标"}},[t._v("#")]),t._v(" Maven插件和目标")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203291927139.png",alt:"img"}})]),t._v(" "),s("p",[t._v("一个Maven 插件是一个单个或者多个目标的集合。Maven 插件的例子有一些简单但核心的插件，像Jar 插件，它包含了一组创建JAR 文件的目标，Compiler插件，它包含了一组编译源代码和测试代码的目标，或者Surefire 插件，它包含一组运行单元测试和生成测试报告的目标。而其它的，更有专门的插件包括：Hibernate3 插件，用来集成流行的持久化框架Hibernate，JRuby 插件，它让你能够让运行ruby 称为Maven 构建的一部分或者用Ruby 来编写Maven 插件。Maven也提供了自定义插件的能力。一个定制的插件可以用Java 编写，或者用一些其它的语言如Ant，Groovy，beanshell 和之前提到的Ruby。")]),t._v(" "),s("p",[t._v("一个目标是一个明确的任务，它可以作为单独的目标运行，或者作为一个大的构建的一部分和其它目标一起运行。一个目标是Maven 中的一个“工作单元(unit of work)”。目标的例子包括Compiler 插件中的compile 目标，它用来编译项目中的所有源文件，或者Surefire 插件中的test 目标，用来运行单元测试。目标通过配置属性进行配置，以用来定制行为。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个maven项目")]),t._v("\nmvn archetype:create -DgroupId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("org.sonatype.mavenbook.ch03 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DartifactId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("simple "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DpackageName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("org.sonatype.mavenbook\n")])])]),s("p",[t._v("当提到一个插件目标的时候，我们常常用速记符号：pluginId:goalId。例如，当提到Archetype 插件的create 目标的时候，我们写成archetype:create。目标定义了一些参数， 这些参数可以定义一些明智的默认值。在archetype:create 这个例子中，我们并没有在命令行中指定这个目标创建什么类型的archetype，我们简单的传入一个groupId 和一个artifactId。这是我们对于约定优于配置(convention over configuration)的第一笔。")]),t._v(" "),s("p",[t._v("Maven 的核心对你项目构建中特定的任务几乎毫无所知。"),s("strong",[t._v("就它本身来说，Maven不知道如何编译你的代码，它甚至不知道如何制作一个JAR 文件，它把所有这些任务代理给了Maven 插件，像Compiler 插件和Jar 插件，它们在需要的时候被下载下来并且定时的从Maven 中央仓库更新")]),t._v("。当你下载Maven 的时候，你得到的是一个包含了基本躯壳的Maven 核心，它知道如何解析命令行，管理classpath，解析POM 文件，在需要的时候下载Maven 插件。")]),t._v(" "),s("p",[t._v("通过保持Compiler插件和Maven 核心分离，并且提供更新机制，用户很容易能使用编译器最新的版本。")]),t._v(" "),s("h3",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("p",[s("strong",[t._v("生命周期是包含在一个项目构建中的一系列有序的阶段")]),t._v("。Maven 可以支持许多不同的生命周期，但是最常用的生命周期是默认的Maven 生命周期，这个生命周期中一开始的一个阶段是验证项目的基本完整性，最后的一个阶段是把一个项目发布成产品。")]),t._v(" "),s("p",[t._v("**插件目标可以附着在生命周期阶段上。**随着Maven 沿着生命周期的阶段移动，它会执行附着在特定阶段上的目标。每个阶段可能绑定了零个或者多个目标。当你运行mvn package，你可能已经注意到了不止一个目标被执行了。检查运行mvn package 之后的输出，会注意到那些被运行的各种目标。当这个简单例子到达package 阶段的时候，它运行了Jar 插件的jar 目标。既然我们的简单的quickstart 项目（默认）是jar 包类型，jar:jar 目标被就绑定到了打包阶段。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203291927165.png",alt:"img"}})]),t._v(" "),s("p",[t._v("总结得来说，当我们运行mvn package，Maven 运行到打包为止的所有阶段，在Maven 沿着生命周期一步步向前的过程中，它运行绑定在每个阶段上的所有目标。")]),t._v(" "),s("p",[t._v("一个构建生命周期是一组精心组织的有序的阶段，它的存在能使所有注册的目标变得有序运行。这些目标根据项目的打包类型被选择并绑定。Maven 中有三种标准的生命周期："),s("strong",[t._v("清理（clean），默认（default）(有时候也称为构建)，和站点（site）")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"清理生命周期-clean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清理生命周期-clean"}},[t._v("#")]),t._v(" 清理生命周期（clean）")]),t._v(" "),s("p",[t._v("运行mvn clean 将调用清理生命周期，它包含了三个生命周期阶段：")]),t._v(" "),s("p",[t._v("• pre-clean")]),t._v(" "),s("p",[t._v("• clean")]),t._v(" "),s("p",[t._v("• post-clean")]),t._v(" "),s("p",[t._v("Clean 插件的clean 目标（clean:clean）被绑定到清理生命周期中的clean 阶段。目标clean:clean 通过删除构建目录删除整个构建的输出。")]),t._v(" "),s("h4",{attrs:{id:"默认生命周期-default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认生命周期-default"}},[t._v("#")]),t._v(" 默认生命周期（default）")]),t._v(" "),s("p",[t._v("大部分Maven 用户将会对默认生命周期十分熟悉。它是一个软件应用程序构建过程的总体模型。"),s("strong",[t._v("第一个阶段是validate，最后一个阶段是deploy。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203291927194.png",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203291927157.png",alt:"img"}})]),t._v(" "),s("h4",{attrs:{id:"站点生命周期-site"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#站点生命周期-site"}},[t._v("#")]),t._v(" 站点生命周期（site）")]),t._v(" "),s("p",[t._v("Maven 不仅仅能从一个项目构建软件构件，它还能为一个或者一组项目生成项目文档和报告。项目文档和站点生成有一个专有的生命周期，它包含了四个阶段：")]),t._v(" "),s("p",[t._v("• pre-site")]),t._v(" "),s("p",[t._v("• site")]),t._v(" "),s("p",[t._v("• post-site")]),t._v(" "),s("p",[t._v("• site-deploy")]),t._v(" "),s("h4",{attrs:{id:"打包生命周期及目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包生命周期及目标"}},[t._v("#")]),t._v(" 打包生命周期及目标")]),t._v(" "),s("h5",{attrs:{id:"jar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jar"}},[t._v("#")]),t._v(" JAR")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203291927553.png",alt:"img"}})]),t._v(" "),s("h5",{attrs:{id:"war"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#war"}},[t._v("#")]),t._v(" WAR")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203291927209.png",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"maven坐标-coordinates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven坐标-coordinates"}},[t._v("#")]),t._v(" Maven坐标（Coordinates）")]),t._v(" "),s("p",[t._v("pom.xml就是项目对象模型（POM），一个项目的声明性描述。"),s("strong",[t._v("当Maven 运行一个目标的时候，每个目标都会访问定义在项目POM 里的信息")]),t._v("。当jar:jar 目标需要创建一个JAR 文件的时候，它通过观察POM 来找出这个Jar 文件的名字。当compiler:compile 任务编译Java 源代码为字节码的时候，它通过观察POM来看是否有编译目标的参数。"),s("strong",[t._v("目标在POM 的上下文中运行。目标是我们希望针对项目运行的动作，而项目是通过POM 定义的")]),t._v("。")]),t._v(" "),s("p",[t._v("POM 为项目命名，提供了项目的一组唯一标识符（坐标），并且通过依赖 (dependencies) ，父 (parents) 和先决条件 (prerequisite) 来定义和其它项目的关系。POM 也可以自定义插件行为，提供项目相关的社区和开发人员的信息。")]),t._v(" "),s("p",[t._v("Maven 坐标定义了一组标识，它们可以用来唯一标识一个项目，一个依赖，或者Maven POM 里的一个插件。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203291927708.png",alt:"img"}})]),t._v(" "),s("p",[t._v("Maven 坐标通常用冒号来作为分隔符来书写，像这样的格式：groupId:artifactId:packaging:version。这个符号也适用于项目依赖，我们的项目依赖JUnit 的3.8.1 版本，它包含了一个对junit:junit:jar:3.8.1 的依赖。")]),t._v(" "),s("p",[t._v("坐标各标签的意义：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("groupId：团体，公司，小组，组织，项目，或者其它团体。团体标识的约定是，它以创建这个项目的组织名称的"),s("strong",[t._v("逆向域名")]),t._v("(reverse domain name)开头。来自Sonatype 的项目有一个以com.sonatype 开头的groupId，而Apache Software 的项目有以org.apache 开头的groupId。")])]),t._v(" "),s("li",[s("p",[t._v("artifactId：在 groupId 下的表示一个单独项目的唯一标识符。")])]),t._v(" "),s("li",[s("p",[t._v("version：一个项目的特定版本。发布的项目有一个固定的版本标识来指向该项目的某一个特定的版本。"),s("strong",[t._v("而正在开发中的项目可以用一个特殊的标识，这种标识给版本加上一个“SNAPSHOT”的标记")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("packaging：项目的类型，默认是jar，描述了项目打包后的输出。类型为jar 的项目产生一个JAR 文件，类型为war 的项目产生一个web 应用。")])])]),t._v(" "),s("h3",{attrs:{id:"maven仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven仓库"}},[t._v("#")]),t._v(" maven仓库")]),t._v(" "),s("p",[t._v("当你第一次运行Maven 的时候，你会注意到Maven 从一个远程的Maven 仓库下载了许多文件。如果这个简单的项目是你第一次运行Maven，那么当触发resources:resource 目标的时候，它首先会做的事情是去下载最新版本的Resources插件。")]),t._v(" "),s("p",[t._v("Maven 自带了一个用来下载Maven 核心插件和依赖的远程仓库地址（http://repo1.maven.org/maven2）。")]),t._v(" "),s("p",[t._v("在一个Maven 仓库中，所有的东西存储在一个与Maven 项目坐标十分匹配的目录结构中。。Maven 仓库的标准是按照下面的目录格式来存储构件，相对于仓库的根目录："),s("code",[t._v("/<groupId>/<artifactId>/<version>/<artifactId>-<version>.<packaging>")])]),t._v(" "),s("p",[t._v("调用mvn install命令，Maven 会把我们项目的构件安装到本地仓库。本地仓库的地址是："),s("code",[t._v("C:\\Users\\wale\\.m2\\repository\\")])]),t._v(" "),s("h3",{attrs:{id:"maven依赖管理-dependency-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven依赖管理-dependency-management"}},[t._v("#")]),t._v(" Maven依赖管理(Dependency Management)")]),t._v(" "),s("p",[t._v("一个复杂的项目将会包含很多依赖，也有可能包含依赖于其它构件的依赖。这是Maven 最强大的特征之一，它支持了传递性依赖（transitive dependencies）。假如你的项目依赖于一个库，而这个库又依赖于五个或者十个其它的库（就像Spring或者Hibernate 那样）。你不必找出所有这些依赖然后把它们写在你的pom.xml 里，你只需要加上你直接依赖的那些库，Maven 会隐式的把这些库间接依赖的库也加入到你的项目中。Maven 也会处理这些依赖中的冲突，同时能让你自定义默认行为，或者排除一些特定的传递性依赖。")]),t._v(" "),s("p",[t._v("需要注意的是Maven 不只是下载JUnit 的JAR 文件，它同时为这个JUnit 依赖下载了一个POM 文件。Maven 同时下载构件和POM 文件的这种行为，对Maven 支持传递性依赖来说非常重要。当你把项目的构件安装到本地仓库时，你会发现在和JAR 文件同一目录下，Maven 发布了一个稍微修改过的pom.xml 的版本。")]),t._v(" "),s("p",[t._v("存储POM 文件在仓库里提供给其它项目了该项目的信息，其中最重要的就是它有哪些依赖。如果项目B 依赖于项目A，那么它也依赖于项目A 的依赖。")]),t._v(" "),s("p",[t._v("Maven 也提供了不同的"),s("strong",[t._v("依赖范围")]),t._v("(dependency scope)。Simple 项目的pom.xml 包含了一个依赖——junit:junit:jar:3.8.1——范围是test。当一个依赖的范围是test 的时候，说明它在Compiler 插件运行compile 目标的时候是不可用的。它只有在运行compiler:testCompile 和surefire:test 目标的时候才会被加入到classpath 中。")]),t._v(" "),s("p",[s("strong",[t._v("provided 范围告诉Maven 一个依赖在编译的时候需要，但是它不应该被捆绑在构建的输出中")]),t._v("。当你开发web 应用的时候provided 范围变得十分有用，你需要通过Servlet API 来编译你的代码，但是你不希望Servlet API 的JAR 文件包含在你web 应用的WEB-INF/lib 目录中。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.codehaus.xfire"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("xfire-java5"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.2.5"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("junit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("junit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3.8.1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.geronimo.specs"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("geronimo-servlet_2.4_spec"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("provided"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"依赖范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖范围"}},[t._v("#")]),t._v(" 依赖范围")]),t._v(" "),s("p",[t._v("三种依赖范围：compile，test，和provided。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("compile（编译范围）：compile 是默认的范围；如果没有提供一个范围，那该依赖的范围就是编译范围。"),s("strong",[t._v("编译范围依赖在所有的classpath 中可用，同时它们也会被打包")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("provided（已提供范围）：provided 依赖只有在当JDK 或者一个容器已提供该依赖之后才使用。例如，如果你开发了一个web 应用，你可能在编译classpath 中需要可用的Servlet API 来编译一个servlet，但是你不会想要在打包好的WAR中包含这个Servlet API；这个Servlet API JAR 由你的应用服务器或者servlet 容器提供。"),s("strong",[t._v("已提供范围的依赖在编译classpath（不是运行时）可用。它们不是传递性的，也不会被打包")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("runtime（运行时范围）："),s("strong",[t._v("runtime 依赖在运行和测试系统的时候需要，但在编译的时候不需要")]),t._v("。比如，你可能在编译的时候只需要JDBC API JAR，而只有在运行的时候才需要JDBC驱动实现。")])]),t._v(" "),s("li",[s("p",[t._v("test（测试范围）：test 范围依赖在一般的编译和运行时都不需要，它们"),s("strong",[t._v("只有在测试编译和测试运行阶段可用")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("system（系统范围）：system 范围依赖与provided 类似，但是你必须显式的提供一个对于本地系统中JAR 文件的路径。这么做是为了允许基于本地对象编译，而这些对象是系统类库的一部分。这样的构件应该是一直可用的，Maven 也不会在仓库中去寻找它。如果你将一个依赖范围设置成系统范围，你必须同时提供一个systemPath元素。注意该范围是不推荐使用的（你应该一直尽量去从公共或定制的Maven仓库中引用依赖）。")])])]),t._v(" "),s("h3",{attrs:{id:"站点生成和报告-site-generation-and-reporting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#站点生成和报告-site-generation-and-reporting"}},[t._v("#")]),t._v(" 站点生成和报告 (Site Generation and Reporting)")]),t._v(" "),s("p",[t._v("另外一个Maven 的重要特征是，它能生成文档和报告。在simple 项目的目录下，运行以下命令：mvn site。这将会运行site 生命周期阶段。它不像默认生命周期那样，管理代码生成，操作资源，编译，打包等等。")]),t._v(" "),s("p",[t._v("Site 生命周期只关心处理在src/site 目录下的site内容，还有生成报告。在这个命令运行过之后，你将会在target/site 目录下看到一个项目web 站点。载入target/site/index.html 你会看到项目站点的基本外貌。它包含了一些报告，它们在左手边的导航目录的“项目报告”下面。")]),t._v(" "),s("h2",{attrs:{id:"项目对象模型-pom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目对象模型-pom"}},[t._v("#")]),t._v(" 项目对象模型（POM）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://walegarrett-image-1304556108.cos.ap-chengdu.myqcloud.com/markdown_img/202203291927761.png",alt:"img"}})]),t._v(" "),s("p",[s("strong",[t._v("POM 也不只是仅仅针对于构建Java 项目")]),t._v("。虽然本书的大部分样例都是Java 应用，但是在Maven 的项目对象模型定义中没有任何Java 特定的东西。虽然Maven 的默认插件是从一组源码，测试，和资源来构建一个JAR 文件。但你同样可以为一个包含C#源码，使用微软工具处理一些微软私有的二进制文件的项目来定义一个POM。类似的，你也可以为一本技术书籍定义一个POM。")]),t._v(" "),s("p",[t._v("POM 包含了四类描述和配置：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("项目总体信息:")]),t._v(" 它包含了一个项目的而名称，项目的URL，发起组织，以及项目的开发者贡献者列表和许可证。")]),t._v(" "),s("li",[s("strong",[t._v("构建设置:")]),t._v(" 在这一部分，我们自定义Maven 构建的默认行为。我们可以更改源码和测试代码的位置，可以添加新的插件，可以将插件目标绑定到生命周期，我们还可以自定义站点生成参数。")]),t._v(" "),s("li",[s("strong",[t._v("构建环境:")]),t._v(" 构建环境包含了一些能在不同使用环境中激活的profile。例如，在开发过程中你可能会想要将应用部署到一个而开发服务器上，而在产品环境中你会需要将应用部署到产品服务器上。构建环境为特定的环境定制了构建设置，通常它还会由~/.m2 中的自定义settings.xml 补充。")]),t._v(" "),s("li",[s("strong",[t._v("POM关系:")]),t._v(" 一个项目很少孤立存在，它会依赖于其他项目，可能从父项目继承POM设置，它要定义自身的坐标，可能还会包含子模块。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);