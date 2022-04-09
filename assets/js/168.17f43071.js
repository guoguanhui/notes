(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{723:function(t,n,s){"use strict";s.r(n);var a=s(14),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("先介绍一个二分查找写的非常好的回答："),s("a",{attrs:{href:"https://www.zhihu.com/question/36132386/answer/530313852",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/36132386/answer/530313852"),s("OutboundLink")],1),t._v("。 个人认为看完基本能对二分查找有一个很好的理解了，也非常容易就能写出一个二分查找的模板：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("binary_search")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    lo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" lo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" hi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" lo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   \n            lo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            hi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" lo   \n")])])]),s("p",[t._v("其中，最后返回的lo是大于等于目标值的最小元素所在的位置索引。")]),t._v(" "),s("p",[t._v("不过，这并不是本文的重点。二分查找本身并不复杂，但是在leetcode中的特殊场景结合起来之后也会带来一些困扰，比如"),s("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//leetcode-cn.com/problems/find-peak-element/solution/",target:"_blank",rel:"noopener noreferrer"}},[t._v("162.寻找峰值"),s("OutboundLink")],1),t._v("。这题的思路很简单，在数组nums中，用类似二分查找的方法，通过中间值mid和邻接值mid+1，我们可以判断中间值mid是处于上坡阶段还是下坡阶段，并进而缩小查找范围。具体的解答不再赘述，这里要谈的问题是，邻接值mid+1，直接取nums[mid+1]是否会引起越界？在此之前，还有一个问题是，nums[mid]本身会越界吗？我们分几个部分聊聊。")]),t._v(" "),s("h2",{attrs:{id:"循环过程中的越界"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#循环过程中的越界"}},[t._v("#")]),t._v(" 循环过程中的越界")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("可以看到，访问数组的nums[mid]操作都在循环体中。 我们先来分析：在循环过lo是不可能超过hi的，因为循环的条件就是lo<hi；而根据mid的计算公式，mid始终满足lo<=mid<hi，因此有"),s("code",[t._v("0<=lo<=mid<hi<=n")]),t._v("，因此循环体过程的数组访问是不存在越界问题。")]),t._v(" "),s("h2",{attrs:{id:"循环体外的越界"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#循环体外的越界"}},[t._v("#")]),t._v(" 循环体外的越界")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("在一些情况下，我们跳出循环体之后仍然有访问数组的需求。比如一种常见的要求是：如果元素存在于数组当中，返回出现的索引；如果不存在，返回-1。")]),t._v(" "),s("p",[t._v("这个时候，仅仅得到索引是不够的。我们还需要检查nums[lo]是否和目标值相等，因为有可能数组中不存在恰好等于目标值的元素。虽然循环过程lo<hi，但是当循环结束的时候，lo=hi。而hi的初始化值是n，如果hi一直没变，lo一直增大，就会出现lo=hi=n，访问数组越界的情况。对应的就是目标值大于数组中的所有元素。因此如果将hi初始化为n，那么在最后返回的时候必须检查lo<n以及nums[lo]=target两个条件，否则可能产生越界的问题。")]),t._v(" "),s("h2",{attrs:{id:"边界初始化与应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#边界初始化与应用"}},[t._v("#")]),t._v(" 边界初始化与应用")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("在题目162中，我们会发现，此时情况更加复杂，不仅要考虑nums[mid]是否越界了，而且由于使用到了nums[mid+1]，还要考虑mid+1这个索引是否越界了。而这个时候，如果将hi初始化为n，我们也确实会发现，mid+1有可能越界。那么，有没有更好的解决办法呢？")]),t._v(" "),s("p",[t._v("答案是，将hi初始化为n-1。事实是，即使是标准的二分查找，也可以采用这种初始化方法，只需做一些简单的改动；而如果是元素存在于数组当中，返回出现的索引，否则返回-1这种要求，甚至不需要改动其它部分的代码。")]),t._v(" "),s("p",[t._v("乍一看有些反直觉，因为边界值是一个敏感问题。根据开头链接的文章，我们可以知道，lo和hi实际上是对数组做了一个切分，i>=hi部分的索引，是要满足nums[i]>=target的，但没检查数组的情况下，将hi设置为n-1相当于假定最后一个元素nums[n-1]>=target，似乎有些不合理。但这一初始化方法有两个好处：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("结果和模板中的初始化方法一致，且循环结束的时候必定不会越界。先来说说结果为什么一致，首先要明确的是，这种初始化方法区别仅仅在于认为数组最后一个元素大于等于目标值。因此可以分两种情况：")])]),t._v(" "),s("li",[s("p",[t._v("查找元素没有超过数组最大值：即nums[n-1]满足target<=nums[n-1]且，那么事实和假定一致，结果自然也一致。")])]),t._v(" "),s("li",[s("p",[t._v("查找元素超出数组最大值：即target>nums[n-1]。假设不符合事实了，但代入循环我们会发现，终止循环的时候lo=n-1，此时借助nums[lo]=target即可将最后一个元素是超过数组最大值的假定排除掉；甚至由于循环终止的时候，lo=hi=n-1，我们都不需要检查数组是否越界。当然，这一情况仅仅适用于"),s("code",[t._v("数组在元素时返回对应索引，不在时候返回指定值")]),t._v("这一求解前提。如果是直接返回大于等于目标值的索引，不需要做最后的检查，那么返回索引就可能产生错误的结果了。")])]),t._v(" "),s("li",[s("p",[t._v("当然仅仅是这样还不够，这一初始化方法真正使用的场合正是"),s("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//leetcode-cn.com/problems/find-peak-element/solution/",target:"_blank",rel:"noopener noreferrer"}},[t._v("162.寻找峰值"),s("OutboundLink")],1),t._v("这样需要使用nums[mid+1]这种的情况。我们在上面有一个重要结论是"),s("strong",[t._v("在整个循环体的过程中，lo<hi，而当且仅当循环结束的时候，lo=hi")]),t._v("。而mid在循环过程中满足lo<=mid<hi，因此：")])]),t._v(" "),s("li",[s("p",[t._v("hi初始化为n：循环过程中，mid<hi<=n，当mid取到n-1的情况时，mid+1最大取到n，产生越界")])]),t._v(" "),s("li",[s("p",[t._v("hi初始化为n-1：循环过程中，mid<hi<=n-1，因此mid最大取到n-2，mid+1最大取到n-1，不会越界")])])]),t._v(" "),s("p",[t._v("由于这一结论以及hi初始化为n-1不会影响二分查找的结果，在很多情况下我们可以使用这一初始化方法。除了上面提到的162外，"),s("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//leetcode-cn.com/problems/search-in-rotated-sorted-array/",target:"_blank",rel:"noopener noreferrer"}},[t._v("33.搜索排序旋转数组"),s("OutboundLink")],1),t._v("也可以用邻接索引的方法。")])])}),[],!1,null,null,null);n.default=e.exports}}]);